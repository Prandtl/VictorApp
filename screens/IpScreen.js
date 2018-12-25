import React from "react";
import { Text, View, TextInput, SafeAreaView, Platform } from "react-native";
import { inject, observer } from "mobx-react/native";
@inject("Main")
@observer
export class IpScreen extends React.Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "stretch",
          marginHorizontal: 24,
          marginTop: Platform.OS === "android" ? 20 : 0
        }}
      >
        <Text>Set Ip address</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.props.Main.ipOnChange(text)}
          value={this.props.Main.ip}
        />
      </SafeAreaView>
    );
  }
}
