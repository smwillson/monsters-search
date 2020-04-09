import React from 'react';
import logo from './logo.svg';
import { CardList } from './../src/components/card-list/card-list.component'
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''

    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }
  //function for the search box
  handleChange = (event) => {
    this.setState({ searchField: event.target.value })
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App" >
        <h1>Monster's Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}>
        </SearchBox>
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div >
    );
  }

}

export default App;
