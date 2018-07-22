import Request from './request'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  const request = new Request(options)
  Vue.request = request
  Object.defineProperties(Vue.prototype, {
    $request: {
      get () {
        return Vue.request
      }
    }
  })
}

export default plugin
