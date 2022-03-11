import { Color } from "../../types/Color";

export type ColorsReducerAction = AddColorAction | ModifyColorAction | DeleteColorAction;

export interface AddColorAction {
  type: typeof ColorsAction.ADD;
  colors: Color[];
};

export interface ModifyColorAction {
  type: typeof ColorsAction.MODIFY;
  color: Color,
  modifiedColor: Color
};

export interface DeleteColorAction {
  type: typeof ColorsAction.DELETE;
  color: Color
};

export class ColorsAction {
  static readonly ADD = 'ADD';
  static readonly MODIFY = 'MODIFY';
  static readonly DELETE = 'DELETE';

  addColors = (colors: Color[]): AddColorAction => {
    return {
      type: ColorsAction.ADD,
      colors,
    }
  }

  modifyColor = (color: Color, modifiedColor: Color): ModifyColorAction => {
    return {
      type: ColorsAction.MODIFY,
      color,
      modifiedColor
    }
  }

  deleteColor = (color: Color): DeleteColorAction => {
    return {
      type: ColorsAction.DELETE,
      color,
    }
  }
}