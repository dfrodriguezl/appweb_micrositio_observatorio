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
import {useTranslation} from "react-i18next";
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

const ajustable = "ajustable"

const SectionOne = () => {
    const classes = useStyle();
    const [t, i18n]= useTranslation("global"); 
    const matches = useMediaQuery("(min-width:769px)");
    var estilo = null;
    {
        matches ? estilo = classes.gridglobal : estilo = classes.gridglobalmovil
    }
    return (
        <Grid container className={estilo}>
            <Grid container justifyContent='center'>
                <Typography className={classes.Titleh3+" "+ajustable}  >
                    <strong>{t("registry.registry")}</strong>
                </Typography>
                </Grid>
            <Grid xs={12}
                sm={12}
                md={6}
                lg={6}
                direction="column"
                justifyContent="center"

            >                
                <Typography className={classes.Textp+" "+ajustable}>
                {t("registry.registry2")}<i>{t("registry.registry3")}</i>{t("registry.registry4")}
                </Typography>
            </Grid>
            <Grid item xs={10} sm={12} md={6} lg={6}>
                <img src={imageItem} className={classes.imagen_top}/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.Textpv+" "+ajustable}>
            {t("registry.registry5")}<i>{t("registry.registry6")}</i>{t("registry.registry7")}.
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
    const [t, i18n]= useTranslation("global"); 
    var estilo = null;
    {
        matches ? estilo = classes.sectionPar : estilo = classes.sectionParmovil
    }
    return (
        <Grid container className={estilo} >

            <Grid container item xs={12} sm={12} md={12} lg={12} justifyContent="center">

                <Typography className={classes.Titleh3+" "+ajustable} >
                {t("registry.objective")}
                </Typography>

            </Grid>
            <ContainerImage >
                <ImageItem src={Nature} ></ImageItem>
            </ContainerImage>
            <Grid container item xs={12} sm={12} md={12} lg={12} >
                <Typography className={classes.Textp+" "+ajustable} >
                {t("registry.objective2")}
                </Typography>

            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12} justifyContent="center">
                <Typography className={classes.Titleh3+" "+ajustable} >
                {t("registry.scope")}
                </Typography>
            </Grid>

            <Grid container item xs={12} sm={12} direction="row" >
                <Grid item xs={12} sm={12} md={5} lg={5}>
                    <ImageAlcance src={DocumentBro}  ></ImageAlcance>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6} className={classes.containerAlcance}>
                    <Typography className={classes.Textp+" "+ajustable}>
                    {t("registry.scope2")}
                     </Typography>
                    <ol className={classes.Textpj}>
                        <li className={classes.listyle+" "+ajustable}>{t("registry.scope3")}</li>
                        <li className={classes.listyle+" "+ajustable}>{t("registry.scope4")}</li>
                        <li className={classes.listyle+" "+ajustable}>{t("registry.scope5")}</li>
                        <li className={classes.listyle+" "+ajustable}>{t("registry.scope6")}</li>
                        <li className={classes.listyle+" "+ajustable}>{t("registry.scope7")}</li>
                    </ol>

                </Grid>
            </Grid>
        </Grid>
    )
}

