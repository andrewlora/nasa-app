import React, {FC} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  PostImageNavigationProps,
  PostImage as PostImageTypes,
} from '../../types';
import {useNavigation} from '@react-navigation/native';
const PostImage: FC<PostImageTypes> = ({title, date, url, explanation}) => {
  const {navigate} = useNavigation<PostImageNavigationProps>();
  const {container, buttonContainer, titleStyle, dateStyle} = styles;
  const handleViewPress = () => {
    navigate('Detail', {title, date, url, explanation});
  };
  return (
    <View style={container}>
      <Text style={titleStyle}>{title}</Text>
      <Text style={dateStyle}>{date}</Text>
      <View style={buttonContainer}>
        <Button title="View" onPress={handleViewPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(18, 39, 113, 225)',
    borderRadius: 15,
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
