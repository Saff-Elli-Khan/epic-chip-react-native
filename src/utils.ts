// Convert Hex Code to Rgba Color Code
export const shadeColor = (hexCode: string, opacity: number) => {
  let hex = hexCode.replace("#", "");

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity / 100})`;
};

export const changeTheme = (
  mode: "Outlined" | "Solid",
  opacity: number,
  focus: boolean,
  backgroundColor?: {
    focusColor?: string;
    inActiveColor?: string;
  },
  inActiveColor?: string,
  activeColor?: string
) => {
  if (mode === "Solid") {
    return focus
      ? backgroundColor?.focusColor
        ? backgroundColor?.focusColor
        : activeColor || "#003CAB"
      : backgroundColor?.inActiveColor || inActiveColor || "#5e5e5e";
  } else {
    return shadeColor(
      focus
        ? backgroundColor?.focusColor
          ? backgroundColor?.focusColor
          : "#003CAB"
        : backgroundColor?.inActiveColor || "#5e5e5e",
      opacity
    );
  }
};
