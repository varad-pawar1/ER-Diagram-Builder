import React, { useEffect, useState } from "react";
import {
  ReactFlow,
  Controls,
  MiniMap,
  Background,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Box } from "@chakra-ui/react";
import ColorModeFlow from "./ColorMode/ColorModeFlow";
import { ExportButton } from "./ExportButton/ExportButton";

const WhiteSpace = ({ tables }) => {
  const [colorMode, setColorMode] = useState("dark");

  // State for ReactFlow nodes and edges
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  // Update nodes and edges whenever `tables` prop changes
  useEffect(() => {
    const newNodes = tables.map((table, index) => ({
      id: table.name,
      data: {
        label: (
          <TableNode
            label={table.name}
            columns={table.columns.map((col) => col.name)}
          />
        ),
      },
      position: { x: 100 + index * 200, y: 100 }, // Adjust position dynamically
      style: { padding: "10px", border: "1px solid gray" },
    }));

    const newEdges = tables.flatMap((table, index) =>
      table.columns.map((col) => ({
        id: `${table.name}-${col.name}`,
        source: table.name,
        target: `${table.name}-${col.name}`,
        animated: true,
      }))
    );

    setNodes(newNodes);
    setEdges(newEdges);
  }, [tables]);

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
        <ReactFlow nodes={nodes} edges={edges}>
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

// Component to display table with columns
const TableNode = ({ label, columns }) => (
  <div style={{ textAlign: "center" }}>
    <h3 style={{ margin: "5px 0", fontWeight: "bold" }}>{label}</h3>
    <ul style={{ listStyle: "none", padding: 0 }}>
      {columns.map((col, index) => (
        <li key={index} style={{ fontSize: "12px" }}>
          {col}
        </li>
      ))}
    </ul>
  </div>
);

export default WhiteSpace;
