import { CreditCard } from "../../../interfaces/CreditCard";

export interface CheckoutPlanResponse {
    checkoutPlan: boolean
}

export interface CheckoutPlanVariables {
    planTransaction: CreditCard & {
        plan_id: number
    }
}