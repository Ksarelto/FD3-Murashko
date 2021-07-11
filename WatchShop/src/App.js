"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { RouterDOM } from './modules/routing/router'

import './reset.css';
import './normolize.css';



ReactDOM.render(
 <HashRouter>
   <RouterDOM></RouterDOM>
 </HashRouter>
  , document.getElementById('container')
);
