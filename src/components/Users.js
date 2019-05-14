import React, { Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import User from "./User";
const USER_QUERY = gql`
  {
    users {
      name
      age
      gender
    }
  }
`;
export default function Users() {
  return (
    <Query query={USER_QUERY}>
      {({ data, loading, error }) => {
        if (loading) return <div>Fetching</div>;
        if (error) return <div>Error</div>;

        return (
          <Fragment>
            {data.users && data.users.map(user => <User user={user} />)}
          </Fragment>
        );
      }}
    </Query>
  );
}
