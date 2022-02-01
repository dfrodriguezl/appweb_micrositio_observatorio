


class TemplateLogin{


    static  getTemplateLogin(id_user){
            return `
            <head>
                <style>
                    .container {
                        background-color: #f4f4f4;
                      
                        padding:50px;
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
                            width: 800px;
                        }
                    }
                </style>
                <head>
            <body>
                <div class=\"container\">
                    <div class=\"top\">
                        <img class=\"logodane\" src="https://nowsoft.app/geoportal/descargas/oin/logo-observatorio.PNG"  />
                        <img class=\"imagen\" src="https://nowsoft.app/geoportal/descargas/oin/logo-dane.PNG" />
                
                     </div>
                    <div class=\"bottom\">
                        <p class=\"textP\">
            
                            Gracias por registrarse en el Observatorio Inmobiliario Nacional - OIN.<br><br>

                            Su codigo de registro es el siguiente ${id_user}, recuerde que este numero debe ser suministrado en la informacion que se suba a la paltaforma en el campo: codigo_observatorio.<br><br>

                            Para ingresar a la plataforma favor dirigase al siguiente link.<br><br>
            
                            https://nowsoft.app/Observatorio/login <br><br>
            
                            Cordialmente,<br><br>
            
                            Departamento Administrativo Nacional de Estadistica - DANE
                        </p>
            
                    </div>
            
                </div>
                </body>
        `
    }
}

module.exports = TemplateLogin