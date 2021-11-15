import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import {EpisodesModel} from '../../../../../domain';
import {Typography} from '../../../../components';
import {style} from './styles';

type Props = {
  episode: EpisodesModel;
  onClick: () => void;
};

const EpisodeItem = ({episode, onClick}: Props) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      activeOpacity={0.7}
      style={style.episodeContentContainer}
    >
      <Image
        style={style.episodeImageCarousel}
        resizeMethod="auto"
        resizeMode="cover"
        source={{
          uri: episode?.image?.original,
        }}
      />
      <View style={style.episodeContent}>
        <Typography
          size="p"
          fontFamily="roboto"
          familyType="bold"
          style={style.episodeTitle}
        >
          {`EP.${episode?.number} - ${episode?.name}`}
        </Typography>
        <Typography size="span" familyType="medium">
          {episode?.summary
            ? `${episode?.summary
                ?.replace(/<p>/g, '')
                .substr(0, 40)}... - See more`
            : 'No Description'}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

export default EpisodeItem;
