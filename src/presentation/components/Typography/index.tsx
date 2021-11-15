import React, {ReactChild} from 'react';
import {Text, TextStyle} from 'react-native';

import {theme} from '../../styles';
import {styles} from './styles';

type Props = {
  children: ReactChild | ReactChild[];
  fontFamily?: 'montSerrat' | 'roboto';
  familyType?: 'bold' | 'regular' | 'medium';
  size?: 'h1' | 'p' | 'span';
  style?: TextStyle;
};

const Typography = ({
  children,
  fontFamily = 'montSerrat',
  familyType = 'regular',
  size = 'p',
  style,
  ...rest
}: Props) => {
  const fontFamilyStyle = {
    montSerrat: theme?.fonts?.montSerrat,
    roboto: theme?.fonts?.roboto,
  };

  const typeStyle = {
    bold: fontFamilyStyle[fontFamily]?.bold,
    regular: fontFamilyStyle[fontFamily]?.regular,
    medium: fontFamilyStyle[fontFamily]?.medium,
  };

  const sizes = {
    p: theme.fontSize.p,
    h1: theme.fontSize.h1,
    span: theme.fontSize.span,
  };

  return (
    <Text
      {...rest}
      style={[
        style,
        styles.typography,
        {
          fontFamily: typeStyle[familyType],
          fontSize: sizes[size],
        },
      ]}
    >
      {children}
    </Text>
  );
};

export default Typography;
