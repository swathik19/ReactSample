import { DetailsAction, DetailsState, IDetails } from "./type";
import * as actionTypes from "./detailsActionTypes";

const initialState: IDetails = {
    details: null,
}

const detailsReducer = (state: DetailsState = initialState, action: DetailsAction): DetailsState => {
    switch (action.type) {
        case actionTypes.GET_DETAILS:
            return {
                ...state,
                details: action.details,
            }
    }
    return state
}

export default detailsReducer;