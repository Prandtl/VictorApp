import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "mobx-react/native";
import { CommandStore } from "./stores/CommandStore";
import { MainStore } from "./stores/MainStore";
import { IpScreen } from "./screens/IpScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { ScriptStore } from "./stores/ScriptsStore";
import { ScriptsScreen } from "./screens/ScriptsScreen";

const TabNavigator = createBottomTabNavigator(
  {
    Ip: IpScreen,
    Home: HomeScreen,
    Settings: SettingsScreen,
    Scripts: ScriptsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "Settings") {
          iconName = `ios-options`;
        } else if (routeName === "Ip") {
          iconName = "ios-attach";
        } else if (routeName === "Scripts") {
          iconName = "ios-send";
        }
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

const App = createAppContainer(TabNavigator);

Main = new MainStore();
Command = new CommandStore();
Scripts = new ScriptStore();

stores = {
  Main,
  Command,
  Scripts
};

export default () => (
  <Provider {...stores}>
    <App />
  </Provider>
);
