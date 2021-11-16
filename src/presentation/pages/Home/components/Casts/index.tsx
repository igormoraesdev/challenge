import React from 'react';
import {FlatList, Image, View} from 'react-native';

import {Typography} from '../../../../components';
import {useAppSelector} from '../../../../hooks/use-app-selector';
import {style} from './styles';

const Casts = () => {
  const {castList} = useAppSelector(({tvShowSlice}) => tvShowSlice);
  return (
    <View style={style.carouselContainer}>
      <Typography style={style.carouselTitle} familyType="medium" size="p">
        Casts:
      </Typography>
      <FlatList
        data={castList}
        keyExtractor={(item) => item.character.name}
        decelerationRate="normal"
        showsHorizontalScrollIndicator={false}
        horizontal
        ItemSeparatorComponent={() => <View style={{width: 20}} />}
        renderItem={({item}) => (
          <View style={style.carouselContentContainer}>
            <Image
              style={style.imageCarousel}
              resizeMethod="auto"
              resizeMode="cover"
              source={{
                uri: item?.character?.image?.original,
              }}
            />
            <Typography
              familyType="bold"
              size="span"
              style={style.carouselContentTitle}
            >
              {item?.character?.name}
            </Typography>
          </View>
        )}
      />
    </View>
  );
};

export default Casts;
