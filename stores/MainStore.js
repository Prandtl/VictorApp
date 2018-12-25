import { observable, action } from "mobx";
import { eyelidsUp, eyelidsDown, turnOn, turnOff, sayHello, eyesAndEyelids, emoAndColor, sayApp, female, please, lookUp, lookDown } from "../models/actions";
export class MainStore {
  @observable
  ip = "192.168.43.240";
  @observable
  commands = [eyelidsUp, eyelidsDown, lookUp, lookDown, turnOn, turnOff, sayHello, eyesAndEyelids, emoAndColor, sayApp, female, please];
  @action
  ipOnChange(ip) {
    this.ip = ip;
  }
  @action
  addCommand(command) {
    if (this.commands === null) {
      this.commands = [];
    }
    this.commands.push(command);
  }
}
