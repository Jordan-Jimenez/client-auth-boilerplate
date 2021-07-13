export default interface Validator {
    getErrorMessages: (value?: string) => string[];
}
