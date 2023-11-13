import React from "react";
import {createElement } from "react";

const StaticType = ({ staticStrMultiline, staticBoolean, staticInteger, staticEnum }) => {
    return (
        <div>
            <h1>Static Types</h1>
            <h6>Multiline: {staticStrMultiline}</h6>
            <h5>Boolean: {staticBoolean == true ? "True" : "false"}</h5>
            <h5> Integer: {staticInteger}</h5>
            
            <div style={{background:staticEnum}}>
                <h5> Enum: {staticEnum}</h5>
            </div>
            
        </div>
    );
};

export default StaticType;
