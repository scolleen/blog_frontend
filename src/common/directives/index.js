import Vue from 'vue'

Vue.directive('title', {
  update: (el, binding) => {
    document.title = binding.value + '尹秀培'
  }
})
