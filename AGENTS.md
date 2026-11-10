
# AGENTS.md — TrackFlow

## 1. Propósito

Este archivo define las instrucciones que deben seguir los agentes de Inteligencia Artificial al trabajar en el repositorio de TrackFlow.

El objetivo es garantizar un desarrollo consistente, seguro, documentado y alineado con las necesidades empresariales del proyecto.

## 2. Contexto del proyecto

TrackFlow es una empresa de logística y almacenamiento con operaciones en Estados Unidos y España.

El proyecto de AI Engineering de 4Geeks Academy se centra en dos departamentos:

- Tecnología: integración de sistemas, automatización, pipelines de datos y monitorización.
- Dirección Ejecutiva: análisis de KPIs, dashboards, informes y asistencia inteligente para la toma de decisiones.

La solución propuesta es un Asistente Ejecutivo de IA capaz de consultar información operativa, generar informes y detectar incidencias.

Esta solución todavía no está implementada.

## 3. Documentación obligatoria

Antes de realizar cualquier cambio, el agente debe consultar:

1. `CONTEXT.es.md`: contexto empresarial de TrackFlow.
2. `company-choice.md`: justificación de la empresa seleccionada y propuesta de IA.
3. `memory-bank/projectbrief.md`: objetivos y alcance del proyecto.
4. `memory-bank/techContext.md`: contexto tecnológico y arquitectura propuesta.
5. `memory-bank/progress.md`: avances, decisiones y tareas pendientes.

También debe revisar las instrucciones aplicables en `.agents/rules/` y las habilidades disponibles en `.agents/skills/`.

Si algún archivo no existe, debe comunicarlo y no inventar su contenido.

## 4. Flujo de trabajo del agente

Para cada tarea, el agente debe:

1. Comprender el objetivo solicitado.
2. Leer la documentación relevante.
3. Inspeccionar la estructura actual del repositorio.
4. Identificar los archivos que necesitan modificaciones.
5. Proponer una solución adecuada al alcance.
6. Implementar únicamente los cambios necesarios.
7. Ejecutar las verificaciones disponibles.
8. Documentar resultados, limitaciones y decisiones.
9. Actualizar `memory-bank/progress.md` cuando exista un avance relevante.

No modificar archivos ajenos a la tarea sin justificación.

## 5. Convenciones de desarrollo

- Respetar la estructura del monorepositorio.
- Mantener nombres de archivos y carpetas consistentes.
- Utilizar Markdown para la documentación.
- Escribir código legible y modular.
- Evitar duplicación de funcionalidades.
- Documentar decisiones técnicas relevantes.
- Implementar manejo de errores cuando corresponda.
- Incorporar pruebas para las funcionalidades desarrolladas.
- Evitar dependencias innecesarias.
- No asumir que una tecnología está implementada sin comprobarlo.

## 6. Organización del repositorio

### Documentación

- `CONTEXT.es.md`: briefing empresarial.
- `company-choice.md`: elección y enfoque del proyecto.
- `memory-bank/`: memoria persistente del proyecto.
- `AGENTS.md`: instrucciones generales para agentes.

### Configuración de agentes

- `.agents/rules/`: reglas específicas de desarrollo.
- `.agents/skills/`: habilidades reutilizables.

### Aplicaciones futuras

Las futuras aplicaciones, APIs, pipelines y servicios deberán ubicarse respetando la estructura existente del monorepositorio.

Antes de crear nuevas carpetas, el agente deberá inspeccionar el repositorio y justificar la ubicación elegida.

No crear estructuras paralelas innecesarias.

## 7. Seguridad

Los agentes deben:

- No incluir contraseñas, tokens ni claves API en el código.
- No subir archivos `.env` con credenciales.
- Utilizar variables de entorno para información sensible.
- Evitar exponer datos empresariales o personales.
- Validar entradas externas.
- No ejecutar comandos destructivos sin autorización.
- No modificar configuraciones críticas sin justificación.

## 8. Git y GitHub

- Trabajar en ramas de funcionalidad y no directamente en `main`.
- Revisar `git status` antes de preparar un commit.
- Utilizar mensajes de commit descriptivos.
- No incluir archivos temporales ni secretos.
- No sobrescribir cambios existentes sin autorización.
- No realizar `push`, `merge` ni cambios remotos sin aprobación del usuario.
- Utilizar Pull Requests para integrar cambios en `main`.

La rama de trabajo prevista para este hito es:

`feature/agent-memory-bank`

## 9. Validación y criterios de calidad

Antes de considerar una tarea completada:

- Comprobar que los archivos requeridos existen.
- Revisar que las rutas internas sean correctas.
- Validar la sintaxis cuando corresponda.
- Ejecutar las pruebas disponibles.
- Confirmar que no se introdujeron secretos.
- Verificar que la documentación refleje los cambios realizados.

Si una validación no puede ejecutarse, explicar el motivo.

No afirmar que una prueba pasó sin haberla ejecutado.

## 10. Reglas y habilidades

Los agentes deben consultar `.agents/rules/` para conocer las reglas específicas del proyecto.

Las habilidades reutilizables se encuentran en `.agents/skills/`.

Antes de desarrollar una solución desde cero, comprobar si existe una habilidad adecuada para la tarea.

Cada habilidad debe incluir:

- Objetivo.
- Entradas necesarias.
- Procedimiento.
- Resultados esperados.
- Criterios de aceptación verificables.

## 11. Comunicación de resultados

Al finalizar una tarea, el agente debe informar:

- Qué archivos modificó.
- Qué cambios realizó.
- Qué validaciones ejecutó.
- Cuáles fueron los resultados.
- Qué problemas o limitaciones encontró.
- Qué tareas quedan pendientes.

Debe distinguir entre funcionalidades implementadas, propuestas y pendientes.

## 12. Principio general

Los agentes deben actuar como colaboradores de ingeniería responsables, priorizando la trazabilidad, la seguridad, la calidad del código y la coherencia con los objetivos empresariales de TrackFlow.
