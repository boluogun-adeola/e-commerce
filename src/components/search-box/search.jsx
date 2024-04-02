import { Component } from "react";
import "./search-box.styles.css";

class Search extends Component {
  render() {
    const { handleChange, placeholder } = this.props;
    return (
      <input
        type="text"
        onChange={handleChange}
        placeholder={placeholder}
        className="search-box"
      />
    );
  }
}

export default Search;
