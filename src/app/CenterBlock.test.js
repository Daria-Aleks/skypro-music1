import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CenterBlock from '../components/CetnerBlock/CenterBlock';
import { setTracksState } from '../store/features/traksSlice';
import { setAuth, setUser, setUserTokens } from '../store/features/authSlice';
const mockStore = configureStore([]);

describe('CenterBlock Component', () => {
  let store;
  let initialState;

  beforeEach(() => {
    initialState = {
      tracksSlice: {
        allFavs: [],
        playListOfDay: [],
        danceHits: [],
        indieTracks: []
      },
      authSlice: {
        user: null,
        auth: false,
        token: null
      }
    };

    store = mockStore(initialState);
    jest.spyOn(Storage.prototype, 'getItem');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('dispatches setTracksState on mount and when dependencies change', () => {
    store.dispatch = jest.fn();
    const tracks = [{ id: 1, name: 'Track 1' }, { id: 2, name: 'Track 2' }];

    const { rerender } = render(
      <Provider store={store}>
        <CenterBlock tracks={tracks} />
      </Provider>
    );

    expect(store.dispatch).toHaveBeenCalledWith(setTracksState(tracks));

    store = mockStore({
      ...initialState,
      tracksSlice: {
        ...initialState.tracksSlice,
        allFavs: [{ id: 3, name: 'Fav Track' }]
      }
    });
    store.dispatch = jest.fn(); 

    rerender(
      <Provider store={store}>
        <CenterBlock tracks={tracks} />
      </Provider>
    );

    expect(store.dispatch).toHaveBeenCalledWith(setTracksState(tracks));
  });

  test('dispatches setUser, setAuth, and setUserTokens actions on mount if localStorage has data', () => {
    const userData = JSON.stringify({ name: 'Test User' });
    const auth = JSON.stringify(true);
    const token = JSON.stringify('test-token');

    Storage.prototype.getItem.mockImplementation((key) => {
      switch (key) {
        case 'user':
          return userData;
        case 'auth':
          return auth;
        case 'token':
          return token;
        default:
          return null;
      }
    });

    render(
      <Provider store={store}>
        <CenterBlock tracks={[]} />
      </Provider>
    );

    const actions = store.getActions();
    expect(actions).toContainEqual(setUser(JSON.parse(userData)));
    expect(actions).toContainEqual(setAuth(JSON.parse(auth)));
    expect(actions).toContainEqual(setUserTokens(JSON.parse(token)));
  });


  test('renders Search, Filter, and PlaylistContent components', () => {
    const tracks = [{ id: 1, name: 'Track 1' }, { id: 2, name: 'Track 2' }];

    const { getByText } = render(
      <Provider store={store}>
        <CenterBlock tracks={tracks} />
      </Provider>
    );

    expect(getByText('Треки'))
    expect(getByText('Исполнитель'))
  });


});