/**
 * Created by skyee on 2018/1/20.
 */
// import...from的语法是ES6的，需要用到babel，后面再说
// require的语法是Commonjs的，webpack已经实现了，可以直接使用
// main.js，作为Vue的入口文件
const Vue = require('vue')
new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!'
    }
})