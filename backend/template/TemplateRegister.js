class TemplateRegister {
  static getTemplateRegister(url) {
    return `
            <head>
                <style>
                    .container {
                        background-color: #f4f4f4;
                      
                        padding:20px;
                    }
                    .im{
                        color: #4C4C4C !important;
                    }
                    .bottom {
            
                        color: #4C4C4C !important;
                        font-family: \"Roboto\";
                        font-size: calc(0.6em + 0.9vh);
                        text-align: start;
                        margin: 1em 0 0 0;
                        display:flex;
                        flex-direcction: row;
                    }
                    .top{
                        height: 9vh;
                        width: 100%;
                    }

                    .imagenfooter{
                        width: 94%
                    }
                    .imagenwelcome{
                        float: left;
                        width: 80%
                    }
                    .izquierda{
                        width:300%;
                    }
                    .textP {
                    }
                    .imagen{
                        float: right;
                        height: 7vh
                    }
                    .logodane{
                       height: 7vh;
                       float: left;
                    }
                    @media(max-width:768px){
                        .container{
                            width: 600px;
                        }
                    }
                    @media(max-width:569px){
                        .container{
                            width: 500px;
                        }
                    }
                    @media(max-width:500px){
                        .container{
                            width: 100%;
                            margin-right: 10px;
                            margin-left: 10px;
                        }
                    }
                    @media (max-width: 4000px) and (min-width: 769px) {
                        .container{
                            width: 1315px;
                        }
                    }
                </style>
                <head>
            <body>
                <div class=\"container\">
                    <div class=\"top\">
                    <img class=\"logodane\" src="https://nowsoft.app/colectora/externo/files_oin/logo-observatorio.png"  />
                    <img class=\"imagen\" src="https://nowsoft.app/colectora/externo/files_oin/logo-dane.png" />              
                     </div>
                    <div class=\"bottom\">
                        <div>
                        <img class=\"imagenwelcome\" src="https://nowsoft.app/colectora/externo/files_oin/Reset.png" />
                        </div>
                        <div class=\"izquierda\">
                        <p class=\"textP\">            
                        ¡Buen día!, si usted ha solicitado modificar su contraseña, porfavor siga el siguiente link, de lo contrario omita este mensaje:<br><br>
            
                        ${url}<br><br>
            
                        ** El link enviado tiene validez de uso de una hora.<br><br>
            
                        Cordialmente,<br><br>
            
                        Departamento Administrativo Nacional de Estadistica - DANE
                        </p>
                        </div>
            
                    </div>
            
                </div>
                <footer>
                <img class=\"imagenfooter\" src="https://nowsoft.app/colectora/externo/files_oin/footer2.png" />
                </footer>
                </body>
        `;
  }
}

module.exports = TemplateRegister;
