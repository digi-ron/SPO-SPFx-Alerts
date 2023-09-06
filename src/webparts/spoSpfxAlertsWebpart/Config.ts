import IColumnInformation, { EColumnTypes } from "./model/IRequiredColumnInformation";

export const LIBNAME: string = "Alerts"

export const REQFIELDS: IColumnInformation[] = [
    {
        columnName: "Title",
        columnType: EColumnTypes.Text
    },
    {
        columnName: "Content",
        columnType: EColumnTypes.Text
    },
    {
        columnName: "URL",
        columnType: EColumnTypes.URL
    },
    {
        columnName: "Level",
        columnType: EColumnTypes.Choice
    }
]