import * as rssParser from 'react-native-rss-parser';
import type { FeedItem } from 'react-native-rss-parser';
import { Feed, Article } from '../types';
import { nanoid } from '@reduxjs/toolkit';

export class RssService {
    constructor() {}

    /**
     * Fetches RSS feed from a given URL
     * @param url The URL of the RSS feed
     * @returns Promise containing the parsed RSS feed data
     */
    async fetchRssFeed(url: string): Promise<any> {
        try {
            const response = await fetch(url);
            const data = await response.text();
            return data;
        } catch (error) {
            throw new Error(`Failed to fetch RSS feed: ${error}`);
        }
    }

    /**
     * Parses RSS feed content
     * @param content The raw RSS feed content
     * @returns Parsed RSS feed data
     */
    parseRssFeed(content: string): any {
        // TODO: Implement RSS parsing logic
        throw new Error('Not implemented');
    }
}

export async function parseRssFeed(url: string): Promise<Feed> {
  try {
    const response = await fetch(url);
    const responseData = await response.text();
    const feed = await rssParser.parse(responseData);
    
    return {
      id: nanoid(),
      title: feed.title || '未命名订阅源',
      url: url,
      category: 'default',
      lastFetched: new Date().toISOString()
    };
  } catch (error) {
    throw new Error('无法解析RSS源');
  }
}

export async function fetchArticles(feed: Feed): Promise<Article[]> {
  try {
    const response = await fetch(feed.url);
    const responseData = await response.text();
    const parsed = await rssParser.parse(responseData);
    
    return parsed.items.map((item: FeedItem) => ({
      id: nanoid(),
      feedId: feed.id,
      title: item.title || '无标题',
      content: item.description || '',
      url: item.links[0]?.url || '',
      publishDate: item.published || new Date().toISOString(),
      isRead: false
    }));
  } catch (error) {
    throw new Error('获取文章失败');
  }
}