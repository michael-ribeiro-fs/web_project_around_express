module.exports = {
  extends: 'airbnb-base',
  env: {
    node: true,
    es2021: true,
  },
  rules: {
    // Permite o uso de _id (underline em identificadores)
    'no-underscore-dangle': ['error', { allow: ['_id'] }],

    // Permite console.log (útil para depuração)
    'no-console': 'off',

    // Aceita quebras de linha do Windows (CRLF) e Unix (LF)
    'linebreak-style': ['error', 'unix'], // ou 'windows' se preferir
  },
};
