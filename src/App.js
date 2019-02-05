import React, { Component } from 'react';
import Layout from './hoc/Layout';
import SearchApp from './containers/SearchApp/SearchApp';

class App extends Component {
  render() {
    return (
      <Layout>
        <SearchApp />
      </Layout>
    );
  }
}

export default App;
