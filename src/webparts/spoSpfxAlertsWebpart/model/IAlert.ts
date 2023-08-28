export default interface IAlert {
    alertText: string
    URL: string
    severity: SeverityLevel
}

enum SeverityLevel {
    Information,
    Good,
    Warning,
    Critical,
    Other
}