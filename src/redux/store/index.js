/**
 * @author Candice
 * @date 2018/6/7 15:27
 */
/* eslint-disable global-require */

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
