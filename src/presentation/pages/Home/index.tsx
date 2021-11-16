import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MotiView} from 'moti';
import React, {useEffect, useState} from 'react';
import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';

import {EpisodesModel} from '../../../domain';
import {RootStackParamList} from '../../../main/routes/navigator';
import {
  fetchCasts,
  fetchEpisodes,
  fetchSeasons,
} from '../../../store/slices/tvshow/api';
import {Row, Typography} from '../../components';
import {useAppSelector} from '../../hooks/use-app-selector';
import {theme} from '../../styles';
import {EpisodeItem} from './components';
import Casts from './components/Casts';
import {style} from './styles';

Icon.loadFont();

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: Props) => {
  const {episodesList, seasonsList} = useAppSelector(
    ({tvShowSlice}) => tvShowSlice,
  );
  const [selectedSeason, setSelectedSeason] = useState<number>(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEpisodes());
    dispatch(fetchCasts());
    dispatch(fetchSeasons());
  }, []);

  const handleNavigate = (episode: EpisodesModel) => {
    navigation?.navigate('Details', {item: episode});
  };

  const handleSeason = (seasonNumber: number) => {
    setSelectedSeason(seasonNumber);
  };

  return (
    <ScrollView style={style.scroll}>
      <Image
        resizeMethod="auto"
        resizeMode="cover"
        style={style.imageContainer}
        source={{
          uri: 'https://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg',
        }}
      />
      <View style={style.containerContent}>
        <MotiView
          from={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{
            type: 'timing',
            duration: 500,
          }}
        >
          <Typography familyType="medium" size="h1" style={style.title}>
            PowerPuff Girls
          </Typography>
          <Row justifyContent="space-between">
            <View>
              <Typography familyType="medium" size="p" style={style.label}>
                Type:
              </Typography>
              <Typography familyType="bold" style={style.labelText}>
                Animation
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
                5.28
              </Typography>
            </Row>
          </Row>
          <View style={{marginVertical: 16}}>
            <Typography familyType="medium" size="p" style={style.label}>
              Genres:
            </Typography>
            <Typography familyType="bold" style={style.labelText}>
              Comedy ● Action ● Science-Fiction
            </Typography>
          </View>
        </MotiView>
        {/* <View>
          <Typography familyType="medium" size="p">
            Seasons:
          </Typography>
          <MotiView
            from={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
              type: 'timing',
              duration: 500,
              delay: 500,
            }}
            style={style.seasonTitleContainer}
          >
            {seasonsList?.map((season) => (
              <TouchableOpacity
                key={season?.id}
                onPress={() => handleSeason(season?.number)}
                activeOpacity={0.7}
              >
                <MotiView
                  animate={{
                    backgroundColor:
                      season.number === selectedSeason
                        ? theme.colors.blue
                        : 'transparent',
                  }}
                  transition={{
                    type: 'timing',
                    duration: 300,
                  }}
                  style={style.seasonButton}
                >
                  <Typography size="h3" familyType="regular">
                    {season?.number}
                  </Typography>
                </MotiView>
              </TouchableOpacity>
            ))}
          </MotiView>
          <Typography familyType="medium" size="p" style={style.episodeLabel}>
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
                  delay: index * 10,
                  duration: 300,
                  type: 'timing',
                }}
                key={episode?.id}
              >
                <EpisodeItem onClick={handleNavigate} episode={episode} />
              </MotiView>
            ))}
        </View> */}
      </View>
      <Casts />
    </ScrollView>
  );
};

export default Home;
