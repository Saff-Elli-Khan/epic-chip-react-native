# Epic React Native Chip

[![npm](https://img.shields.io/npm/l/epic-chip-react-native?style=flat-square)](https://www.npmjs.com/package/epic-chip-react-native) [![npm](https://img.shields.io/badge/types-included-blue?style=flat-square)](https://www.npmjs.com/package/epic-chip-react-native) [![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.io/)

An elegant & fully customizable chip 🚀

![Epic Chip React Native](https://epicframework.000webhostapp.com/epic-chip.png)

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

## Important
Please install `React Native Vector Icons` `npm i react-native-vector-icons @types/react-native-vector-icons`.

## Installation

Use npm or yarn to install the library

NPM: `npm i epic-chip-react-native`

Yarn: `yarn add epic-chip-react-native`

```tsx
import { EpicChip } from 'epic-chip-react-native';

const App = () => {
  return <EpicChip labelOptions={{label: "Epic Chip"}} />;
}

export detault App;

```


## Using Ref#

You can also toggle chip using ref hook.

```tsx
import { EpicChip, EpicChipRef } from 'epic-chip-react-native';

const App = () => {

const EpicChipRef = useRef<EpicChipRef>(null);

  return (
    <>
        <EpicChip 
        ref={EpicChipRef} 
        labelOptions={{label: "Epic Chip"}} 
        onChange={e => console.log(e)} // print boolean;
        />
        
        </View style={{marginVertical: 30}}>
            <Button 
            onPress={()=> EpicChipRef.current?.toggleCheck()}>
            Toggle Chip
            </Button>
        </View> 
        
    </>
  );
}

export detault App;
```

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
 `ref`              | ref hook `toggleCheck() // void function `                                                           | NO       |                                                                                               |     |

## Author

- Abdullah Khan
- Saif Ali Khan

## License

[MIT](./LICENSE)

<div align="center">

Liked the Component? 😇

---
