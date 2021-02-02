import * as actionTypes from "./detailsActionTypes";
import { DetailsAction } from "./type";
import * as data from '../stub/data.json';
import axios from "axios";


export function getDetails() {
  let details = getDetailsFromClient();
  const action: DetailsAction = {
    type: actionTypes.GET_DETAILS,
    details: details,
  }

  return dispatch(action);
}

export function dispatch(action: DetailsAction) {
  return (dispatch: (arg0: DetailsAction) => void) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}

function getDetailsFromClient(): any {
  if (process.env.NODE_ENV === "development") {
    return data.value;
  }
  else {
    axios.get("https://cognizantonline.sharepoint.com/sites/TestWeb/_api/lists/getbytitle('ValueAddsList')/items", {
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(res => {
        return res.data.value;
      })
  }
}