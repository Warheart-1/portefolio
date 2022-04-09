import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import idEmailJS from '../data/idEmailJS'; 
import swal from 'sweetalert2';
import Banner from './Banner';

export const  ContactForm = () => {
    const form = useRef(null);

    const sendEmail = (e : any) => { // a modifié plus tard, pour l'instant ça fonctionne avec le type any
        e.preventDefault();

        emailjs.sendForm(idEmailJS.idService, idEmailJS.idTemplate, e.target, idEmailJS.idUser)
            .then((result) => {
                console.log(result.text);
                swal.fire({
                    title: 'Merci !',
                    text: 'Votre message a bien été envoyé !',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            }, (error) => {
                console.log(error.text);
                swal.fire({
                    title: 'Oups !',
                    text: 'Une erreur est survenue, veuillez réessayer plus tard.',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })

            });
        e.target.reset();
    };

    return(
        <>
            <Banner/>
            <div className="container-Contact">
                <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="Name">
                        <input type="text" name='from_name' placeholder='Votre nom.' required></input>
                    </label>
                    <label htmlFor="Email">
                        <input type="email" name='from_adresse' placeholder='Votre adresse mail.' required></input>
                    </label>
                    <label htmlFor="Message">
                        <textarea name='message' placeholder='Votre message.' required></textarea>
                    </label>
                    <button type="submit" value="Send">Envoyé</button>
                </form>
            </div>
        </>
    )
}