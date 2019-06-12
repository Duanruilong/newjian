import React, { Component } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './common/header/index';
import store from './store/index';
import Home from './page/home';
import Detail from './page/detail/index';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home}></Route>
            {/* <Route path='/login' exact component={Home}></Route> */}
            {/* <Route path='/' exact component={Home}></Route> */}
            <Route path='/detail/:id' exact component={Detail}></Route>

          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
