import { ColumnType } from "./enums";
export interface IItems {
  id: string;
  title: string;
  column: ColumnType;
  color: string;
  isChecked: boolean;
}