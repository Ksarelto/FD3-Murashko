"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MainStore from './components/MainStore';

let shopName = 'Mobile';
let itemsArr = require('./items.json');

ReactDOM.render(
  <MainStore
    shopName={shopName}
    items={itemsArr}
  />
  , document.getElementById('container')
);