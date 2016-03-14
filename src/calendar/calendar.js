import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './calendar.less!';
import template from './calendar.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the mini-calendar component'
    }
  }
});

export default Component.extend({
  tag: 'mini-calendar',
  viewModel: ViewModel,
  template
});
