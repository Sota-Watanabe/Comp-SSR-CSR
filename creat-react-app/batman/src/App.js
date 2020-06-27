import React from "react";
import fetch from "isomorphic-unfetch";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shows: [] };
  }
  async componentDidMount() {
    const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    this.setState({ shows: data.map(entry => entry.show) });
  }

  render() {
    return (
      <div>
        <h1>Batman TV Shows</h1>
        <ul>
          {this.state.shows.map(show => (
            <li key={show.id}>
              <a href="">{show.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Index;
