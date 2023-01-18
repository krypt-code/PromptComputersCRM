import React from 'react'
import styled from "styled-components"
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export const LoginForm = () => {
  return (
    <div>

        <Container> 
            <Row>
                <Col>
                <Form>
                    <Form.Group>
                        <Form.Label>Email Adrdress</Form.Label>
                        <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        required
                        />
                        </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        required
                        />

                    </Form.Group>
                    <br />
                    <Button type="submit" style = {{backgroundColor:'#00d4ff'}}>Login</Button> 
                    <br />
                   

                    

                </Form>
                </Col>


            </Row>

        </Container>
    </div>
  )
}
