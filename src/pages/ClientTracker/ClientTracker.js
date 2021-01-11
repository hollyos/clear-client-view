import React from 'react';

const App = (props) => (
  <article {...props}>
    <header>
      <h2>Clients</h2>
    </header>

    <section>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Foo</td>
          </tr>
        </tbody>
      </table>
    </section>
  </article>
);

export default App;