///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import 'core-js';
import 'zone.js';
import { bootstrap } from 'angular2/platform/browser';

import AppComponent from './app.component';

document.head.innerHTML
  += `<style> ${require('./main.styl')} </style>`;

bootstrap(AppComponent);
