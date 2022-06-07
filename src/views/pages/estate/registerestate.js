import { Grid, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import React from 'react';
import * as Values from 'Observatorio/Variables/values';
import triangles from "Observatorio/img/paris.jpg";
import Styled from "styled-components";
import imageItem from "Observatorio/img/inmueble.jpg"
import Nature from "Observatorio/img/objetivo.jpg"
import Justice from "Observatorio/img/Justice-rafiki.svg"
import Finance from "Observatorio/img/Finance-rafiki.svg"
import Addres from "Observatorio/img/Address-rafiki.svg"
import DocumentBro from "Observatorio/img/alcance.jpg"
import NewIdea from "Observatorio/img/usos.jpg"
import DataExtration from "Observatorio/img/fuentes.jpg"
const useStyle = makeStyles({
    DataExtration: {
        maxWidth: 500
    },
    listyle:{
        paddingLeft:"0.6em",
        paddingRight: "0.6em",
      },
    marginBottom: {
        marginBottom: 50
    },
    imageNewIdea: {
        position: "absolute",
        width: 650,
        right: 100,
        zIndex: -1
    },
    imageSub: {
        maxWidth: 300
    },
    sectionPar: {
        backgroundColor: "#F4F4F4",
        padding: "0 10vw 2vw 10vw",
    },
    sectionParmovil: {
        backgroundColor: "#F4F4F4",
        padding: "0 5vw 2vw 5vw",
    },
    textLeft: {
        marginLeft: 30
    },
    imageRight: {
        height: 600
    },
    gridglobal: {
        padding: "0 10vw 2vw 10vw",
    },
    gridglobalmovil: {
        padding: "0 5vw 2vw 5vw",
    },
    titleCard: {
        textAlign: "center"
    },
    imagen_top: {
        width: "100%",
        height: "55vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "50vh",
        backgroundPosition: "center center",
        margin:"1.3vw 0 1.3vw 1.3vw",

    },

    centerButton: {
        justifyContent: "center",
        padding: "0 0 8% 0 !important",
    },

    centerText: {
        textAlign: "center",
        padding: "10% 0 0 0",
    },

    Titleh3: {
        color: Values.Redwinecolor,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeTitle,
        padding: Values.PaddingTitleText,
        fontWeight: "bold"
    },

    Textpj: {
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeText,
        textAlign: "start",
        margin: "1em 0 0 1.8em",
    },

    Textp: {
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeText,
        textAlign: "start",
        margin: "1em 0 0 0",
    },

    Textpv: {
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeText,
        textAlign: "start",
    },

    root: {
        width: "42vh",
        borderRadius: "1em",
        boxShadow: "3px 3px 10px #7b7676",
    },

    media: {
        height: "28vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        borderRadius: "0 0 4% 4%",
        boxShadow: "0px 6px 10px #7b7676",
    },

    cardglobal: {
        //margin: "0% 0% 0% 0%",
        padding: "0% 10vw 0% 10vw"

    },
    paddingBottom: {
        paddingBottom: "20px"
    },
    containerAlcance:{
        padding:"40px"
    }
});



const SectionOne = () => {
    const classes = useStyle();
    const matches = useMediaQuery("(min-width:769px)");
    var estilo = null;
    {
        matches ? estilo = classes.gridglobal : estilo = classes.gridglobalmovil
    }
    return (
        <Grid container className={estilo}>
            <Grid container justifyContent='center'>
                <Typography className={classes.Titleh3}  >
                    <strong>Registro de bienes inmuebles</strong>
                </Typography>
                </Grid>
            <Grid xs={12}
                sm={12}
                md={6}
                lg={6}
                direction="column"
                justifyContent="center"

            >                
                <Typography className={classes.Textp}>
                    Para la producción de estadística oficial se realiza de manera tradicional el levantamiento de información
                    a través de encuestas por muestreo, que de acuerdo al DANE es <i>“método estadístico por el cual se
                    investiga y analiza un fenómeno, mediante la selección de una muestra”.</i> Sin embargo, acorde a las
                    recomendaciones internacionales, convendría usar más los registros administrativos, debido a las
                    ventajas de cobertura temática y geográfica, además de constituirse como una fuente de información
                    que, considerando la periodicidad de su actualización y constituyéndose en fuentes para derivar
                    información estadística.

                </Typography>
            </Grid>
            <Grid item xs={10} sm={12} md={6} lg={6}>
                <img src={imageItem} className={classes.imagen_top}/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.Textpv}>
                De acuerdo a la CEPAL (Comisión Económica para América Latina y el Caribe), de la división de
                estadística y proyecciones económicas un registro administrativo es <i>“todo registro resultante de
                    necesidades fiscales, tributarias u otras, creado con la finalidad de viabilizar la administración de los
                    programas de gobierno o para fiscalizar el cumplimento de obligaciones legales de la sociedad. Para su
                    utilización con fines estadísticos es preciso evaluar su base conceptual y metodológica, clasificaciones,
                    cobertura alcanzada, variables investigadas, calidad de las respuestas, procesamiento de los datos y
                    frecuencia de disponibilidad de ellos.”</i> CEPAL (2003).
            </Grid>
        </Grid>

    )
}

