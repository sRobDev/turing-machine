import React, { Component } from 'react';
import styled from 'styled-components';
import '../styles/node.scss';

const Input = styled.input`
    border: none;
    background: transparent;
    border-bottom: 2px solid #F5f5f5;
    font-weight: bold;
    border-radius: 0;
    padding: 3px;
    outline: none;
`;

const Button = styled.button`
    border: none;
    border-radius: 10px;
    width: 144px;
    height: 42px;
    font-weight: bold;
    background-color: #F5f5f5;
    color: #333333;

    transition: transform 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }
`;

export default Node = ({name}) => {
    return (
        <div className="node-wrapper">
            <h1>Node: {name}</h1>
            <div className="node-display">
                {name}
            </div>
            <div className="node-meta">
                <Input type="text" placeholder="Input" />
                <Input type="text" placeholder="Output" />
                <Button className="selector-button">LEFT</Button>
                <Button className="selector-button">RIGHT</Button>
                <select name="Next node name" defaultValue=''>
                    <option>First</option>
                    <option>Second</option>
                    <option>Third</option>
                </select>
            </div>
        </div>
    )
}