import React from 'react';
import style from './Skill.module.css';

type skillType = {
    title: string
    discText: string
}


function Skill(props: skillType) {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.discText}</span>
        </div>
    );
}

export default Skill;