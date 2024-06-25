import React, {FC} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {PostImage as PostImageTypes} from '../../types';
import PostImage from '../PostImage';
const LastFiveDaysImages: FC<{postImages?: PostImageTypes[]}> = ({
  postImages,
}) => {
  const {container, content, title} = styles;
  return (
    <View style={container}>
      <Text style={title}>Last 5 Days</Text>
      <ScrollView style={content}>
        {postImages?.map((postImage, index) => (
          <PostImage key={index} {...postImage} />
        ))}
      </ScrollView>
    </View>
  );
};
export default LastFiveDaysImages;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  content: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 18,
    fontWeight: 'bold',
  },
});
