import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text} from 'react-native';

import {RootStackParamList} from '../../../main/routes/navigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({route}: Props) => {
  console.log(route.params);
  return <Text>Teste</Text>;
};

export default Details;
