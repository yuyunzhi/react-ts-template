module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "extends": ["airbnb", "plugin:prettier/recommended"],
    "plugins": ["react-hooks"],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prop-types": 1, // 开启PropTypes验证
        "react/forbid-prop-types": 0,
        "react/prefer-stateless-function": 1, // 建议使用函数式组件
        "linebreak-style": 0,
        "react/jsx-one-expression-per-line": 0,
        "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
        "react-hooks/exhaustive-deps": "warn", // 检查 effect 的依赖
        'import/no-unresolved': [1, { ignore: ['^@/'] }],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ],
        'max-lines': ['error', 1000],
        'jsx-control-statements/jsx-use-if-tag': 'off',
        'consistent-return': 'warn',
        "no-unused-vars":0,
        complexity: ['error', 20],
        // function的长度
        "max-lines-per-function":[
            "error",
            {
                "max":70,
                "skipBlankLines": true,
                "skipComments": true,
                "IIFEs": true
            }
        ],
        // 禁止三目运算嵌套三目运算
        "no-nested-ternary": "error",
        // 有多少层if else嵌套
        "max-depth": ["error", 4],
        // 单行代码的长度
        "max-len": [
            "error",
            {
                code: 250,
                ignoreComments: true,
                ignoreUrls: true,
                ignoreTrailingComments: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true
            }
        ],
        // 禁止在条件中使用常量表达式 if(true),if(1)
        "no-constant-condition": 2,
    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx"
                ]
            }
        }
    }
}
