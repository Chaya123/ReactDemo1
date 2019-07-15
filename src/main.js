//1.React学习中，需安装react和react-dom两个包
import React from 'react'
import ReactDom from 'react-dom'

//2. 在react中，如果要创建Dom元素，只能使用React提供的JS API来创建，不能像VUE中那样，手写HTML元素
//createElement()方法，用于创建虚拟DOM对象，接收3个及以上的参数  1：字符串，表示要创建元素类型
//2: 是一个属性对象，有哪些属性   3：从第三个位置开始，后面可以放很多的虚拟Dom对象，表示当前元素的子节点
// var myH1 = React.createElement('h1', null,'这是一个大大的h1') 
// var myDiv = React.createElement('div', {title: 'this is a div', id: 'mydiv'},'这是一个div',myH1) 
//如果需要直接使用JSX语法，需要安装相关的语法转换工具   babel-preset-react,在.babelrc中配置
//class是ES6的关键词，所以必须写成className, 同样 label标签的for属性为htmlFor。
//第一种方式
// var mytitle = 'hahahha'
// var arr = [];
// for(var i = 0; i<= 10; i++) {
//     var p = <p key={i}>这是第{i}个标签</p>
//     arr.push(p)
// }
// var myDiv = <div>
//   这是jsx语法创建的div元素
//   <h1 title = {mytitle+'aaaaa'}>大大的h1</h1>
//   <p className = "myP">lalalallala</p>
//   {arr}
//   {
//       //注释
//   }
// </div>

// // ReactDom.render('要渲染的虚拟DOM元素','要渲染的位置')
// ReactDom.render(myDiv,document.getElementById('app'))
//第二种方式  组件形式必须是大写，因为是小写则按html标签解析
// function Hello(props) {
//     var mytitle = 'hahahha'
//     var arr = [];
//     for(var i = 0; i<= 10; i++) {
//         var p = <p key={i}>这是第{i}个标签</p>
//         arr.push(p)
//     }
//     return <div>
//     这是jsx语法创建的div元素
//     <h2 title = {mytitle+'aaaaa'}>这是{props.name},年龄是{Person.age}</h2>
//     <p className = "myP">lalalallala</p>
//     {arr}
//     {
//         //注释
//     }
//     </div>
// }
// var name = 'zs'
// var age = 21
var Person = {
    name :'ls',
    age: 22,
    gender: '男',
    address: '你喜欢哪都行'
}

//第三种，外部组件
import Hello from './components/Hello.jsx'
// ReactDom.render(<div>
//     <Hello name={name} age={age}></Hello>
//     </div>
//     ,document.getElementById('app'))
//..是ES6中的属性扩散，表示把这个对象上的所有属性展开放到这位置上
ReactDom.render(<div>
         <Hello {...Person}></Hello>
     </div>
     ,document.getElementById('app'))

















// //JS打包入口文件
// import $ from 'jquery'
// import './css/index.scss'

// $(function() {
//     $('li:odd').css('backgroundColor','pink')
//     $('li:even').css('backgroundColor','lightblue')
// })

// class Person {
//     static info = {name: 'zs'}
// }

// console.log(Person.info)