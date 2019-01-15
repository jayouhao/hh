import Clipboard from './clipbloard'
 3 
 4 const install = function(Vue) {
 5   Vue.directive('Clipboard', Clipboard)
 6 }
 7 
 8 if (window.Vue) {
 9   window.clipboard = Clipboard
10   Vue.use(install); // eslint-disable-line
11 }
12 
13 Clipboard.install = install
14 export default Clipboard