import gql from "graphql-tag";

export const GET_PLANS = gql`
    query plans {
        plans {
            id
            name
            amount
            days
        }
    }
`
