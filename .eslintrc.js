module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jquery": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2016,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars": [
            "error",
            {
                "vars": "all",
                "args": "none"
            }
        ],
        "no-console": [
            "off"
        ]
    }
};