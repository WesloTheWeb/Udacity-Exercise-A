import React, { Component } from 'react';
import './App.css';
import UserNames from './components/UserNames';
import MovieList from './components/MovieList';

/*
Use React and the data below to display a list of users alongside their favorite movies.

For detailed instructions, refer to instructions.md.
*/

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="movieList">
          <h2>Favorite Movies</h2>
          <MovieList />
        </section>

        <section className="userContainer">
          <div className="nameContainer">
           <UserNames />
           <p>who</p>
          </div>

        </section>
      </React.Fragment>
    );
  }
}

export default App;
