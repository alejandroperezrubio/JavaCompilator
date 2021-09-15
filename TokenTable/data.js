var tokenCategories = ["<span class='material-icons'>location_city</span> Constant", "<span class='material-icons'>fingerprint</span> Identifier", "<span class='material-icons'>key</span> Keyword", '<span class="material-icons">calculate</span> Operator', "<span class='material-icons'>fence</span> Separator"];

var tokenTable = [
    {
        "Token": tokenCategories[0],
        "Lexeme": ['"Pris Stratton"', '"Stockholm"', '"hello world"'],
        "Pattern": '"[a-zA-Zd$&+,:;=?@#|<>.-^*()%!]*"'
    },
    {
        "Token": tokenCategories[0],
        "Lexeme": [5, 16, 2021],
        "Pattern": 'd*.d*'
    },
    {
        "Token": tokenCategories[0],
        "Lexeme": [true],
        "Pattern": 'true'
    },
    {
        "Token": tokenCategories[0],
        "Lexeme": [false],
        "Pattern": 'false'
    },
    {
        "Token": tokenCategories[0],
        "Lexeme": [undefined],
        "Pattern": 'undefined'
    },
    {
        "Token": tokenCategories[0],
        "Lexeme": ['null'],
        "Pattern": 'null'
    },
    {
        "Token": tokenCategories[1],
        "Lexeme": ["sheep", "city", "AuthorName", "number_of_pages"],
        "Pattern": "[a-zA-Z_$][a-zA-Zd\\_\\$]*"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["break"],
        "Pattern": "break"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["case"],
        "Pattern": "case"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["catch"],
        "Pattern": "catch"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["class"],
        "Pattern": "class"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["const"],
        "Pattern": "const"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["continue"],
        "Pattern": "continue"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["debugger"],
        "Pattern": "debugger"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["default"],
        "Pattern": "default"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["delete"],
        "Pattern": "delete"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["do"],
        "Pattern": "do"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["else"],
        "Pattern": "else"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["enum"],
        "Pattern": "enum"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["export"],
        "Pattern": "export"
    }, 
    {
        "Token": tokenCategories[2],
        "Lexeme": ["extends"],
        "Pattern": "extends"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["finally"],
        "Pattern": "finally"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["for"],
        "Pattern": "for"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["function"],
        "Pattern": "function"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["if"],
        "Pattern": "if"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["implements"],
        "Pattern": "implements"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["import"],
        "Pattern": "import"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["in"],
        "Pattern": "in"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["instanceof"],
        "Pattern": "instanceof"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["interface"],
        "Pattern": "interface"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["let"],
        "Pattern": "let"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["new"],
        "Pattern": "new"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["package"],
        "Pattern": "package"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["private"],
        "Pattern": "private"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["protected"],
        "Pattern": "protected"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["public"],
        "Pattern": "public"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["static"],
        "Pattern": "static"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["return"],
        "Pattern": "return"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["super"],
        "Pattern": "super"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["switch"],
        "Pattern": "switch"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["this"],
        "Pattern": "this"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["throw"],
        "Pattern": "throw"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["try"],
        "Pattern": "try"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["typeof"],
        "Pattern": "typeof"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["var"],
        "Pattern": "var"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["void"],
        "Pattern": "void"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["while"],
        "Pattern": "while"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["with"],
        "Pattern": "with"
    },
    {
        "Token": tokenCategories[2],
        "Lexeme": ["yield"],
        "Pattern": "yield"
    },
    {
        "Token": tokenCategories[3],
        "Lexeme": ["+"],
        "Pattern": '+'
    },
    {
        "Token": tokenCategories[3],
        "Lexeme": ["-"],
        "Pattern": '-'
    },
    {
        "Token": tokenCategories[3],
        "Lexeme": ["*"],
        "Pattern": '*'
    },
    {
        "Token": tokenCategories[3],
        "Lexeme": ["/"],
        "Pattern": '/'
    },
    {
        "Token": tokenCategories[3],
        "Lexeme": ["%"],
        "Pattern": '%'
    },
    {
        "Token": tokenCategories[3],
        "Lexeme": ["="],
        "Pattern": '='
    },
    {
        "Token": tokenCategories[3],
        "Lexeme": ["+="],
        "Pattern": '+='
    },
    {
        "Token": tokenCategories[3],
        "Lexeme": ["-="],
        "Pattern": '-='
    },
    {
        "Token": tokenCategories[3],
        "Lexeme": ["*="],
        "Pattern": '*='
    },
    {
        "Token": tokenCategories[3],
        "Lexeme": ["/="],
        "Pattern": '/='
    },
    {
        "Token": tokenCategories[3],
        "Lexeme": ["%="],
        "Pattern": '%='
    },
    {
        "Token": tokenCategories[3],
        "Lexeme": ["++"],
        "Pattern": '++'
    },
    {
        "Token": tokenCategories[3],
        "Lexeme": ["--"],
        "Pattern": '--'
    },
    {
        "Token": tokenCategories[3],
        "Lexeme": ["&&"],
        "Pattern": '&&'
    },
    {
        "Token": tokenCategories[3],
        "Lexeme": ["||"],
        "Pattern": '||'
    },
    {
        "Token": tokenCategories[3],
        "Lexeme": ["!"],
        "Pattern": '!'
    },
    {
        "Token": tokenCategories[3],
        "Lexeme": ["=="],
        "Pattern": '=='
    },
    {
        "Token": tokenCategories[3],
        "Lexeme": ["==="],
        "Pattern": '==='
    },
    {
        "Token": tokenCategories[3],
        "Lexeme": ["!="],
        "Pattern": '!='
    },
    {
        "Token": tokenCategories[3],
        "Lexeme": ["!=="],
        "Pattern": '!=='
    },
    {
        "Token": tokenCategories[3],
        "Lexeme": ["<"],
        "Pattern": '<'
    },
    {
        "Token": tokenCategories[3],
        "Lexeme": [">"],
        "Pattern": '>'
    },
    {
        "Token": tokenCategories[3],
        "Lexeme": ["<="],
        "Pattern": '<='
    },
    {
        "Token": tokenCategories[3],
        "Lexeme": [">="],
        "Pattern": '>='
    },
    //
    {
        "Token": tokenCategories[4],
        "Lexeme": ["()"],
        "Pattern": '()'
    },
    {
        "Token": tokenCategories[4],
        "Lexeme": ["{}"],
        "Pattern": '{}'
    },
    {
        "Token": tokenCategories[4],
        "Lexeme": ["[]"],
        "Pattern": '[]'
    },
    {
        "Token": tokenCategories[4],
        "Lexeme": [";"],
        "Pattern": ';'
    },
    {
        "Token": tokenCategories[4],
        "Lexeme": [","],
        "Pattern": ','
    },
    {
        "Token": tokenCategories[4],
        "Lexeme": ["."],
        "Pattern": '.'
    }
]