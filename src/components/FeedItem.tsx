import React from 'react';
import { Box, HStack, Text, Pressable } from 'native-base';
import type { Feed } from '../types';

interface FeedItemProps {
  feed: Feed;
  onPress?: (feed: Feed) => void;
}

export const FeedItem: React.FC<FeedItemProps> = ({ feed, onPress }) => {
  return (
    <Pressable onPress={() => onPress?.(feed)}>
      <Box p={4} borderBottomWidth={1} borderColor="gray.200" bg="white">
        <HStack justifyContent="space-between" alignItems="center">
          <Box flex={1}>
            <Text fontSize="md" fontWeight="medium">{feed.title}</Text>
            <Text fontSize="sm" color="gray.500">{feed.category}</Text>
          </Box>
          <Text fontSize="xs" color="gray.400">
            {feed.lastFetched ? new Date(feed.lastFetched).toLocaleDateString() : '未同步'}
          </Text>
        </HStack>
      </Box>
    </Pressable>
  );
};