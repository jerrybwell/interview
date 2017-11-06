# 題目:
題目在 build/index.html 裡
看到題目前必須要執行以下，請務必讀完此文件再開始進行

## pre-requisite:
1. 確認有安裝 nodejs
```
nodejs
npm/yarn
```
2. 安裝 plugins
```
npm install
or
yarn install
```
3. 開啟 server
```
node server/index.js
```
開啟 Server 如果遇到撞port 請先更改 server/index.js 裡的 port
如果沒問題會看到 server starts on 0.0.0.0:3000 

請開啟 chrome 輸入 0.0.0.0:3000 或 localhost:3000 將會看到考題

## Q&A
> 不知如何開始
1. 看完題目之後，查看 package.json
2. 看到
```
  "scripts": {
    "start": "react-scripts start",
```
3. 代表執行 start 就可以開始 React Project
```
npm run start
or
yarn start
```

>  看不懂在做什麼？
1. 用自己開發的模式去寫
2. 您可以
   a. 自己開一個 HTML 寫出題目的需求 將答案寄回

> 我們想從這題目看到什麼？
1. 串接 Server API
2. 使用 git clone
3. CLI
4. DataStructure
5. Coding Style

## Reference
這個考題的 React 是由 create-react-app 創建的，可以參考 CREATE_REACT_APP.md 來安裝更多的 plugins 或 css preprocessor

## 不會或不熟 React 的其他方案
用熟悉的方式完成這個小 module，再把答案傳回
- 寫在 HTML 裡
- 抓取 jQuery
- 原生 javascript
- 或者任何方式
