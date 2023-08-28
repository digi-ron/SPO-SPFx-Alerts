import UtilityServices from "./UtilityServices";

export default class SPOListService {
    public static async GetListColumns(listName: string): Promise<any> {
        console.log(UtilityServices.GetPnP().web.lists.getByTitle(listName).fields())
    }
}