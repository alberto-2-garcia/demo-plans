import { act } from "react-dom/test-utils";
import { Reducer } from "redux";
import { Color } from "../../types/Color";
import { ColorsReducerAction, ColorsAction } from "../actions/ColorActions";

export const ColorsReducer: Reducer<Color[], ColorsReducerAction> = (state = [], action) => {
  const { type } = action;
  console.log('ColorsReducer')
  
  switch(type) {
    case ColorsAction.ADD:
      console.log('ColorsReducer, add', action.colors, state)
      return [ ...state, ...action.colors ];
    case ColorsAction.MODIFY:
      return state.map(color => {
        if (color == action.color) {
          color.name = action.modifiedColor.name;
          color.color = action.modifiedColor.color;
          color.units = action.modifiedColor.units;
        }
        return color;
      });
    case ColorsAction.DELETE:
        return state.filter(color => color != action.color);
    default:
      return state;
  }
}
