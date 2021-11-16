import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {View, Image, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';

import {EpisodesModel} from '../../../domain';
import {RootStackParamList} from '../../../main/routes/navigator';
import {
  fetchCasts,
  fetchEpisodes,
  fetchSeasons,
  fetchShowInfo,
} from '../../../store/slices/tvshow/api';
import {useAppSelector} from '../../hooks/use-app-selector';
import {EpisodeList, Casts, Info, SeasonList} from './components';
import {style} from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: Props) => {
  const {showInfo} = useAppSelector(({tvShowSlice}) => tvShowSlice);
  const [selectedSeason, setSelectedSeason] = useState<number>(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShowInfo());
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
        style={style.image}
        source={{
          uri: showInfo?.image?.original,
        }}
      />
      <View style={style.containerContent}>
        <Info />
        <Casts />
        <SeasonList selectedSeason={selectedSeason} onClick={handleSeason} />
        <EpisodeList onClick={handleNavigate} selectedSeason={selectedSeason} />
      </View>
    </ScrollView>
  );
};

export default Home;
