import { Component } from 'angular2/core';

const template = require('./app.component.jade');
const style = require('./app.component.styl');

@Component({
    selector: 'angular2',
    styles: [style],
    template,
})
class AppComponent {
  title: string = 'ng2-webpack example';
  name: string = '';
}

export default AppComponent;
