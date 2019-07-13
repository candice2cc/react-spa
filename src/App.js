import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import { LocaleProvider } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './lib/sass/index.scss';

import { Hello, Date, Counter } from './test';

moment.locale('zh-cn');

const App = () => (
  <LocaleProvider locale={zhCN}>
    <Router>
      <Switch>
        <Route path="/h" component={Hello} />
        <Route path="/d" component={Date} />
        <Route path="/c" component={Counter} />
        <Route component={Hello} />
      </Switch>
    </Router>
  </LocaleProvider>
);

export default App;
