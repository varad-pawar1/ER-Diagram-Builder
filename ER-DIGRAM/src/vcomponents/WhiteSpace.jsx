import React, { useState } from "react";
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


const WhiteSpace = () => {

  const [colorMode, setColorMode] = useState("dark");



  return (
    <div className="White-space">
      <Box
        id="whiteBoard"
        style={{
          height: "90vh",
          border: "1px solid",
          backgroundColor: colorMode === "dark" ? "#333" : "#fff",
        }}
      >
        <ReactFlow  >
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

export default WhiteSpace;
