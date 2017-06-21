/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {AppRegistry} from "react-native";
import FrameSelector from './APP/components/FrameSelector';
import CameraComponent from './APP/components/CameraComponent';
import {Scene, Router} from 'react-native-router-flux';

export default class OnlineMagnet extends Component {
    render() {
      return <Router>
        <Scene key="root">
          <Scene key="frameSelector" component={FrameSelector} title="Select Frame" hideNavBar={true}  initial={true} />
          <Scene key="cameraComponent" component={CameraComponent} hideNavBar={true}  />
        </Scene>
      </Router>
    }
}

AppRegistry.registerComponent("OnlineMagnet", () => OnlineMagnet);
