import React, { Component } from 'react';
import * as Database from '../Database';

class HeroInsert extends Component {
  state = {
    name: '',
    color: ''
  };
  subs = [];

  addHero = async (event) => {
    event.preventDefault();
    const { name, color } = this.state;
    const db = await Database.get();

    const addData = {
      name,
      color
    };
    await db.heroes.insert(addData);
    this.setState({
      name: '',
      color: ''
    });
  };
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  handleColorChange = (event) => {
    this.setState({ color: event.target.value });
  };

  render() {
    return (
      <div id="insert-box" className="box">
        <h3>Add Hero</h3>
        <form onSubmit={this.addHero}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <input name="name" type="text" placeholder="Name" value={this.state.name} onChange={this.handleNameChange} />
            <input style={{ width: 40, height: 40, padding: 0 }} name="color" type="color" placeholder="Color" value={this.state.color} onChange={this.handleColorChange} />
          </div>
          <button type="submit">Insert a Hero</button>
        </form>
      </div>
    );
  }
}

export default HeroInsert;
