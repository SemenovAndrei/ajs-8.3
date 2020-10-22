import rules from './settingsrules';

import Settings from './settings';

const settings = new Settings(rules);

settings.userSettings
  .set('theme', 'light')
  .set('music', '1')
  .set('la-la-la', 'ololo');
console.log(settings.settings);
console.log(settings.settingsWithoutFilter);
