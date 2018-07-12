import Request from './request'

function plugin (Vue) {
  if (plugin.installed) {
    return
  }
  const request = new Request()
  Vue.request = request
  Object.defineProperties(Vue.prototype, {
    $request: {
      get () {
        return request
      }
    }
  })
}

export default plugin
