import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
  stories: [],
  story: {},
  form: {
    nextPage: 0,
    loadingStories: false,
  },
};

function app(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_STORIES: {
      return produce(state, draft => {
        draft.stories = [...state.stories, ...action.stories];
      });
    }
    case types.SET_STORY: {
      return produce(state, draft => {
        draft.story = action.story;
      });
    }
    case types.RESET_STORIES: {
      return produce(state, draft => {
        draft.stories = INITIAL_STATE.stories;
      });
    }
    case types.SET_FORM: {
      return produce(state, draft => {
        draft.form = {...state.form, ...action.form};
      });
    }
    default:
      return state;
  }
}

export default app;
