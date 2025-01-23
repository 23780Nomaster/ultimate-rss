import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Feed } from '../../types';
import { parseRssFeed } from '../../services/rssService';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Feed {
    id: string;
    url: string;
    title: string;
    lastUpdated?: string;
}

interface FeedsState {
    items: Feed[];
    loading: boolean;
    error: string | null;
}

const initialState: FeedsState = {
    items: [],
    loading: false,
    error: null,
};

export const fetchFeeds = createAsyncThunk(
  'feeds/fetchFeeds',
  async () => {
    const stored = await AsyncStorage.getItem('feeds');
    return stored ? JSON.parse(stored) : [];
  }
);

export const addNewFeed = createAsyncThunk(
  'feeds/addNewFeed',
  async (url: string) => {
    const feed = await parseRssFeed(url);
    return feed;
  }
);

const feedsSlice = createSlice({
    name: 'feeds',
    initialState,
    reducers: {
        addFeed: (state, action: PayloadAction<Feed>) => {
            state.items.push(action.payload);
        },
        removeFeed: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(feed => feed.id !== action.payload);
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchFeeds.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchFeeds.fulfilled, (state, action) => {
            state.items = action.payload;
            state.loading = false;
          })
          .addCase(addNewFeed.fulfilled, (state, action) => {
            state.items.push(action.payload);
            AsyncStorage.setItem('feeds', JSON.stringify(state.items));
          });
      },
});

export const { addFeed, removeFeed, setLoading, setError } = feedsSlice.actions;
export default feedsSlice.reducer;