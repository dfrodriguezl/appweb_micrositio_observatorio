import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { Grid, Button, Box } from '@material-ui/core';
import { AiOutlineMenu, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import logoDane from "../../img/DANE__Geovisor__icon__logoDANE__01.svg";
import logoObservatorio from "../../img/Logo_Observatorio_inmobiliario_Opcion1.svg";
import { AiOutlineDownload, AiOutlineFilter, AiOutlineQuestionCircle } from "react-icons/ai";
import { FiLayers } from "react-icons/fi";
// import Mapa from './mapa';

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
      color:"white",
        transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    color:"white",
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "black",
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color = 'default'
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton            
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
             <AiOutlineMenu/> 
           </IconButton> 
          
          <Typography variant="h6" noWrap color="secondary">
            Geovisor de Analisis Inmobiliario 
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          
          <Grid item xs={12} sm ={6}>
            <img className={classes.logo} src= {logoDane} />
          </Grid>
          <Grid item xs={12} sm ={6}>
             <img className={classes.logo} src= {logoObservatorio} />        
          </Grid>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <AiOutlineLeft/> : <AiOutlineRight/>}
          </IconButton>
        </div>
        <Divider />       
        <Box padding = {2}>

        <Grid container 
                    alignContent = "center"
                    alignItems = "center"
                    justifyContent ="space-between">
                <Grid item  
                    sm ={3}>
                        <AiOutlineQuestionCircle fontSize = {25} />
                        <Typography paragraph>
                            Ayuda
                        </Typography>
                </Grid>
                <Grid item sm ={3}>
                        <AiOutlineFilter  fontSize = {25} />
                        <Typography paragraph>
                            Consulta
                        </Typography>
                </Grid>
                <Grid item  sm ={3}>
                        <FiLayers fontSize = {25} />
                        <Typography paragraph>
                            Mapa Base
                        </Typography>
                </Grid>
                <Grid item sm ={3}>
                    <AiOutlineDownload fontSize = {25}/> 
                    <Typography paragraph>
                            Descarga
                    </Typography>    
                </Grid>
        </Grid>
        </Box>
        <Divider />       
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {/* <Mapa/>      */}
      </main>
    </div>
  );
}


