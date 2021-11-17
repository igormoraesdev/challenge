import {MotiView} from 'moti';
import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

import {EpisodesModel} from '../../../../../domain';
import {Typography} from '../../../../components';
import {style} from './styles';

type Props = {
  selectedSeason: number;
  episodesList: EpisodesModel[];
  onClick: (episode: EpisodesModel) => void;
};

const EpisodeList = ({selectedSeason, episodesList, onClick}: Props) => {
  return (
    <View testID="episode">
      <Typography style={style.episodeText} familyType="medium" size="p">
        Episodes:
      </Typography>
      {episodesList
        ?.filter((episode) => episode?.season === selectedSeason)
        ?.map((episode, index) => (
          <MotiView
            from={{
              opacity: 0,
              translateX: -100,
            }}
            animate={{
              opacity: 1,
              translateX: 0,
            }}
            transition={{
              delay: index * 100,
              duration: 300,
              type: 'timing',
            }}
            key={episode?.id}
          >
            <TouchableOpacity
              testID="episode-button"
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
                  size="span"
                  familyType="medium"
                  style={style.episodeTitle}
                >
                  {`EP.${episode?.number} - ${episode?.name}`}
                </Typography>
                <Typography size="span" familyType="bold">
                  {episode?.summary
                    ? `${episode?.summary
                        ?.replace(/<p>/g, '')
                        .substr(0, 40)}... - See more`
                    : 'No Description'}
                </Typography>
              </View>
            </TouchableOpacity>
          </MotiView>
        ))}
    </View>
  );
};

export default EpisodeList;
