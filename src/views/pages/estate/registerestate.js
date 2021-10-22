import { Grid, makeStyles, Paper, CardActions, Card, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import * as Values from 'Variables/values';
import triangles from "img/paris.jpg";
import ButtonRedWine from "common/buttonredwine";
import { FcShop } from "react-icons/fc";
import infocards from "../../common/statistics.json"
import imageItem from "../../../img/Dane_Inmuebles_image_01.svg"
import Nature from "../../../img/Nature-amico.svg"
import Justice from "../../../img/Justice-rafiki.svg"
import Finance from "../../../img/Finance-rafiki.svg"
import Addres from "../../../img/Address-rafiki.svg"
import DocumentBro from "../../../img/Documents-bro.svg"
import NewIdea from "../../../img/New-idea-rafiki.svg"
import DataExtration from "../../../img/Data-extraction-pana.svg"
const useStyle = makeStyles({
    DataExtration: {
        maxWidth: 500
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
        backgroundColor: "#F4F4F4"
    },
    textLeft: {
        marginLeft: 30
    },
    descriptionStatistics: {
        fontSize: 30,
        color: "#585858"
    },
    descriptionStatisticsSub: {
        fontSize: 30,
        color: "#585858",
        marginLeft: 30,
        marginTop: 30,
        marginBottom: 30,
        zIndex: 1
    },
    imageRight: {
        height: 600
    },
    TitleStatistics: {
        color: "#821A3F",
        fontSize: 50,
        fontWeight: "bold",
        marginTop: 20
    },
    gridglobal: {
        padding: "0 10% 0 10%",
    },
    titleCard: {
        textAlign: "center"
    },
    imagen_top: {
        width: "100%",
        height: "10vh",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${triangles})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",

    },

    centerButton: {
        justifyContent: "center",
        padding: "0 0 8% 0 !important",
    },

    centerText: {
        textAlign: "center",
        padding: "10% 0 0 0",
    },

    gridglobal: {
        padding: "5% 10% 1% 10%",
    },

    Titleh3: {
        color: Values.Redwinecolor,
        fontFamily: Values.SourceWorksans,
        fontWeight: "bold",
        fontSize: Values.SizeSubtitle,
        textAlign: "center",
        padding: "0 0 1em 0",
    },

    Textp: {
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeAuxiliary,
        textAlign: "center",
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
        padding: "0% 0% 5% 0%",
        backgroundColor: "#fafafa",
    },
});

const Topservice = () => {
    const classes = useStyle();
    return (
        <Grid container className={classes.imagen_top}>
        </Grid>
    );
}

