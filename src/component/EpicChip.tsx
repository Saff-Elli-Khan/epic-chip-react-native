import React, { useEffect, useImperativeHandle, useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { changeTheme } from "../utils";
import {
  chipStyles,
  largeChipStyles,
  microChipStyles,
  miniChipStyles,
} from "./styles";
import type { EpicChipInterface } from "./types";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export interface EpicChipRef {
  toggleCheck: () => void;
}

export const EpicChip = React.forwardRef<EpicChipRef, EpicChipInterface>(
  (
    {
      type,
      mode = "Outlined",
      titleOptions,
      radius = "Round",
      checkIcon = true,
      isDisabled = false,
      isChecked = false,
      options,
      checkedIcon,
      onChange,
    },
    ref
  ) => {
    const [checked, setChecked] = useState(false);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
      setDisabled(isDisabled);
      setChecked(isChecked);
    }, [isDisabled, isChecked]);

    useImperativeHandle(ref, () => ({
      toggleCheck: toggleCheck,
    }));

    const toggle = () => {
      LayoutAnimation.configureNext({
        duration: 500,
        create: { type: "easeInEaseOut", property: "opacity" },
        update: { type: "spring", springDamping: 0.4 },
        delete: { type: "spring", property: "opacity" },
      });
      setChecked(!checked);
      if (typeof onChange === "function") onChange(!checked);
    };

    const toggleCheck = () => toggle();

    const EpicChipTitleContent = (text: string) => {
      return (
        <Text
          style={[
            type
              ? type === "Mini"
                ? miniChipStyles.titleStyles
                : type === "Large"
                ? largeChipStyles.titleStyles
                : type === "Micro"
                ? microChipStyles.titleStyles
                : chipStyles.titleStyles
              : chipStyles.titleStyles,
            options?.titleStyles,
            {
              color:
                mode === "Solid" && options?.titleColor
                  ? checked
                    ? options.titleColor.focusColor
                    : options.titleColor.inActiveColor
                  : changeTheme(
                      mode,
                      100,
                      checked,
                      options?.backgroundColor,
                      "#5e5e5e",
                      "#fff"
                    ),
            },
          ]}
        >
          {text}
        </Text>
      );
    };

    const EpicChipContent = (type?: "Mini" | "Large" | "Micro") => {
      return (
        <View
          style={[
            type
              ? type === "Mini"
                ? titleOptions?.label
                  ? miniChipStyles.chipWrapper
                  : miniChipStyles.checkboxTransform
                : type === "Large"
                ? titleOptions?.label
                  ? largeChipStyles.chipWrapper
                  : largeChipStyles.checkboxTransform
                : type === "Micro"
                ? titleOptions?.label
                  ? microChipStyles.chipWrapper
                  : microChipStyles.checkboxTransform
                : titleOptions?.label
                ? chipStyles.chipWrapper
                : chipStyles.checkboxTransform
              : titleOptions?.label
              ? chipStyles.chipWrapper
              : chipStyles.checkboxTransform,
            {
              opacity: disabled ? 0.5 : 1,
              borderRadius:
                typeof radius === "string"
                  ? radius === "Rounded"
                    ? 15
                    : radius === "Rounded-Full"
                    ? 50
                    : 15
                  : radius,
              borderColor: changeTheme(
                mode,
                70,
                checked,
                options?.backgroundColor,
                "#d0d0d0",
                "#5e5e5e"
              ),
              backgroundColor: changeTheme(
                mode,
                10,
                checked,
                options?.backgroundColor,
                "#d0d0d0",
                "#5e5e5e"
              ),
            },
            options?.pickerStyles,
          ]}
        >
          <View
            style={[
              type
                ? type === "Mini"
                  ? miniChipStyles.chipContainer
                  : type === "Large"
                  ? largeChipStyles.chipContainer
                  : type === "Micro"
                  ? microChipStyles.chipContainer
                  : chipStyles.chipContainer
                : chipStyles.chipContainer,
            ]}
          >
            {checkIcon && checkedIcon ? (
              checkedIcon
            ) : checkIcon && checked ? (
              <Feather
                name="check"
                size={
                  type === "Mini"
                    ? 13
                    : type === "Large"
                    ? 22
                    : type === "Micro"
                    ? 10
                    : 16
                }
                color={
                  mode === "Solid" && options?.titleColor
                    ? checked
                      ? options.titleColor.focusColor
                      : options.titleColor.inActiveColor
                    : changeTheme(
                        mode,
                        100,
                        checked,
                        options?.backgroundColor,
                        "#5e5e5e",
                        "#fff"
                      )
                }
                style={{ marginRight: titleOptions?.label ? 10 : undefined }}
              />
            ) : titleOptions?.Icon &&
              React.isValidElement(titleOptions.Icon) ? (
              titleOptions.Icon
            ) : null}
            {typeof titleOptions?.label === "string"
              ? EpicChipTitleContent(titleOptions?.label)
              : React.isValidElement(titleOptions?.label)
              ? titleOptions?.label
              : EpicChipTitleContent("Unlabelled")}
          </View>
        </View>
      );
    };

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        disabled={disabled}
        onPress={toggle}
      >
        {EpicChipContent(type)}
      </TouchableOpacity>
    );
  }
);
