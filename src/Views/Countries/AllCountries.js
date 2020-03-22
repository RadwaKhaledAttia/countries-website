import React  from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import Table from './CountryTable'

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://countries.trevorblades.com'
});

const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
      emoji
      native
      phone
      currency
    }
  }
`;

export default function CountrySelect() {
    const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });
    if (loading || error) {
        return <p>{error ? error.message : 'Loading...'}</p>;
    }

    return (
        <Table rows={data.countries} />
    );
}

ReactDOM.render(<CountrySelect />, document.getElementById('root'));