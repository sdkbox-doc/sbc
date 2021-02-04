import Vue from 'vue'
import hljs from 'highlight.js'
import "highlight.js/styles/darcula.css"

const global = Vue.observable({ apiLang: "cpp" })

Object.defineProperty(Vue.prototype, 'apiLang', {
  get() { return global.apiLang; },
  set(val) { global.apiLang = val; }
});

Vue.directive('highlight',function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    })
})

