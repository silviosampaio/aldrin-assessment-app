import React from 'react';
import {Modalize} from 'react-native-modalize';
import {useSelector} from 'react-redux';

import {Title, Text, Box, Spacer} from '../../components';

const ModalStory = ({onRef = ref => {}}) => {
  const {story} = useSelector(state => state.app);

  return (
    <Modalize ref={modalizeRef => onRef(modalizeRef)} adjustToContentHeight>
      <Box hasPadding>
        <Text>@{story?.by}</Text>
        <Spacer />
        <Title bold>{story?.title}</Title>
        <Spacer />
        <Text>URL: {story?.url}</Text>
      </Box>
    </Modalize>
  );
};

export default ModalStory;
