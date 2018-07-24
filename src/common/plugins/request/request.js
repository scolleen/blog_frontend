import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

class Request {
  constructor (config) {
    this._config = config
  }
  getUrl (options) {
    let wholeUrl
    if (wholeUrl in options) {
      return options.wholeUrl
    } else {
      let api = this._config.api
      let url = options.url
      if (typeof url === 'function') {
        url = url(api)
      }
      return this._config.domain + url
    }
  }
  _responseHook = (response) => {
    return new Promise((resolve) => {
      resolve(response)
    })
  }
  _errorHook = (error) => {
    window.alert('服务器错误，请稍后再试')
    return new Promise((resolve, reject) => {
      reject(error)
    })
  }
  post (options) {
    return Vue.http.post(this.getUrl(options), options.params, { emulateJSON: true }).then(this._responseHook, this._errorHook)
  }
  get (options) {
    return Vue.http.get(this.getUrl(options), {
      params: options.params
    }).then(this._responseHook, this._errorHook)
  }
}

export default Request
