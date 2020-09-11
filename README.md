## Usage

First clone this repository to your laptop. You must have Node (> v4) and [yarn](https://yarnpkg.com/lang/en/docs/install/) installed.

```bash
cd ~/code/$USER
git clone git@github.com:andrerferrer/455-markdown-it.git
cd 455-markdown-it
yarn install
stt # Open this folder in Sublime Text
```


## Como usar um plugin

1. yarn add plugin
1. criar o arquivo do plugin na pasta plugins
1. implementar a função nesse arquivo e exportá-la
1. importar no index.js (entry file) e usá-la
