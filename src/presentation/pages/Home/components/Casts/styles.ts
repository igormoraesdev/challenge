import {StyleSheet} from 'react-native';

import {theme} from '../../../../styles';

export const style = StyleSheet.create({
  carouselContainer: {
    paddingBottom: theme.spacing.big,
    marginHorizontal: theme.spacing.big,
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
