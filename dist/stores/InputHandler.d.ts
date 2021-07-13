import Validator from "../types/Validator";
declare class InputHandler {
    private validator?;
    value?: string;
    setValue: (v: string) => void;
    get isValid(): boolean;
    get errorMessages(): string[] | undefined;
    constructor(validator?: Validator | undefined);
}
export default InputHandler;
