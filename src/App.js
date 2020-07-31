import React from 'react';

import "./App.css";

import AppMainContent from './components/App_Main_Content/App_main_content';
import SignUpForm from './components/SignUpForm/signUp_form';
import { BrowserRouter, Route } from 'react-router-dom';
import Chat from './components/Chat/Chat';


function App(props) {
  return (
    <BrowserRouter>
        <Route path="/Main"   render={()=>{ return <AppMainContent state={props.state}
                                                                   dispatch={props.dispatch}
        /> }} />
        <Route path='/SignUp' component={SignUpForm}/>
        <Route path="/Chat"   render={()=>{ return<Chat state={props.state.chatPage} /> }} />  
    </BrowserRouter>
  );
}

export default App;
