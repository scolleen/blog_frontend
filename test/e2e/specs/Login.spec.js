import Vue from 'vue'
import Login from '@/layouts/Login'

describe('Login', () => {
  it('userName', () => {
    const Constructor = Vue.extend(Login)
    const vm = new Constructor().$mount()
    vm.userName = '13011720491'
    let buttonElm = vm.$el.querySelector('div.btn')
    buttonElm.click()
    expect(vm.demo).toBe('ok')
  })
  it('yijieshu', done => {
    const vm = new Vue(Login).$mount()
    Vue.nextTick(() => {
      expect(vm.yijieshu).toBe(561)
      done()
    })
  })
})