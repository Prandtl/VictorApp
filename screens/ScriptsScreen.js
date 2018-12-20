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
      let res = await fetch(`http://${ip}:31337/scripts`, {
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
        <Button
          key={`SelectScripts${Scripts.scripts.indexOf(script)}`}
          title={`${script.name}`}
          onPress={async () => await this.sendScript(script)}
        />
      );
    }
    return (
      <SafeAreaView
        style={{ flex: 1, marginTop: Platform.OS === "android" ? 20 : 0 }}
      >
        <ScrollView style={{ flex: 1 }}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            {scripts}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
