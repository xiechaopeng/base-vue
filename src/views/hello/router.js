const Hello = () => ({
  component: import ('./components/Hello')
})
export default [{
  path: '/hello',
  component: Hello
}]
