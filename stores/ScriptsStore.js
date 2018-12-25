import { observable, action } from "mobx";
import { eyelidsUp, eyelidsDown, turnOn, turnOff, sayHello, eyesAndEyelids, emoAndColor, sayApp, female, please, evil, evilRar, good, goodMi, neutral, neutralBe, lookLeft, lookRight, lookUp, lookDown } from "../models/actions";
export class ScriptStore {
  @observable
  scripts = [
    {
      name: "Включить",
      payload: [turnOn]
    },
    {
      name: "Выключить",
      payload: [turnOff]
    },
    {
      name: "Привет",
      payload: [sayHello]
    },
    {
      name: "Сказать про глаза и веки",
      payload: [eyesAndEyelids]
    },
    {
      name: "Веки вверх",
      payload: [eyelidsUp]
    },
    {
      name: "Веки вниз",
      payload: [eyelidsDown]
    },
    {
      name: "Смотреть влево",
      payload: [lookLeft]
    },
    {
      name: "Смотреть вправо",
      payload: [lookRight]
    },
    {
      name: "Смотреть вверх",
      payload: [lookUp]
    },
    {
      name: "Смотреть вниз",
      payload: [lookDown]
    },
    {
      name: "Сказать про эмоции и цвет",
      payload: [emoAndColor]
    },
    {
      name: "evil",
      payload: [evil]
    },
    {
      name: "evilRar",
      payload: [evilRar]
    },
    {
      name: "good",
      payload: [good]
    },
    {
      name: "goodMi",
      payload: [goodMi]
    },
    {
      name: "neutral",
      payload: [neutral]
    },
    {
      name: "neutralBe",
      payload: [neutralBe]
    },
    {
      name: "Сказать про приложение",
      payload: [sayApp]
    },
    {
      name: "Попросить о женской версии",
      payload: [female]
    },
    {
      name: "Пожалуйста",
      payload: [please]
    }
  ];

  @action
  addScripts(script) {
    this.scripts.push(script);
  }
}
