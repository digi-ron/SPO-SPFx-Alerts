import UtilityServices from "./UtilityServices";
import * as Config from '../Config'
import IColumnInformation from "../model/IRequiredColumnInformation";
import { IFields } from "@pnp/sp/fields";
import IAlert from "../model/IAlert";

export default class SPOListService {
    public static async GetListItems(listName: string = Config.LIBNAME, fields: IColumnInformation[] = Config.REQFIELDS): Promise<IAlert[]> {
        console.log("trying to get list items")
        let output: IAlert[] = [];
        await Promise.all([
            this._GetListColumns(),
            this._QueryListItems()
        ]).then((values: [number, IAlert[]]) => {
            //weed out the invalid lists
            if(values[0] !== fields.length) {
                throw `ERROR: expected ${fields.length} columns but got ${values[0]} instead! Please check your list configuration for the list "${listName}"`
            } else {
                output = values[1]
            }
        })
        console.log(output)
        return output;
    }

    private static async _GetListColumns(listName: string = Config.LIBNAME, fields: IColumnInformation[] = Config.REQFIELDS): Promise<number> {
        //build query
        const query: string = this._BuildFieldQuery(fields)
        const columns: IFields = await UtilityServices.GetPnP().web.lists.getByTitle(listName).fields.filter(query)()
        return columns.length
    }

    private static _BuildFieldQuery(fields: IColumnInformation[]) {
        return fields.map((column: IColumnInformation) => {
            return `(InternalName eq '${column.columnName}' and TypeAsString eq '${column.columnType}')`
        }).join(" or ")
    }

    private static async _QueryListItems(listName: string = Config.LIBNAME, fields: IColumnInformation[] = Config.REQFIELDS): Promise<IAlert[]> {
        const rawItems: IAlert[] = (await UtilityServices.GetPnP().web.lists.getByTitle(listName).items()).map((value)=>{
            const output: IAlert = {
                alertTitle: value[fields[0].columnName],
                alertContent: value[fields[1].columnName],
                URL: value[fields[2].columnName],
                severity: value[fields[3].columnName]
            }
            return output
        })
        return rawItems
    }
}