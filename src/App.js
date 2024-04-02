import { Component, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list";
import Search from "./components/search-box/search";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const handleSearch = (event) => {
    const searchFieldSting = event.target.value.toLowerCase();
    setSearchField(searchFieldSting);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, [monsters]);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  // const filteredMonsters = monsters.filter((monster) => {
  //   return monster.name.toLowerCase().includes(searchField);
  // });
  return (
    <div>
      <h1 className="app-title">Monsters Rolodex</h1>
      <Search
        className="monsters-search-box"
        handleChange={handleSearch}
        placeholder="search-monsters"
      />
      <CardList data={filteredMonsters} />
      {/* <CardList/> */}
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//   }
//   handleSearch = (event) => {
//     const searchField = event.target.value.toLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };
//   render() {
//     const { monsters, searchField } = this.state;
//     const { handleSearch } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <Search placeholder="search monsters" handleChange={handleSearch} />
//         <CardList data={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
