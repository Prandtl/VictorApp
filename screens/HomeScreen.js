import React from "react";
import {
  Text,
  View,
  TextInput,
  Slider,
  Picker,
  SafeAreaView,
  ScrollView,
  Button,
  Platform
} from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { inject, observer } from "mobx-react/native";
@inject("Command", "Main")
@observer
export class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0
    };
  }
  handleIndexChange = index => {
    this.setState({
      ...this.state,
      selectedIndex: index
    });
  };
  saveFaceCommand() {
    let Command = this.props.Command;
    let Main = this.props.Main;
    Main.addCommand({
      type: "face",
      name: Command.name,
      payload: {
        x: `${Command.x}`,
        y: `${Command.y}`,
        e: `${Command.e}`
      }
    });
  }
  saveVoiceCommand() {
    let Command = this.props.Command;
    let Main = this.props.Main;
    Main.addCommand({
      type: "voice",
      name: Command.name,
      payload: {
        msg: Command.msg,
        voice: Command.voice,
        emotion: `${Command.emotion}`,
        speed: `${Command.speed}`
      }
    });
  }
  render() {
    let Command = this.props.Command;
    return (
      <SafeAreaView
        style={{ flex: 1, marginTop: Platform.OS === "android" ? 20 : 0 }}
      >
        <SegmentedControlTab
          tabsContainerStyle={{ marginHorizontal: 24 }}
          values={["Face", "Voice"]}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
        />
        <ScrollView>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "stretch",
              marginHorizontal: 24
            }}
          >
            {this.state.selectedIndex === 0 && (
              <React.Fragment>
                <Text style={{ marginTop: 24 }}>Name of command</Text>
                <TextInput
                  style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                  onChangeText={text => Command.nameOnChange({ text })}
                  value={Command.name}
                />
                <Text>X</Text>
                <Slider
                  minimumValue={0}
                  maximumValue={100}
                  value={Command.x}
                  onValueChange={num => Command.xOnChange(num)}
                />
                <Text>Y</Text>
                <Slider
                  minimumValue={0}
                  maximumValue={100}
                  value={Command.y}
                  onValueChange={num => Command.yOnChange(num)}
                />
                <Text>E</Text>
                <Slider
                  minimumValue={0}
                  maximumValue={100}
                  value={Command.e}
                  onValueChange={num => Command.eOnChange(num)}
                />
                <Button
                  onPress={() => this.saveFaceCommand()}
                  title="Save face command"
                />
              </React.Fragment>
            )}
            {this.state.selectedIndex === 1 && (
              <React.Fragment>
                <Text style={{ marginTop: 24 }}>Name of command</Text>
                <TextInput
                  style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                  onChangeText={text => Command.nameOnChange({ text })}
                  value={Command.name}
                />
                <Text style={{ marginTop: 24 }}>Message</Text>
                <TextInput
                  style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                  onChangeText={text => Command.msgOnChange({ text })}
                  value={Command.msg}
                />
                <Text>Voice</Text>
                <Picker
                  selectedValue={Command.voice}
                  onValueChange={(itemValue, itemIndex) =>
                    Command.voiceOnChange(itemValue)
                  }
                >
                  <Picker.Item label="zahar" value="zahar" />
                  <Picker.Item label="ermil" value="ermil" />
                  <Picker.Item label="alyss" value="alyss" />
                  <Picker.Item label="jane" value="jane" />
                  <Picker.Item label="oksana" value="oksana" />
                  <Picker.Item label="omazh" value="omazh" />
                </Picker>
                <Text>Emotion</Text>
                <Picker
                  selectedValue={Command.emotion}
                  onValueChange={(itemValue, itemIndex) =>
                    Command.emotionOnChange(itemValue)
                  }
                >
                  <Picker.Item label="good" value="good" />
                  <Picker.Item label="evil" value="evil" />
                  <Picker.Item label="neutral" value="neutral" />
                </Picker>
                <Text>Speed</Text>
                <Slider
                  minimumValue={0.1}
                  maximumValue={3.0}
                  value={Command.speed}
                  onValueChange={num => Command.speedOnChange(num)}
                />
                <Button
                  onPress={() => this.saveVoiceCommand()}
                  title="Save voice command"
                />
              </React.Fragment>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
