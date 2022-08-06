export const fetchStoriesByIds = async (storiesIds = []) => {
  let promises = storiesIds?.map(id => {
    return new Promise(async (resolve, reject) => {
      const storyData = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
      );
      const story = storyData.json();
      resolve(story);
    });
  });

  return await Promise.all(promises);
};

export const fetchPaginatedStories = async (pageIndex = 0) => {
  const STORIES_PER_PAGE = 10;
  const storiesIdsData = await fetch(
    'https://hacker-news.firebaseio.com/v0/topstories.json',
  );
  const storiesIds = await storiesIdsData.json();
  const pagedStoriesIds = storiesIds?.slice(
    STORIES_PER_PAGE * pageIndex,
    STORIES_PER_PAGE,
  );

  const stories = await fetchStoriesByIds(pagedStoriesIds);
  return stories;
};
