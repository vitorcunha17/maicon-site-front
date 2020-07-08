import gql from "graphql-tag";

export const CHECKOUT_PLAN = gql`
    mutation createSubscription($planTransaction: PlanTransaction!) {
        createSubscription(planTransaction: $planTransaction)
    }
`