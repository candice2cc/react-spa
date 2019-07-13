/**
 * @author Candice
 * @date 2018/6/7 15:33
 */

import React from 'react';
import CSSModules from 'react-css-modules';

import modalImg from '../img/modal.svg';
import styles from '../sass/Hello.scss';

const Hello = () => (
  <div styleName="hello">
    <h2>Hello, Component</h2>
    <img src={modalImg} />
  </div>
);

export default CSSModules(Hello, styles);
