import styled from "styled-components";
import { useContext } from 'react';
import { userContext } from '../UserContext';
import bg from '../images/TREMBLANT_SF_interior_autumn_LR.jpg';
import logoSrc from "../images/Logo/White/LHDT_Logo_White.png";

const Contact = () => {
    const { lang } = useContext(userContext);
    let formData = {};


    const handleSubmit = async (e) => {
        e.preventDefault();
        e.target.querySelectorAll("input, textarea, select").forEach(e => {
            console.log(e.name + " = " + e.value)
            formData[e.name] = e.value;
        });


        const emailHtml = `
    <b>Name:</b> ${formData.firstName} ${formData.lastName}<br><br>
    <b>Email</b>: ${formData.email}<br><br>
    <b>Tel</b>: ${formData.telephone} <br><br>
    <b>Unit type</b>: ${formData.unitType} <br><br>
    <b>Budget</b>: ${formData.budget}<br><br>
    <b>Is a broker?</b>: ${formData.isBroker}<br><br>
    <b>Message</b>: ${formData.userMessage}<br><br>

    `;

        const emailText = `Name:${formData.firstName} ${formData.lastName}  ///
    Email: ${formData.email} ///
    Tel: ${formData.telephone} ///
    Unit type: ${formData.unitType} ///
    Budget: ${formData.budget} ///
    Is a broker?: ${formData.isBroker} ///
    Message: ${formData.userMessage} `;

        await fetch('http://api.lhymnedestrembles-timdennis.com/sendmail', {
            body: JSON.stringify({
                "to": "alimentationjeff@gmail.com",
                "subject": "A new message from LHDT",
                "text": emailText,
                "html": emailHtml

            }),
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })


        //const sendEmail = await fetch()
        //Send the email and get the res.
        //.then(formData = {});

    };

    return (<Wrapper id="contact">
        <Darken>


            <Info>
                <Hr />
                <LogoWrap>
                    <Logo alt="Logo" src={logoSrc} />
                </LogoWrap>
                <Hr />

            </Info>
            <Form onSubmit={(e) => { handleSubmit(e) }}>
                <Title>514.774.0224</Title>
                <Title>timothy.dennis@remax-quebec.com</Title>
                <Hr />
                <Dual>
                    <Span>
                        <LabelDual>
                            {lang === "FR" && "Prénom"}
                            {lang !== "FR" && "First name"}
                        </LabelDual>
                        <InputDual name="firstName" maxLength={100} required />
                    </Span>            <Span>
                        <LabelDual>
                            {lang === "FR" && "Nom"}
                            {lang !== "FR" && "Last name"}
                        </LabelDual>
                        <InputDual name="lastName" maxLength={100} required />
                    </Span>
                </Dual>


                <Span>
                    <Label>
                        {lang === "FR" && "Courriel"}
                        {lang !== "FR" && "Email"}
                    </Label>
                    <Input type="email" name="email" maxLength={100} required />
                </Span>

                <Span>
                    <Label>
                        {lang === "FR" && "Téléphone"}
                        {lang !== "FR" && "Tel."}
                    </Label>
                    <Input type="tel" name="telephone" required />
                </Span>

                <Dual>
                    <Span>
                        <LabelDual>
                            {lang === "FR" && "Type d'unité"}
                            {lang !== "FR" && "Type of unit"}
                        </LabelDual>
                        <SelectDual name="unitType" required>
                            <option value={null} selected></option>
                            <Option value="Maisons de ville en montagne - Phase 1">{lang === "FR" ? "Maisons de ville en montagne " : "Mountain Townhomes " }- Phase 1</Option>
                            <Option value="Condos en montagne - Phase 1">{lang === "FR" ? "Condos en montagne " : "Mountain Condos " }- Phase 1</Option>
                            <Option value="Maisons en montagne - Phase 2">{lang === "FR" ? "Maisons en montagne " : "Mountain Homes " }- Phase 2</Option>
                        </SelectDual>
                    </Span>
                    <Span>
                        <LabelDual>
                            Budget
                        </LabelDual>
                        <SelectDual name="budget" required>
                            <option value={null} selected></option>
                            <Option value="500-750">$500,000 - $750,000</Option>
                            <Option value="750-1">$500,000 - $1,000,000</Option>
                            <Option value="1-1.25">$1,000,000 - $1,250,000</Option>
                            <Option value="1.25-1.5">$1,250,000 - $1,500,000</Option>
                            <Option value="1.5plus">$1,500,000 + </Option>
                        </SelectDual>
                    </Span>

                </Dual>

                <Span>
                    <Label>
                        {lang === "FR" && "Êtes-vous un courtier"}
                        {lang !== "FR" && "Are you a real estate broker?"}
                    </Label>
                    <Select name="isBroker" required>
                    <option value={null} selected></option>
                        <Option value="Yes">
                            {lang === "FR" && "Oui"}
                            {lang !== "FR" && "Yes"}
                        </Option>
                        <Option value="No">
                            {lang === "FR" && "Non"}
                            {lang !== "FR" && "No"}
                        </Option>
                    </Select>
                </Span>

                <Span>
                    <Label>
                        Message
                    </Label>
                    <TextArea name="userMessage" maxLength={10000} />
                </Span>

                <Submit>
                    {lang === "FR" && "Soumettre"}
                    {lang !== "FR" && "Submit"}
                </Submit>
            </Form>

        </Darken>
    </Wrapper>)
};

