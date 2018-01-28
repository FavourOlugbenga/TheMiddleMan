import React from "react";
import "./NavBar.css";

export default ({ pages, onChange } = {}) => (
    <nav> 
    <ul >
        {pages.map(({ name, component } = {}) => (
            <li key={name}>
                <a onClick={() => onChange(component)}>{name}</a>
            </li>
        ))}
    </ul>
    </nav>
);