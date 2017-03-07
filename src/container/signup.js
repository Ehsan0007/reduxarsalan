import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import Signup from "../component/signup"
import {names} from "../store/action/action"


function mapStateToProps(state)
{
    return {

    }
}

const mapDispatchToProps = (Dispatch)=>({
    login: bindActionCreators(names,Dispatch)
})

const Main = connect(mapStateToProps,mapDispatchToProps)(Signup);

export default Main