import {Dimensions, StyleSheet} from 'react-native';

import {theme} from '../../styles';

const {width, height} = Dimensions.get('screen');

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  image: {
    width,
    height: height / 3,
  },
  content: {
    padding: theme.spacing.big,
    flex: 1,
  },
  summaryText: {
    marginTop: theme.spacing.regular,
  },
  textValue: {
    marginLeft: theme.spacing.regular,
  },
  row: {
    marginVertical: theme.spacing.big,
  },
});
