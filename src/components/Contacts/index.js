import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';


function ContactForm() {
    
    // Error handling
    const [errorMessage, setErrorMessage] = useState('');
    
    const [formState, setFormState] = useState({
        name:'', 
        email:'',
        message:''
    });

    const { name, email, message } = formState;
    
    // handles when values are added to the form
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                setErrorMessage('');
              } 
        }  else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
              } else {
                setErrorMessage('');
              }
        }

        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
        
    }

    // console.log(formState);
    
    // handleSubmit for onSubmit from form
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    
    return(
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                {/* // name input */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' defaultValue={name} onChange={handleChange}/>
                </div>
                {/* // email input */}
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' defaultValue={email} onChange={handleChange}/>
                </div>
                {/* // message textarea  */}
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name='message' rows='5' defaultValue={message} onChange={handleChange} />
                    {errorMessage && (
                <div>
                    <p className='error-text'>{errorMessage}</p>
                </div>
               )}
                </div>
               
                <button type="submit">Submit</button>
            </form>
        </section>
    )

}


export default ContactForm;