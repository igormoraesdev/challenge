import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MotiView} from 'moti';
import React from 'react';
import {Image, View} from 'react-native';
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
    <View style={style.container}>
      <SharedElement id={`item.${item.id}.photo`}>
        <Image
          resizeMethod="auto"
          resizeMode="cover"
          style={style.image}
          source={{uri: item?.image?.original}}
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
          <Typography fontFamily="roboto" familyType="bold" size="span">
            Summary:
          </Typography>
          <Typography style={style.summaryText} familyType="bold" size="p">
            {item?.summary?.replace(/<p>/g, '').replace('</p>', '')}
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
          <Row style={style.row}>
            <Typography fontFamily="roboto" familyType="bold" size="span">
              Episode:
            </Typography>
            <Typography style={style.textValue} familyType="medium" size="p">
              {item?.name}
            </Typography>
          </Row>
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
          <Row>
            <Typography fontFamily="roboto" familyType="bold" size="span">
              Airdate:
            </Typography>
            <Typography style={style.textValue} familyType="medium" size="p">
              {formatDate(item?.airdate)}
            </Typography>
          </Row>
        </MotiView>
      </View>
    </View>
  );
};

export default Details;
