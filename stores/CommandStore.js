import { observable, action } from "mobx";
export class CommandStore {
  @observable
  name = "Смотреть вверх";
  @observable
  x = 0;
  @observable
  y = 0;
  @observable
  e = 0;
  @observable
  msg = "Кожанные ублюдки";
  @observable
  voice = "zahar";
  @observable
  emotion = "good";
  @observable
  speed = 0;
  @action
  nameOnChange(name) {
    this.name = name;
  }
  @action
  xOnChange(x) {
    this.x = x;
  }
  @action
  yOnChange(y) {
    this.y = y;
  }
  @action
  eOnChange(e) {
    this.e = e;
  }
  @action
  msgOnChange(msg) {
    this.msg = msg;
  }
  @action
  voiceOnChange(voice) {
    this.voice = voice;
  }
  @action
  emotionOnChange(emotion) {
    this.emotion = emotion;
  }
  @action
  speedOnChange(speed) {
    this.speed = speed;
  }
}
