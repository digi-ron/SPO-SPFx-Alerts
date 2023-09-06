export default interface IAlert {
    alertTitle: string
    alertContent: string
    URL: {Url: string, Description: string}
    severity: SeverityLevel
}

enum SeverityLevel {
    Information,
    Good,
    Warning,
    Critical,
    Other
}