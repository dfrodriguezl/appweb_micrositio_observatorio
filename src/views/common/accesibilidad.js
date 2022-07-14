import * as React from "react";
import {useState} from "react";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import TonalityIcon from "@mui/icons-material/Tonality";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import TextDecreaseIcon from "@mui/icons-material/TextDecrease";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import { Tooltip } from "@material-ui/core";
import * as Values from "../../Variables/values";
import { makeStyles, Fab } from "@material-ui/core";
import FontSizeChanger from 'react-font-size-changer';

const actions = [
  {
    icon: <TonalityIcon />,
    name: "Escala de Grises",
    operation: "Escala de Grises",
  },
  {
    icon: <TextIncreaseIcon />,
    name: "Aumentar el tamaño de la fuente",
    operation: "Aumentar el tamaño de la fuente",
  },
  {
    icon: <TextDecreaseIcon />,
    name: "Reducir el tamaño de la fuente",
    operation: "Reducir el tamaño de la fuente",
  },
];
const useStyle = makeStyles({
  botchat2: {
    position: "fixed",
    top: "75%",
    left: "3%",
    cursor: "pointer",
  },
  botchat3: {
    backgroundColor: "#821a3f",
  },
});


const FloatingActionButtons = () => {
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={classes.botchat2}>
      
      <Backdrop open={open} />
      <Tooltip title="Accesibilidad" arrow>
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          sx={{ position: "absolute", bottom: 16 }}
          icon={<AccessibilityNewIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          FabProps={{
            sx: {
              backgroundColor: "#821a3f",
              "&:hover": { backgroundColor: "#3e071a" },
            },
          }}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipPlacement="right"
              onClick={() => {
                handleClick(action.operation);
              }}
            />
          ))}
        </SpeedDial>
      </Tooltip>
    </div>
  );
};

export default FloatingActionButtons;
