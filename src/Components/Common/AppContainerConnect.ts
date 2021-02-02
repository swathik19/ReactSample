import { connect } from "react-redux";
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import { getDetails } from "../../store/detailsActionCreators";
import { DetailsState } from "../../store/type";
import  AppContainer from "./AppContainer";

function mapStateToProps(appState: DetailsState, ownprops: any) {
    return {
        details: appState.details,
    };
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>): any {
    return bindActionCreators({
        getDetails: getDetails,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);