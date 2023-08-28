import UtilityServices from "./UtilityServices";
import * as Config from '../Config'

export default class SPOListService {
    public static async GetListColumns(listName: string = Config.LIBNAME): Promise<void> {
        //build query
        const columnQuery: string = Config.REQUIREDFIELDS.map((v, i) => {
            return `(InternalName eq '${v}' and TypeAsString eq '${Config.REQFIELDTYPES[i]}')`
        }).join(" or ")

        console.log(columnQuery)

        await UtilityServices.GetPnP().web.lists.getByTitle(listName).fields.filter(columnQuery)().then(e => {
            console.log(e)
        })
    }
}