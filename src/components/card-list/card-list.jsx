import { Component } from "react";
import "./card-list.styles.css";
import "./card.styles.css";

class CardList extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="card-list">
        {data.map((item) => (
          <div className="card-container">
            <img
              alt={`monster ${item?.name}`}
              src={`https://robohash.org/${item?.id}?set=set2&size=180x180`}
            />
            <h2>{item?.name}</h2>
            <p>{item?.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
