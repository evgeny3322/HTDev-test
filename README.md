# HTDev-test

**Реализованы следующие задачи:**

- Необходимо обеспечить, чтоб значение поля формы «подпись автора» и выбранное значение
  поля временной зоны сохранялось и при открытии страницы в форме уже были указаны
  последние введённые значения,

- Каждый раз при новом запуске/входе на страницу, список временных зон подгружается зав
  нова (чтоб обеспечить актуальность), при этом после подгрузки выбиралось то значение,
  которое выбрал пользователь в последний раз. При этом, пока полный список не получен -
  кнопка «Отправить» должна быть неактивна,

- После заполнения формы. И нажатия отправить данные. Кнопка «Отправить» должна
  становиться неактивной на протяжении всей процедуры: запроса объекта со временем и
  сохранения данных в localStorage. Также, предусмотреть показ лоадера на кнопке (для
  большей нотивности для пользователя). Только после сохранения данных, и очистки поля
  текста заметки, кнопка должна возвращаться в исходное положение,

- Оформление сообщения о успешном сохранении данных - на своё усмотрение. Также
  предусмотреть вариант действий на случай неудачной попытки произвести сохранение: т.е.
  вывести сообщение о произошедшей ошибке (текстовое поле с текстом записи, в таком
  случае, сбрасывать не надо)<br>

  **а также:**

- если будет организован какой-либо роутинг. Т.е. при переходе от закладки к закладке
  будет менятся адрес. А также можно будет сослаться на конкретную страницу в
  списке записей,

- если на странице с пагинацией можно будет выбрать количество выводимых записей и
  это значение также будет сохранятся для последующего использования.

## Используемые технологии
- React
- Redux / Redux-Toolkit / React-router-dom v6
- Axios
- Material UI;
- публичные API - https://worldtimeapi.org/api/timezone
- Surge

## Использование локально

Экспорт проекта локально на компьютер:

```
git clone https://github.com/evgeny3322/HTDev-test.git
```

Для установки зависимостей:

```
yarn
```

Для запуска на localhost:8080

```
yarn start
```

## Demo

Посмотреть приложение в действии можно на [Link](https://puny-desk.surge.sh/)