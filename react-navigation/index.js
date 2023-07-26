import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Navigation from './src/navegation/index';

registerRootComponent(Navigation);
AppRegistry.registerComponent(appName, () => Navigation);