// price brackets
// are you a broker
// unit type


const Wrapper = styled.div`
font-family: "ginger";
width: 100vw;
height: 100vh;
background-image: url(${bg});
color: var(--light);
background-size: cover;
background-position: center;
background-repeat: no-repeat;
    @media only screen and (max-width: 900px) {
        height: auto;
        min-height: 100vh;

    }   
`;

const Darken = styled.div`
width:100%;
height: 100%;
background-color: var(--dark-90);
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;

    @media only screen and (max-width: 900px) {
        flex-direction: column;
        justify-content: center;
    }   
`;

const Info = styled.div`
margin: 0 1rem;
width: 30%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media only screen and (max-width: 900px) {
        width: 90%;
    }  
`;

const LogoWrap = styled.span`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Logo = styled.img`
    width: 100%;
    margin: 48px 0;
`;

const Hr = styled.hr`
    margin: 48px 0;
    color: var(--light);
    width: 100%;
`;

const Title = styled.h2`
font-size: 1rem;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 70%;
margin: 0 1rem;
max-width: 600px;
@media only screen and (max-width: 900px) {
        width: 90%;
    }  
`;

const Label = styled.label`
font-size: x-large;
`;
const LabelDual = styled.label`
font-size: x-large;
margin-left: 5%;
`;

const Span = styled.span`
display: flex;
flex-direction: column;
width: 100%;
`;

const Dual = styled.span`
width: 105%;
display: flex;
align-items: center;
justify-content: space-between;
`;

const TextArea = styled.textarea`
resize: none;
height: 200px;
width: 100%;
margin: .2rem 0 1rem 0;
border: 0;
border-bottom: 1px solid var(--light);
background-color: rgba(90,90,90,0.4);
color: white;
padding: .5rem 0 0 .5rem;
font-family: "Ginger";
font-size: medium;
:focus{
    outline: none;
}
`;

const Input = styled.input`
width: 100%;
height: 3rem;
border: 0;
border-bottom: 1px solid var(--light);
margin: .2rem 0 1rem 0;
background-color: rgba(90,90,90,0.4);
color: white;
padding: 0 0 0 .5rem;
font-family: "Ginger";
font-size: medium;
:focus{
    outline: none;
}
`;

const InputDual = styled.input`
width: 90%;
height: 3rem;
border: 0;
border-bottom: 1px solid var(--light);
margin: .2rem 0 1rem 5%;
background-color: rgba(90,90,90,0.4);
color: white;
padding: 0 0 0 .5rem;
font-family: "Ginger";
font-size: medium;
:focus{
    outline: none;
}
`;

const Submit = styled.button`
margin: 2rem 0;
border: solid 2px var(--blue1);
width: 300px;
height: 50px;
background-color: var(--light);
color: var(--dark);
font-family: "ginger";
font-size: x-large;
`;

const Select = styled.select`
width: 100%;
height: 3rem;
border: 0;
border-bottom: 1px solid var(--light);
margin: .2rem 0 1rem 0;
background-color: rgba(90,90,90,0.4);
color: white;
font-family: "Ginger";
font-size: larger;
:focus{
    outline: none;
}
`;

const Option = styled.option`
color: black;
font-family: "Ginger";
`

const SelectDual = styled.select`
width: 90%;
height: 3rem;
border: 0;
border-bottom: 1px solid var(--light);
margin: .2rem 0 1rem 5%;
background-color: rgba(90,90,90,0.4);
color: white;
font-family: "Ginger";
font-size: medium;
:focus{
    outline: none;
}
`;


export default Contact;
