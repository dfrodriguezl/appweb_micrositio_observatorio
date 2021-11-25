import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { Grid, Box } from '@material-ui/core';
import {
  AiOutlineMenu,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
//-----------inicio cambios
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import PropTypes from 'prop-types';
//-----------Fin cambios
import logoDane from "Observatorio/img/DANE__Geovisor__icon__logoDANE__01.svg";
// import logoObservatorio from "../../img/Logo_Observatorio_inmobiliario_Opcion1.svg";
// import logoDane from "../../img/logo-dane.svg";
import logoObservatorio from "Observatorio/img/logo-observatorio.svg";
//-----------inicio cambios
import Instructivo from "Observatorio/img/bannerhelp.png";
import {
  AiOutlineQuestionCircle,
  AiFillMail
} from "react-icons/ai";
import {
  FaSearchLocation,
  FaFolderOpen,
  FaCog,
  FaBookReader,
  FaInfo,
  FaUserAlt
} from "react-icons/fa";
// import ModalAyuda from './ui/modalAyuda';
//-----------Fin cambios


import Formulario from './ui/Formulario';
import departamentos from '../../views/common/departamentos.json'
import municipios from '../../views/common/municipios.json'
import CloseIcon from '@mui/icons-material/Close';
import * as Values from 'Observatorio/Variables/values';
import Buttonredwine from "../../views/common/buttonredwine";
const drawerWidth = 370;

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#821A3F",
    fontWeight: "bold",
    lineHeight: "1 !important"
  },
  titleGeovisor: {
    color: "#4C4C4C",
    fontWeight: "bold",
    lineHeight: "1 !important"
  },
  root: {
    display: 'flex',
    lineHeight: "1.3 !important"
  },
  palette: {
    main: "#A2024D"
  },
  appBar: {
    color: "white",
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    // color:"white",
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  logo: {
    height: '3em',
    margin: 0,
    padding: 0,

  },
  Instructivo: {
    height: '25em'
  },
  contenedorSubMenu: {
    marginTop: '8px',
    paddingLeft: 1,
    paddingRight: 1,
    minWidth: '85px',
    fontSize: '.85em',
    textTransform: 'none',
    fontFamily: 'Roboto'
  },
  contenedorSubMenuHelp: {
    marginTop: '8px',
    paddingLeft: 1,
    paddingRight: 1,
    textTransform: 'none',
    fontFamily: 'Roboto'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '18em',
    borderRadius: '50%',
  },
  select: {
    borderRadius: 5,
    height: 50,
    fontSize: '10px',
    borderBotton: 'none',
    backgroundColor: '#fff',
    border: '1px solid #000',
  },
  container: {
    display: 'initial',
    textAlign: 'center',
    position: 'relative',
    padding: '8px 4px',
  },
  contenedorObservatorio: {
    marginLeft: '8px',
  },
  nombre: {
    fontSize: '13px',
    color: "#4C4C4C"
  },
  typography: {
    fontSize: '.9em',
    color: '#666',
    marginTop: '.3em'
  },
  icono: {
    background: 'transparent',
    height: '.9em',
    color: '#666',
    padding: '0',
    cursor: 'pointer',
    borderRadius: '100%',
    webkitTransition: 'all 0.3s ease-in-out',
    "&:hover": {
      backgroundColor: '#666',
      color: '#fff',
      boxShadow: ' 0 0 0 10px #666'
    }
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 10,
    textAlign: 'center',
  },
  contenedorParrafo: {
    width: 500,
  },
  logoModal: {
    margin: 'auto',
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
    // height: 'calc(100% - 100px)',
    // top:0
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
  closeIcon: {
    position: "relative",
    float: "right",
    cursor: "pointer"
  },
  Textp: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: "0.9em",
    textAlign: "start",
    margin: "1em 0 0 0",
  }
}));

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const setPosition = props.setPosition
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [openModal, setOpenModal] = React.useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };


  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  //State del menu modal
  const [value, setValue] = useState(0);
  const handleChange = (e, value) => {
    setValue(value);
  };
  //---fin state modal


  //  State del menu drawer
  const [values, setValues] = useState(2);
  const handleChanges = (e, value) => {
    setValues(value);
  };

  const handleMunicipio = (value) => {
    municipios.forEach((data) => {
      if (data.cod_mpio == value) {
        console.log(data.cod_mpio)
        setPosition(data)
      }
    })
  }


  //---fin state menu drawer

  const [opcionesDepartamento, setDepartamentos] = React.useState(departamentos);
  const [opcionesMunicipio, setMunicipio] = React.useState(municipios)

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color='primary'
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
            <AiOutlineMenu />
          </IconButton>

          <Typography variant="h6" noWrap className={classes.titleGeovisor}>
            Geovisor de Análisis Inmobiliario
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
          <a href="/observatorio"><img className={classes.logo} src={logoObservatorio} /></a>
          <Grid container className={classes.contenedorObservatorio} item xs={12} sm={6}>
            <Typography variant="body1" className={classes.title} >Observatorio</Typography>
            <Typography variant="body1" className={classes.nombre} >Inmobiliario Nacional</Typography>
          </Grid>
          <Grid container justifyContent='flex-end' item xs={12} sm={6}>
            <a href='https://www.dane.gov.co/' target="_blank" >
              <img className={classes.logo} src={logoDane} />
            </a>
          </Grid>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <AiOutlineLeft /> : <AiOutlineRight />}
          </IconButton>
        </div>
        <Divider />

        <Tabs value={values} onChange={handleChanges} >
          <Tab className={classes.contenedorSubMenu} onClick={handleOpen} label='Ayuda' icon={<AiOutlineQuestionCircle

            className={classes.icono} fontSize={20} />} {...a11yProps(0)} />
          <Tab className={classes.contenedorSubMenu} label='Ubicación' icon={<FaSearchLocation className={classes.icono} fontSize={20} />} {...a11yProps(4)} />
          <Tab className={classes.contenedorSubMenu} label='Temas' icon={<FaFolderOpen className={classes.icono} fontSize={20} />} {...a11yProps(1)} />
          <Tab className={classes.contenedorSubMenu} label='Herramientas' icon={<FaCog className={classes.icono} fontSize={20} />} {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={values} index={1}>
          <Typography variant="body1" className={classes.Textp} color="initial">Realice la selección geográfica que desea ver en el mapa</Typography>
          <Formulario
            opciones={opcionesDepartamento}
            setOpciones={handleMunicipio}
            municipios={opcionesMunicipio} />
        </TabPanel>
        <TabPanel value={values} index={2}>
          <Typography align='left' variant="body1" className={classes.Textp} color="initial">Aqui encuentra los diferentes temas. </Typography>

        </TabPanel>
        <TabPanel value={values} index={3}>
          <Typography align='left' variant="body1" className={classes.Textp} color="initial">Envíe su consulta por correo electrónico o tramite su petición, queja, reclamo, sugerencia o denuncia en el formulario DANE. </Typography>
          <Grid container justifyContent='center' item xs={12} sm={12}>
            <Buttonredwine Title="Ir" href="/Observatorio/Contacto"></Buttonredwine>
          </Grid>

        </TabPanel>

        {/* <ModalAyuda/> */}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={openModal}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >

          <Fade in={openModal}>
            <div className={classes.paper}>
              <a onClick={handleClose} className={classes.closeIcon}>
                <CloseIcon></CloseIcon>
              </a>
              <Typography
                variant='h6'>Geovisor Análisis Inmobiliario</Typography>
              <Tabs value={value} onChange={handleChange} >
                <Tab label='Guía Rápida' className={classes.contenedorSubMenuHelp} icon={<FaBookReader />} {...a11yProps(0)} />
                <Tab label='Acerca de' className={classes.contenedorSubMenuHelp} icon={<FaInfo />} {...a11yProps(1)} />
                <Tab label='Contacténos' className={classes.contenedorSubMenuHelp} icon={<FaUserAlt />} {...a11yProps(2)} />
              </Tabs>
              <TabPanel value={value} index={0}>
                <img className={classes.Instructivo} src={Instructivo} alt='Instructivo geovisor' />
              </TabPanel>
              <TabPanel className={classes.contenedorParrafo} value={value} index={1}>
                <Typography align='left' variant="body1" color="initial">Geovisor de Análisis Inmobiliario: Herramienta de consulta y visualización de la información sociodemográfica del DANE correspondiente Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </Typography>
              </TabPanel>
              <TabPanel className={classes.contenedorParrafo} value={value} index={2}>
                <Typography align='left' variant="body1" color="initial">Envíe su consulta por correo electrónico o tramite su petición, queja, reclamo, sugerencia o denuncia en el formulario DANE. </Typography>

                {/* <Typography align='left' style={{display: 'block'}}> <MenuIcon className={classes.logoModal}/>  Ventanilla única de PQRSD, aquí.</Typography>
            <Typography align='left' style={{display: 'block'}}><AiFillMail /> contacto@dane.gov.co</Typography>  */}

                <Tab label="Ventanilla única de PQRSD, aquí." icon={<AiOutlineMenu />} />
                <Tab label="contacto@dane.gov.co" icon={<AiFillMail />} />
              </TabPanel>
            </div>
          </Fade>
        </Modal>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

      </main>
    </div>
  );
}


