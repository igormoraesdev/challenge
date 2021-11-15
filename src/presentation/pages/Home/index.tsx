import React from 'react';
import {
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {Row, Typography} from '../../components';
import {theme} from '../../styles';
import {style} from './styles';

Icon.loadFont();

const Home = () => {
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
            <Typography style={style.labelText}>Animation</Typography>
          </Row>
          <Row>
            <Icon name="star" size={20} color={theme.colors.yellow} />
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
          <Typography style={style.labelText}>
            Comedy ● Action ● Science-Fiction
          </Typography>
        </Row>
        <Typography style={style.description}>
          The city of Townsville may be a beautiful, bustling metropolis, but
          don't be fooled!
        </Typography>
        <View style={style.seasonContainer}>
          <View style={style.seasonTitleContainer}>
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
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={style.episodeContentContainer}
          >
            <Image
              style={style.episodeImageCarousel}
              resizeMethod="auto"
              resizeMode="cover"
              source={{
                uri: 'https://static.tvmaze.com/uploads/images/original_untouched/25/64242.jpg',
              }}
            />
            <View style={style.episodeContent}>
              <Typography
                size="p"
                fontFamily="roboto"
                familyType="bold"
                style={style.episodeTitle}
              >
                EP.1 - Escape from Monster Island
              </Typography>
              <Typography
                size="span"
                familyType="medium"
                style={style.episodeDescription}
              >
                Bubbles wins two tickets to a concert and has to pick between
                Blossom and Buttercup to go with her.
              </Typography>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={style.episodeContentContainer}
          >
            <Image
              style={style.episodeImageCarousel}
              resizeMethod="auto"
              resizeMode="cover"
              source={{
                uri: 'https://static.tvmaze.com/uploads/images/original_untouched/25/64242.jpg',
              }}
            />
            <View style={style.episodeContent}>
              <Typography
                size="p"
                fontFamily="roboto"
                familyType="bold"
                style={style.episodeTitle}
              >
                EP.1 - Escape from Monster Island
              </Typography>
              <Typography
                size="span"
                familyType="medium"
                style={style.episodeDescription}
              >
                Bubbles wins two tickets to a concert and has to pick between
                Blossom and Buttercup to go with her.
              </Typography>
            </View>
          </TouchableOpacity>
        </View>
        <View style={style.carouselContainer}>
          <Typography
            style={style.carouselTitle}
            fontFamily="roboto"
            familyType="bold"
            size="p"
          >
            Casts:
          </Typography>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            decelerationRate="normal"
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
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
                <Typography size="span" style={style.labelText}>
                  Bubbles
                </Typography>
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
