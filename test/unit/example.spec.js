/* global describe, it, expect */

import Vue from 'vue'
const ExampleInjector = require('!!vue?inject!./example.vue')

describe('component with dependency injection example', () => {
  it('should be injectable', () => {
    const Example = ExampleInjector({
      '../service': {
        msg: 'Hello from mock'
      }
    })
    const vm = new Vue({
      template: '<div><test></test></div>',
      components: {
        'test': Example
      }
    }).$mount()
    expect(vm.$el.querySelector('.msg').textContent).toBe('Hello from mock')
  })
})
