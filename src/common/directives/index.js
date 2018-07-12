import Vue from 'vue'

Vue.directive('title', {
  bind: (el, binding) => {
    if (binding.value) {
      document.title = binding.value + ' - 尹秀培'
    }
  }
})
