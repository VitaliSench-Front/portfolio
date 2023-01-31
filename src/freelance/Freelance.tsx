import React from 'react';
import style from './Freelance.module.css'
import styleContainer from '../common/styles/Container.module.css'

const Freelance = () => {
    return (
        <div className={style.freelance}>
            <div className={`${styleContainer.container} ${style.freelanceContainer}`}>
                <h2 className={style.title}>I'm looking into remote work options</h2>
                <button className={style.freelanceButton}>Hire Me</button>
            </div>
        </div>
    );
};

export default Freelance;