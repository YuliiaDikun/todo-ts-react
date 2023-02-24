import { ColumpType } from "./enums";
export interface IItems {
  id: string;
  title: string;
  column: ColumpType;
  color: string;
  isChecked: boolean;
}