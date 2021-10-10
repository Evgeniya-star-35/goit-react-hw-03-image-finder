import { Component } from 'react';
import Container from '../Container';

import s from './App.module.css';

class App extends Component {
  render() {
    return (
      <Container>
        <h1 className={s.title}>first</h1>
      </Container>
    );
  }
}

export default App;
