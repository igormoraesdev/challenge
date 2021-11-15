import React, {ReactNode} from 'react';
import {View} from 'react-native';

import {styles} from './styles';

type Props = {
  children: ReactNode | ReactNode[];
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'space-around'
    | 'space-evenly'
    | 'space-between';
};

const Row = ({children, justifyContent, ...rest}: Props) => {
  return (
    <View {...rest} style={[styles.container, {justifyContent}]}>
      {children}
    </View>
  );
};

export default Row;
