import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/Screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/Screens/ShowScreen";
import CreateScreen from "./src/Screens/CreateScreen";
import EditScreen from "./src/Screens/EditScreen";

const navigator = createStackNavigator(
  {
    index: IndexScreen,
    show: ShowScreen,
    create: CreateScreen,
    edit: EditScreen,
  },
  {
    initialRouteName: "index",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
