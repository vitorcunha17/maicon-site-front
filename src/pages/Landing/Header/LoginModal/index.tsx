import React, { ForwardRefRenderFunction, forwardRef, useState, useImperativeHandle, useEffect, useContext } from 'react'
import { Modal, Form, Input } from 'antd'
import logoTransparente from "../../../../images/logo_circular.png";
import { useMutation } from 'react-apollo';
import { Credentials, SigninResponse, SigninVariables } from './interfaces';
import { SIGNIN } from './graphql';
import { useForm } from 'antd/lib/form/util';
import { UserContext } from '../../../../contexts/UserContext';
import { useHistory } from 'react-router-dom';

const LoginModal: ForwardRefRenderFunction<{ open(): void }> = ({ }, ref) => {
  const [visible, setVisible] = useState<boolean>(false)

  const { authenticate } = useContext(UserContext)

  const { push } = useHistory()

  const [form] = useForm()

  const [signin, { data }] = useMutation<SigninResponse, SigninVariables>(SIGNIN)

  useImperativeHandle(ref, () => ({
    open
  }))

  useEffect(() => {
    if (data) {
      authenticate(data.signin.student, data.signin.token)
      push('/planos')
    }
  }, [data])

  const onFinish = (credentials: Credentials): void => {
    signin({
      variables: credentials
    })
  }

  const open = (): void => {
    setVisible(true)
  }

  const close = (): void => {
    setVisible(false)
  }

  return (
    <Modal
      title={
        <div>
          <span style={{ fontWeight: "bold" }}>Bem vindo ao site do Maicola</span>
        </div>
      }
      visible={visible}
      okText="Login"
      cancelText="Cancelar"
      onCancel={close}
      onOk={() => form.submit()}
    >
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Senha"
          name="password"
          rules={[{ required: true }]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default forwardRef(LoginModal)