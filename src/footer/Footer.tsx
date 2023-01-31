import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Icon from "./icon/Icon";


const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Vitaliy Sechilo</h2>
                <div className={style.icons}>
                    <Icon/>
                    <Icon/>
                    <Icon/>
                    <Icon/>
                </div>
                <span className={style.label}>Ⓒ 2019 All rights reserved</span>
            </div>
        </div>
    );
};

export default Footer;