import QUnit from 'steal-qunit';
import { ViewModel } from './calendar';

// ViewModel unit tests
QUnit.module('mini-calendar/calendar');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the mini-calendar component');
});
