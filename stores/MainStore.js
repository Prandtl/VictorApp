import { observable, action } from "mobx";
export class MainStore {
  @observable
  ip = "127.0.0.1";
  @observable
  commands = [];
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
