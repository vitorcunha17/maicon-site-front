import React, { FunctionComponent, useState, useEffect, useRef } from 'react'
import { useQuery } from 'react-apollo'
import { GetPlansResponse } from './interfaces'
import { GET_PLANS } from './graphql'
import { Plan } from '../../interfaces/Plan'
import { Row, Col, Card } from 'antd'
import PlanCheckoutModal from './PlanCheckoutModal'

const Plans: FunctionComponent = ({ }) => {
    const [plans, setPlans] = useState<Plan[]>([])

    const planCheckoutModal = useRef<{ open(plan: Plan): void }>()

    const { data, loading } = useQuery<GetPlansResponse>(GET_PLANS)

    useEffect(() => {
        if (data) {
            setPlans(data.plans)
        }
    }, [data])

    const filterPlanDeleted = (plan) => {
        return plan.name.substring(0,8) != "Deletado" 
    }

    return (
        <>
            <Row>
                {
                    plans.filter(filterPlanDeleted).map(plan => ( 
                        <Col
                            key={plan.id.toString()}
                            xs={{ span: 24 }}
                            lg={{ span: 6 }}
                            sm={{ span: 24 }}
                            md={{ span: 12 }}
                            style={{ padding: "5px" }}
                        >
                            <Card
                                onClick={() => planCheckoutModal.current?.open(plan)}
                                title={"R$ "+ plan.amount/100 + ",00"}
                                hoverable={true}
                                style={{ width: "95%", minHeight: 215, cursor: "pointer" }}
                            >
                                <p>{plan.name}</p>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
            <PlanCheckoutModal ref={planCheckoutModal} />
        </>
    )
}

export default Plans
