# Epic React Native Chip

[![npm](https://img.shields.io/npm/l/epic-chip-react-native?style=flat-square)](https://www.npmjs.com/package/epic-chip-react-native) [![npm](https://img.shields.io/badge/types-included-blue?style=flat-square)](https://www.npmjs.com/package/epic-chip-react-native) [![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.io/)

An elegant & fully customizable chip 🚀



---

## Features

- 🌟 Full customizable.
- Smooth & faster animation.
- Support `IOS` and, `Android`.
- Compatible with `Expo`.
- Written in `TypeScript`.

## Getting Started

For `npm`
Type `npm i epic-chip-react-native` to install it on your project.

For `yarn` do `yarn add epic-chip-react-native`.

## Note
Please install `React Native Vector Icons` `npm i react-native-vector-icons @types/react-native-vector-icons`.

## Usage

`import { EpicChip } from "epic-chip-react-native";`

//Load Component

`<EpicChip labelOptions={{label: "Epic Chip"}} />` & Done 😉

## Props

| name                 | description                                                                                         | required | type                                                                                                      | default  |
| -------------------- | --------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------- | -------- |
| `labelOptions`             | Chip label options includes [`label`, `Icon`].                         | NO       | [`string` or `JSX Element`]                                                                     |  |
| `options`               | Chip options, [`chipStyles`, `labelStyles`, `backgroundColor`, `labelColor`]                            | NO      | `chipStyles`: `StyleProp<ViewStyle>`, `labelStyles`: `StyleProp<TextStyle>`, `backgroundColor`: {`focusColor`: `#hexCode`, `inActiveColor`: `#hexCode`}, `labelColor`: {`focusColor`: `#hexCode`, `inActiveColor`: `#hexCode`}   |                                                                   |          |
| `type`              | Chip type    | NO       | `Mini`, `Micro`, `Large`                                                                                    |          |
| `mode`           | Chip mode.                               | NO       | `Outlined`, `Solid`                                                                                                    |          `Outlined`|
| `checkIcon`             | If you want to hide the checkmark icon, just make it false.                        | NO       | `boolean` |    false      |
| `radius`     | Border Radius of the chip. | NO       | number |                                                               15    |       |
| `isChecked`     | you can specify a default value. | NO       | `boolean`|                                                                  |          |
| `isDisabled` | For disabling the chip`.                  | NO       | 'boolean'                                                                                          |   false       |
| `checkedIcon`           | Changing the default check icon`.                               | NO       | React.ReactNode                                                                                                    |          |
| `onChange`              | Callback on item change                                                            | NO       | (value: boolean) => void                                                                                                   |     |

## Author

- Abdullah Khan
- Saif Ali Khan

## License

[MIT](./LICENSE)

<div align="center">

Liked the Component? 😇

---
