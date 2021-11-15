import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MotiView} from 'moti';
import React, {useEffect, useState} from 'react';
import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';

import {EpisodesModel} from '../../../domain';
import {RootStackParamList} from '../../../main/routes/navigator';
import {fetchEpisodes} from '../../../store/slices/tvshow/api';
import {Row, Typography} from '../../components';
import {useAppSelector} from '../../hooks/use-app-selector';
import {theme} from '../../styles';
import {EpisodeItem} from './components';
import {style} from './styles';

Icon.loadFont();

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: Props) => {
  const {episodesList} = useAppSelector(({tvShowSlice}) => tvShowSlice);
  const [seasons] = useState<number>(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEpisodes());
  }, []);

  const handleNavigate = (episode: EpisodesModel) => {
    navigation?.navigate('Details', {item: episode});
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
            delay: 500,
          }}
        >
          <Typography
            fontFamily="montSerrat"
            familyType="bold"
            size="h1"
            style={style.title}
          >
            PowerPuff Girls
          </Typography>
          <Row justifyContent="space-between">
            <Row>
              <Typography
                fontFamily="roboto"
                familyType="bold"
                size="p"
                style={style.label}
              >
                Type:
              </Typography>
              <Typography familyType="medium" style={style.labelText}>
                Animation
              </Typography>
            </Row>
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
              <Typography size="h4" familyType="bold" style={style.labelText}>
                5.28
              </Typography>
            </Row>
          </Row>
          <Row>
            <Typography
              fontFamily="roboto"
              familyType="bold"
              size="p"
              style={style.label}
            >
              Genres:
            </Typography>
            <Typography familyType="medium" style={style.labelText}>
              Comedy ● Action ● Science-Fiction
            </Typography>
          </Row>
          <Typography familyType="medium" style={style.description}>
            The city of Townsville may be a beautiful, bustling metropolis, but
            don't be fooled!
          </Typography>
        </MotiView>
        <View style={style.seasonContainer}>
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
            <Typography size="p" fontFamily="roboto" familyType="bold">
              Seasons:
            </Typography>
            <TouchableOpacity
              style={style.seasonButtonSelected}
              activeOpacity={0.7}
            >
              <Typography size="h3" familyType="bold">
                1
              </Typography>
            </TouchableOpacity>
          </MotiView>
          {episodesList
            ?.filter((episode) => episode?.season === seasons)
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
                  duration: 500,
                  type: 'timing',
                }}
                key={episode?.id}
              >
                <EpisodeItem onClick={handleNavigate} episode={episode} />
              </MotiView>
            ))}
        </View>
        {/* <View style={style.carouselContainer}>
          <Typography
            style={style.carouselTitle}
            fontFamily="roboto"
            familyType="bold"
            size="p"
          >
            Casts:
          </Typography>
          <FlatList
            style={style.carousel}
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            decelerationRate="normal"
            showsHorizontalScrollIndicator={false}
            horizontal
            ItemSeparatorComponent={() => <View style={{width: 16}} />}
            renderItem={() => (
              <View style={style.carouselContentContainer}>
                <Image
                  style={style.imageCarousel}
                  resizeMethod="auto"
                  resizeMode="cover"
                  source={{
                    uri: 'https://static.tvmaze.com/uploads/images/original_untouched/25/64242.jpg',
                  }}
                />
                <Typography
                  familyType="medium"
                  size="h4"
                  style={style.labelText}
                >
                  Bubbles
                </Typography>
              </View>
            )}
          />
        </View> */}
      </View>
    </ScrollView>
  );
};

export default Home;
