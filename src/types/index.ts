import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type PostImage = {
  date?: string;
  explanation?: string;
  hdurl?: string;
  media_type?: string;
  service_version?: string;
  title?: string;
  url?: string;
};

export type RootStackParamList = {
  Home: undefined;
  Detail: PostImage;
};

export type PostImageNavigationProps = NativeStackNavigationProp<RootStackParamList, 'Detail'>;
