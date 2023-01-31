import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My Skills</h2>
                <div className={style.skills}>
                    <Skill title="HTML & CSS" discText={"about HTML & CSS"}/>
                    <Skill title="JS" discText={"about JS"}/>
                    <Skill title="React" discText={"about React"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;