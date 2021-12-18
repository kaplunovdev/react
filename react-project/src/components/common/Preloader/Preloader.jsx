import style from "./Preloader.module.css";
import React from "react";
import  loadingSvg from '../../../assets/images/loading.svg'

let Preloader =(props)=>{
    return (
        <div>
            <img className={style.loadingSvg} src={loadingSvg}/>
        </div>
    )
}

export default Preloader;