import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import './App.css';

// functional component
const App = () => {

  const [searchField, setSearchField] = useState(''); // [value, setValue], useState('initial value')
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)
  

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')  // fetch data from url 
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString)
  };


  return (
    <div className="App" >
      <h1 className='app-name'>Client Rolodex</h1>
      <SearchBox
        // pass in props from SearchBox component
        onChangeHandler={onSearchChange}
        placeholder='Search for people..'
        className='monsters-search-box'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App;
