import React, {Suspense} from 'react';

import "./App.css";

import {HashRouter, Route} from 'react-router-dom';
import AppMainContentContainer from "./components/App_Main_Content/App_main_content";
import ChatContainer from "./components/Chat/Chat";
import MenuBar from "./components/common/MenuBar/menu_bar";
import ReduxSignUpForm from "./components/SignUpForm/signUp_form";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {getInitialized, getMyId} from "./selectors/selectors";
import Preloader from "./components/common/Preloader/Preloader";
import {getProfileTC} from "./redux/profile-reducer";
import WelcomePage from "./components/WelcomePage";

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
            <HashRouter>
                <MenuBar/>
                <Route exact path='/' component={ReduxSignUpForm}/>
                {/*<Route exact path={"/"} render={()=>{return <WelcomePage/>}} />*/}
                <Route path="/Main" render={()=>{ return <AppMainContentContainer /> }} />

                <Route path='/SignUp' component={ReduxSignUpForm}/>

                <Route path="/Chat"   render={()=>{ return<ChatContainer /> }} />

                <Route path="/Users"  render={()=>{ return  <Suspense fallback={<Preloader/>}>
                                                                <Users />/
                                                            </Suspense> }} />

                <Route path="/Profile/:userId?"  render={()=>{ return <Suspense fallback={<Preloader/>}>
                                                                            <ProfileContainer />
                                                                     </Suspense> }} />
            </HashRouter>
        );
    }
}

let mapStateToProps = (state)=>({
    initialized : getInitialized(state),
    userId: getMyId(state)
})
export default compose(
    connect(mapStateToProps,{initializeApp,getProfileTC}),
)(App)
