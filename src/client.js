import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
    {
      allPeople{
        people{
          name
          species{
            name
          }
          homeworld{
            name
          }
        }
      }
    
    }
    `
  })
  .then(result => console.log(result));

  export default client