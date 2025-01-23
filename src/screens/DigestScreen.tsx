import React from 'react';
import { RefreshControl } from 'react-native';
import { Box, FlatList, SegmentedControl, Text, VStack } from 'native-base';
import type { Digest } from '../types';

export const DigestScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <Box flex={1} bg="gray.50">
      <Box p={4} bg="white">
        <SegmentedControl
          values={['每日摘要', '每周精选']}
          selectedIndex={selectedIndex}
          onChange={(index: number) => setSelectedIndex(index)}
        />
      </Box>
      
      <FlatList
        data={[] as Digest[]}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <Box bg="white" p={4} rounded="md" shadow={1} mb={4}>
            <VStack space={2}>
              <Text fontSize="lg" fontWeight="bold">{item.title}</Text>
              <Text fontSize="sm" color="gray.500">
                {new Date(item.createdAt).toLocaleDateString()}
              </Text>
            </VStack>
          </Box>
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => setRefreshing(false)}
          />
        }
      />
    </Box>
  );
};

export default DigestScreen;
