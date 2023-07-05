import React from 'react'
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import AuthStore from "../stores/AuthStore";
import { useNavigate } from 'react-router-dom';
export default function Signup() {
    const navigate = useNavigate()
    const store = AuthStore()
    const handleSignup = (e)=>{
        e.preventDefault();
        store.Signup()
        navigate('/login')
    }
  return (
    <div>
    <Row>
      <Col md={4}></Col>
      <Col md={4}>
        <Form onSubmit={handleSignup}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
            <Form.Control
              placeholder="Enter Your Email"
              name="email"
              type="email"
              required
              value={store.signup.email}
              onChange={store.updateSignupForm}
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
            <Form.Control
              placeholder="Enter Your Email"
              name="password"
              type="password"
              required
              value={store.signup.password}
              onChange={store.updateSignupForm}
            />
          </InputGroup>
          <Button type="submit" className="mt-2">SignUp</Button>
        </Form>
      </Col>
      <Col md={4}></Col>
    </Row>
  </div>
  )
}
