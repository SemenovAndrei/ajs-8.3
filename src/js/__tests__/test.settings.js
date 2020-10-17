import Settings from '../settings';

test.each([
  [
    [
      ['theme', 'light'],
      ['music', 'pop'],
      ['difficulty', 'normal'],
    ], [
      ['theme', 'light'],
      ['music', 'pop'],
      ['difficulty', 'normal'],
    ],
  ],
  [
    [
      ['theme', '1'],
      ['music', 'pop'],
      ['difficulty', 'normal'],
    ], [
      ['theme', 'dark'],
      ['music', 'pop'],
      ['difficulty', 'normal'],
    ],
  ],
  [
    [
      ['theme', '1'],
      ['1', '1'],
      ['music', '1'],
      ['difficulty', '1'],
    ], [
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ],
  ],
  [
    [
      ['theme', '1'],
    ], [
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ],
  ],
  [
    [
      ['music', 'off'],
      ['difficulty', '1'],
    ], [
      ['theme', 'dark'],
      ['music', 'off'],
      ['difficulty', 'easy'],
    ],
  ],
])('%o', (userSettings, expected) => {
  const settings = new Settings();
  userSettings.forEach((e) => {
    settings.userSettings.set(e[0], e[1]);
  });
  const result = new Map();
  expected.forEach((e) => {
    result.set(e[0], e[1]);
  });
  expect(settings.settings).toEqual(result);
});