const ContainerImage = Styled.div`
  width:100%;
  justify-content:center;
  text-align: center;
  background-color:#F4F4F4;
`;

const ImageItem = Styled.img`

    @media (max-width: 768px) {
        max-width:50vh
      };
      @media (max-width: 4000px) and (min-width: 769px) {
        width: 50vh;
      };
`;

const ImageSectionThree = Styled.img`

@media (max-width: 4000px) and (min-width: 769px) {
    position:absolute;
    width:33vh;
    z-index:-1;
    text-align:center;
  };
  @media (max-width: 768px) {
    width:100%;
    text-align:center;
  };

`

const ImageSectionFour = Styled.img`

@media (max-width: 4000px) and (min-width: 769px) {
      width:500px;
  };
  @media (max-width: 768px) {
    width:100%;
  };

`

const ImageAlcance = Styled.img`

@media (max-width: 4000px) and (min-width: 769px) {
      width:60vh;
  };
  @media (max-width: 768px) {
    width:100%;
  };

`


const SectionTwo = () => {
    const classes = useStyle();
    const matches = useMediaQuery("(min-width:769px)");
    var estilo = null;
    {
        matches ? estilo = classes.sectionPar : estilo = classes.sectionParmovil
    }
    return (
        <Grid container className={estilo} >

            <Grid container item xs={12} sm={12} md={12} lg={12} justifyContent="center">

                <Typography className={`${classes.Titleh3}`} >
                    Objetivo
                </Typography>

            </Grid>
            <ContainerImage >
                <ImageItem src={Nature} ></ImageItem>
            </ContainerImage>
            <Grid container item xs={12} sm={12} md={12} lg={12} >
                <Typography className={classes.Textp} >
                    Caracterizar con fines estadísticos, los bienes inmuebles que conforman el territorio nacional a través de
                    la integración de información física, jurídica, económica y geográfica del predio que sirva como
                    instrumento para la toma de decisiones en política pública.
                </Typography>

            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12} justifyContent="center">
                <Typography className={classes.Titleh3} >
                    Alcance de registro
                </Typography>
            </Grid>

            <Grid container item xs={12} sm={12} direction="row" >
                <Grid item xs={12} sm={12} md={5} lg={5}>
                    <ImageAlcance src={DocumentBro}  ></ImageAlcance>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6} className={classes.containerAlcance}>
                    <Typography className={classes.Textp}>
                        Cobertura total de los predios en las áreas urbano y rural que incluyan situaciones como:

                    </Typography>
                    <ol className={classes.Textpj}>
                        <li className={classes.listyle}>Predios formalizados a través del registro en la<br></br> superintendencia de Notariado y Registro</li>
                        <li className={classes.listyle}>Predios sin formalizar</li>
                        <li className={classes.listyle}>Predios baldíos con y sin ocupación</li>
                        <li className={classes.listyle}>Predios que hagan parte de comunidades negras,<br></br> resguardos indígenas y raizales</li>
                        <li className={classes.listyle}>Predios de uso público</li>
                    </ol>

                </Grid>
            </Grid>
        </Grid>
    )
}

