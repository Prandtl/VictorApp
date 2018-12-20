import { observable, action } from "mobx";
export class ScriptStore {
  @observable
  scripts = [
    {
      name: "Моргнуть",
      payload: [
        {
          type: "face",
          name: "Веки вверх",
          payload: {
            x: 0,
            y: 0,
            e: 85
          }
        },
        {
          type: "face",
          name: "Веки вниз",
          payload: {
            x: 0,
            y: 0,
            e: 0
          }
        },
        {
          type: "face",
          name: "Веки вверх",
          payload: {
            x: 0,
            y: 0,
            e: 85
          }
        }
      ]
    }
  ];

  @action
  addScripts(script) {
    this.scripts.push(script);
  }
}
