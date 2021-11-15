import React from 'react';
import {Text, View, ImageBackground, ScrollView} from 'react-native';

import {style} from './styles';

const Home = () => {
  return (
    <ScrollView style={style.scroll}>
      <ImageBackground
        resizeMethod="auto"
        imageStyle={style.image}
        resizeMode="cover"
        style={style.imageContainer}
        source={{
          uri: 'https://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg',
        }}
      >
        <Text>Teste</Text>
      </ImageBackground>
    </ScrollView>
  );
};

export default Home;
