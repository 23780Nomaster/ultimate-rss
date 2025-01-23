import React from 'react';
import { Box, VStack, Text, Pressable } from 'native-base';
import { Linking } from 'react-native';

interface DigestItemProps {
    title: string;
    description?: string;
    link?: string;
    pubDate?: string;
}

const DigestItem: React.FC<DigestItemProps> = ({ title, description, link, pubDate }) => {
    const handlePress = () => {
        if (link) {
            Linking.openURL(link);
        }
    };

    return (
        <Pressable onPress={handlePress}>
            <Box p={4} borderBottomWidth={1} borderColor="gray.200">
                <VStack space={2}>
                    <Text fontSize="lg" fontWeight="bold">
                        {title}
                    </Text>
                    {pubDate && (
                        <Text fontSize="sm" color="gray.500">
                            {new Date(pubDate).toLocaleDateString()}
                        </Text>
                    )}
                    {description && (
                        <Text fontSize="md" numberOfLines={2}>
                            {description}
                        </Text>
                    )}
                </VStack>
            </Box>
        </Pressable>
    );
};

export default DigestItem;