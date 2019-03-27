import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/Auth';
import UserProfile from './src/screens/UserProfile';
import Map from './src/screens/Map';

//Register Component
Navigation.registerComponent("CodeZero.AuthScreen", () => AuthScreen);
Navigation.registerComponent("CodeZero.ProfileScreen", () => UserProfile);
Navigation.registerComponent("CodeZero.MapScreen", () => Map);

//Start a react-nativation app
Navigation.startSingleScreenApp({
  screen: {
    screen: "CodeZero.AuthScreen",
    title: "Login / Signup"
  }
});