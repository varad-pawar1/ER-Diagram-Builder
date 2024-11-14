import React, { useEffect, useState } from "react";
import {
  ReactFlow,
  Controls,
  MiniMap,
  Background,
  addEdge,
  Handle,
  EdgeText,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Box, Select } from "@chakra-ui/react";
import ColorModeFlow from "./ColorMode/ColorModeFlow";
import { ExportButton } from "./ExportButton/ExportButton";

const WhiteSpace = ({ tables }) => {
  const [colorMode, setColorMode] = useState("dark");
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [relationshipType, setRelationshipType] = useState("One-to-One");

  useEffect(() => {
    const newNodes = [];

    tables.forEach((table, tableIndex) => {
      const tableNode = {
        id: table.name,
        data: { label: <TableNode label={table.name} /> },
        position: { x: 100 + tableIndex * 300, y: 100 },
        style: {
          padding: "0px",
          borderRadius: "8px",
          background: "#21F3",
          color: "#fff",
        },
        draggable: true,
      };
      newNodes.push(tableNode);

      table.columns.forEach((col, colIndex) => {
        const columnNodeId = `${table.name}-${col.name}`;
        newNodes.push({
          id: columnNodeId,
          data: { label: <ColumnNode label={col.name} /> },
          position: { x: 100 + tableIndex * 300, y: 140 + colIndex * 50 },
          parentNode: table.name,
          style: {
            padding: "5px",
            textAlign: "center",
            borderRadius: "4px",
            background: "red",
            margin: "2px",
          },
          draggable: true,
        });
      });
    });

    setNodes(newNodes);
  }, [tables]);

  const onConnect = (connection) => {
    setEdges((eds) =>
      addEdge(
        {
          ...connection,
          label: relationshipType,
          animated: true,
          style: { stroke: "yellow", strokeDasharray: "5,5" },
          labelStyle: { fontSize: 10, fill: "black" },
        },
        eds
      )
    );
  };

  const handleDeleteEdge = (edgeId) => {
    setEdges((prevEdges) => prevEdges.filter((edge) => edge.id !== edgeId));
  };

  return (
    <div className="White-space">
      <Box
        id="whiteBoard"
        style={{
          height: "90vh",
          width: "100%",
          border: "1px solid",
          backgroundColor: colorMode === "dark" ? "#333" : "#fff",
        }}
      >
        <Select
          placeholder="Select Relationship"
          onChange={(e) => setRelationshipType(e.target.value)}
          value={relationshipType}
          style={{
            position: "absolute",
            top: 2,
            left: 2,
            zIndex: 2,
            width: "200px",
          }}
        >
          <option value="One-to-One">One-to-One</option>
          <option value="One-to-Many">One-to-Many</option>
          <option value="Many-to-Many">Many-to-Many</option>
        </Select>

        <ReactFlow nodes={nodes} edges={edges} onConnect={onConnect}>
          <ExportButton elementId="whiteBoard" />
          <Controls />
          <MiniMap
            style={{ backgroundColor: colorMode === "dark" ? "#333" : "gray" }}
          />
          <Background />
          <ColorModeFlow colorMode={colorMode} setColorMode={setColorMode} />
        </ReactFlow>
      </Box>
    </div>
  );
};

const TableNode = ({ label }) => (
  <div
    style={{
      padding: "0px",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: "14px",
      color: "#fff",
    }}
  >
    <h3>{label}</h3>
  </div>
);

const ColumnNode = ({ label }) => (
  <div
    style={{
      padding: "0px",
      textAlign: "center",
      borderRadius: "4px",
      background: "#fff",
      margin: "0",
    }}
  >
    <p style={{ fontSize: "12px", margin: "0" }}>{label}</p>
  </div>
);

// Custom edge component with delete button
const CustomEdge = ({ id, source, target, label, animated, style, onDelete }) => {
  const edgeStyle = { ...style, cursor: "pointer" };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          ...edgeStyle,
          width: "10px",
          height: "10px",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
        }}
      >
        <button
          onClick={() => onDelete(id)}
          style={{
            padding: "5px",
            background: "red",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default WhiteSpace;
