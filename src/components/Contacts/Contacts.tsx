import React, {useCallback, useState} from "react";
import styles from './Contacts.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faHouseUser} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {Contact} from "./Contact/Contact";
import {FormForContacts} from "./FormForContacts/FormForContacts";
import {MySnackbar} from "../SnackBar/SnackBar";


export const Contacts = () => {
    const [isModalShow, setIsModalShow] = useState(false);

    const toggleEditModal = useCallback((value: boolean) => {
        setIsModalShow(value)
    }, [])

    const logoContacts = [{icon: faEnvelope, spanText: 'nastyh1233@gmail.com'},
        {icon: faPhone, spanText: '+375 (44) 729-60-10'},
        {icon: faHouseUser, spanText: 'Minsk, Belarus'},]

    return (
        <div className={styles.contactsBlock} id='contacts'>
            <MySnackbar isModalShow={isModalShow} toggleEditModal={toggleEditModal}/>
            <div className={`${styleContainer.containerBlock} ${styles.containerContacts}`}>
                <div className={styles.getInTouchBlock}>
                    <h4 className={styles.contactsTitle}>Get in Touch</h4>
                    <div className={styles.contacts}>
                        {logoContacts.map((m, i) =>
                            <Contact key={i} icon={m.icon} spanText={m.spanText}/>)}
                    </div>
                </div>
                <FormForContacts toggleEditModal={toggleEditModal}/>
            </div>
        </div>
    )
}