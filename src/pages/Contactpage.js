import React, { useState } from 'react'
import styled from 'styled-components'
import checkboximg from '../assets/interface/checkbox.svg'

const Contactpage = () => {
    const [user, setUser] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    })

    const [error, setError] = useState("");
    const [checkbox, setCheckbox] = useState(false);

    function handleChange(e) {
        const value = e.target.value;
        setUser({
            ...user,
            [e.target.name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            user.firstName.length === 0 ||
            user.lastName.length === 0 ||
            user.email.length === 0 ||
            user.message.length === 0 ||
            checkbox === false
        ) {
            setError("Please fill all the fields");
        } else {
            setError("");
            console.log(user.firstName, user.lastName, user.email, user.message);
            console.log("Submitted");
        }
    };
    return (
        <ContactWrapper>
            <HeaderText>Contact Me</HeaderText>
            <HeaderParagraph>Hi there, contact me to ask me about anything you have in mind.</HeaderParagraph>
            <form onSubmit={handleSubmit}>
                <Div>
                    <FormElement>
                        <Label
                            htmlFor="firstName"
                        >
                            First name
                        </Label>
                        <Input
                            name="firstName"
                            type="text"
                            id="first_name"
                            value={user.firstName}
                            onChange={handleChange}
                            placeholder="Enter your first name"
                        />
                    </FormElement>
                    <FormElement>
                        <Label
                            htmlFor="lastName"
                        >
                            Last Name
                        </Label>
                        <Input
                            name="lastName"
                            type="text"
                            id="last_name"
                            value={user.lastName}
                            onChange={handleChange}
                            placeholder="Enter your last name"
                        />
                    </FormElement>
                </Div>

                <FormElement>
                    <Label
                        htmlFor="email"
                    >
                        Email
                    </Label>
                    <Input
                        name="email"
                        type="text"
                        id="email"
                        value={user.email}
                        onChange={handleChange}
                        placeholder="yourname@email.com"
                    />
                </FormElement>

                <FormElement>
                    <Label
                        htmlFor="message"
                    >
                        Message
                    </Label>
                    <Textarea
                        name="message"
                        id="message"
                        value={user.message}
                        onChange={handleChange}
                        placeholder="Send me a message and I'll reply you as soon as possible..."
                    />
                </FormElement>


                <CheckWrapper className="flex items-center pt-[2px] pb-[4px] sm:pt-[24px]">
                    <Checkbox checkbox={checkbox} onClick={() => setCheckbox(false)}>
                        <Image
                            src={checkboximg}
                            objectFit="cover"
                            alt="close icon"
                        />
                    </Checkbox>
                    <CheckBoxContainer checkbox={checkbox} onClick={() => setCheckbox(true)}>
                    </CheckBoxContainer>

                    <Label
                        htmlFor=""
                    >
                        You agree to providing your data to Martins who may contact you.
                    </Label>
                </CheckWrapper>

                <Button id="btn__submit">Send message</Button>
            </form>

        </ContactWrapper>
    )
}

export default Contactpage

const ContactWrapper = styled.div`
    padding: 156px 360px 188px;
    @media (max-width:1024px) {
        padding: 62px 100px 52px;
    }

    @media (max-width:600px) {
        padding: 64px 16px 66px;
    }
`
const HeaderText = styled.h1`
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    color: var(--Gray-900);
    margin: 0 0 20px 0;
`
const HeaderParagraph = styled.h1`
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: var(--Gray-600);
    margin: 0 0 24px 0;
`
const Div = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:24px;
    @media (max-width:900px) {
        gap:0px;
            grid-template-columns: 1fr;
    }
`
const FormElement = styled.div`
    display:flex;
    flex-direction:column;
    margin: 24px 0 0 0;
`
const Label = styled.label`
    font-size: 14px;
    font-weight: 400;
    line-height:20px;
    margin-bottom:6px;
`
const Input = styled.input`
    border: 1px solid var(--Gray-300);
    padding-left: 10px;
    outline: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 400;
    width:100%;
    color: var(--Gray-900);
    height: 44px;
    &:hover,
    &:focus {
        transition: all 0.1s ease-out;
        border: 1px solid var(--Primary-300);
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #D1E9FF;
    }
    &::placeholder {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: var(--Gray-500);

    }`;

const Textarea = styled.textarea`
    border: 1px solid var(--Gray-300);
    font-family: 'Inter', sans-serif;
    padding: 12px 0 0 10px;
    outline: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 400;
    width:100%;
    color: var(--Gray-900);
    resize: none;
    height: 132px;
    @media (max-width:900px) {
        padding: 12px 10px 0;
    }
    &:hover,
    &:focus {
        transition: all 0.1s ease-out;
        border: 1px solid var(--Primary-300);
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #D1E9FF;
    }
    &::placeholder {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: var(--Gray-500);
    }`;

const Inputs = styled.input.attrs({ type: "checkbox" })`
        accent-color: var(--accents-one);
        opacity:0;
        width:16px;
        height:16px;
        position:absolute;
        margin: 0px 0 0 0px; 
        z-index:1;
        cursor:pointer;
        `;

const CheckBoxContainer = styled.div`
display: ${(props) => props.checkbox === true ? "none" : "block"};
border:1px solid var(--Gray-300);
height:20px;
width:20px;
border-radius:6px;
position:absolute;
cursor:pointer;
margin-right:12px;
&:hover {
        transition: all 0.1s ease-out;
        border: 1px solid var(--Primary-300);
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #D1E9FF;
`
const Checkbox = styled.div`
margin-top:2px;
cursor:pointer;
opacity: ${(props) => props.checkbox === true ? "1" : "0"};

`

const CheckWrapper = styled.div`
display:flex;
margin: 24px  0 32px 0;
`

const Image = styled.img`
width:20px;
margin-right:12px;
border-radius:6px;
&:hover {
        transition: all 0.1s ease-out;
        border: 1px solid var(--Primary-300);
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #D1E9FF;
`

const Button = styled.button`
padding:12px 0px;
border-radius: 8px;
width: 100%;
font-size: 16px;
line-height: 24px;
font-weight:600;
background: var(--Primary-600);
color:white;
border:none;
cursor:pointer;
`;