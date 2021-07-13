import { action, computed, makeObservable, observable } from "mobx";
import Validator from "../types/Validator";

class InputHandler {
  @observable
  public value?: string;

  @action
  public setValue = (v: string) => {
    this.value = v;
  };

  @computed
  public get isValid() {
    return !this.errorMessages?.length;
  }

  @computed
  public get errorMessages() {
    const errors = this.validator?.getErrorMessages(this.value);

    return errors;
  }

  constructor(private validator?: Validator) {
    makeObservable(this);
  }
}

export default InputHandler;
