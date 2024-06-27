import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../../components/Header';
import getAPOD from '../../api/nasa';
import TodaysImage from '../../components/TodaysImage';
import {PostImage} from '../../types';
import {format, sub} from 'date-fns';
import LastFiveDaysImages from '../../components/LastFiveDaysImages/LastFiveDaysImages';
const Home = () => {
  const [todaysImage, setTodaysImage] = useState<PostImage>({});
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([]);
  useEffect(() => {
    loadTodaysImage();
    loadLastFiveDaysImages();
  }, []);

  const loadTodaysImage = async () => {
    try {
      const data = await getAPOD();
      setTodaysImage(data);
    } catch (error) {
      console.error("Error loading today's image", error);
    }
  };

  const loadLastFiveDaysImages = async () => {
    try {
      const date = new Date();
      const todaysDate = format(date, 'yyyy-MM-dd');
      const fiveDaysAgo = format(sub(date, {days: 5}), 'yyyy-MM-dd');
      const data = await getAPOD(
        `&start_date=${fiveDaysAgo}&end_date=${todaysDate}`,
      );
      setLastFiveDaysImages(data);
    } catch (error) {
      console.error('Error loading last 5 days images', error);
    }
  };

  const {container} = styles;
  return (
    <View style={container}>
      <Header />
      <TodaysImage {...todaysImage} />
      <LastFiveDaysImages postImages={lastFiveDaysImages} />
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(7, 26, 93, 255)',
  },
});
