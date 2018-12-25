import React from "react";
import {
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  Platform
} from "react-native";
import { inject, observer } from "mobx-react/native";

@inject("Scripts", "Main")
@observer
export class ScriptsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      isSending: false
    };
  }
  async sendScript(script) {
    if (!this.state.isSending) {
      let ip = this.props.Main.ip;
      this.setState(state => {
        isSending: true;
      });
      let endpoint = `http://${ip}:31337`
      if (script.name === "Включить") {
        endpoint = `${endpoint}/turnon`
      } else {
        endpoint = `${endpoint}/scripts`
      }
      console.log(endpoint)
      let res = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(script.payload)
      });
      this.setState(state => {
        isSending: false;
      });
    }
  }
  render() {
    let Scripts = this.props.Scripts;
    let scripts = [];
    for (let script of Scripts.scripts) {
      scripts.push(
        <View style={{flex: 1, marginTop: 8, width: 250, justifyContent: "center", alignItems: "center"}} key={script.name}>
        <Button
          key={`SelectScripts${Scripts.scripts.indexOf(script)}`}
          title={`${script.name}`}
          onPress={async () => await this.sendScript(script)}
        />
        </View>
      );
    }
    return (
      <SafeAreaView
        style={{ flex: 1, marginTop: Platform.OS === "android" ? 20 : 0 }}
      >
        <ScrollView contentContainerStyle={{alignItems: "center"}}>
          {scripts}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
