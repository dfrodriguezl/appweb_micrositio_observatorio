import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { Grid } from '@material-ui/core';
import { AiOutlineMenu,
         AiOutlineLeft, 
         AiOutlineRight, } from "react-icons/ai";
import logoDane from "Observatorio/img/DANE__Geovisor__icon__logoDANE__01.svg";
import logoObservatorio from "Observatorio/img/logo-observatorio.svg";


const drawerWidth = 370;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
        palette:{
        main: "#A2024D"
    },
    appBar: {   
        width: 64, 
        height:64,
        // bottom:0,
        // left:0,
        top: 500, 
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: 64,
      display:'none',
      right: drawerWidth,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  logo: {
      height:'3em',
      margin: 0,
      padding:0,
  
  },
  nombre:{
    fontSize: '13px',
    fontWeight:'bold',
  
  }, 
  paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      borderRadius: 10,
      textAlign: 'center',
    },
    drawer: {
        
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      marginLeft: drawerWidth,  
      width: `calc(100% - ${drawerWidth})`,
      height: 'calc(100% - 70vh)',
      top:'70vh',
    },
     drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },   
  }));

const DrawerBottom = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
  
    const handleDrawerBottomOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerBottomClose = () => {
      setOpen(false);
    };    
    
    return ( 
        <div>
             <AppBar 
                color = 'primary'
                position="absolute"
                className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                <IconButton            
                    aria-label="open drawer"
                    onClick={handleDrawerBottomOpen}
                    edge="start"
                    // className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <AiOutlineMenu/> 
                </IconButton> 
                </Toolbar>
            </AppBar>            
            <Drawer
            
                className={classes.drawer}
                variant="persistent"
                anchor="bottom"
                open={open}
                classes={{
                paper: classes.drawerPaper,
                }}
            >               
                <div className={classes.drawerHeader}>
               
                <IconButton onClick={handleDrawerBottomClose}>
                    {theme.direction === 'ltr' ? <AiOutlineLeft/> : <AiOutlineRight/>}
                </IconButton>
                <img className={classes.logo} src= {logoObservatorio} />
                <Grid container className={classes.contenedorObservatorio} item xs={12} sm ={6}> 
                    <Typography variant="body1" color="secondary">Observatorio</Typography> 
                    <Typography variant="body1" className={classes.nombre} color="initial">Inmobiliario Nacional</Typography> 
                </Grid>
                <Grid container justifyContent='flex-end' item xs={12} sm ={6}>
                    <a href= 'https://www.dane.gov.co/' target="_blank" >
                    <img className={classes.logo} src= {logoDane} />        
                    </a> 
                </Grid>
                
                </div>
                <Divider />  
            </Drawer>
        </div> );
}
 
export default DrawerBottom;