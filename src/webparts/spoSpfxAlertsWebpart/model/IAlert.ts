export interface IAlert {
    alertTitle: string
    alertContent: string
    URL: {Url: string, Description: string}
    severity: ESeverityLevel
}

export enum ESeverityLevel {
    Information = "Information",
    Good = "Good",
    Warning = "Warning",
    Critical = "Critical"
}