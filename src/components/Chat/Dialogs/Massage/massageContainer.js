
import {connect} from "react-redux";
import Massage from "./Massage";

const mapStateToProps = (state)=>{
    return {
        dialogsBlock:state.chatPage.dialogsBlock
    }
};

const  mapDispatchToProps  = (dispatch)=>{
    return {

    }
}

let MassageContainer = connect(mapStateToProps,mapDispatchToProps)(Massage)
export  default  MassageContainer;