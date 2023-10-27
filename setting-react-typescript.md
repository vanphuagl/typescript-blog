https://www.youtube.com/watch?v=BTqqBE97s80

1.  yarn create react-app name-project --template typescript
2.  yarn add -D prettier eslint-plugin-prettier eslint-config-prettier
3.  Setting 

    + edit file package.json

    "script": {
        "lint": "eslint --ext ts,tsx src/",
        "lint:fix": "eslint --fix --ext ts,tsx src/",
        "prettier": "prettier --check \"src/**/(_.tsx|_.ts|_.css|_.scss)\"",
        "prettier:fix": "prettier --write \"src/**/(_.tsx|_.ts|_.css|_.scss)\""
    }

    + create file ngoài .prettierrc

    {
        "arrowParens": "always",
        "semi": false,
        "trailingComma": "none",
        "tabWidth": 2,
        "endOfLine": "auto",
        "useTabs": false,
        "singleQuote": true,
        "printWidth": 120,
        "jsxSingleQuote": true
    }

    + create file ngoài .eslintrc

    {
        "extends": ["react-app", "prettier"],
        "plugins": ["prettier"],
        "rules": {
            "prettier/prettier": [
            "warn",
                {
                    "arrowParens": "always",
                    "semi": false,
                    "trailingComma": "none",
                    "tabWidth": 2,
                    "endOfLine": "auto",
                    "useTabs": false,
                    "singleQuote": true,
                    "printWidth": 120,
                    "jsxSingleQuote": true
                }
            ]
        }
    }

    + create file ngoài .editorconfig

    [*]
    indent_size = 2
    indent_style = space

    + edit tsconfig.json

    "jsx": "react-jsx",
    "baseUrl": "src"

4.  yarn add tailwindcss postcss autoprefixer
5.  npx tailwindcss init -p

    + edit tailwind.config.js

    content: ['./src/**/*.{ts,tsx}'],
    
6.  yarn add -D prettier-plugin-tailwindcss
7.  yarn add @reduxjs/toolkit

RUN:
yarn prettier --> yarn prettier:fix
yarn lint --> yarn lint:fix