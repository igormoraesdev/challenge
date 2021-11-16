import {MotiView} from 'moti';
import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {Row, Typography} from '../../../../components';
import {useAppSelector} from '../../../../hooks/use-app-selector';
import {theme} from '../../../../styles';
import {style} from './styles';

Icon.loadFont();

const Info = () => {
  const {showInfo} = useAppSelector(({tvShowSlice}) => tvShowSlice);
  const formatGenres = (genres: string[] | undefined) => {
    const splitGenre = genres?.join(' ● ');
    return splitGenre;
  };

  return (
    <MotiView
      from={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{
        type: 'timing',
        duration: 500,
      }}
    >
      <Typography familyType="medium" size="h1" style={style.title}>
        {showInfo?.name ?? ''}
      </Typography>
      <Row justifyContent="space-between">
        <View>
          <Typography familyType="medium" size="p" style={style.label}>
            Type:
          </Typography>
          <Typography familyType="bold" style={style.labelText}>
            {showInfo?.type ?? ''}
          </Typography>
        </View>
        <Row>
          <MotiView
            from={{rotate: '0deg'}}
            animate={{rotate: '360deg'}}
            transition={{
              loop: true,
              type: 'timing',
              duration: 1000,
            }}
          >
            <Icon name="star" size={20} color={theme.colors.yellow} />
          </MotiView>
          <Typography size="h4" familyType="bold" style={style.rating}>
            {showInfo?.rating?.average ?? 0}
          </Typography>
        </Row>
      </Row>
      <View style={{marginVertical: 16}}>
        <Typography familyType="medium" size="p" style={style.label}>
          Genres:
        </Typography>
        <Typography familyType="bold" style={style.labelText}>
          {formatGenres(showInfo?.genres) ?? ''}
        </Typography>
      </View>
    </MotiView>
  );
};

export default Info;
