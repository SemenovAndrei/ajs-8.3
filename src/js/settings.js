import rules from './settingsrules';

/**
 * Хранилище настроек
 */
class Settings {
  /**
   * Создает {Map} userSettings - настройки пользователя
   *
   * Создает {Map} defaultSettings - настройки по умолчанию
   *
   */
  constructor() {
    this.userSettings = new Map();
    this.defaultSettings = new Map();

    Object.keys(rules).forEach((k) => {
      this.defaultSettings.set(k, rules[k][0]);
    });
  }

  /**
   * Возвращает результат слияния userSettings и defaultSettings
   */
  get settings() {
    const result = this.defaultSettings;
    this.userSettings.forEach((v, k) => {
      if (result.has(k)) {
        if (rules[k].includes(v)) {
          result.set(k, v);
        }
      }
    });
    return result;
  }
}

export default Settings;
