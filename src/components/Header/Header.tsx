import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
const Header = () => {
  const {container, leftContainer, rightContainer, title, image} = styles;
  return (
    <View style={container}>
      <View style={leftContainer}>
        <Text style={title}>Explore</Text>
      </View>
      <View style={rightContainer}>
        <Image source={require('../../assets/nasa-logo.png')} style={image} />
      </View>
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
  image: {
    width: 60,
    height: 60,
  },
});
