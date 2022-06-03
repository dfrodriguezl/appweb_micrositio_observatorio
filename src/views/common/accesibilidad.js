import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import {Tooltip} from "@material-ui/core";
import {
  makeStyles,
  Fab,
} from "@material-ui/core";

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];
const useStyle = makeStyles({    
    botchat2:{
      position: "fixed",
      top: "75%",
      left: "3%",      
      cursor:"pointer"
  },
  botchat3:{
    backgroundColor:"#821a3f"
},
})

const FloatingActionButtons= () =>  {
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
        sx={{ position: 'absolute', bottom: 16}}
        icon={<AccessibilityNewIcon/>}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}    
        FabProps={{sx:{backgroundColor:'#821a3f',"&:hover":{backgroundColor:"#3e071a"}}}}  
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}            
            tooltipPlacement="right"
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
      </Tooltip>
    </div>
  );
}

export default FloatingActionButtons;