const Hello = () => ({
  component: import ('./components/Hello')
})
const Touch = () => ({
  component: import ('./components/Touch')
})
export default [{
  path: '/hello',
  component: Hello
},{
  path: '/touch',
  component: Touch
}]
