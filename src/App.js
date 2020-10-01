import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import {NodePreview} from './components/NodePreview';
import './App.scss';
import Node from './components/Node';
import styled from 'styled-components';

const Button = styled.button`
  margin: 5px;

  // look and feel vals
  border: none;
  border-radius: 10px;
  background-color: #333333;
  width: 144px;
  height: 60px;
  color: #f5f5f5;
  font-weight: bold;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: black;
  }
`;

function App() {
  const [nodes, setNodes] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  
  const nodeList = [
    {
      name: 'Node1'
    },
    {
      name: 'Node2'
    },
    {
      name: 'Node3'
    }
  ];

  const createNode = () => {
    setSelectedNode({ name: 'newNode', isNew: true })
  }

  useEffect(() => {
    setNodes(nodeList);
  }, [])

  return (
    <div className="wrapper">
      <header>

      </header>
      <nav>
        <ul>
            <Button onClick={createNode}>Add Node</Button>
            <Button>Edit Node</Button>
            <Button>Input Alphabet List</Button>
            <Button>EXECUTE</Button>
        </ul>
      </nav>
      <main>
        { selectedNode ? (
          <Node {...selectedNode}/>
        ) : (
          <div style={{textAlign: `center`}}>
            <p>No node selected</p>
            <Button onClick={createNode}>Create Node</Button>
          </div>
        )}
      </main>
      <aside>
        <ul>
          { nodes.map(node => <NodePreview node={node} key={node.name} selectNode={setSelectedNode}/>) }
        </ul>
      </aside>
    </div>
  );
}

export default App;
