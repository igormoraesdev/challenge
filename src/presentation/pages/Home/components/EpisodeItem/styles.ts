import {StyleSheet} from 'react-native';

import {theme} from '../../../../styles';

export const style = StyleSheet.create({
  episodeContentContainer: {
    flexDirection: 'row',
    paddingRight: theme.spacing.big,
    marginBottom: theme.spacing.big,
  },
  episodeImageCarousel: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: theme.spacing.regular,
  },
  episodeContent: {
    marginLeft: theme.spacing.big,
    flex: 1,
  },
  episodeTitle: {
    marginBottom: theme.spacing.regular,
  },
});
