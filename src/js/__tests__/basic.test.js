import GameSavingLoader from '../app';

test('test load', async () => {
  const save = await GameSavingLoader.load();
  const resolve = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  expect(save).toEqual(resolve);
});
