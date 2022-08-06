import types from './types';

export function loadPaginatedStories(reset) {
  return {type: types.LOAD_PAGINATED_STORIES, reset};
}

export function setStories(stories) {
  return {type: types.SET_STORIES, stories};
}

export function setStory(story) {
  return {type: types.SET_STORY, story};
}

export function resetStories() {
  return {type: types.RESET_STORIES};
}

export function setForm(form) {
  return {type: types.SET_FORM, form};
}
