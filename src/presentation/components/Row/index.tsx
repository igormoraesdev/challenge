import React, {ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';

import {styles} from './styles';

type Props = {
  children: ReactNode | ReactNode[];
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'space-around'
    | 'space-evenly'
    | 'space-between';
  style?: ViewStyle;
};

const Row = ({children, justifyContent, style, ...rest}: Props) => {
  return (
    <View {...rest} style={[styles.container, style, {justifyContent}]}>
      {children}
    </View>
  );
};

export default Row;
