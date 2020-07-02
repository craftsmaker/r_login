import React from "react";
import Container from "../../components/Container";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import LinkedButton from "../../components/LinkedButton";

export default function(){
    return(
        <Container>
            <Form title="Login">
                <Input ID="loginID" label="Login"/>
                <Input ID="loginID" label="Password"/>
                <div style={{display: "flex",justifyContent: "space-between",marginTop: "3vh"}}>
                    <Button>Login</Button>
                    <LinkedButton to="/Register">Don't have an account?</LinkedButton>
                </div>
            </Form>
        </Container>
    )
}