// 入口主要文件

/**
 * let  const  var
 * 1. let 统一作用域下不要重复声明
 * 2. let 块级作用域 {}, 外面访问不到
 * 3. 不进行预解析
 * 
 * 
 * 1.const 常量， 声明时候赋值，不能二次赋值
 */
if (true) {
    let a = 1;
}
// console.log(a)

// var 
// console.log(b)
// var b = 1;

// console.log(b)
// var b = 1;

const b = 1 ;
b = 2;
console.log(b)

