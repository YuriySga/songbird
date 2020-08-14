export const GAME_QUESTIONS = [
  'Разминка',
  'Воробьиные',
  'Лесные птицы',
  'Певчие птицы',
  'Хищные птицы',
  'Морские птицы',
];

export const RADIO_BTNS_VAL = {
  CORRECT: 'correct',
  INCORRECT: 'inCorrect',
  DEFAULT: 'default',
};

export const RADIO_BTNS_COLORS = new Map([
  [RADIO_BTNS_VAL.CORRECT, '#00bc8c'],
  [RADIO_BTNS_VAL.INCORRECT, '#d62c1a'],
  [RADIO_BTNS_VAL.DEFAULT, '#666'],
]);

export const GAME_STATUS = {
  WAITING: 'waiting',
  ANSWER_CORRECT: 'answer correct',
  ANSWER_INCORRECT: 'answer incorrect',
  END_GAME: 'end game',
};

export const MAX_GAME_ROUNDS = [5];

export const MAX_TRY_NUMBER = 6;
