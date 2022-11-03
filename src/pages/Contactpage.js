import React, { useState } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import checkboximg from '../assets/interface/checkbox.svg'

const Contactpage = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    })

    const [firstnameerror, setfirstnameError] = useState(false)
    const [lastnameerror, setlastnameError] = useState(false)
    const [emailerror, setemailError] = useState(false)
    const [messageerror, setmessageError] = useState(false)
    const [checkboxerror, setcheckboxError] = useState(false)

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
        if (user.firstName.length === 0 ||
            user.lastName.length === 0 ||
            user.email.length === 0 ||
            user.message.length === 0 ||
            checkbox === false
        ) {
            if (user.firstName.length === 0) setfirstnameError(true)
            else setfirstnameError(false)
            if (user.lastName.length === 0) setlastnameError(true)
            else setlastnameError(false)
            if (user.email.length === 0) setemailError(true)
            else setemailError(false)
            if (user.message.length === 0) setmessageError(true)
            else setmessageError(false)
            if (checkbox === false) setcheckboxError(true)
            else setcheckboxError(false)
        } else {
            setfirstnameError(false)
            setlastnameError(false)
            setemailError(false)
            setmessageError(false)
            setcheckboxError(false)
            console.log(user.firstName, user.lastName, user.email, user.message);
            console.log("Submitted");
        }
    };
    return (
        <div>
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
                                firstnameerror={firstnameerror}
                            />
                            {firstnameerror && <ErrorText>Please enter a first name</ErrorText>}
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
                                lastnameerror={lastnameerror}
                            />
                            {lastnameerror && <ErrorText>Please enter a last name</ErrorText>}
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
                            emailerror={emailerror}
                        />
                        {emailerror && <ErrorText>Please enter an email</ErrorText>}
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
                            messageerror={messageerror}
                        />
                        {messageerror && <ErrorText>Please enter a message</ErrorText>}
                    </FormElement>


                    <CheckWrapper className="flex items-center pt-[2px] pb-[4px] sm:pt-[24px]">
                        <Checkbox checkbox={checkbox} onClick={() => setCheckbox(false)}>
                            <Image
                                src={checkboximg}
                                objectFit="cover"
                                alt="close icon"
                            />
                        </Checkbox>
                        <CheckBoxContainer checkbox={checkbox} onClick={() => setCheckbox(true)} >
                        </CheckBoxContainer>

                        <Label
                            htmlFor=""
                        >
                            You agree to providing your data to Martins who may contact you.
                        </Label>
                    </CheckWrapper>
                    {checkboxerror && <ErrorText>Please check the box</ErrorText>}

                    <Button id="btn__submit">Send message</Button>
                </form>

            </ContactWrapper>

            <Footer></Footer>
        </div>
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
        border: ${(props) => props.firstnameerror === false || props.lastnameerror === false || props.emailerror === false ? "1px solid var(--Primary-300)" : "1px solid #F89687"};
        box-shadow: ${(props) => props.firstnameerror === false || props.lastnameerror === false || props.emailerror === false ? "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #D1E9FF"
        : "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #FFD3CC"};

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
                border: ${(props) => props.messageerror === false ? "1px solid var(--Primary-300)" : "1px solid #F89687"};
        box-shadow: ${(props) => props.messageerror === false ? "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #D1E9FF"
        : "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #FFD3CC"};
    }
    &::placeholder {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: var(--Gray-500);
    }`;

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
margin: 24px  0 0px 0;
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
margin: 32px 0 0 0;
line-height: 24px;
font-weight:600;
background: var(--Primary-600);
color:white;
border:none;
cursor:pointer;
:hover {
    opacity:0.5;
}
`;
const ErrorText = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 20px;
margin: 6px 0 0 0;
color: var(--Primary-400-B);
`