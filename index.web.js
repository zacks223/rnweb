import { AppRegistry } from 'react-native';
import React from 'react';
import App from './src/App';
console.log(App)
AppRegistry.registerComponent('rnweb', () => App);
AppRegistry.runApplication('rnweb', {
  initialProps: {
  },
  rootTag: document.getElementById('react-root')
});