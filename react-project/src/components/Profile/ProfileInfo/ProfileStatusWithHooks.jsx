import React, {useEffect, useState} from "react";
import style from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {

    const [editMode,setEditMode] = useState(false)
    const [status,setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const activateMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)

    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={style.ProfileStatus}>
            {!editMode &&
                <div>
                    <span
                        onDoubleClick={activateMode}


                    >{props.status || 'Non status'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input
                        onBlur={deActivateEditMode}
                        autoFocus={true}
                        onChange={onStatusChange}
                        value={status}
                           />
                </div>
            }

        </div>
    )


}

export default ProfileStatusWithHooks;
