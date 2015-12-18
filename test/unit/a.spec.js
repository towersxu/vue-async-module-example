/* global describe, it, expect */

import Vue from 'vue'
import ComponentA from '../../src/components/a.vue'

describe('a.vue', () => {

  // asserting JavaScript options
  it('should have correct message', () => {
    expect(ComponentA.data().msg).toBe('Hello from Component A!')
  })

  // asserting rendered result by actually rendering the component
  it('should render correct message', () => {
    const vm = new Vue({
      template: '<div><test></test></div>',
      components: {
        'test': ComponentA
      }
    }).$mount()
    expect(vm.$el.querySelector('h2.red').textContent).toBe('Hello from Component A!')
  })
})
