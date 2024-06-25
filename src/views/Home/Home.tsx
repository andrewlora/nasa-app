import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../../components/Header';
import getAPOD from '../../api/nasa';
import TodaysImage from '../../components/TodaysImage';
import {PostImage} from '../../types';
const Home = () => {
  const [todaysImage, setTodaysImage] = useState<PostImage>({});
  useEffect(() => {
    loadTodaysImage();
  }, []);

  const loadTodaysImage = async () => {
    try {
      const data = await getAPOD('&count=1');
      setTodaysImage(data[0]);
    } catch (error) {
      console.error("Error loading today's image", error);
    }
  };
  const {container} = styles;
  return (
    <View style={container}>
      <Header />
      <TodaysImage {...todaysImage} />
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
