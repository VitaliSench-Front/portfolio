import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'


const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.contactsForm}>
                    <input type={"text"}></input>
                    <input type={"text"}></input>
                    <textarea/>
                </form>
                <button className={style.contactsButton}>Submit</button>
            </div>
        </div>
    );
};

export default Contacts;