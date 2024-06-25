import React, {FC} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {PostImage as PostImageTypes} from '../../types';
const PostImage: FC<PostImageTypes> = ({title, date}) => {
  const {container, buttonContainer, titleStyle, dateStyle} = styles;
  return (
    <View style={container}>
      <Text style={titleStyle}>{title}</Text>
      <Text style={dateStyle}>{date}</Text>
      <View style={buttonContainer}>
        <Button title="View" color="#fff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(18, 39, 113, 225)',
    borderRadius: 3,
    marginBottom: 12,
    padding: 16,
  },
  titleStyle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  dateStyle: {
    color: '#fff',
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
});

export default PostImage;
