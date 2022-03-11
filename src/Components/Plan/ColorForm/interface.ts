import { Color } from "../../../types/Color";

export interface ColorFormProps {
  addColor(color: Color): void;
  modifyColor(color: Color, modifiedColor: Color): void;
  deleteColor(color: Color): void;
}