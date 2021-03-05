import type { StyleProp, TextStyle, ViewStyle } from "react-native";

export type EpicChipLabelInterface = {
  label?: string | React.ReactNode;
  Icon?: React.ReactNode;
};

export type EpicChipFocusInterface = {
  inActiveColor?: string;
  focusColor?: string;
};

export interface EpicChipInterface {
  type?: "Mini" | "Large" | "Micro";
  labelOptions?: EpicChipLabelInterface;
  mode?: "Outlined" | "Solid";
  checkIcon?: boolean;
  radius?: "Rounded" | "Rounded-Full" | number;
  isDisabled?: boolean;
  isChecked?: boolean;
  checkedIcon?: React.ReactNode;
  options?: EpicChipOptionsInterface;
  onChange?: (value: boolean) => void;
}

export interface EpicChipOptionsInterface {
  pickerStyles?: StyleProp<ViewStyle>;
  titleStyles?: StyleProp<TextStyle>;
  backgroundColor?: EpicChipFocusInterface;
  titleColor?: EpicChipFocusInterface;
}
