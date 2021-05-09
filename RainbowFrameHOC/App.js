"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import './components/RainbowFrame.css'
import MainComponent from './components/MainComponent'
let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple']
ReactDOM.render(
  <MainComponent colors={colors}></MainComponent>
  , document.getElementById('container')
);