const SectionThree = () => {
    const classes = useStyle();
    const [t, i18n]= useTranslation("global"); 
    const matches = useMediaQuery("(min-width:769px)");
    var estilo = null;
    {
        matches ? estilo = classes.gridglobal : estilo = classes.gridglobalmovil
    }
    return (
        <Grid container className={estilo}>

            <Grid container item xs={12} sm={12} className={classes.marginBottom}>
                <Grid container justifyContent='center'>
                <Typography className={`${classes.Titleh3} ${classes.textLeft}+" "+ajustable`} >
                {t("registry.Uses")}
                </Typography>
                </Grid>
                <Typography className={classes.Textp+" "+ajustable}>
                {t("registry.Uses2")}
                </Typography>
                <Grid sm={8} className={classes.textLeft}>
                    <div className={classes.Textp}>
                        <ul>
                            <li className={classes.listyle+" "+ajustable}>{t("registry.Uses3")}</li>
                            <li className={classes.listyle+" "+ajustable}>{t("registry.Uses4")}</li>
                            <li className={classes.listyle+" "+ajustable}>{t("registry.Uses5")}</li>
                            <li className={classes.listyle+" "+ajustable}>{t("registry.Uses6")}</li>
                            <li className={classes.listyle+" "+ajustable}>{t("registry.Uses7")}</li>
                            <li className={classes.listyle+" "+ajustable}>{t("registry.Uses8")}</li>
                            <li className={classes.listyle+" "+ajustable}>{t("registry.Uses9")}</li>
                            <li className={classes.listyle+" "+ajustable}>{t("registry.Uses10")}</li>
                            <li className={classes.listyle+" "+ajustable}>{t("registry.Uses11")}</li>
                            <li className={classes.listyle+" "+ajustable}>{t("registry.Uses12")}</li>
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
    const [t, i18n]= useTranslation("global"); 
    const matches = useMediaQuery("(min-width:769px)");
    var estilo = null;
    {
        matches ? estilo = classes.sectionPar : estilo = classes.sectionParmovil
    }
    return (
        <Grid container className={estilo}>

            <Grid container item xs={12} sm={12} justifyContent='center'>
                <Typography className={classes.Titleh3+" "+ajustable}>
                {t("registry.sources")}
                </Typography>
            </Grid>
            <Grid container item xs={12} sm={12} justifyContent="center" className={classes.cardglobal} >
                <ImageSectionFour src={DataExtration}></ImageSectionFour>
            </Grid>
            <Grid container item xs={12} sm={12} justifyContent="center"  >
                <Typography className={classes.Textp+" "+ajustable}>
                {t("registry.sources2")}
                </Typography>
            </Grid>
            <Grid container item xs={12} sm={12} justifyContent="center"  >

                <ul className={classes.Textp}>
                    <li className={classes.listyle+" "+ajustable}>{t("registry.sources3")}.</li>
                    <li className={classes.listyle+" "+ajustable}>{t("registry.sources4")}</li>
                    <li className={classes.listyle+" "+ajustable}>{t("registry.sources5")}</li>
                    <li className={classes.listyle+" "+ajustable}>{t("registry.sources6")}</li>
                    <li className={classes.listyle+" "+ajustable}>{t("registry.sources7")}</li>
                    <li className={classes.listyle+" "+ajustable}>{t("registry.sources8")}</li>
                    <li className={classes.listyle+" "+ajustable}>{t("registry.sources9")}</li>
                    <li className={classes.listyle+" "+ajustable}>{t("registry.sources10")}</li>
                    <li className={classes.listyle+" "+ajustable}>{t("registry.sources11")}</li>
                    <li className={classes.listyle+" "+ajustable}>{t("registry.sources12")}</li>
                    <li className={classes.listyle+" "+ajustable}>{t("registry.sources13")}</li>
                    <li className={classes.listyle+" "+ajustable}>{t("registry.sources14")}</li>
                    <li className={classes.listyle+" "+ajustable}>{t("registry.sources15")}</li>
                    <li className={classes.listyle+" "+ajustable}>{t("registry.sources16")}</li>
                    <li className={classes.listyle+" "+ajustable}>{t("registry.sources17")}</li>
                    <li className={classes.listyle+" "+ajustable}>{t("registry.sources18")}</li>
                    <li className={classes.listyle+" "+ajustable}>{t("registry.sources19")}</li>
                    <li className={classes.listyle+" "+ajustable}>{t("registry.sources20")}</li>
                    <li className={classes.listyle+" "+ajustable}>{t("registry.sources21")}</li>
                    <li className={classes.listyle+" "+ajustable}>{t("registry.sources22")}</li>
                </ul>
            </Grid>
        </Grid>
    )
}

const Cardsservice = () => {
    const classes = useStyle();
    return (
        <Grid container id="target-two">
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