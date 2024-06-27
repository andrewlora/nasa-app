import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';
import Header from '../../components/Header';
const Detail = () => {
  const {
    params: {title, url, explanation, date},
  } = useRoute<NativeStackScreenProps<RootStackParamList, 'Detail'>['route']>();
  const {container, content, explanationContainer, image} = styles;
  return (
    <View style={container}>
      <Header />
      <View style={content}>
        <Image source={{uri: url}} style={image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView style={explanationContainer}>
          <Text style={styles.explanation}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
};
export default Detail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(7, 26, 93, 255)',
  },
  content: {
    flex: 1,
    backgroundColor: '#2c449d',
    borderRadius: 32,
    marginVertical: 24,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  explanation: {
    color: '#fff',
    fontSize: 16,
  },
  explanationContainer: {
    marginVertical: 16,
  },
  image: {
    width: '100%',
    height: '50%',
    borderRadius: 32,
    marginBottom: 16,
    borderColor: '#fff',
    borderWidth: 2,
  },
  date: {
    color: '#fff',
    fontSize: 16,
  },
});
