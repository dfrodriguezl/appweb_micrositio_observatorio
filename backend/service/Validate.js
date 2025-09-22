class ValidService{

    static validPh(model) {
  let fail = "exito";

  // Helper: valida numérico >= 0
  const checkNumber = (val, campo) => {
    if (val == null || val === "" || isNaN(Number(val)) || Number(val) < 0) {
      fail = `Hubo un problema con la carga del archivo, se detectó un error en la hoja PH, campo [${campo}] con valor: ${val}`;
      return false;
    }
    return true;
  };

  // Función genérica para verificar vacío
  const isEmpty = (val) => {
    return val === null || val === undefined || String(val).trim() === "";
  };

  // Definir banderas de identificadores principales
  const noPredialAntiguo = isEmpty(model.NUMERO_PREDIAL_ANTIGUO);
  const noPredialNuevo   = isEmpty(model.NUMERO_PREDIAL_NUEVO);
  const noMatricula      = isEmpty(model.MATRICULA_INMOBILIARIA);

  // Validar identificadores principales (si vienen vacíos -> error inmediato)
  if (noPredialAntiguo) {
    return "El campo PH NUMERO_PREDIAL_ANTIGUO está vacío y es obligatorio su diligenciamiento.";
  }

  if (noPredialNuevo) {
    return "El campo PH NUMERO_PREDIAL_NUEVO está vacío y es obligatorio su diligenciamiento.";
  }

  if (noMatricula) {
    return "El campo PH MATRICULA_INMOBILIARIA está vacío y es obligatorio su diligenciamiento.";
  }

  // Si TODOS están vacíos => exigir CODIGO_HOMOLOGADO
  if (noPredialAntiguo && noPredialNuevo && noMatricula) {
    if (isEmpty(model.CODIGO_HOMOLOGADO)) {
      return "Hubo un problema con la carga: el campo PH CODIGO_HOMOLOGADO es obligatorio cuando no se diligencian los identificadores principales (Predial antiguo, Predial nuevo o Matrícula inmobiliaria).";
    }
  }

  // Reglas adicionales de longitud
if (
  model.NUMERO_PREDIAL_ANTIGUO &&
  !noPredialAntiguo &&
  model.NUMERO_PREDIAL_ANTIGUO.toLowerCase() !== "vacio" &&
  model.NUMERO_PREDIAL_ANTIGUO.length !== 20
) {
  fail = `Error en el campo PH NUMERO_PREDIAL_ANTIGUO: longitud inválida (${model.NUMERO_PREDIAL_ANTIGUO})`;
  return fail;
}

if (
  model.NUMERO_PREDIAL_NUEVO &&
  !noPredialNuevo &&
  model.NUMERO_PREDIAL_NUEVO.toLowerCase() !== "vacio" &&
  model.NUMERO_PREDIAL_NUEVO.length !== 30
) {
  fail = `Error en el campo PH NUMERO_PREDIAL_NUEVO: longitud inválida (${model.NUMERO_PREDIAL_NUEVO})`;
  return fail;
}

if (
  model.MATRICULA_INMOBILIARIA &&
  !noMatricula &&
  model.MATRICULA_INMOBILIARIA.toLowerCase() !== "vacio" &&
  model.MATRICULA_INMOBILIARIA.length !== 12
) {
  fail = `Error en el campo PH MATRICULA_INMOBILIARIA: longitud inválida (${model.MATRICULA_INMOBILIARIA})`;
  return fail;
}


// Validar MUNICIPIO
if (model.MUNICIPIO !== null && model.MUNICIPIO !== undefined) {
  const raw = String(model.MUNICIPIO);           // preserva exactamente lo que entró
  const trimmed = raw.trim();                    // versión limpia (quita espacios ASCII)
  const unicodeEdgeSpace = /(^[\s\u00A0\u200B\uFEFF])|([\s\u00A0\u200B\uFEFF]$)/; 
  // detecta espacios al inicio o final, incluyendo NBSP, ZWSP y BOM

  // 1) Rechazar si hay espacios al inicio o final (incluidos unicode)
  if (raw !== trimmed || unicodeEdgeSpace.test(raw)) {
    fail = `Error en el campo PH MUNICIPIO: contiene espacios al inicio o al final ("${raw}")`;
    return fail;
  }

  // 2) Ahora validar que tenga exactamente 5 dígitos (sin espacios)
  if (!/^\d{5}$/.test(trimmed)) {
    fail = `Error en el campo PH MUNICIPIO: debe tener exactamente 5 dígitos (${trimmed})`;
    return fail;
  }

}
// Validar DEPARTAMENTO
if (model.DEPARTAMENTO !== null && model.DEPARTAMENTO !== undefined) {
  const raw = String(model.DEPARTAMENTO);           // preserva exactamente lo que entró
  const trimmed = raw.trim();                    // versión limpia (quita espacios ASCII)
  const unicodeEdgeSpace = /(^[\s\u00A0\u200B\uFEFF])|([\s\u00A0\u200B\uFEFF]$)/; 
  // detecta espacios al inicio o final, incluyendo NBSP, ZWSP y BOM

  // 1) Rechazar si hay espacios al inicio o final (incluidos unicode)
  if (raw !== trimmed || unicodeEdgeSpace.test(raw)) {
    fail = `Error en el campo PH DEPARTAMENTO: contiene espacios al inicio o al final ("${raw}")`;
    return fail;
  }

  // 2) Ahora validar que tenga exactamente 2 dígitos (sin espacios)
  if (!/^\d{2}$/.test(trimmed)) {
    fail = `Error en el campo PH DEPARTAMENTO: debe tener exactamente 2 dígitos (${trimmed})`;
    return fail;
  }

}

    // Validaciones numéricas directas
    if (!checkNumber(model.VALOR_ARRIENDO, "VALOR_ARRIENDO")) return fail;
    if (!checkNumber(model.VALOR_ADMINISTRACION, "VALOR_ADMINISTRACION")) return fail;
    if (!checkNumber(model.VALOR_OFERTA_VENTA, "VALOR_OFERTA_VENTA")) return fail;
    if (!checkNumber(model.PORCENTAJE_DE_NEGOCIACION, "PORCENTAJE_DE_NEGOCIACION")) return fail;    
    if (!checkNumber(model.VALOR_OFERTA_NEGOCIADO, "VALOR_OFERTA_NEGOCIADO")) return fail;
    if (!checkNumber(model.ANIO_CONSTRUCCION, "AÑO_CONSTRUCCION")) return fail;
    if (!checkNumber(model.ALTURA_EDIFICIO, "ALTURA_EDIFICIO")) return fail;
    if (!checkNumber(model.No_PISO, "No_PISO")) return fail;    
    if (!checkNumber(model.AREA_CONSTRUIDA_m2, "AREA_CONSTRUIDA")) return fail;
    if (!checkNumber(model.AREA_PRIVADA_m2, "AREA_PRIVADA")) return fail;
    if (!checkNumber(model.No_GARAJES, "No_GARAJES")) return fail;
    if (!checkNumber(model.No_DEPOSITOS, "NO_DEPOSITOS")) return fail;
    if (!checkNumber(model.VR_TOTAL_TERRAZA_BALCON_PATIO, "VR_TOTAL_TERRAZA_BALCON_PATIO")) return fail;
    if (!checkNumber(model.VALOR_GARAJES, "VALOR_GARAJES")) return fail;
    if (!checkNumber(model.VALOR_DEPOSITOS, "VALOR_DEPOSITOS")) return fail;
    if (!checkNumber(model.LATITUD, "LATITUD")) return fail;
    

    // Ejemplo adicional: estrato (solo 0–6)
    if (isNaN(Number(model.ESTRATO)) || Number(model.ESTRATO) < 0 || Number(model.ESTRATO) > 6) {
        fail = `Error en el campo PH ESTRATO: valor inválido (${model.ESTRATO})`;
        return fail;
    }
     // Ejemplo adicional: TIPO_TIPOLOGIA (solo 0–24)
    if (isNaN(Number(model.TIPO_TIPOLOGIA)) || Number(model.TIPO_TIPOLOGIA) < 0 || Number(model.TIPO_TIPOLOGIA) > 24) {
        fail = `Error en el campo PH TIPO_TIPOLOGIA: valor inválido (${model.TIPO_TIPOLOGIA})`;
        return fail;
    }
     // Ejemplo adicional: DESTINACION_ECONOMICA (solo 0–26)
    if (isNaN(Number(model.DESTINACION_ECONOMICA)) || Number(model.DESTINACION_ECONOMICA) < 0 || Number(model.DESTINACION_ECONOMICA) > 26) {
        fail = `Error en el campo PH DESTINACION_ECONOMICA: valor inválido (${model.DESTINACION_ECONOMICA})`;
        return fail;
    }
    // Ejemplo adicional: DERECHO_TIPO (solo 0–3)
    if (isNaN(Number(model.DERECHO_TIPO)) || Number(model.DERECHO_TIPO) < 0 || Number(model.DERECHO_TIPO) > 2) {
        fail = `Error en el campo PH DERECHO_TIPO: valor inválido (${model.DERECHO_TIPO})`;
        return fail;
    }
      // Ejemplo adicional: TIPO_OFERTA (solo 0–1)
    if (isNaN(Number(model.TIPO_OFERTA)) || Number(model.TIPO_OFERTA) < 0 || Number(model.TIPO_OFERTA) > 1) {
        fail = `Error en el campo PH TIPO_OFERTA: valor inválido (${model.TIPO_OFERTA})`;
        return fail;
    }
    // Validar LATITUD
if (isNaN(Number(model.LATITUD))) {
  fail = `Error en el campo PH LATITUD: no es un número válido (${model.LATITUD})`;
  return fail;
}
const lat = Number(model.LATITUD.toString().replace(",", "."));
if (lat < -5 || lat > 15) {
  fail = `Error en el campo PH LATITUD: fuera de rango permitido (-5 a 15) (${lat})`;
  return fail;
}

// Validar LONGITUD
if (isNaN(Number(model.LONGITUD))) {
  fail = `Error en el campo PH LONGITUD: no es un número válido (${model.LONGITUD})`;
  return fail;
}
const lon = Number(model.LONGITUD.toString().replace(",", "."));
if (lon < -80 || lon > -65) {
  fail = `Error en el campo PH LONGITUD: fuera de rango permitido (-80 a -65) (${lon})`;
  return fail;
}

    // Ejemplo adicional: CONSERVACION (solo 0–3)
    if (isNaN(Number(model.CONSERVACION)) || Number(model.CONSERVACION) < 0 || Number(model.CONSERVACION) > 3) {
        fail = `Error en el campo PH CONSERVACION: valor inválido (${model.CONSERVACION})`;
        return fail;
    }
    // Ejemplo adicional: TIEMPO_OFERTA_MERCADO (entre 0-99)
    if (isNaN(Number(model.TIEMPO_OFERTA_MERCADO)) || Number(model.TIEMPO_OFERTA_MERCADO) < 0 || Number(model.TIEMPO_OFERTA_MERCADO) > 99) {
        fail = `Error en el campo PH TIEMPO_OFERTA_MERCADO: valor inválido (${model.TIEMPO_OFERTA_MERCADO})`;
        return fail;
    } 
    return fail;
}

    static validNph(model) {
  let fail = "exito";

    // Helper: valida numérico >= 0
  const checkNumber = (val, campo) => {
    if (val == null || val === "" || isNaN(Number(val)) || Number(val) < 0) {
      fail = `Hubo un problema con la carga del archivo, se detectó un error en la hoja NPH, campo [${campo}] con valor: ${val}`;
      return false;
    }
    return true;
  };

  // Función genérica para verificar vacío
  const isEmpty = (val) => {
    return val === null || val === undefined || String(val).trim() === "";
  };

  // Definir banderas de identificadores principales
  const noPredialAntiguo = isEmpty(model.NUMERO_PREDIAL_ANTIGUO);
  const noPredialNuevo   = isEmpty(model.NUMERO_PREDIAL_NUEVO);
  const noMatricula      = isEmpty(model.MATRICULA_INMOBILIARIA);

  // Validar identificadores principales (si vienen vacíos -> error inmediato)
  if (noPredialAntiguo) {
    return "El campo campo NPH NUMERO_PREDIAL_ANTIGUO está vacío y es obligatorio su diligenciamiento.";
  }

  if (noPredialNuevo) {
    return "El campo campo NPH NUMERO_PREDIAL_NUEVO está vacío y es obligatorio su diligenciamiento.";
  }

  if (noMatricula) {
    return "El campo campo NPH MATRICULA_INMOBILIARIA está vacío y es obligatorio su diligenciamiento.";
  }

  // Si TODOS están vacíos => exigir CODIGO_HOMOLOGADO
  if (noPredialAntiguo && noPredialNuevo && noMatricula) {
    if (isEmpty(model.CODIGO_HOMOLOGADO)) {
      return "Hubo un problema con la carga: el campo campo NPH CODIGO_HOMOLOGADO es obligatorio cuando no se diligencian los identificadores principales (Predial antiguo, Predial nuevo o Matrícula inmobiliaria).";
    }
  }

  // Reglas adicionales de longitud
if (
  model.NUMERO_PREDIAL_ANTIGUO &&
  !noPredialAntiguo &&
  model.NUMERO_PREDIAL_ANTIGUO.toLowerCase() !== "vacio" &&
  model.NUMERO_PREDIAL_ANTIGUO.length !== 20
) {
  fail = `Error en campo NPH NUMERO_PREDIAL_ANTIGUO: longitud inválida (${model.NUMERO_PREDIAL_ANTIGUO})`;
  return fail;
}

if (
  model.NUMERO_PREDIAL_NUEVO &&
  !noPredialNuevo &&
  model.NUMERO_PREDIAL_NUEVO.toLowerCase() !== "vacio" &&
  model.NUMERO_PREDIAL_NUEVO.length !== 30
) {
  fail = `Error en campo NPH NUMERO_PREDIAL_NUEVO: longitud inválida (${model.NUMERO_PREDIAL_NUEVO})`;
  return fail;
}

if (
  model.MATRICULA_INMOBILIARIA &&
  !noMatricula &&
  model.MATRICULA_INMOBILIARIA.toLowerCase() !== "vacio" &&
  model.MATRICULA_INMOBILIARIA.length !== 12
) {
  fail = `Error en campo NPH MATRICULA_INMOBILIARIA: longitud inválida (${model.MATRICULA_INMOBILIARIA})`;
  return fail;
}

  // --- Campos básicos ---
  if (!/^\d{2}$/.test(String(model.DEPARTAMENTO).trim())) {
    return `Error en campo NPH DEPARTAMENTO: debe tener exactamente 2 dígitos (${model.DEPARTAMENTO})`;
  }
  if (!/^\d{5}$/.test(String(model.MUNICIPIO).trim())) {
    return `Error en campo NPH MUNICIPIO: debe tener exactamente 5 dígitos (${model.MUNICIPIO})`;
  }

  // --- Numéricos obligatorios ---
  if (!checkNumber(model.VALOR_ARRIENDO, "VALOR_ARRIENDO")) return fail;
  if (!checkNumber(model.VALOR_OFERTA_VENTA, "VALOR_OFERTA_VENTA")) return fail;
  if (!checkNumber(model.PORCENTAJE_NEGOCIACION, "PORCENTAJE_NEGOCIACION")) return fail;
  if (!checkNumber(model.VALOR_OFERTA_NEGOCIADO, "VALOR_OFERTA_NEGOCIADO")) return fail;
  if (!checkNumber(model.ANIO_CONSTRUCCION, "ANIO_CONSTRUCCION")) return fail;
  if (!checkNumber(model.AREA_TERRENO_M2, "AREA_TERRENO_M2")) return fail;
  if (!checkNumber(model.AREA_CONSTRUCCION_M2, "AREA_CONSTRUCCION")) return fail;
  if (!checkNumber(model.VR_M2_CONST, "VR_M2_CONSTRUCCION")) return fail;
  if (!checkNumber(model.VR_M2_TERRENO, "VR_M2_TERRENO")) return fail;
  if (!checkNumber(model.TIEMPO_OFERTA_MERCADO, "TIEMPO_OFERTA_MERCADO")) return fail;
  if (!checkNumber(model.AVALUO_CATASTRAL, "AVALUO_CATASTRAL")) return fail;

  // --- Catálogos ---
  if (model.ESTRATO < 0 || model.ESTRATO > 6) return `Error en campo NPH ESTRATO: valor inválido (${model.ESTRATO})`;
  if (model.TIPO_OFERTA < 0 || model.TIPO_OFERTA > 1) return `Error en campo NPH TIPO_OFERTA: valor inválido (${model.TIPO_OFERTA})`;
  if (model.DESTINACION_ECONOMICA < 0 || model.DESTINACION_ECONOMICA > 26) return `Error en campo NPH DESTINACION_ECONOMICA: valor inválido (${model.DESTINACION_ECONOMICA})`;
  if (model.DERECHO_TIPO < 0 || model.DERECHO_TIPO > 2) return `Error en campo NPH DERECHO_TIPO: valor inválido (${model.DERECHO_TIPO})`;
  if (model.TIPO_TIPOLOGIA < 0 || model.TIPO_TIPOLOGIA > 24) return `Error en campo NPH TIPO_TIPOLOGIA: valor inválido (${model.TIPO_TIPOLOGIA})`;
  if (model.CONSERVACION < 0 || model.CONSERVACION > 3) return `Error en campo NPH CONSERVACION: valor inválido (${model.CONSERVACION})`;

  // --- Georreferenciación ---
  const lat = Number(String(model.LATITUD).replace(",", "."));
  const lon = Number(String(model.LONGITUD).replace(",", "."));
  if (isNaN(lat) || lat < -5 || lat > 15) return `Error en campo NPH LATITUD: fuera de rango permitido (-5 a 15) (${model.LATITUD})`;
  if (isNaN(lon) || lon < -80 || lon > -65) return `Error en campo NPH LONGITUD: fuera de rango permitido (-80 a -65) (${model.LONGITUD})`;

  return fail;
}
// Validador Ofertas Rurales - actualizado 20-09-2025

static validRural(model) {
  let fail = "exito";

    // Helper: valida numérico >= 0
  const checkNumber = (val, campo) => {
    if (val == null || val === "" || isNaN(Number(val)) || Number(val) < 0) {
      fail = `Hubo un problema con la carga del archivo, se detectó un error en la hoja NPH, campo [${campo}] con valor: ${val}`;
      return false;
    }
    return true;
  };

  // Función genérica para verificar vacío
  const isEmpty = (val) => {
    return val === null || val === undefined || String(val).trim() === "";
  };

  // Definir banderas de identificadores principales
  const noPredialAntiguo = isEmpty(model.NUMERO_PREDIAL_ANTIGUO);
  const noPredialNuevo   = isEmpty(model.NUMERO_PREDIAL_NUEVO);
  const noMatricula      = isEmpty(model.MATRICULA_INMOBILIARIA);

  // Validar identificadores principales (si vienen vacíos -> error inmediato)
  if (noPredialAntiguo) {
    return "El campo campo RURAL NUMERO_PREDIAL_ANTIGUO está vacío y es obligatorio su diligenciamiento.";
  }

  if (noPredialNuevo) {
    return "El campo campo RURAL NUMERO_PREDIAL_NUEVO está vacío y es obligatorio su diligenciamiento.";
  }

  if (noMatricula) {
    return "El campo campo RURAL MATRICULA_INMOBILIARIA está vacío y es obligatorio su diligenciamiento.";
  }

  // Si TODOS están vacíos => exigir CODIGO_HOMOLOGADO
  if (noPredialAntiguo && noPredialNuevo && noMatricula) {
    if (isEmpty(model.CODIGO_HOMOLOGADO)) {
      return "Hubo un problema con la carga: el campo campo RURAL CODIGO_HOMOLOGADO es obligatorio cuando no se diligencian los identificadores principales (Predial antiguo, Predial nuevo o Matrícula inmobiliaria).";
    }
  }

  // Reglas adicionales de longitud
if (
  model.NUMERO_PREDIAL_ANTIGUO &&
  !noPredialAntiguo &&
  model.NUMERO_PREDIAL_ANTIGUO.toLowerCase() !== "vacio" &&
  model.NUMERO_PREDIAL_ANTIGUO.length !== 20
) {
  fail = `Error en campo RURAL NUMERO_PREDIAL_ANTIGUO: longitud inválida (${model.NUMERO_PREDIAL_ANTIGUO})`;
  return fail;
}

if (
  model.NUMERO_PREDIAL_NUEVO &&
  !noPredialNuevo &&
  model.NUMERO_PREDIAL_NUEVO.toLowerCase() !== "vacio" &&
  model.NUMERO_PREDIAL_NUEVO.length !== 30
) {
  fail = `Error en campo RURAL NUMERO_PREDIAL_NUEVO: longitud inválida (${model.NUMERO_PREDIAL_NUEVO})`;
  return fail;
}

if (
  model.MATRICULA_INMOBILIARIA &&
  !noMatricula &&
  model.MATRICULA_INMOBILIARIA.toLowerCase() !== "vacio" &&
  model.MATRICULA_INMOBILIARIA.length !== 12
) {
  fail = `Error en campo RURAL MATRICULA_INMOBILIARIA: longitud inválida (${model.MATRICULA_INMOBILIARIA})`;
  return fail;
}
// Validar MUNICIPIO
if (model.MUNICIPIO !== null && model.MUNICIPIO !== undefined) {
  const raw = String(model.MUNICIPIO);           // preserva exactamente lo que entró
  const trimmed = raw.trim();                    // versión limpia (quita espacios ASCII)
  const unicodeEdgeSpace = /(^[\s\u00A0\u200B\uFEFF])|([\s\u00A0\u200B\uFEFF]$)/; 
  // detecta espacios al inicio o final, incluyendo NBSP, ZWSP y BOM

  // 1) Rechazar si hay espacios al inicio o final (incluidos unicode)
  if (raw !== trimmed || unicodeEdgeSpace.test(raw)) {
    fail = `Error en el campo RURAL MUNICIPIO: contiene espacios al inicio o al final ("${raw}")`;
    return fail;
  }

  // 2) Ahora validar que tenga exactamente 5 dígitos (sin espacios)
  if (!/^\d{5}$/.test(trimmed)) {
    fail = `Error en el campo RURAL MUNICIPIO: debe tener exactamente 5 dígitos (${trimmed})`;
    return fail;
  }

}
// Validar DEPARTAMENTO
if (model.DEPARTAMENTO !== null && model.DEPARTAMENTO !== undefined) {
  const raw = String(model.DEPARTAMENTO);           // preserva exactamente lo que entró
  const trimmed = raw.trim();                    // versión limpia (quita espacios ASCII)
  const unicodeEdgeSpace = /(^[\s\u00A0\u200B\uFEFF])|([\s\u00A0\u200B\uFEFF]$)/; 
  // detecta espacios al inicio o final, incluyendo NBSP, ZWSP y BOM

  // 1) Rechazar si hay espacios al inicio o final (incluidos unicode)
  if (raw !== trimmed || unicodeEdgeSpace.test(raw)) {
    fail = `Error en el campo RURAL DEPARTAMENTO: contiene espacios al inicio o al final ("${raw}")`;
    return fail;
  }

  // 2) Ahora validar que tenga exactamente 2 dígitos (sin espacios)
  if (!/^\d{2}$/.test(trimmed)) {
    fail = `Error en el campo RURAL DEPARTAMENTO: debe tener exactamente 2 dígitos (${trimmed})`;
    return fail;
  }

}
// --- Numéricos obligatorios ---
  if (!checkNumber(model.VALOR_ARRIENDO, "VALOR_ARRIENDO")) return fail;
  if (!checkNumber(model.VALOR_OFERTA_VENTA, "VALOR_OFERTA_VENTA")) return fail;
  if (!checkNumber(model.PORCENTAJE_NEGOCIACION, "PORCENTAJE_NEGOCIACION")) return fail;
  if (!checkNumber(model.VALOR_OFERTA_NEGOCIADO, "VALOR_OFERTA_NEGOCIADO")) return fail;
  if (!checkNumber(model.ANIO_CONSTRUCCION, "ANIO_CONSTRUCCION")) return fail;
  if (!checkNumber(model.AREA_TERRENO, "AREA_TERRENO")) return fail;
  if (!checkNumber(model.AREA_CONSTRUCCION, "AREA_CONSTRUCCION")) return fail;
  if (!checkNumber(model.VR_M2_CONST, "VR_M2_CONST")) return fail;
  if (!checkNumber(model.VR_Ha_TERRENO, "VR_M2_TERRENO")) return fail;
  if (!checkNumber(model.TIEMPO_OFERTA_MERCADO, "TIEMPO_OFERTA_MERCADO")) return fail;
  if (!checkNumber(model.AVALUO_CATASTRAL, "AVALUO_CATASTRAL")) return fail;

// --- Catálogos ---
  if (model.ESTRATO < 0 || model.ESTRATO > 6) return `Error en campo NPH ESTRATO: valor inválido (${model.ESTRATO})`;
  if (model.TIPO_OFERTA < 0 || model.TIPO_OFERTA > 1) return `Error en campo NPH TIPO_OFERTA: valor inválido (${model.TIPO_OFERTA})`;
  if (model.DESTINACION_ECONOMICA < 0 || model.DESTINACION_ECONOMICA > 26) return `Error en campo NPH DESTINACION_ECONOMICA: valor inválido (${model.DESTINACION_ECONOMICA})`;
  if (model.DERECHO_TIPO < 0 || model.DERECHO_TIPO > 2) return `Error en campo NPH DERECHO_TIPO: valor inválido (${model.DERECHO_TIPO})`;
  if (model.TIPO_TIPOLOGIA < 0 || model.TIPO_TIPOLOGIA > 24) return `Error en campo NPH TIPO_TIPOLOGIA: valor inválido (${model.TIPO_TIPOLOGIA})`;
  if (model.CONSERVACION < 0 || model.CONSERVACION > 3) return `Error en campo NPH CONSERVACION: valor inválido (${model.CONSERVACION})`;

  // --- Georreferenciación ---
  const lat = Number(String(model.LATITUD).replace(",", "."));
  const lon = Number(String(model.LONGITUD).replace(",", "."));
  if (isNaN(lat) || lat < -5 || lat > 15) return `Error en campo NPH LATITUD: fuera de rango permitido (-5 a 15) (${model.LATITUD})`;
  if (isNaN(lon) || lon < -80 || lon > -65) return `Error en campo NPH LONGITUD: fuera de rango permitido (-80 a -65) (${model.LONGITUD})`;


return fail;
}
    
}

module.exports = ValidService;