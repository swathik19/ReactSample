import * as actionTypes from "./detailsActionTypes";
import { DetailsAction } from "./type";
import * as data from '../stub/data.json';
import axios from "axios";


export function getDetails() {

  if (process.env.NODE_ENV === "development") {
    return (dispatch: (arg0: DetailsAction) => void) => {
      setTimeout(() => {
        dispatch({
          type: actionTypes.GET_DETAILS,
          details: data.value as any,
        })
      }, 500)
    }
  }
  else {
    return (dispatch: (arg0: DetailsAction) => void) => {
      axios.get("https://cognizantonline.sharepoint.com/sites/TestWeb/_api/lists/getbytitle('ValueAddsList')/items", {
        headers: { "Content-Type": "application/json" },
      }).then(response => {
        dispatch({
          type: actionTypes.GET_DETAILS,
          details: response.data.value,
        })
      });
    }
  }
}