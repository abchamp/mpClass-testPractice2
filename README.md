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

6. ในไฟล์ index.js ให้แก้เป็นตามนี้
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

## การส่ง URL param ที่จะเอาไปใช้ในหน้าต่อไป (ในแบบทดสอบนี้)
เวลาที่ต้องการที่ส่งค่า username password ไปอีกหน้าหนี่งผ่าน get method (ใช้ในการแบบทดสอบนี้เท่านั้น ชีวิตจริงไม่ทำแบบนี้)

1. แก้ไขโค้ตในหน้า App.js ตามข้างล่าง (ตรง route ของ home)
```
<Switch>
  <Route exact path="/" component={Login} />
  <Route path="/register" component={Register} />
  <Route path="/home/:id" component={Home} />
</Switch>
```

2. หน้า home จะรับ param ผ่านตัว props ตามโค้ตด้านล่าง
```
import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <p> Home Component {this.props.match.params.id}</p>
    }
}

export default Home;
```

ผลรับที่ได้ตามด้านล่างนี้

![Image](https://raw.githubusercontent.com/ABChamp/mpClass-testPractice2/master/images/home_component_param.png)

Ref2: https://reacttraining.com/react-router/web/example/url-params

## redict ไปยังหน้าอื่น
วิธีที่จะเปลี่ยนหน้าอื่นๆ ของ react-router 
ใช้โค้ตดังนี้
```
this.props.history.push('/home/1234')
```