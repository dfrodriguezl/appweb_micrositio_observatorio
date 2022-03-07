class DashDestinacion {

  static dashBoardDestinacionNPH(datanph) {
    if (typeof datanph.Agricola === "undefined") {
      datanph.Agricola = 0;
    }
    if (typeof datanph.Agroindustrial === "undefined") {
      datanph.Agroindustrial = 0;
    }
    if (typeof datanph.Agroforestal === "undefined") {
      datanph.Agroforestal = 0;
    }
    if (typeof datanph.Comercial === "undefined") {
      datanph.Comercial = 0;
    }
    if (typeof datanph.Cultural === "undefined") {
      datanph.Cultural = 0;
    }
    if (typeof datanph.Educativo === "undefined") {
      datanph.Educativo = 0;
    }
    if (typeof datanph.Forestal === "undefined") {
      datanph.Forestal = 0;
    }
    if (typeof datanph.Habitacional === "undefined") {
      datanph.Habitacional = 0;
    }
    if (typeof datanph.Industrial === "undefined") {
      datanph.Industrial = 0;
    }
    if (typeof datanph.Institucional === "undefined") {
      datanph.Institucional = 0;
    }
    if (typeof datanph.Lote_Urbanizable_No_Urbanizado === "undefined") {
      datanph.Lote_Urbanizable_No_Urbanizado = 0;
    }
    if (typeof datanph.Lote_Urbanizado_No_Construido === "undefined") {
      datanph.Lote_Urbanizado_No_Construido = 0;
    }
    if (typeof datanph.Lote_No_Urbanizable === "undefined") {
      datanph.Lote_No_Urbanizable = 0;
    }

    return [
      {
        id: "1",
        name: "1. Agricola",
        mass: datanph.Agricola,
      },
      {
        id: "2",
        name: "2. Agroindustrial",
        mass: datanph.Agroindustrial,
      },
      {
        id: "3",
        name: "3. Agroforestal",
        mass: datanph.Agroforestal,
      },
      {
        id: "4",
        name: "4. Comercial",
        mass: datanph.Comercial,
      },
      {
        id: "5",
        name: "5. Cultural",
        mass: datanph.Cultural,
      },
      {
        id: "6",
        name: "6. Educativo",
        mass: datanph.Educativo,
      },
      {
        id: "7",
        name: "7. Forestal",
        mass: datanph.Forestal,
      },
      {
        id: "8",
        name: "8. Habitacional",
        mass: datanph.Habitacional,
      },
      {
        id: "9",
        name: "9. Industrial",
        mass: datanph.Industrial,
      },
      {
        id: "10",
        name: "10. Institucional",
        mass: datanph.Institucional,
      },
      {
        id: "11",
        name: "11. Lote Urbanizable No Urbanizado",
        mass: datanph.Lote_Urbanizable_No_Urbanizado,
      },
      {
        id: "12",
        name: "12. Lote Urbanizado No Construido",
        mass: datanph.Lote_Urbanizado_No_Construido,
      },
      {
        id: "13",
        name: "13. Lote No Urbanizable",
        mass: datanph.Lote_No_Urbanizable,
      },
    ];
  }

  static dashBoardDestinacionRural(datarural) {  
    if (typeof datarural.Agricola === "undefined") {
      datarural.Agricola = 0;
    }
    if (typeof datarural.Agroindustrial === "undefined") {
      datarural.Agroindustrial = 0;
    }
    if (typeof datarural.Agroforestal === "undefined") {
      datarural.Agroforestal = 0;
    }
    if (typeof datarural.Comercial === "undefined") {
      datarural.Comercial = 0;
    }
    if (typeof datarural.Cultural === "undefined") {
      datarural.Cultural = 0;
    }
    if (typeof datarural.Educativo === "undefined") {
      datarural.Educativo = 0;
    }
    if (typeof datarural.Forestal === "undefined") {
      datarural.Forestal = 0;
    }
    if (typeof datarural.Habitacional === "undefined") {
      datarural.Habitacional = 0;
    }
    if (typeof datarural.Industrial === "undefined") {
      datarural.Industrial = 0;
    }
    if (typeof datarural.Institucional === "undefined") {
      datarural.Institucional = 0;
    }
    if (typeof datarural.Lote_Urbanizable_No_Urbanizado === "undefined") {
      datarural.Lote_Urbanizable_No_Urbanizado = 0;
    }
    if (typeof datarural.Lote_Urbanizado_No_Construido === "undefined") {
      datarural.Lote_Urbanizado_No_Construido = 0;
    }
    if (typeof datarural.Lote_No_Urbanizable === "undefined") {
      datarural.Lote_No_Urbanizable = 0;
    }

    return [
      {
        id: "1",
        name: "1. Agricola",
        mass: datarural.Agricola,
      },
      {
        id: "2",
        name: "2. Agroindustrial",
        mass: datarural.Agroindustrial,
      },
      {
        id: "3",
        name: "3. Agroforestal",
        mass: datarural.Agroforestal,
      },
      {
        id: "4",
        name: "4. Comercial",
        mass: datarural.Comercial,
      },
      {
        id: "5",
        name: "5. Cultural",
        mass: datarural.Cultural,
      },
      {
        id: "6",
        name: "6. Educativo",
        mass: datarural.Educativo,
      },
      {
        id: "7",
        name: "7. Forestal",
        mass: datarural.Forestal,
      },
      {
        id: "8",
        name: "8. Habitacional",
        mass: datarural.Habitacional,
      },
      {
        id: "9",
        name: "9. Industrial",
        mass: datarural.Industrial,
      },
      {
        id: "10",
        name: "10. Institucional",
        mass: datarural.Institucional,
      },
      {
        id: "11",
        name: "11. Lote Urbanizable No Urbanizado",
        mass: datarural.Lote_Urbanizable_No_Urbanizado,
      },
      {
        id: "12",
        name: "12. Lote Urbanizado No Construido",
        mass: datarural.Lote_Urbanizado_No_Construido,
      },
      {
        id: "13",
        name: "13. Lote No Urbanizable",
        mass: datarural.Lote_No_Urbanizable,
      },
    ];
  }

  static dashBoardDestinacionPH(data) {

    if (typeof data.Agricola === "undefined") {
      data.Agricola = 0;
    }
    if (typeof data.Agroindustrial === "undefined") {
      data.Agroindustrial = 0;
    }
    if (typeof data.Agroforestal === "undefined") {
      data.Agroforestal = 0;
    }
    if (typeof data.Comercial === "undefined") {
      data.Comercial = 0;
    }
    if (typeof data.Cultural === "undefined") {
      data.Cultural = 0;
    }
    if (typeof data.Educativo === "undefined") {
      data.Educativo = 0;
    }
    if (typeof data.Forestal === "undefined") {
      data.Forestal = 0;
    }
    if (typeof data.Habitacional === "undefined") {
      data.Habitacional = 0;
    }
    if (typeof data.Industrial === "undefined") {
      data.Industrial = 0;
    }
    if (typeof data.Institucional === "undefined") {
      data.Institucional = 0;
    }
    if (typeof data.Lote_Urbanizable_No_Urbanizado === "undefined") {
      data.Lote_Urbanizable_No_Urbanizado = 0;
    }
    if (typeof data.Lote_Urbanizado_No_Construido === "undefined") {
      data.Lote_Urbanizado_No_Construido = 0;
    }
    if (typeof data.Lote_No_Urbanizable === "undefined") {
      data.Lote_No_Urbanizable = 0;
    }

    return [
      {
        id: "1",
        name: "1. Agricola",
        mass: data.Agricola,
      },
      {
        id: "2",
        name: "2. Agroindustrial",
        mass: data.Agroindustrial,
      },
      {
        id: "3",
        name: "3. Agroforestal",
        mass: data.Agroforestal,
      },
      {
        id: "4",
        name: "4. Comercial",
        mass: data.Comercial,
      },
      {
        id: "5",
        name: "5. Cultural",
        mass: data.Cultural,
      },
      {
        id: "6",
        name: "6. Educativo",
        mass: data.Educativo,
      },
      {
        id: "7",
        name: "7. Forestal",
        mass: data.Forestal,
      },
      {
        id: "8",
        name: "8. Habitacional",
        mass: data.Habitacional,
      },
      {
        id: "9",
        name: "9. Industrial",
        mass: data.Industrial,
      },
      {
        id: "10",
        name: "10. Institucional",
        mass: data.Institucional,
      },
      {
        id: "11",
        name: "11. Lote Urbanizable No Urbanizado",
        mass: data.Lote_Urbanizable_No_Urbanizado,
      },
      {
        id: "12",
        name: "12. Lote Urbanizado No Construido",
        mass: data.Lote_Urbanizado_No_Construido,
      },
      {
        id: "13",
        name: "13. Lote No Urbanizable",
        mass: data.Lote_No_Urbanizable,
      },
    ];
  }
}

module.exports = DashDestinacion;
