import React from "react";
import style from './FormsControls.module.css'

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>Error</span>}
        </div>
    )

}