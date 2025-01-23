import React from 'react';
import { Box, VStack, HStack, Text, Switch, Divider, Icon, Pressable } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export const SettingsScreen = () => {
  return (
    <Box flex={1} bg="gray.50">
      <VStack space={4} p={4}>
        <Box bg="white" rounded="md" p={4}>
          <VStack space={4}>
            <HStack justifyContent="space-between" alignItems="center">
              <Text>深色模式</Text>
              <Switch />
            </HStack>
            <Divider />
            <HStack justifyContent="space-between" alignItems="center">
              <Text>通知提醒</Text>
              <Switch />
            </HStack>
          </VStack>
        </Box>

        <Box bg="white" rounded="md" p={4}>
          <VStack space={4}>
            <Pressable>
              <HStack justifyContent="space-between" alignItems="center">
                <Text>导出数据</Text>
                <Icon as={Ionicons} name="chevron-forward" />
              </HStack>
            </Pressable>
            <Divider />
            <Pressable>
              <HStack justifyContent="space-between" alignItems="center">
                <Text>清除缓存</Text>
                <Icon as={Ionicons} name="chevron-forward" />
              </HStack>
            </Pressable>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default SettingsScreen;
