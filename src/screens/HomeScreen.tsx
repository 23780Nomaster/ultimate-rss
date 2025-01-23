import React from 'react';
import { RefreshControl } from 'react-native';
import { Box, FlatList, Fab, Icon, Input, HStack } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { FeedItem } from '../components/FeedItem';
import { CategoryTabs } from '../components/CategoryTabs';
import type { Feed } from '../types';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');
  const navigation = useNavigation();

  const handleRefresh = React.useCallback(() => {
    setRefreshing(true);
    // TODO: 实现刷新逻辑
    setTimeout(() => setRefreshing(false), 1000);
  }, []);

  const handleFeedPress = (feed: Feed) => {
    // TODO: 导航到订阅源详情页
  };

  return (
    <Box flex={1} bg="gray.50">
      <HStack p={4} space={2} bg="white">
        <Input
          flex={1}
          placeholder="搜索订阅源..."
          value={searchText}
          onChangeText={setSearchText}
          InputLeftElement={
            <Icon as={Ionicons} name="search" size={5} ml={2} color="gray.400" />
          }
        />
      </HStack>
      
      <CategoryTabs />
      
      <FlatList
        data={[] as Feed[]}
        renderItem={({ item }) => (
          <FeedItem feed={item} onPress={handleFeedPress} />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        }
      />
      
      <Fab
        renderInPortal={false}
        shadow={2}
        size="sm"
        icon={<Icon color="white" as={Ionicons} name="add" size="sm" />}
        onPress={() => {
          // TODO: 打开添加订阅源modal
        }}
      />
    </Box>
  );
};

export default HomeScreen;