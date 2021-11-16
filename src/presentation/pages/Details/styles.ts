import {Dimensions, StyleSheet} from 'react-native';

import {theme} from '../../styles';

const {width, height} = Dimensions.get('screen');

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
  },
  image: {
    width,
    height: height / 2,
  },
  content: {
    padding: theme.spacing.big,
    flex: 1,
  },
  label: {
    marginVertical: theme.spacing.regular,
  },
});
