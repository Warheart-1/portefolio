import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import idEmailJS from '../data/idEmailJS';

export const  ContactForm = () => {
    const form = useRef(null);

    const sendEmail = (e : any) => { // a modifié plus tard, pour l'instant ça fonctionne avec le type any
        e.preventDefault();

        emailjs.sendForm(idEmailJS.idService, idEmailJS.idTemplate, e.target, idEmailJS.idUser)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return(
        <>
        <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="Name">
                <input type="text" name='from_name' placeholder='Your Name.' required></input>
            </label>
            <label htmlFor="Email">
                <input type="email" name='from_adresse' placeholder='Your Email.' required></input>
            </label>
            <label htmlFor="Message">
                <textarea name='message' placeholder='Your Message.' required></textarea>
            </label>
            <button type="submit" value="Send">Send</button>
        </form>
        </>
    )
}