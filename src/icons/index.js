import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg组件

// register globally
Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => {
  console.log(requireContext.keys());
  requireContext.keys().map(requireContext)
}
const req = require.context('./svg', false, /\.svg$/)
const keys = req.keys()
const ids = req.id
console.log(ids);
keys.forEach(item => req(item))
