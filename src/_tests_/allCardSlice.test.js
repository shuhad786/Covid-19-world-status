import store from '../redux/configureStore';

describe('Countries redux state tests', () => {
  it('Should initially set countries to an empty object', () => {
    const state = store.getState().countries
    expect(state.countries).toEqual([])
  })
});