const Cardsservice = () => {
    const classes = useStyle();
    console.log(infocards)
    return (
        <Grid container sm={12} xs={12}>
            <Grid sm={6}
                xs={6}
                direction="column"
                justifyContent="center"
                alignItems="center"
                className={classes.textLeft}
            >
                <Typography className={classes.TitleStatistics}  >
                    Registro de Bienes inmuebles
                </Typography>
                <Typography className={classes.descriptionStatistics}>
                    Para la producción de estadística oficial se realiza de manera tradicional el levantamiento de información
                    a través de encuestas por muestreo, que de acuerdo al DANE es “método estadístico por el cual se
                    investiga y analiza un fenómeno, mediante la selección de una muestra”. Sin embargo, a
                    recomendaciones internacionales, convendría usar más los registros administrativos, debido a las
                    ventajas de cobertura temática y geográfica, además de constituirse como una fuente de información
                    que, considerando la periodicidad de su actualización y constituyéndose en fuentes para derivar
                    información estadística.

                </Typography>
            </Grid>
            <Grid container item xs={5} sm={5} alignItems="flex-end" direction="row" >

                <img src={imageItem} className={classes.imageRight} />
            </Grid>
            <Grid container item xs={11} sm={11} spacing={2} alignItems="center" className={classes.descriptionStatisticsSub}>
                De acuerdo a la CEPAL (Comisión Económica para América Latina y el Caribe), de la División de
                Estadística y Proyecciones Económicas un registro administrativo es “todo registro resultante de
                necesidades fiscales, tributarias u otras, creado con la finalidad de viabilizar la administración de los
                programas de gobierno o para fiscalizar el cumplimento de obligaciones legales de la sociedad. Para su
                utilización con fines estadísticos es preciso evaluar su base conceptual y metodológica, clasificaciones,
                cobertura alcanzada, variables investigadas, calidad de las respuestas, procesamiento de los datos y
                frecuencia de disponibilidad de ellos.” CEPAL (2003).

            </Grid>
            <Grid container item xs={12} sm={12} direction="column" className={classes.sectionPar} >

                <Typography className={`${classes.TitleStatistics} ${classes.textLeft}`} >
                    Objetivos
                </Typography>

            </Grid>
            <Grid container item xs={12} sm={12} direction="row" className={classes.sectionPar} alignItems="center">
                <img src={Nature} className={classes.imageSub}></img>
                <img src={Justice} className={classes.imageSub}></img>
                <img src={Finance} className={classes.imageSub}></img>
                <img src={Addres} className={classes.imageSub}></img>
            </Grid>
            <Grid container item xs={12} sm={12} className={classes.sectionPar} direction="column">
                <Typography className={classes.descriptionStatisticsSub} >
                    Caracterizar con fines estadísticos, los bienes inmuebles que conforman el territorio nacional a través de
                    la integración de información física, jurídica, económica y geográfica del predio que sirva como
                    instrumento para la toma de decisiones en política pública
                </Typography>
                <Typography className={`${classes.TitleStatistics} ${classes.textLeft}`} >
                    Alcance de registro
                </Typography>

            </Grid>
            <Grid container item xs={12} sm={12} direction="row" className={classes.sectionPar}>
                <Grid item xs={4} sm={4}>
                    <img src={DocumentBro} ></img>
                </Grid>

                <Grid item xs={8} sm={8}>
                    <Typography className={classes.descriptionStatisticsSub}>
                        Cobertura total de los predios en las áreas urbano y rural que incluyan situaciones como:

                    </Typography>
                    <ol className={classes.descriptionStatisticsSub}>
                        <li>Predios formalizados a través del registro en la superintendencia de Notariado y Registro</li>
                        <li>Predios sin formalizar</li>
                        <li>Predios baldíos con y sin ocupación</li>
                        <li>Predios que hagan parte de comunidades negras, resguardos indígenas y raizales</li>
                        <li>Predios de uso público</li>
                    </ol>

                </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} className={classes.marginBottom}>
                <Typography className={`${classes.TitleStatistics} ${classes.textLeft}`} >
                    Usos
                </Typography>
                <Typography className={classes.descriptionStatisticsSub}>
                    Haciendo alusión de metodologías como ANDERS WALLGREN, BRITT WALLGREN, 2007 el cual
                    menciona los registros de bienes inmuebles como instrumento para recopilar la información relacionada
                    a la localización o ubicación de los registros de población y registros empresariales, se toma en
                    consideración los diferentes resultados y usos requeridos, los cuales se listan a continuación:
                </Typography>
                <Grid sm={8} className={classes.textLeft}>
                    <div className={classes.descriptionStatisticsSub}>
                        <ul>
                            <li> Tenencia de la tierra.</li>
                            <li>Suministro de marcos de muestreo para operaciones estadísticas como censo edificaciones y los
                                marcos de construcción.</li>
                            <li>Identificación de predios de patrimonio cultural (enfoque para economía naranja).
                                Generación de estadísticas de áreas protegidas.</li>
                            <li>Identificar fenómenos de conurbación, redensificación, sostenibilidad y habitabilidad.
                                Generación de indicadores para medición de consumo de suelo.</li>
                            <li>Índices de precios de vivienda.</li>
                            <li>Vulnerabilidad económica y sociodemográfica (Riesgos asociados).</li>
                            <li>Estratificación.</li>
                            <li>Aptitud de uso.</li>
                            <li>Observatorio inmobiliario.</li>
                            <li>Cobertura de servicios públicos</li>
                        </ul>
                    </div>
                </Grid>
                <Grid sm={3}>
                    <img src={NewIdea} className={classes.imageNewIdea} ></img>
                </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} className={classes.sectionPar}>
                <Typography className={classes.TitleStatistics}>
                    Fuentes de Información
                </Typography>
            </Grid>
            <Grid container item xs={12} sm={12} justifyContent="center" className={classes.sectionPar}>
                <img src={DataExtration} className={classes.DataExtration}></img>
            </Grid>
            <Grid container item xs={12} sm={12} justifyContent="center" className={classes.sectionPar}>
                <Typography className={classes.descriptionStatisticsSub}>
                    De acuerdo a los posibles canales para el levantamiento de la información, las principales fuentes para
                    conformar el registro de bienes inmuebles son los siguientes:
                </Typography>
            </Grid>
            <Grid container item xs={12} sm={12} justifyContent="center" className={classes.sectionPar}>
               
                <ul className={classes.descriptionStatisticsSub}>
                    <li>Registro Catastral del IGAC (Instituto Geográfico Agustín Codazzi).</li>
                    <li>Registro Catastral de Bogotá.</li>
                    <li>Registro Catastral de Cali.</li>
                    <li>Registro Catastral de Medellín.</li>
                    <li>Registro Catastral de Antioquia.</li>
                    <li>Resguardos (territorios colectivos de comunidades indígenas).</li>
                    <li>Territorios colectivos de comunidades Negras.</li>
                    <li>Parques Nacionales Naturales de MinAmbiente (Ministerio de Ambiente y Desarrollo
                        Sostenible).</li>
                    <li>Registro de propiedad inmueble de la SNR (Superintendencia de Notariado y Registro).</li>
                    <li>Registro del Servicio público de Energía Eléctrica.</li>
                    <li>Registro del Servicio público de Acueducto.</li>
                    <li>Registro del Servicio público de Gas Natural.</li>
                    <li>Registro de Servicio público de telecomunicaciones.</li>
                    <li>Registro de Baldíos de la Nación.</li>
                    <li>Supernotariado ( Bogotá y Distritos registrales)</li>
                    <li>Subsidio de Vivienda VIS –VIP.</li>
                    <li>Censo de Edificaciones del DANE.</li>
                    <li>Censo agropecuario del DANE.</li>
                    <li>Registro de predios de la Unidad de Restitución de Tierras.</li>
                    <li>Registro de predios de la Agencia Nacional de Tierras.</li>
                </ul>
            </Grid>

        </Grid>
    );
}




const ViewService = () => {
    const classes = useStyle();
    return (
        <Grid>
            <Topservice />
            <Cardsservice />
            <Topservice />
        </Grid>
    );
}

export default ViewService