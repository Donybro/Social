import DialogCurrent from "./DialogCurrent";
import {connect} from "react-redux";
import {getCurrentDialogs} from "../../../selectors/selectors";

    let mapStateToProps = (state)=>{
        return {
            currentDialogs : getCurrentDialogs(state)
        }
    }



let DialogCurrentContainer = connect(mapStateToProps,{})(DialogCurrent);
export  default  DialogCurrentContainer