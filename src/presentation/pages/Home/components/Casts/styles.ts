import {StyleSheet} from 'react-native';

import {theme} from '../../../../styles';

export const style = StyleSheet.create({
  carouselContainer: {
    paddingBottom: theme.spacing.regular,
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
    borderColor: theme.colors.white,
  },
  carouselContentTitle: {
    maxWidth: 120,
    textAlign: 'center',
  },
});
