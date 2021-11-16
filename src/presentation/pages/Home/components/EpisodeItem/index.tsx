import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

import {EpisodesModel} from '../../../../../domain';
import {Typography} from '../../../../components';
import {style} from './styles';

type Props = {
  episode: EpisodesModel;
  onClick: (episode: EpisodesModel) => void;
};

const EpisodeItem = ({episode, onClick}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => onClick(episode)}
      activeOpacity={0.7}
      style={style.episodeContentContainer}
    >
      <SharedElement id={`item.${episode.id}.photo`}>
        <Image
          style={style.episodeImageCarousel}
          resizeMethod="auto"
          resizeMode="cover"
          source={{
            uri: `${episode?.image?.original}?${new Date().getTime()}`,
          }}
        />
      </SharedElement>
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
