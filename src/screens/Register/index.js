import React from "react";
import Container from "../../components/Container";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import LinkedButton from "../../components/LinkedButton";
import Information from "./Information";
import Checkbox from "./Checkbox";

export default function() {
    return(
        <Container>
            <Form title="Sign up">
                <Input ID="email" label="E-mail"/>
                <Input ID="loginID" label="Login ID"/>
                <Input ID="password" label="Password" style={{margin: "2vh 0"}}/>
                <Checkbox/>
                <Buttons/>
            </Form>
            <Information/>
        </Container>
    )
}

function Buttons(){
    return(
        <div style={{display: "flex",justifyContent: "space-between",marginTop: "5vh"}}>
            <Button>Sign up</Button>
            <LinkedButton to="/Login">Have an account?</LinkedButton>
        </div>
    )
}