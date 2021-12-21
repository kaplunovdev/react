import React from "react";
import style from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    }
    activateEditMode=()=>{
        this.setState({
            editMode:true
        })
    }
    deActivateEditMode=()=>{
        this.setState({
            editMode:false
        })
    }

    render() {
        return (
            <div className={style.ProfileStatus}>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deActivateEditMode} value={this.props.status}/>
                    </div>
                }

            </div>
        )
    }


}

export default ProfileStatus;
