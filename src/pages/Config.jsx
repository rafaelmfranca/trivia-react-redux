import { shape, func, object } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setGameSettingsAction } from '../actions/settings';
import ConfigForm from '../components/ConfigForm';

class Config extends Component {
  state = {
    amount: '',
    category: '',
    difficulty: '',
    type: '',
  };

  componentDidMount() {
    const { settings } = this.props;
    this.setState({ ...settings });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { history, setGameSettings } = this.props;
    setGameSettings(this.state);
    history.push('/');
  };

  render() {
    return (
      <main>
        <h1 data-testid="settings-title">Config</h1>
        <ConfigForm
          { ...this.state }
          handleChange={ this.handleChange }
          handleSubmit={ this.handleSubmit }
        />
      </main>
    );
  }
}

Config.propTypes = {
  history: shape({
    push: func,
  }),
  setGameSettings: func,
  settings: object,
}.isRequired;

const mapStateToProps = ({ settings }) => ({ settings });

const mapDispatchToProps = (dispatch) => ({
  setGameSettings: (settings) => dispatch(setGameSettingsAction(settings)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Config);
