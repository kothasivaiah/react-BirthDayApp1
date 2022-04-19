import React from 'react';
import './style.css';
import List from './List';
import Data from './Data';

export default function App() {
  const [people, setPeople] = React.useState(Data);

  const changeHandle = () => {
    setPeople([]);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
        { people.length === 0 ? "no data" :  <List people={people} />}
        <button onClick={changeHandle}>Clear All</button>
      </section>
    </main>
  );
}
