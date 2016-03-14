import QUnit from 'steal-qunit';
import plugin from './mini-calendar';

QUnit.module('mini-calendar');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the mini-calendar plugin');
});
