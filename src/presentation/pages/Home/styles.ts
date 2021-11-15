import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const style = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  scroll: {
    flexGrow: 1,
  },
  imageContainer: {
    width,
    height: height / 1.6,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 24,
  },
});
