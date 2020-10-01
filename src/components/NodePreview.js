import React from 'react';
import styled from 'styled-components';

const Node = styled.div`
    margin: 5px;
    border: 1px solid #333333;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;
    font-weight: bold;
    cursor: pointer;
    padding: 5px; 

    &:hover {
    background-color: #333333;
    color: #F5F5F5;
    }
`;

export const NodePreview = ({node, selectNode}) => {
    console.log('TCL:: NodePreview -> node, selectNode', node, selectNode);
    return (
        <Node onClick={() => selectNode(node)}>{node.name}</Node>
    )
};