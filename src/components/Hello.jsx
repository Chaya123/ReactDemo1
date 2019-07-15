import React from 'react'

function Hello(props) {
    var mytitle = 'hahahha'
    var arr = [];
    for(var i = 0; i<= 10; i++) {
        var p = <p key={i}>这是第{i}个标签</p>
        arr.push(p)
    }
    return <div>
    这是jsx语法创建的div元素
    <h2 title = {mytitle+'aaaaa'}>这是{props.name},年龄是{props.age}</h2>
    <p className = "myP">lalalallala</p>
    {arr}
    {
        //注释
    }
    </div>
}
export default Hello