import * as React from 'react';
import Box from '@mui/material/Box';
import * as Values from 'Observatorio/Variables/values';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {makeStyles} from "@material-ui/core";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 2,
  borderRadius:"10px",
  padding:"20px",
  p: 4,
};

const useStyle = makeStyles({
  Titleh3: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeTitle,
    padding: Values.PaddingTitleText,
},

Textp: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "start",
    margin: "1em 0 0 0",
    marginTop:"30px"
}
   
})

export default function BasicModal(props) {
  const classes = useStyle()

  
  return (
      <Modal
        open={props.open}
        onClose={props.handleClose}
      >
        <Box sx={style}>
          <Typography  className={classes.Textp}>
            {props.Title}
          </Typography>
          <Typography  className={classes.Textp} >
            {props.textContainer}
          </Typography>
        </Box>
      </Modal>
  );
}