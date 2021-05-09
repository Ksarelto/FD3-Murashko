"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MultilineText from './components/MultilineText';

const text = require('./multilineText.json');


ReactDOM.render(
  <MultilineText
    multilineText={text}
  />
  , document.getElementById('container')
);

