function statusFinalDelEstudiante(nombre, apellido, departamento, puntajeFundamentosProgramacion, puntajeEvaluacionImperativa,
    puntajeEvaluacionProgOrientadaAObjetos, evidenciaEvaluacionFundamentos, evidenciaEvaluacionImperativa, evidenciaProgOrientadaAObjetos,
    puntajePromedioIngles, puntajeEnLeccionesDeCT) {

        let puntajeEvaluaciones = (puntajeEvaluacionImperativa * 0.5) + (puntajeFundamentosProgramacion * 0.3) + (puntajeEvaluacionProgOrientadaAObjetos * 0.2);
        let cantidadEvidencias = evidenciaEvaluacionFundamentos + evidenciaEvaluacionImperativa + evidenciaProgOrientadaAObjetos;

        if (puntajePromedioIngles >= 50 && puntajeEnLeccionesDeCT === 100 && puntajeEvaluaciones >= 60 && cantidadEvidencias === 3) {

                console.log(`Ubicación del estudiante: ${departamento} \n
                *********************************************************************** \n
                Hola ${nombre} ${apellido}!!, espero que te encuentres bien, tu status final es el siguiente: \n
                En inglés: ${puntajePromedioIngles} - Excelente \n
                En CT: ${puntajeEnLeccionesDeCT} - Excelente \n
                En Téc: ${puntajeEvaluaciones.toFixed(2)} - Excelente \n
                Evidencias entregadas: ${cantidadEvidencias} - Excelente \n
                En conclusión, tu status final es aprobado con ${puntajeEvaluaciones.toFixed(2)} Felicitaciones! \n
                *********************************************************************** \n
                `);

        } else if (puntajePromedioIngles >= 50 && puntajeEnLeccionesDeCT === 100 && puntajeEvaluaciones >= 60 && cantidadEvidencias < 3) {

            console.log(`Ubicación del estudiante: ${departamento} \n
            *********************************************************************** \n
            Hola ${nombre} ${apellido}!!, espero que te encuentres bien, tu status final es el siguiente: \n
                En inglés: ${puntajePromedioIngles} - Excelente \n
                En CT: ${puntajeEnLeccionesDeCT} - Excelente \n
                En Téc: ${puntajeEvaluaciones.toFixed(2)} - Excelente \n
                Evidencias entregadas: ${cantidadEvidencias} - Insuficiente. \n
                Tu puntaje final es ${puntajeEvaluaciones.toFixed(2)} lo cual está muy bien, pero deberás dar un examen. \n
                Dado que no has entregado todas las evidencias correspondientes, deberás rendir un examen final con supervisión y obtener
                60% o más para aprobar. \n
                *********************************************************************** \n
                `);

        } else if (puntajePromedioIngles >= 50 && puntajeEnLeccionesDeCT === 100 && puntajeEvaluaciones >= 50 && puntajeEvaluaciones < 60 && cantidadEvidencias === 3) {

            console.log(`Ubicación del estudiante: ${departamento} \n
            *********************************************************************** \n
            Hola ${nombre} ${apellido}!!, espero que te encuentres bien, tu status final es el siguiente: \n
            En inglés: ${puntajePromedioIngles} - Excelente \n
            En CT: ${puntajeEnLeccionesDeCT} - Excelente \n
            En Téc: ${puntajeEvaluaciones.toFixed(2)} - Insuficiente \n
            Evidencias entregadas: ${cantidadEvidencias} - Excelente \n
            Dado que tu puntaje final es ${puntajeEvaluaciones.toFixed(2)} y entra en el rango de 50 - 59.99, deberás dar un examen
            final con supervisión y sacarte 60% o más para aprobarlo. \n
            *********************************************************************** \n
            `);

        } else {
            console.log(`Ubicación del estudiante: ${departamento} \n
            *********************************************************************** \n
            Hola ${nombre} ${apellido}!, espero que te encuentres bien. \n 
            Debido al incumplimiento de los resultados esperados, no has aprobado la fase 1. \n
            Aún así, podrás volver a cursar en próximas ediciones sin ningún problema. \n
            Desde JaP, te deseamos buena suerte en tu camino y esperamos volver a verte. \n
            Saludos cordiales. \n
            *********************************************************************** \n
            `);
        };

};

// ***** ORDEN DE LOS PARÁMETROS *****
// nombre                                                                               (string)
// apellido                                                                             (string)
// departamento                                                                         (string)
// puntaje evaluacion Fundamentos de Programación                                       (int)
// puntaje Programación Imperativa                                                      (int)
// puntaje Programación Orientada a Objetos                                             (int)
// si cargó o no la evidencia en la evaluación de Fundamentos de Programación           (boolean)
// si cargó o no la evidencia en la evaluación de Programación Imperativa               (boolean)
// si cargó o no la evidencia en la evaluación de Programación Orientada a Objetivos    (boolean)
// su puntaje promedio en Inglés                                                        (int)
// puntaje total de las 10 lecciones de CT                                              (int)

// PRUEBA 1: El alumno aprueba ya que cumple con los resultados esperados.
statusFinalDelEstudiante("Carlos", "Paez", "Maldonado", 70, 65, 62, true, true, true, 87, 100);

// PRUEBA 2: El alumno tiene todo correcto, excepto la totalidad de las evidencias, por lo cual, deberá dar examen.
statusFinalDelEstudiante("Esteban", "Gutierrez", "Montevideo", 75, 55, 27, true, false, true, 63, 100);

// PRUEBA 3: El alumno tiene todo correcto, excepto la totalidad de las tutorías de CT
statusFinalDelEstudiante("Jorge", "Da Silva", "Artigas", 85, 90, 74, true, true, true, 54, 95);

// PRUEBA 4: El alumno tiene todo correcto, excepto 50% o más en inglés
statusFinalDelEstudiante("Raúl", "Alves", "Rivera", 65, 72, 79, true, true, true, 47, 100);

// PRUEBA 5: El alumno tiene todo correcto, excepto que tiene entre 50 y 59.99% puntaje en CREA Téc. Por lo cual, deberá dar examen.
statusFinalDelEstudiante("Anaclara", "Olivera", "Canelones", 47, 65, 36, true, true, true, 58, 100);

// PRUEBA 6: El alumno no cumple con ninguno de los resultados esperados.
statusFinalDelEstudiante("Blanca", "Smith", "Paysandú", 45, 25, 27, true, false, false, 37, 60);

/* 
Integrantes del equipo:

Fiorella Berrutti
Agustina Morosoli
Fiorella Benedictti
Joaquin Talice Graña
 */