import Settings from '../settings';
import rules from '../settingsrules';

describe('Устанавливаем все разрешенные ключи и значения', () => {
  test.each([
    {
      theme: 'light',
      music: 'pop',
      difficulty: 'normal',
    },
    {
      theme: 'gray',
      music: 'rock',
      difficulty: 'hard',
    },
    {
      theme: 'light',
      music: 'chillout',
      difficulty: 'nightmare',
    },
    {
      theme: 'light',
      music: 'off',
      difficulty: 'normal',
    },
  ])('%s', (userSettings) => {
    const settings = new Settings(rules);
    Object.keys(userSettings).forEach((k) => {
      settings.userSettings.set(k, userSettings[k]);
    });
    const result = new Map();
    Object.keys(userSettings).forEach((k) => {
      result.set(k, userSettings[k]);
    });
    expect(settings.settings).toEqual(result);
  });
});

describe('Устанавливаем не все разрешенные ключи', () => {
  test.each([
    {
      theme: 'light',
      music: 'pop',
    },
    {
      theme: 'gray',
      difficulty: 'hard',
    },
    {
      theme: 'light',
    },
    {
      music: 'off',
    },
  ])('%s', (userSettings) => {
    const settings = new Settings(rules);
    Object.keys(userSettings).forEach((k) => {
      settings.userSettings.set(k, userSettings[k]);
    });
    const result = new Map();
    result
      .set('theme', 'dark')
      .set('music', 'trance')
      .set('difficulty', 'easy');
    Object.keys(userSettings).forEach((k) => {
      result.set(k, userSettings[k]);
    });
    expect(settings.settings).toEqual(result);
  });
});

describe('get settings()', () => {
  describe('Устанавливаем не разрешенные ключи', () => {
    test.each([
      {
        lalala: 'ololo',
        ololo: 'lalala lalala',
      },
      {
        1: 'Main error',
        2: 'Event error',
        3: 'Common error',
        4: 'Panic',
      },
      {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
      },
    ])('%s', (userSettings) => {
      const settings = new Settings(rules);
      Object.keys(userSettings).forEach((k) => {
        settings.userSettings.set(k, userSettings[k]);
      });
      const result = new Map();
      result
        .set('theme', 'dark')
        .set('music', 'trance')
        .set('difficulty', 'easy');
      expect(settings.settings).toEqual(result);
    });
  });

  describe('Устанавливаем не разрешенные значения', () => {
    test.each([
      {
        theme: 'pop',
        music: 'light',
        difficulty: 'pop',
      },
      {
        theme: 'easy',
        music: 'normal',
        difficulty: 'off',
      },
      {
        theme: 'chillout',
        music: 'gray',
        difficulty: 'dark',
      },
      {
        theme: 'easy',
        music: 'dark',
        difficulty: 'trance',
      },
    ])('%s', (userSettings) => {
      const settings = new Settings(rules);
      Object.keys(userSettings).forEach((k) => {
        settings.userSettings.set(k, userSettings[k]);
      });
      const result = new Map();
      result
        .set('theme', 'dark')
        .set('music', 'trance')
        .set('difficulty', 'easy');
      expect(settings.settings).toEqual(result);
    });
  });
});

describe('get settingsWithoutFilter()', () => {
  describe('Устанавливаем не разрешенные ключи', () => {
    test.each([
      {
        lalala: 'ololo',
        ololo: 'lalala lalala',
      },
      {
        1: 'Main error',
        2: 'Event error',
        3: 'Common error',
        4: 'Panic',
      },
      {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
      },
    ])('%s', (userSettings) => {
      const settings = new Settings(rules);
      Object.keys(userSettings).forEach((k) => {
        settings.userSettings.set(k, userSettings[k]);
      });
      const result = new Map();
      result
        .set('theme', 'dark')
        .set('music', 'trance')
        .set('difficulty', 'easy');
      Object.keys(userSettings).forEach((k) => {
        result.set(k, userSettings[k]);
      });
      expect(settings.settingsWithoutFilter).toEqual(result);
    });
  });

  describe('Устанавливаем не разрешенные значения', () => {
    test.each([
      {
        theme: 'pop',
        music: 'light',
        difficulty: 'pop',
      },
      {
        theme: 'easy',
        music: 'normal',
        difficulty: 'off',
      },
      {
        theme: 'chillout',
        music: 'gray',
        difficulty: 'dark',
      },
      {
        theme: 'easy',
        music: 'dark',
        difficulty: 'trance',
      },
    ])('%s', (userSettings) => {
      const settings = new Settings(rules);
      Object.keys(userSettings).forEach((k) => {
        settings.userSettings.set(k, userSettings[k]);
      });
      const result = new Map();
      result
        .set('theme', 'dark')
        .set('music', 'trance')
        .set('difficulty', 'easy');
      Object.keys(userSettings).forEach((k) => {
        result.set(k, userSettings[k]);
      });
      expect(settings.settingsWithoutFilter).toEqual(result);
    });
  });
});
