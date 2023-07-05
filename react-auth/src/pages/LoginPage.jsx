import React from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import AuthStore from "../stores/AuthStore";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const store = AuthStore()
    const navigate = useNavigate()
    const handleLogin = (e)=>{
        e.preventDefault();
          store.login().then((res)=>{
            if(res.ok){
              navigate('/')
            }else{
              alert('invalid credential')
            }
          })
    }
  return (
    <div>
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <Form onSubmit={handleLogin}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
              <Form.Control
                placeholder="Enter Your Email"
                name="email"
                type="email"
                required
                value={store.loginForm.email}
                onChange={store.updateLoginForm}
              />
            </InputGroup>
            <InputGroup>
              <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
              <Form.Control
                placeholder="Enter Your Email"
                name="password"
                type="password"
                required
                value={store.loginForm.password}
                onChange={store.updateLoginForm}
              />
            </InputGroup>
            <Button type="submit" className="mt-2">Submit form</Button>
          </Form>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
}
