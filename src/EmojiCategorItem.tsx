import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

interface EmojiCategorItem {
  item: {
    name: string;
    symbol: string;
  };
  onPress(): void;
  activeCategory: any;
  tabSize: number;
  theme: any;
}

const EmojiCategorItem = ({
  item,
  onPress,
  activeCategory,
  tabSize = 50,
  theme,
}: EmojiCategorItem) => {
  if (item.name !== 'All') {
    return (
      <TouchableOpacity onPress={onPress} style={{ width: tabSize, height: tabSize }}>
        <View
          key={item.name}
          style={{
            flex: 1,
            width: tabSize,
            height: tabSize,
            borderColor: item === activeCategory ? theme : '#EEEEEE',
            borderBottomWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              paddingBottom: 8,
              fontSize: tabSize - 24,
            }}
          >
            {item.symbol}
          </Text>
        </View>
      </TouchableOpacity>
    );
  } else {
    return <View />;
  }
};

export default EmojiCategorItem;
