
---
name: executive-report
description: Genera informes ejecutivos de TrackFlow a partir de KPIs operativos, validando datos, identificando anomalías y presentando conclusiones verificables.
---

# Skill — Executive Report

## 1. Objetivo

Generar informes ejecutivos claros, estructurados y verificables a partir de datos operativos de TrackFlow.

Esta skill está diseñada para apoyar a la Dirección Ejecutiva en el seguimiento de indicadores, la identificación de problemas y la toma de decisiones.

## 2. Cuándo utilizar esta skill

Utilizar esta skill cuando se solicite:

- Generar un informe ejecutivo.
- Analizar indicadores operativos.
- Comparar resultados entre Estados Unidos y España.
- Identificar variaciones en el rendimiento.
- Detectar anomalías o situaciones críticas.
- Resumir el estado de las operaciones.
- Presentar recomendaciones basadas en datos.

## 3. Entradas necesarias

El agente debe recibir:

### Datos obligatorios

- Período de análisis.
- País, almacén o unidad operativa.
- Al menos un KPI con su nombre, valor y unidad.
- Fuente de los datos.

### Datos opcionales

- Valores de períodos anteriores.
- Objetivos o umbrales de rendimiento.
- Datos de transportistas.
- Información de inventario.
- Costes operativos.
- Devoluciones e incidencias.
- Comentarios adicionales del usuario.

Si faltan datos obligatorios, el agente debe solicitarlos o indicar que no puede generar un informe verificable.

## 4. Procedimiento

### Paso 1 — Consultar el contexto

Leer:

- `CONTEXT.es.md`
- `company-choice.md`
- `memory-bank/projectbrief.md`
- `memory-bank/techContext.md`
- `memory-bank/progress.md`
- `AGENTS.md`

Aplicar las reglas relevantes de `.agents/rules/`.

### Paso 2 — Validar los datos

- Comprobar que existe un período de análisis.
- Identificar el país o almacén.
- Verificar nombres, valores y unidades de los KPIs.
- Comprobar la fuente de información.
- Detectar valores faltantes o inconsistentes.
- Diferenciar datos reales, simulados y estimados.

No inventar valores faltantes.

### Paso 3 — Analizar indicadores

Según los datos disponibles:

- Identificar indicadores relevantes.
- Comparar resultados entre períodos.
- Calcular variaciones porcentuales cuando corresponda.
- Detectar desviaciones respecto a objetivos definidos.
- Identificar posibles anomalías.
- Comparar operaciones entre países cuando existan datos comparables.

Fórmula de variación porcentual:

Variación (%) = ((Valor actual - Valor anterior) / Valor anterior) × 100

Si el valor anterior es cero, no calcular la variación porcentual y explicar la limitación.

### Paso 4 — Identificar hallazgos

Clasificar los hallazgos en:

- Resultados positivos.
- Problemas o desviaciones.
- Riesgos operativos.
- Información insuficiente.

Cada hallazgo debe estar respaldado por los datos proporcionados.

No afirmar relaciones causales sin evidencia suficiente.

### Paso 5 — Generar recomendaciones

Proponer acciones que:

- Respondan a problemas identificados.
- Sean relevantes para TrackFlow.
- Estén relacionadas con los KPIs analizados.
- Sean concretas y comprensibles.
- Distingan entre hechos y propuestas.

No recomendar acciones críticas automáticas sin aprobación humana.

### Paso 6 — Elaborar el informe

Utilizar la siguiente estructura:

# Informe Ejecutivo — TrackFlow

## 1. Resumen ejecutivo

Descripción breve de los principales resultados.

## 2. Alcance del análisis

- Período:
- País o almacén:
- Fuente de datos:
- Tipo de datos: reales, simulados o estimados.

## 3. Indicadores clave

Tabla con:

- KPI.
- Valor actual.
- Valor anterior, si está disponible.
- Variación, si puede calcularse.
- Unidad.

## 4. Hallazgos principales

Resultados positivos, problemas y anomalías respaldados por datos.

## 5. Riesgos y limitaciones

Riesgos detectados y restricciones de la información disponible.

## 6. Recomendaciones

Acciones sugeridas y justificación.

## 7. Conclusión ejecutiva

Síntesis de las prioridades para la Dirección Ejecutiva.

## 5. Resultados esperados

La ejecución de esta skill debe producir:

- Un informe ejecutivo en Markdown.
- KPIs claramente identificados.
- Comparaciones verificables cuando existan datos suficientes.
- Hallazgos basados en evidencia.
- Recomendaciones relacionadas con los resultados.
- Identificación de limitaciones y datos faltantes.

## 6. Criterios de aceptación verificables

La skill se considera ejecutada correctamente cuando:

- [ ] El informe identifica el período analizado.
- [ ] Se especifica el país o almacén.
- [ ] Se indica la fuente de información.
- [ ] Los KPIs incluyen valores y unidades.
- [ ] Los cálculos realizados son matemáticamente correctos.
- [ ] No se inventan datos faltantes.
- [ ] Los hallazgos están respaldados por información disponible.
- [ ] Las recomendaciones se relacionan con los hallazgos.
- [ ] Se documentan riesgos y limitaciones.
- [ ] El resultado utiliza la estructura definida.
- [ ] Se diferencia información real, simulada y estimada.

## 7. Restricciones

- No inventar métricas empresariales.
- No acceder a sistemas externos sin autorización.
- No exponer credenciales ni información sensible.
- No modificar datos originales.
- No ejecutar decisiones operativas automáticamente.
- No presentar hipótesis como hechos confirmados.
- No afirmar que se utilizaron datos en tiempo real sin haberlos consultado.

## 8. Ejemplo de uso

Solicitud:

"Generá un informe ejecutivo de las operaciones de TrackFlow en España durante la última semana utilizando los KPIs disponibles."

Comportamiento esperado:

1. Consultar el contexto del proyecto.
2. Identificar los datos disponibles.
3. Solicitar la información obligatoria que falte.
4. Validar los KPIs.
5. Calcular las variaciones posibles.
6. Identificar hallazgos.
7. Generar el informe en Markdown.
8. Verificar los criterios de aceptación.

## 9. Estado de implementación

Esta skill define un procedimiento reutilizable para agentes de IA.

No implica que ya existan conexiones operativas con los sistemas de TrackFlow, ni que el Asistente Ejecutivo de IA esté implementado.
