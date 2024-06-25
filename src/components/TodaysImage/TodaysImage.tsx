import React, {FC} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {PostImage} from '../../types';
const TodaysImage: FC<PostImage> = ({date, title, url}) => {
  const {container, buttonContainer, image, titleStyle, dateStyle} = styles;
  return (
    <View style={container}>
      <Image source={{uri: url}} style={image} />
      <Text style={titleStyle}>{title}</Text>
      <Text style={dateStyle}>{date}</Text>
      <View style={buttonContainer}>
        <Button title="View" color="#fff" onPress={() => {}} />
      </View>
    </View>
  );
};
export default TodaysImage;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c449d',
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 190,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#fff',
  },
  buttonContainer: {
    marginVertical: 12,
    alignSelf: 'flex-end',
  },
  titleStyle: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 12,
    fontWeight: 'bold',
  },
  dateStyle: {
    color: '#fff',
    fontSize: 20,
  },
});
