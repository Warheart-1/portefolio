import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import idEmailJS from '../data/idEmailJS'; 
import swal from 'sweetalert2';
import Banner from './Banner';
import "../style/ContactForm.css";

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
                    <div className="form-group">
                        <input type="text" name='from_name' required></input>
                        <label htmlFor="Votre Nom">
                            Nom
                        </label>
                        <line></line>
                    </div>
                    <div className="form-group">
                        <input type="email" name='from_adresse' required></input> 
                        <label htmlFor="Email">
                            Email
                        </label>
                        <line></line>
                    </div>
                    <div className="form-group">
                        <textarea name='message' placeholder='Message...' required></textarea>
                        <line></line>
                    </div>
                    <button type="submit" value="Send">Envoyé</button>
                </form>
            </div>
        </>
    )
}