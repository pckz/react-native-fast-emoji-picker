# react-native-fast-emoji-picker

![Image of react-native-fast-emoji-picker](./assets/1.png)

# Installation

```
yarn add @pckz/react-native-fast-emoji-picker
```


#

```javascript
import EmojiPicker from "react-native-fast-emoji-picker";
```

### You need to have [reanimated](https://github.com/software-mansion/react-native-reanimated) installed.

# Demo

![Image of react-native-fast-emoji-picker](./assets/2.gif)

# Usage

```javascript
import EmojiPicker from "@pckz/react-native-fast-emoji-picker";
```

```jsx
<EmojiSelector
  onEmojiSelected={(emoji) => console.log(emoji)}
  columns={6}
  showSectionTitles
  showSearchBar
  showTabs
/>
```

## Props

| Prop              | Type     | Default          | Description                                              |
| ----------------- | -------- | ---------------- | -------------------------------------------------------- |
| onEmojiSelected   | _func_   |                  | Function called when a user selects an Emoji             |  |
| showTabs          | _bool_   | `true`           | Toggle the tabs on or off                                |
| showSearchBar     | _bool_   | `true`           | Toggle the searchbar on or off                           |
| showSectionTitles | _bool_   | `true`           | Toggle the section title elements                        |  |
| columns           | _number_ | `6`              | Number of columns accross                                |
| placeholder       | _string_ | `"Search Emoji"` | A string placeholder when there is no text in text input |


# Debug

### Error:

`TypeError: null is not an object (evaluating '\_ReanimatedModule.default.createNode')`

### Try

```
yarn add react-native-reanimated
```


### Error:

`LayoutException: RecyclerListView needs to have a bounded size. Currently height or, width is 0.Consider adding style={{flex:1}} or, fixed dimensions`

### Try

Setting `flex:1` all Parent Views or Add fixed Height

# Credit

[react-native-emoji-selector](https://github.com/arronhunt/react-native-emoji-selector)
