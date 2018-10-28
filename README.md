# สอนวิธีทำ react-router 
1. สร้างโปรเจค React โดยใช้คำสั่ง
```
npx create-react-app "ชื่อโฟรเดอร์"
```
2. ลงตัว package react-router-dom
```
npm install react-router-dom
```
3. ในโฟรเดอร์ src ให้สร้างโฟรเดอร์ที่มีชื่อว่า components 
4. สร้าง 3 ไฟล์ในโฟรเดอร์ componet ดังนี้ Login.js, Register.js, Home.js 
![Image](https://raw.githubusercontent.com/ABChamp/mpClass-testPractice2/master/images/file_structure.png)
5. ในทั้งสามให้กำหนดตามด้านล่างตามชื่อไฟล์
```
import React, { Component } from "react";

class Login extends Component {
    render() {
        return <p> Login Compoonent </p>
    }
}

export default Login;
```

6 ในไฟล์ index.js ให้แก้เป็นตามนี้
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// =====
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(<BrowserRouter> <App /> </BrowserRouter>, document.getElementById('root'));
// =====
serviceWorker.unregister();
```
7. แก้ไฟล์ App.js ให้แก้เป็นตามนี้
```
import React, { Component } from 'react';
import { Route , Switch } from 'react-router-dom';

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

class App extends Component {
  render() {
    return (
      <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Home} />
      </Switch>
    );
  }
}

export default App;
```
8. yarn start หรือ npm run start เพื่อทดสอบการทำงานโดยการพิมพ์ชื่อ /register, /home ตามหลัง url

![Image](https://raw.githubusercontent.com/ABChamp/mpClass-testPractice2/master/images/home_component.png)

Ref1: https://reacttraining.com/react-router/web/guides/quick-start