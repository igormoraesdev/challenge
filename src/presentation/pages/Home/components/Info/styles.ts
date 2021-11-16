import {StyleSheet} from 'react-native';

import {theme} from '../../../../styles';

export const style = StyleSheet.create({
  title: {
    textAlign: 'center',
    textTransform: 'capitalize',
    marginVertical: theme.spacing.large,
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
});
