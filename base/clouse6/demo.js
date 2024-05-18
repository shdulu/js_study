/**
 * EC(G) 全局执行上下文
 *   VO(G)/GO
 *   a -> 12
 * 变量提升: var a;
 * 代码执行
 *
 * */
// 其实最开始浏览器从服务器端获取的js都是文本(字符串)，只不过声明了其格式是[content-type:application/javascript]
// 浏览器首先按照这个格式去解析代码 -> "词法解析" 阶段 [目标是生成 'AST'词法解析树]
// 基于let/const等声明的变量：在词法解析阶段，其实已经明确了，未来在此上下文中，必然会存在这些变量；代码执行中,
// 如果出现在具体声明的代码之前使用这些变量，浏览器会抛出错误

debugger;
console.log(a); // undefined

var a = 12;
console.log(b); // Uncaught ReferenceError:Cannot access 'b' before initialization
let b = 12;
