import { Component } from 'angular2/core';

@Component({
    selector: 'angular2',
    styles: [require('./app.component.styl')],
    template: require('./app.component.jade'),
})
class AppComponent {
  title: string = 'ng2-webpack example';
  name: string = '';
}

export default AppComponent;
