const executionContext = require("./ExecutionContext");

// 先创建一个全局的词法环境
let globalLexicalEnvironment = new LexicalEnvironment()
let globalExecutionContext = new ExecutionContext(globalLexicalEnvironment, global);
