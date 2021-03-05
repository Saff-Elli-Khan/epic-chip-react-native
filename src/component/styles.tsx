import { StyleSheet } from "react-native";

// Default Styles of Epic Chip
export const chipStyles = StyleSheet.create({
  chipWrapper: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1.4,
    borderRadius: 15,
  },
  chipContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  titleStyles: {
    fontWeight: "500",
  },
  // CheckBox Transformation Styles
  checkboxTransform: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1.4,
    borderRadius: 50,
    minWidth: 38,
  },
});

//Mini Chip Styles
export const miniChipStyles = StyleSheet.create({
  chipWrapper: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1.4,
    borderRadius: 50,
  },
  chipContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  titleStyles: {
    fontWeight: "500",
    fontSize: 11,
  },
  // CheckBox Transformation Styles
  checkboxTransform: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderWidth: 1.4,
    borderRadius: 50,
    minWidth: 28,
  },
});

//Large Chip Styles
export const largeChipStyles = StyleSheet.create({
  chipWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderWidth: 1.4,
  },
  chipContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  titleStyles: {
    fontWeight: "500",
    fontSize: 18,
  },
  // CheckBox Transformation Styles
  checkboxTransform: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderWidth: 1.4,
    borderRadius: 100,
    minWidth: 58,
  },
});

//Micro Chip Styles
export const microChipStyles = StyleSheet.create({
  chipWrapper: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderWidth: 0.7,
    borderRadius: 50,
  },
  chipContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  titleStyles: {
    fontWeight: "500",
    fontSize: 8,
  },
  // CheckBox Transformation Styles
  checkboxTransform: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderWidth: 1.4,
    borderRadius: 50,
    minWidth: 23,
  },
});
