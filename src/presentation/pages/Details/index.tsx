import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MotiView} from 'moti';
import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

import {RootStackParamList} from '../../../main/routes/navigator';
import {Row, Typography} from '../../components';
import {style} from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({route}: Props) => {
  const {item} = route?.params;

  const formatDate = (date: string) => {
    const compressedDate = new Date(date);
    const day = compressedDate.getDate();
    const month = compressedDate.getMonth() + 1;
    const year = compressedDate.getFullYear();
    return `${year}/${month <= 9 ? '0' + month : month}/${
      day <= 9 ? '0' + day : day
    }`;
  };

  return (
    <ScrollView style={style.container}>
      <SharedElement id={`item.${item.id}.photo`}>
        <Image
          resizeMethod="auto"
          resizeMode="cover"
          style={style.image}
          source={{
            uri: item?.image?.original,
          }}
        />
      </SharedElement>
      <View style={style.content}>
        <MotiView
          from={{opacity: 0, translateY: 30}}
          animate={{opacity: 1, translateY: 0}}
          transition={{
            type: 'timing',
            duration: 300,
            delay: 300,
          }}
        >
          <Typography style={style.label} familyType="medium" size="span">
            Episode:
          </Typography>
          <Typography familyType="bold" size="p">
            {item?.name}
          </Typography>
        </MotiView>
        <MotiView
          from={{opacity: 0, translateY: 30}}
          animate={{opacity: 1, translateY: 0}}
          transition={{
            type: 'timing',
            duration: 300,
            delay: 600,
          }}
        >
          <Typography style={style.label} familyType="medium" size="span">
            Summary:
          </Typography>
          <Typography familyType="bold" size="p">
            {item?.summary
              ? item?.summary?.replace(/<p>/g, '').replace('</p>', '')
              : 'Not found.'}
          </Typography>
        </MotiView>
        <MotiView
          from={{opacity: 0, translateY: 30}}
          animate={{opacity: 1, translateY: 0}}
          transition={{
            type: 'timing',
            duration: 300,
            delay: 900,
          }}
        >
          <Typography style={style.label} familyType="medium" size="span">
            Airdate:
          </Typography>
          <Typography familyType="bold" size="p">
            {formatDate(item?.airdate)}
          </Typography>
        </MotiView>
      </View>
    </ScrollView>
  );
};

export default Details;
