import {Alert} from 'react-native';
import {takeLatest, all, call, put, select} from 'redux-saga/effects';

import {setForm, setStories, resetStories} from './actions';
import {fetchPaginatedStories} from '../../../services/api';
import types from './types';

export function* loadPagintedStoriesSaga({reset}) {
  const {nextPage} = yield select(state => state.app);

  yield put(setForm({loadingStories: true}));
  try {
    const stories = yield call(fetchPaginatedStories, nextPage);

    if (reset) yield put(resetStories());

    yield put(setStories(stories));
    yield put(setForm({nextPage: nextPage + 1}));
  } catch (err) {
    Alert.alert('Error!', err.message);
  } finally {
    yield put(setForm({loadingStories: false}));
  }
}

export default all([
  takeLatest(types.LOAD_PAGINATED_STORIES, loadPagintedStoriesSaga),
]);
