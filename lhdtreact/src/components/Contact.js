import styled from "styled-components";
import { useContext } from 'react';
import { userContext } from '../UserContext';

const Contact = () => {
    const { lang } = useContext(userContext);

    return (<Wrapper>
        <Title>
            {lang === "FR" && "Nous contact!"}
            {lang != "FR" && "Contact us!"}
        </Title>
        <Form>
            <Span>
                <Label>
                    {lang === "FR" && "Votre nom*"}
                    {lang != "FR" && "Full name*"}
                </Label>
                <Input />
            </Span>


            <Span>
                <Label>
                    Email*
                </Label>
                <Input />
            </Span>

            <Span>
                <Label>
                    {lang === "FR" && "Tel"}
                    {lang != "FR" && "Tel"}
                </Label>
                <Input />
            </Span>

            <Span>
                <Label>
                    {lang === "FR" && "Votre message*"}
                    {lang != "FR" && "Your message*"}
                </Label>
                <TextArea />
            </Span>

            <Submit>
                {lang === "FR" && "Soumettre"}
                {lang != "FR" && "Submit"}
            </Submit>
        </Form>

    </Wrapper>)
};

const Wrapper = styled.div`
font-family: "ginger";
width: 100vw;
height: 100vh;
background-color: var(--light);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Title = styled.h2`
font-size: 3rem;
margin-bottom: 2rem;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 50%;
max-width: 600px;
`;

const Label = styled.label`
font-size: x-large;
`;

const Span = styled.span`
display: flex;
flex-direction: column;
width: 100%;
`;

const TextArea = styled.textarea`
resize: none;
height: 300px;
`;

const Input = styled.input`
width: 100%;
height: 2rem;
border-radius: 5px;
border: 2px solid var(--light90);
margin: 0 0 1rem 0;
`;

const Submit = styled.button`
margin: 2rem 0;
border: solid 2px var(--dark);
width: 300px;
height: 50px;
background-color: var(--dark);
color: var(--light);
font-family: "ginger";
font-size: x-large;
`;

export default Contact;
