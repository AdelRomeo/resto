import React, {Component} from 'react';
import Error from '../error';

export default class ErrorBoundry extends Component {

  state = {
    error: false
  }

  //если происзошла ошибка
  componentDidCatch(error, errorInfo) {
    this.setState({error: true})
  }

  render() {

    //если есть ошибка
    if (this.state.error) {
      return <Error/>
    }

    //если нет ошибок
    return this.props.children;
  }
}