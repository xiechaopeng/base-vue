const NotFound = () => ({
  component: import ('./components/NotFound')
})
export default [{
  path: '*',
  component: NotFound,
}]
