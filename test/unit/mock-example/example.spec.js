/* global describe, it, expect */

import Vue from 'vue'

// inject-loader gives us a factory that can create instances
// of the module with different injected dependencies.
// make sure to use the require() syntax here.
// for webpack loader string syntax, see:
// - https://webpack.github.io/docs/loaders.html
const ExampleInjector = require('!!vue?inject!./example.vue')

describe('component with dependency injection example', () => {
  it('should be injectable', () => {
    // create an instance of the Example module,
    // injecting a mocked "../service" dependency
    const Example = ExampleInjector({
      './service': {
        msg: 'Hello from mock'
      }
    })
    // now we can test it!
    const vm = new Vue({
      template: '<div><test></test></div>',
      components: {
        'test': Example
      }
    }).$mount()
    expect(vm.$el.querySelector('.msg').textContent).toBe('Hello from mock')
  })
})
