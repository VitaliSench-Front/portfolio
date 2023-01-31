import React from 'react';
import style from './Project.module.css';

type projectType = {
    title: string
    discrProject: string
}

function Project(props: projectType) {
    return (
        <div className={style.project}>
            <div className={style.projectTop}>
                <div className={style.icon}>Picture</div>
                <button className={style.projectButton}>Show</button>
            </div>
            <div className={style.projectBottom}>
                <h3>{props.title}</h3>
                <span>{props.discrProject}</span>
            </div>

        </div>
    );
}

export default Project;