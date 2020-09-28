import React from 'react';
import logo from './logo.svg';
import './App.css';
import DemoStateless from './Components/DemoStateless';
import DemoStateFul from './Components/DemoStateFul';
import BaiTapLayout1 from './Components/BaiTapLauoutComponent/BaiTapLayout1';
import Databinding from './Databinding/Databinding';
import HandlerEvent from './HandlerEvent/HandlerEvent';

function App() {
  return (
    <div className="App">
      {/* <DemoStateless />
      <DemoStateFul/> */}
      {/* <BaiTapLayout1 /> */}
      {/* <Databinding/> */}
      <HandlerEvent/>
      


    </div>
  );
}

export default App;
