import React from "react";
import { NavLink } from "react-router-dom";


interface Props {
    url: string;
    name: string;
    style_item?: string;
}

const NavLinkItem: React.FC<Props> = (props) => {
    return (
        <NavLink to = {props.url} className={ props.style_item ? `${props.style_item}` : "nav-link px-2 text-white "}>{ props.name }</NavLink>
    )
}

export default NavLinkItem;