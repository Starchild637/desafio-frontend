import { createReducer } from "typesafe-actions";
import { ReportActions } from "../actions";

const { setReportData } = ReportActions;

const initialState = {
  data: [],
};

const reducer = createReducer(initialState).handleAction(
  setReportData,
  (state, { payload: data }) => ({
    ...state,
    data,
  })
);

export default reducer;
