import {Dimensions} from 'react-native';

export const colors = {
  main: '#5649B7',
};
export const basicDimensions = {
  height: 740,
  width: 360,
};
export const height = (
  Dimensions.get('screen').height *
  (1 / basicDimensions.height)
).toFixed(2);

export const width = (
  Dimensions.get('screen').width *
  (1 / basicDimensions.width)
).toFixed(2);
