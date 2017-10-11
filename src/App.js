import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TreeDropdown from './TreeDropdown';

const Problem = (props) => (
  <div style={{marginTop: '20px', padding: '0 20%'}}>
    <h1>
      宇匯前端練習題
    </h1>
    <h2>
      ＊題目: 樹狀下拉式選單
    </h2>
    <p>
      今天 PM 說做可以打開又關起來的樹狀下拉式選單，與後端人員討論完後決定先把後端的資料，簡單的做呈現。
    </p>
    <p>
      後端目前有一些樹狀資料，可以使用
    </p>
    <pre>
      curl http://0.0.0.0:3000/api/treeData
    </pre>
    <p>
      來看。PM 為了讓前端人員覺得簡單，把操作簡易的畫在下面的 '樣本' 裡
    </p>
    <h3>Spec 描述:</h3>
    <p>
      點選 Input 之後，顯示下拉式選單，下拉式選單的資料是由 Server 傳回。資料內 parent 是 null 代表是'根'把它做第一層顯示，只要有 child 的節點都必須要畫出小角的小按鈕，請使用 project 內 font-awesome 的 icon
      點選小按鈕之後，會把 children 展開併向右縮排（表示是 children)
    </p>
    <h3>完成品說明</h3>
    <ul>
      <li>
        請把整個 project 壓縮一併傳回，請勿包含 node_modules
      </li>
      <li>
        可隨意安裝想要的 plugin，請務必包含在 package.json 裡
      </li>
      <li>
        我們會使用 yarn run start 來做測試，評分的方式就是有沒有做到與下方的完成品一樣或者更好(意指更漂亮)
      </li>
    </ul>
    <hr />
    <div style={{ textAlign: 'center' }}>樣本</div>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Problem />
        <TreeDropdown />
      </div>
    );
  }
}

export default App;
