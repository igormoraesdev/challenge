import {Dimensions, StyleSheet} from 'react-native';

import {theme} from '../../styles';

const {width, height} = Dimensions.get('screen');

export const style = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: theme.colors.black,
  },
  image: {
    width,
    height: height / 1.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerContent: {
    width,
    padding: theme.spacing.large,
  },
});
