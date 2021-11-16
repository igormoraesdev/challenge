import {Dimensions, StyleSheet} from 'react-native';

import {theme} from '../../../../styles';

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
    height: height / 1.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerContent: {
    width,
    padding: theme.spacing.large,
  },
  title: {
    textAlign: 'center',
    textTransform: 'capitalize',
    marginVertical: theme.spacing.large,
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
    marginRight: theme.spacing.regular,
  },
  rating: {
    marginLeft: theme.spacing.regular,
  },
  labelText: {
    marginVertical: theme.spacing.regular,
  },
  description: {
    marginTop: theme.spacing.big,
  },
  episodeLabel: {
    marginBottom: theme.spacing.large,
  },
  seasonTitleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: theme.spacing.big,
  },
  seasonButton: {
    height: 40,
    width: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: theme.colors.black,
  },
});
