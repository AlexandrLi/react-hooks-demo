import React from 'react';
import {LocaleContext, ThemeContext} from '../context';
import Row from '../shared/Row';

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Alexandr', surname: 'Li', width: window.innerWidth};
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  componentDidMount() {
    document.title = this.state.name + ' ' + this.state.surname;
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentDidUpdate() {
    document.title = this.state.name + ' ' + this.state.surname;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleSurnameChange(e) {
    this.setState({surname: e.target.value});
  }

  handleWindowResize() {
    this.setState({width: window.innerWidth});
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <section className={theme}>
            <Row label="Name">
              <input value={this.state.name} onChange={this.handleNameChange} />
            </Row>
            <Row label="Surname">
              <input
                value={this.state.surname}
                onChange={this.handleSurnameChange}
              />
            </Row>
            <Row label="Width">{this.state.width}</Row>
            <LocaleContext.Consumer>
              {locale => <Row label="Locale">{locale}</Row>}
            </LocaleContext.Consumer>
          </section>
        )}
      </ThemeContext.Consumer>
    );
  }
}
