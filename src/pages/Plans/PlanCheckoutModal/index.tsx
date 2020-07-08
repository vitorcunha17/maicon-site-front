import React, { ForwardRefRenderFunction, forwardRef, useState, useImperativeHandle } from 'react'
import { Modal, Button, Form, Input, InputNumber } from 'antd'
import { useForm } from 'antd/lib/form/util'
import { Plan } from '../../../interfaces/Plan'
import { useMutation } from 'react-apollo'
import { CHECKOUT_PLAN } from './graphql'
import { CheckoutPlanResponse, CheckoutPlanVariables } from './interfaces'
import InputMask from 'antd-mask-input'
import { CreditCard } from '../../../interfaces/CreditCard'
import Swal from 'sweetalert2'

const PlanCheckoutModal: ForwardRefRenderFunction<{ open(plan: Plan): void }> = ({ }, ref) => {
    const [visible, setVisible] = useState<boolean>(false)
    const [plan, setPlan] = useState<Plan>(null)

    const [form] = useForm()

    const [checkoutPlan, { loading }] = useMutation<CheckoutPlanResponse, CheckoutPlanVariables>(CHECKOUT_PLAN)

    useImperativeHandle(ref, () => ({
        open
    }))

    const onFinish = async (creditCard: CreditCard): Promise<void> => {
        console.log(creditCard.card_number)
        await checkoutPlan({
            variables: {
                planTransaction: {
                    ...creditCard,
                    card_number: creditCard.card_number.replace(/ /g, ''),
                    card_expiration_date: creditCard.card_expiration_date.replace('/', ''),
                    plan_id: plan.id
                }
            }
        })

        close()

        Swal.fire('Sucesso', 'Sua assinatura foi realizada com sucesso!', 'success')
    }

    const open = (plan: Plan): void => {
        setPlan(plan)
        setVisible(true)
    }

    const close = (): void => {
        setVisible(false)
    }

    return (
        <Modal
            visible={visible}
            onCancel={close}
            title="Pagamento Recorrente"
            footer={[
                <Button key="cancelar" onClick={close}>
                    Cancelar
                </Button>,
                <Button loading={loading} key="pagar" type="primary" onClick={() => form.submit()}>
                    Pagar
                </Button>,
            ]}
        >
            <Form layout="vertical" form={form} onFinish={onFinish}>
                <p>
                    Valor: R$ {plan?.amount/100},00
                </p>
                <Form.Item
                    label="Nome impresso no cartão"
                    name="card_holder_name"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Número do cartão"
                    name="card_number"
                    rules={[{ required: true }]}
                >
                    <InputMask mask="1111 1111 1111 1111" />
                </Form.Item>
                <Form.Item
                    label="Número de segurança"
                    name="card_cvv"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Data de validade"
                    name="card_expiration_date"
                    rules={[{ required: true }]}
                >
                    <InputMask mask="11/11" />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default forwardRef(PlanCheckoutModal)
