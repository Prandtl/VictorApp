import React from "react";
import {
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  TextInput,
  Platform
} from "react-native";
import { inject, observer } from "mobx-react/native";

@inject("Main", "Scripts")
@observer
export class SettingsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedCommands: [],
      scriptName: "Скрипт 1"
    };
  }
  render() {
    let Main = this.props.Main;
    let Scripts = this.props.Scripts;
    let commands = [];
    for (let command of Main.commands) {
      commands.push(
        <Button
          key={`SelectCommand${Main.commands.indexOf(command)}`}
          title={`${command.name}`}
          onPress={() =>
            this.setState({
              selectedCommands: this.state.selectedCommands.concat(command)
            })
          }
        />
      );
    }
    let selectedCommands = [];
    let i = 0;
    for (let command of this.state.selectedCommands) {
      selectedCommands.push(
        <Button
          key={`SelectedCommand${i++}`}
          title={`${command.name}`}
          onPress={() => {
            let seleceted = this.state.selectedCommands;
            seleceted.splice(seleceted.indexOf(command), 1);
            this.setState({ selectedCommands: seleceted });
          }}
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
            {commands}
          </View>
        </ScrollView>
        <ScrollView style={{ flex: 1 }}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            {selectedCommands}
          </View>
        </ScrollView>
        <Text style={{ marginHorizontal: 24 }}>Script name</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginHorizontal: 24
          }}
          onChangeText={text => this.setState({ scriptName: text })}
          value={this.state.scriptName}
        />
        <Button
          style={{ marginHorizontal: 24 }}
          title={"Save script"}
          onPress={() => {
            console.log(this.state.selectedCommands);
            Scripts.addScripts({
              name: this.state.scriptName,
              payload: this.state.selectedCommands
            });
          }}
        />
      </SafeAreaView>
    );
  }
}
