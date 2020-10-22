
/**
 * Хранилище настроек
 */
class Settings {
  /**
   * @create
   * {Map} userSettings - настройки пользователя
   *
   * {Map} defaultSettings - настройки по умолчанию
   *
   * {Object} rules - разрешенные ключи и значения
   *
   * Заполняет defaultSettings настройками по умолчанию
   */
  constructor(rules) {
    this.userSettings = new Map();
    this.defaultSettings = new Map();
    this.rules = rules;

    Object.keys(rules).forEach((k) => {
      this.defaultSettings.set(k, rules[k][0]);
    });
  }

  /**
   * Проверяет ключи и значения userSettings
   * на соответствие правилам rules
   *
   * @returns - {Map} - разрешенные настройки
   * установленные в userSettings
   */
  filterUserSettings() {
    const result = new Map();
    this.userSettings.forEach((v, k) => {
      if (this.defaultSettings.has(k) && this.rules[k].includes(v)) {
        result.set(k, v);
      }
    });
    return result;
  }

  /**
   * @returns - {Map} - результат слияния defaultSettings
   * и разрешенных настроек из userSettings
   */
  get settings() {
    return new Map([...this.defaultSettings, ...this.filterUserSettings()]);
  }

  /**
   * @returns - {Map} - результат слияния defaultSettings и
   * "нефильтрованного" userSettings
   */
  get settingsWithoutFilter() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }
}

export default Settings;