const SectionThree = () => {
    const classes = useStyle();
    const matches = useMediaQuery("(min-width:769px)");
    var estilo = null;
    {
        matches ? estilo = classes.gridglobal : estilo = classes.gridglobalmovil
    }
    return (
        <Grid container className={estilo}>

            <Grid container item xs={12} sm={12} className={classes.marginBottom}>
                <Grid container justifyContent='center'>
                <Typography className={`${classes.Titleh3} ${classes.textLeft}`} >
                    Usos
                </Typography>
                </Grid>
                <Typography className={classes.Textp}>
                Haciendo alusión a las metodologías de ANDERS WALLGREN, BRITT WALLGREN, 2007, las cuales
                mencionan los registros de bienes inmuebles como instrumento para recopilar la información relacionada
                a la localización o ubicación de los registros de población y registros empresariales, se toma en
                consideración los diferentes resultados y usos requeridos, los cuales se listan a continuación:         
                </Typography>
                <Grid sm={8} className={classes.textLeft}>
                    <div className={classes.Textp}>
                        <ul>
                            <li className={classes.listyle}> Tenencia de la tierra.</li>
                            <li className={classes.listyle}>Suministro de marcos de muestreo para operaciones estadísticas como censo de edificaciones y los
                                marcos de construcción.</li>
                            <li className={classes.listyle}>Identificación de predios de patrimonio cultural (enfoque para economía naranja).
                                Generación de estadísticas de áreas protegidas.</li>
                            <li className={classes.listyle}>Identificar fenómenos de conurbación, redensificación, sostenibilidad y habitabilidad.
                                Generación de indicadores para medición de consumo de suelo.</li>
                            <li className={classes.listyle}>Índices de precios de vivienda.</li>
                            <li className={classes.listyle}>Vulnerabilidad económica y sociodemográfica (riesgos asociados).</li>
                            <li className={classes.listyle}>Estratificación.</li>
                            <li className={classes.listyle}>Aptitud de uso.</li>
                            <li className={classes.listyle}>Observatorio inmobiliario.</li>
                            <li className={classes.listyle}>Cobertura de servicios públicos.</li>
                        </ul>
                    </div>
                </Grid>
                <Grid sm={12} xs={12} md={3} lg={3}>
                    <ImageSectionThree src={NewIdea}></ImageSectionThree>
                </Grid>
            </Grid>
        </Grid>
    )
}

const SectionFour = () => {
    const classes = useStyle();
    const matches = useMediaQuery("(min-width:769px)");
    var estilo = null;
    {
        matches ? estilo = classes.sectionPar : estilo = classes.sectionParmovil
    }
    return (
        <Grid container className={estilo}>

            <Grid container item xs={12} sm={12} justifyContent='center'>
                <Typography className={classes.Titleh3}>
                    Fuentes de información
                </Typography>
            </Grid>
            <Grid container item xs={12} sm={12} justifyContent="center" className={classes.cardglobal} >
                <ImageSectionFour src={DataExtration}></ImageSectionFour>
            </Grid>
            <Grid container item xs={12} sm={12} justifyContent="center"  >
                <Typography className={classes.Textp}>
                    De acuerdo a los posibles canales para el levantamiento de la información, las principales fuentes para
                    conformar el registro de bienes inmuebles son los siguientes:
                </Typography>
            </Grid>
            <Grid container item xs={12} sm={12} justifyContent="center"  >

                <ul className={classes.Textp}>
                    <li className={classes.listyle}>Registro catastral del IGAC (instituto geográfico agustín codazzi).</li>
                    <li className={classes.listyle}>Registro catastral de Bogotá.</li>
                    <li className={classes.listyle}>Registro catastral de Cali.</li>
                    <li className={classes.listyle}>Registro catastral de Medellín.</li>
                    <li className={classes.listyle}>Registro catastral de Antioquia.</li>
                    <li className={classes.listyle}>Resguardos (territorios colectivos de comunidades indígenas).</li>
                    <li className={classes.listyle}>Territorios colectivos de comunidades negras.</li>
                    <li className={classes.listyle}>Parques nacionales naturales de MinAmbiente (ministerio de ambiente y desarrollo
                        Sostenible).</li>
                    <li className={classes.listyle}>Registro de propiedad inmueble de la SNR (superintendencia de notariado y registro).</li>
                    <li className={classes.listyle}>Registro del servicio público de energía eléctrica.</li>
                    <li className={classes.listyle}>Registro del servicio público de acueducto.</li>
                    <li className={classes.listyle}>Registro del servicio público de gas natural.</li>
                    <li className={classes.listyle}>Registro de servicio público de telecomunicaciones.</li>
                    <li className={classes.listyle}>Registro de baldíos de la nación.</li>
                    <li className={classes.listyle}>Supernotariado ( Bogotá y distritos registrales)</li>
                    <li className={classes.listyle}>Subsidio de vivienda VIS –VIP.</li>
                    <li className={classes.listyle}>Censo de edificaciones del DANE.</li>
                    <li className={classes.listyle}>Censo agropecuario del DANE.</li>
                    <li className={classes.listyle}>Registro de predios de la unidad de restitución de tierras.</li>
                    <li className={classes.listyle}>Registro de predios de la agencia nacional de tierras.</li>
                </ul>
            </Grid>
        </Grid>
    )
}

const Cardsservice = () => {
    const classes = useStyle();
    return (
        <Grid container >
            <SectionOne ></SectionOne>
            <SectionTwo></SectionTwo>
            <SectionThree></SectionThree>
            <SectionFour></SectionFour>
        </Grid>
    );
}

const ViewService = () => {

    return (
        <Grid>
            <Cardsservice />
        </Grid>
    );
}

export default ViewService