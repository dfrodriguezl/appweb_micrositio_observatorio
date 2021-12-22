import { makeStyles } from "@material-ui/core";
import * as Values from "Observatorio/Variables/values";
const useStyle = makeStyles({
  gridglobal: {
    padding: "0% 10% 2vw 10%",
  },

  gridglobalmovil: {
    padding: "0% 5vw 2vw 5vw",
  },

  Textpdes: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeAuxiliary,
    textAlign: "start",
    margin: "0 6% 0 6%",
  },

  centerButton: {
    justifyContent: "center",
    padding: "0 0 0 0 !important",
  },

  centerText: {
    textAlign: "center",
    padding: "5% 0 0 0",
  },

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
  },

  Textpcard: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "center",
    margin: "2% 0 2% 0",
  },

  root: {
    width: "40vh",
    borderRadius: "1em",
    boxShadow: "3px 3px 10px #7b7676",
  },

  media: {
    height: "24vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "80%",
  },

  cardglobal: {
    //margin: "0% 0% 0% 0%",
    padding: "0% 0% 5% 0%",
    backgroundColor: "white",
  },

  cardglobal2: {
    //margin: "0% 0% 0% 0%",
    padding: "0% 0% 0% 0%",
    backgroundColor: "white",
  },
  contentcar: {
    paddingBottom: "0 !important",
  },
  itemTextField: {
    backgroundColor: "white",
    width:"100%"
},containerForm:{
    backgroundColor:"#F3F3F3",
    height: "200px",
    width: "100%",
    padding:"30px",
    marginTop:"50px",
    marginBottom:"50px",
    borderRadius:"10px"
},
  boton: {
    padding: "0.3em 1em 0.3em 1em",
    borderRadius: "2vh",
    backgroundColor: Values.Redwinecolor,
    color: Values.TextButton,
    fontFamily: Values.SourceRoboto,
    textTransform: "capitalize",
    transition: "all 0.8s ease-out",
    cursor: "pointer",
    width: "max-content",
    fontSize: "calc(1em + 0.3vh)",
    borderRadius: "2vh",
    fontWeight: "bold",
    "&:hover": {
        backgroundColor: Values.HoverButton,
        border: "none",
    }
}
});

export default useStyle;
