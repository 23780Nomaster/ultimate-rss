
export type RootStackParamList = {
  Home: undefined;
  Digests: undefined;
  Settings: undefined;
  FeedDetail: { feedId: string };
  AddFeed: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}