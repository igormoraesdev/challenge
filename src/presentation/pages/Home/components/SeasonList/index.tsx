import {MotiView} from 'moti';
import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Typography} from '../../../../components';
import {useAppSelector} from '../../../../hooks/use-app-selector';
import {theme} from '../../../../styles';
import {style} from './styles';

type Props = {
  onClick: (seasonNumber: number) => void;
  selectedSeason: number;
};

const SeasonList = ({onClick, selectedSeason}: Props) => {
  const {seasonsList} = useAppSelector(({tvShowSlice}) => tvShowSlice);
  return (
    <>
      <Typography familyType="medium" size="p">
        Seasons:
      </Typography>
      <MotiView
        from={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          type: 'timing',
          duration: 500,
          delay: 500,
        }}
        style={style.seasonTitleContainer}
      >
        {seasonsList?.map((season) => (
          <TouchableOpacity
            key={season?.id}
            onPress={() => onClick(season?.number)}
            activeOpacity={0.7}
          >
            <MotiView
              animate={{
                backgroundColor:
                  season.number === selectedSeason
                    ? theme.colors.blue
                    : 'transparent',
              }}
              transition={{
                type: 'timing',
                duration: 300,
              }}
              style={style.seasonButton}
            >
              <Typography size="h3" familyType="regular">
                {season?.number}
              </Typography>
            </MotiView>
          </TouchableOpacity>
        ))}
      </MotiView>
    </>
  );
};

export default SeasonList;
