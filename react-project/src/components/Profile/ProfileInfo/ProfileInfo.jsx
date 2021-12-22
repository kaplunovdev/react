import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>

            <div className={style.image_top}>
                <img src="https://www.orangesmile.com/ru/foto/usa/fodder120132.jpg" alt='image'/>
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

            <div className={style.userCard}>

                <div className={style.avatar}>
                    <img
                        src={props.profile.photos.large} alt=''/>
                </div>
                <div>
                    <p>{props.profile.fullName}</p>
                    <p>{props.profile.aboutMe}</p>
                    <p>City: Taganrog</p>
                    <p>Education: Colledge</p>
                    <p>{props.profile.contacts.instagram}</p>

                </div>

            </div>

        </div>
    );
};

export default ProfileInfo;
