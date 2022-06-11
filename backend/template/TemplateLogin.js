

class TemplateLogin{
    

    static  getTemplateLogin(id_user){
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
                    .izquierda{
                        width:300%;
                    }
                    .derecha{
                        flex:0 0 '35%';
                    }
                    .top{
                        height: 9vh;
                        width: 100%;
                    }
            
                    .textP {
                    }
                    .imagen{
                        float: right;
                        height: 7vh
                    }
                    .imagenwelcome{
                        float: right;
                        width: 80%
                    }
                    .imagenfooter{
                        width: 94%
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
                        <img class=\"logodane\" src="https://geoportal.dane.gov.co/observatorio/logo-observatorio.png"  />
                        <img class=\"imagen\" src="https://geoportal.dane.gov.co/observatorio/logo-dane.png"/>                
                     </div>
                    <div class=\"bottom\">
                      <div class=\"izquierda\">
                      <p class=\"textP\">
            
                      ¡Bienvenido al Observatorio Inmobiliario Nacional!, le informamos que su registro ha sido exitoso y se le ha otorgado el código de identificación: ${id_user}<br><br>

                            Para ingresar a la plataforma favor dirigase al siguiente link<br><br>
            
                            https://geoportal.dane.gov.co/observatorio/login <br><br>
            
                            Cordialmente,<br><br>
            
                            Departamento Administrativo Nacional de Estadistica - DANE
                        </p> 
                      </div>   
                      <div class=\"derecha\">
                      <img class=\"imagenwelcome\" src="https://geoportal.dane.gov.co/observatorio/Welcome-bro.png" />
                      </div>          
                    </div>
            
                </div>                
                <footer>
                <img class=\"imagenfooter\" src="https://geoportal.dane.gov.co/observatorio/footer2.png" />
                </footer>
                </body>
        `
    }
}

module.exports = TemplateLogin