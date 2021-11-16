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
    backgroundColor: theme.colors.white,
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
    borderColor: theme.colors.black,
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
    borderColor: theme.colors.black,
    marginLeft: theme.spacing.big,
  },
  carouselContainer: {
    paddingBottom: theme.spacing.big,
  },
  carousel: {
    paddingTop: theme.spacing.big,
    margin: -theme.spacing.big,
  },
  carouselContentContainer: {
    alignItems: 'center',
  },
  carouselTitle: {
    marginBottom: theme.spacing.big,
  },
  imageCarousel: {
    padding: theme.spacing.regular,
    width: 80,
    height: 80,
    borderRadius: 100,
    marginBottom: theme.spacing.regular,
    borderWidth: 2,
    borderColor: theme.colors.black,
  },
  carouselContentTitle: {
    maxWidth: 120,
    textAlign: 'center',
  },
});
