import React from 'react';
import { ScrollView } from 'react-native';
import { Button, HStack } from 'native-base';

const categories = ['全部', '科技', '新闻', '博客', '其他'];

export const CategoryTabs = () => {
  const [selected, setSelected] = React.useState('全部');

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <HStack space={2} p={2}>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selected === category ? "solid" : "outline"}
            onPress={() => setSelected(category)}
            size="sm"
          >
            {category}
          </Button>
        ))}
      </HStack>
    </ScrollView>
  );
};
