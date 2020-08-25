import React, {Suspense} from 'react';

import "./App.css";

import {BrowserRouter, Route} from 'react-router-dom';
import AppMainContentContainer from "./components/App_Main_Content/App_main_content";
import ChatContainer from "./components/Chat/Chat";
import MenuBar from "./components/common/MenuBar/menu_bar";
import ReduxSignUpForm from "./components/SignUpForm/signUp_form";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {getInitialized} from "./selectors/selectors";
import Preloader from "./components/common/Preloader/Preloader";

const Users = React.lazy(() => import('./components/Users/UsersBlock'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component{
    componentDidMount() {
        this.props.initializeApp()
    }
  render(){
        if(this.props.initialized===false){
            return <Preloader />
        }
        return (
            <BrowserRouter>
                <MenuBar/>
                <Route path="/Main" render={()=>{ return <AppMainContentContainer state={this.props.state} dispatch={this.props.dispatch}/> }} />

                <Route path='/SignUp' component={ReduxSignUpForm}/>

                <Route path="/Chat"   render={()=>{ return<ChatContainer state={this.props.state.chatPage} dispatch={this.props.dispatch}/> }} />

                <Route path="/Users"  render={()=>{ return  <Suspense fallback={<div>Загрузка...</div>}>
                                                                <Users />
                                                            </Suspense> }} />

                <Route path="/Profile/:userId?"  render={()=>{ return <Suspense fallback={<div>Загрузка...</div>}>
                                                                            <ProfileContainer />
                                                                     </Suspense> }} /> }} />
            </BrowserRouter>
        );
    }
}

let mapStateToProps = (state)=>({
    initialized : getInitialized(state)
})
export default compose(
    connect(mapStateToProps,{initializeApp}),
)(App)
