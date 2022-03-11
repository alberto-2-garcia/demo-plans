import React from "react";

export interface InputTextProps {
  val: string;
  id: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}