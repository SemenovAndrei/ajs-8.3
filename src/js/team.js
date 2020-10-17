/* eslint-disable no-unused-vars */

import charactersList from './characters/characterslist';

/**
 * Класс хранит данные о персонажах команды в поле типа Set
 */
class Team {
  /**
   * Создает поле типа Set
   */
  constructor() {
    this.members = new Set();
  }
  // TODO:
  //   Метод add должен добавлять выбранного персонажа в команду (объект класса Character).
  // При этом такой объект уже существует в команде -
  // дублирования происходить не должно, должна генерироваться ошибка.

  // Метод addAll должен иметь возможность добавлять произвольное количество персонажей
  // (используйте rest-parameters) в команду.
  // При этом задвоения быть не должно, ошибка генерироваться не должна.

  // Метод toArray должен производить конвертацию Set в массив.

  // Не забудьте написать unit-тесты, которые обеспечивают
  // 100% покрытие функций и классов, которые вы тестируете.

  /**
   * Добавляет персонажа в команду
   *
   * @param {object} character - объект персонажа
   *
   * @throws {error} выбрасывает ошибку - 'Персонаж уже добавлен'
   */
  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж уже добавлен');
    }
    this.members.add(character);
  }

  /**
   * Добавляет всех переданных персонажей в команду
   *
   * @param {object} characters - персонажи
   */
  addAll(characters) {
    this.members = new Set([...this.members, ...characters]);
  }

  /**
   * Создает массив из поля типа Set
   */
  toArray() {
    return Array.from(this.members);
  }
}

export default Team;
