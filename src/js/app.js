
import Settings from './settings';

const settings = new Settings();

console.log(settings);
console.log(settings.defaultSettings);

settings.userSettings
  .set('theme', 'light')
  .set('music', 'off')
  .set('difficulty', 'hard');
console.log(settings.settings);
