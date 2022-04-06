import React from 'react';
import ReactDOM from 'react-dom';
import { TestFrontend } from './TestFrontend';
import './styles/styles.scss'

ReactDOM.render(
  <React.StrictMode>
    <TestFrontend />
  </React.StrictMode>,
  document.getElementById('root')
);

