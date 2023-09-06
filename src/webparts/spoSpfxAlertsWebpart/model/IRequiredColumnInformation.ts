export default interface IRequiredColumnInformation {
    columnName: string,
    columnType: EColumnTypes
}

//only relevant fields added as I'm lazy
export enum EColumnTypes {
    Text = "Text",
    URL = "URL",
    Choice = "Choice"
}