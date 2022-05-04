class ParserModel {
    static transformToSheetsPH(objSheet){
        return {
              a: objSheet.ID_OFERTA_PH,
              b: objSheet.NUMERO_PREDIAL_ANTIGUO, 
              c: objSheet.NUMERO_PREDIAL_NUEVO,
              d: objSheet.MATRICULA_INMOBILIARIA,
              e: objSheet.TIPO_OFERTA,
              f: objSheet.DEPARTAMENTO,
              g: objSheet.MUNICIPIO,
              h: objSheet.NOMBRE_BARRIO,
              i: objSheet.ESTRATO,
              j: objSheet.DIRECCION,
              k: objSheet.VALOR_ARRIENDO,
              l: objSheet.VALOR_ADMINISTRACION,
              m: objSheet.VALOR_OFERTA_VENTA,
              n: objSheet.PORCENTAJE_DE_NEGOCIACION,
              o: objSheet.VALOR_OFERTA_NEGOCIADO,
              p: objSheet.ANIO_CONSTRUCCION,
              q: objSheet.ALTURA_EDIFICIO,
              r: objSheet.No_PISO,
              s: objSheet.AREA_CONSTRUIDA_m2,
              t: objSheet.AREA_PRIVADA_m2,
              u: objSheet.No_GARAJES,
              w: objSheet.No_DEPOSITOS,
              x: objSheet.VR_TOTAL_TERRAZA_BALCON_O_PATIO,
              y: objSheet.VALOR_GARAJES,
              z: objSheet.VALOR_DEPOSITOS,
              a26: objSheet.OBSERVACIONES,
              a27: objSheet.LATITUD,
              a28: objSheet.LONGITUD,
              a29: objSheet.CONSERVACION,
              a30: objSheet.FECHA_CAPTURA_OFERTA,
              a31: objSheet.TIEMPO_OFERTA_MERCADO,
              a32: objSheet.NUMERO_CONTACTO_OFERENTE,
              a33: objSheet.NOMBRE_OFERENTE,
              a34: objSheet.COEFICIENTE,
              a35: objSheet.AVALUO_CATASTRAL,
              a36: objSheet.DESTINACION_ECONOMICA,
              a37: objSheet.DERECHO_TIPO,
              a38: objSheet.TIPO_TIPOLOGIA,
        }
    }

    static  transformToSheetsNPH(objSheet){
        return {
            a: objSheet[0],
            b: objSheet[1], 
            c: objSheet[2],
            d: objSheet[3],
            e: objSheet[4],
            f: objSheet[5],
            g: objSheet[6],
            h: objSheet[7],
            i: objSheet[8],
            j: objSheet[9],
            k: objSheet[10],
            l: objSheet[11],
            m: objSheet[12],
            n: objSheet[13],
            o: objSheet[14],
            p: objSheet[15],
            q: objSheet[16],
            r: objSheet[17],
            s: objSheet[18],
            t: objSheet[19],
            u: objSheet[20],
            w: objSheet[21],
            x: objSheet[22],
            y: objSheet[23],
            z: objSheet[24],
            a26: objSheet[25],
            a27: objSheet[26],
            a28: objSheet[27],
            a29: objSheet[28],
            a30: objSheet[29],
            a31: objSheet[30]
            // a32: objSheet[31]
      }
    }

    static  transformToSheetsRURAL(objSheet){
        return {
            a: objSheet[0],
            b: objSheet[1], 
            c: objSheet[2],
            d: objSheet[3],
            e: objSheet[4],
            f: objSheet[5],
            g: objSheet[6],
            h: objSheet[7],
            i: objSheet[8],
            j: objSheet[9],
            k: objSheet[10],
            l: objSheet[11],
            m: objSheet[12],
            n: objSheet[13],
            o: objSheet[14],
            p: objSheet[15],
            q: objSheet[16],
            r: objSheet[17],
            s: objSheet[18],
            t: objSheet[19],
            u: objSheet[20],
            w: objSheet[21],
            x: objSheet[22],
            y: objSheet[23],
            z: objSheet[24],
            a26: objSheet[25],
            a27: objSheet[26],
            a28: objSheet[27],
            a29: objSheet[28],
            a30: objSheet[29],
            a31: objSheet[30],
            a32: objSheet[31],
            a33: objSheet[32],
            a34: objSheet[33],
            a35: objSheet[34]
            // a36: objSheet[35]
      }
    }

    static  transformToSheetsESPECIFICACIONES(objSheet){

    }



}

module.exports = ParserModel