import Vue from "vue"
import App from "components/demo/demo"

const root = document.createElement("div")
document.body.appendChild(root)

new Vue({
  render: (h) => h(App),
}).$mount(root)
