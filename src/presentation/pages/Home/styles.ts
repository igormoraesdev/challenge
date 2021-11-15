import {Dimensions, StyleSheet} from 'react-native';

import {theme} from '../../styles';

const {width, height} = Dimensions.get('screen');

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scroll: {
    flex: 1,
    backgroundColor: theme.colors.black,
  },
  imageContainer: {
    width,
    height: height / 2.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerContent: {
    width,
    padding: theme.spacing.big,
  },
  title: {
    textTransform: 'capitalize',
    marginBottom: 6,
  },
  containerTypeRating: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerType: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  label: {
    marginRight: 8,
  },
  labelText: {
    marginLeft: theme.spacing.regular,
  },
  description: {
    marginTop: theme.spacing.big,
  },
  seasonContainer: {
    marginTop: theme.spacing.big,
  },
  seasonTitleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: theme.spacing.big,
  },
  seasonButtonSelected: {
    height: 40,
    width: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.blue,
    borderWidth: 4,
    borderColor: theme.colors.white,
    marginLeft: theme.spacing.big,
  },
  seasonButton: {
    height: 30,
    width: 30,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: theme.colors.white,
    marginLeft: theme.spacing.big,
  },
  episodeImageCarousel: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: theme.spacing.regular,
  },
  episodeContentContainer: {
    flexDirection: 'row',
    paddingRight: theme.spacing.big,
    marginBottom: theme.spacing.big,
  },
  episodeContent: {
    marginLeft: theme.spacing.big,
    flex: 1,
  },
  episodeTitle: {
    marginBottom: theme.spacing.regular,
  },
  episodeDescription: {
    // flex: 1,
  },
  carouselContainer: {
    paddingBottom: 16,
  },
  carouselContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselTitle: {
    marginBottom: theme.spacing.big,
  },
  imageCarousel: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginBottom: theme.spacing.regular,
  },
});
