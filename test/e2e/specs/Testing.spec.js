import Vue from 'vue'
import Testing from '@/layouts/Testing'
// 测试内容
/**
 * 1:should render correct contents
 */
describe('Testing.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Testing)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.intro').textContent)
      .toEqual('this is my first time useing testing')
  })
})
