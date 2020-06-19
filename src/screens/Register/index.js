import React from "react";
import Container from "../Container";
import Form from "./Form";
import Information from "./Information";

export default function() {
    return(
        <Container>
            <div>
                <Form/>
                <Information/>
            </div>
        </Container>
    )
}