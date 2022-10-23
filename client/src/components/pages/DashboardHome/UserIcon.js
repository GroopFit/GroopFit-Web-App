import React from 'react'
import { useSelector } from 'react-redux'

const UserIcon = (props) => {
    var style_str = {};
    if (props.width != null) {
        style_str["width"] = props.width;
    }
    if (props.height != null) {
        style_str["height"] = props.height;
    }
    if (props.border_radius != null) {
        style_str["border-radius"] = props.border_radius;
    }
    if (props.box_shadow != null) {
        style_str["box-shadow"] = props.box_shadow;
    }
    const userData = useSelector(state => state.userData);
    return (
    <>
        <img alt={"image"} src={userData.info.userPicture} style={style_str}/>
    </>
    )
}

export default UserIcon