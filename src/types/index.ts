export interface Feed {
  id: string;
  title: string;
  url: string;
  category: string;
  lastFetched?: string;
}

export interface Article {
  id: string;
  feedId: string;
  title: string;
  content: string;
  url: string;
  publishDate: string;
  isRead: boolean;
}

export interface Digest {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  articles: string[]; // Article IDs
  type: 'daily' | 'weekly';
}

export interface Settings {
  theme: 'light' | 'dark';
  digestSettings: {
    frequency: 'daily' | 'weekly';
    time: string;
    categories: string[];
  };
  notifications: boolean;
}
