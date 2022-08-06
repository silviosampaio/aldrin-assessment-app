import React, {useEffect, useRef} from 'react';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {loadPaginatedStories, setStory} from '../../store/modules/app/actions';
import {Box, Title, Spacer, Text, FlatList, Button} from '../../components';
import Story from '../../components/Story';
import ModalStory from '../../components/Modals/Story';

const Home = () => {
  const dispatch = useDispatch();
  const storyModalRef = useRef(null);
  const {stories, form} = useSelector(state => state.app);

  const getMoreStories = reset => {
    dispatch(loadPaginatedStories(reset));
  };

  const handleStoryClick = story => {
    dispatch(setStory(story));
    storyModalRef?.current?.open();
  };

  useEffect(() => {
    getMoreStories(true);
  }, []);

  return (
    <>
      <ModalStory
        onRef={modalizeRef => (storyModalRef.current = modalizeRef)}
      />
      <FlatList
        data={stories}
        testId="HackerNewsList"
        ListEmptyComponent={() => (
          <>
            {form?.loadingStories && (
              <Box justify="center" hasPadding align="center">
                <ActivityIndicator />
                <Spacer />
                <Text>Loading Stories...</Text>
              </Box>
            )}
            {!form?.loadingStories && (
              <Box justify="center" hasPadding align="center">
                <Text>No Stories Found...</Text>
              </Box>
            )}
          </>
        )}
        ListHeaderComponent={() => (
          <SafeAreaView>
            <Title>Andrin Assessment ({stories?.length})</Title>
            <Spacer />
          </SafeAreaView>
        )}
        ListFooterComponent={() => (
          <Box>
            {stories?.length > 0 && (
              <Button background="primary" onPress={() => getMoreStories()}>
                {form?.loadingStories && <ActivityIndicator />}
                {!form?.loadingStories && (
                  <Text color="light">Load more stories</Text>
                )}
              </Button>
            )}
            <Spacer size="100px" />
          </Box>
        )}
        renderItem={({item}) => (
          <Story
            story={item}
            key={`${item.id}-${new Date().getTime()}`}
            onPress={() => handleStoryClick(item)}
          />
        )}
      />
    </>
  );
};

export default Home;
