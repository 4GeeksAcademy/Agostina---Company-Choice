
# Regla de desarrollo — TrackFlow

## Alcance de aplicación

- **Tipo de activación:** Siempre activa.
- **Ámbito:** Todo el repositorio TrackFlow.
- **Aplicación:** Obligatoria para cualquier agente de IA que cree, modifique o revise código, documentación, configuraciones o integraciones del proyecto.

### Condiciones de aplicación

Esta regla debe aplicarse:

1. Antes de comenzar cualquier tarea de desarrollo.
2. Al crear o modificar APIs, servicios y pipelines de datos.
3. Al desarrollar agentes de IA o automatizaciones.
4. Al modificar documentación técnica o decisiones de arquitectura.
5. Antes de validar cambios y preparar commits.

### Prioridad

Esta regla complementa las instrucciones generales de `AGENTS.md`.

Si existe un conflicto entre instrucciones, el agente debe detenerse, informar del conflicto y solicitar aclaración antes de continuar.


## 1. Objetivo

Garantizar que cualquier desarrollo realizado por agentes de IA sea coherente con la arquitectura, los procesos empresariales y los objetivos tecnológicos de TrackFlow.

Esta regla se aplica a la creación o modificación de APIs, pipelines de datos, automatizaciones, servicios y componentes de Inteligencia Artificial.

## 2. Contexto obligatorio

Antes de implementar cambios, el agente debe consultar:

- `CONTEXT.es.md`
- `company-choice.md`
- `memory-bank/projectbrief.md`
- `memory-bank/techContext.md`
- `memory-bank/progress.md`
- `AGENTS.md`

Debe identificar el problema empresarial que se pretende resolver y comprobar el estado actual de la implementación.

## 3. Integración de sistemas

TrackFlow opera en Estados Unidos y España, utilizando diferentes sistemas de gestión de almacenes y otras plataformas empresariales.

Por lo tanto:

- No asumir que ambos países utilizan los mismos sistemas.
- No inventar endpoints ni estructuras de bases de datos.
- Verificar los formatos de entrada y salida.
- Normalizar los datos antes de combinarlos.
- Documentar las transformaciones realizadas.
- Gestionar errores de conexión y procesamiento.
- Evitar duplicar integraciones existentes.

## 4. Calidad y trazabilidad de datos

Toda solución que procese información operativa debe:

- Validar los datos recibidos.
- Identificar valores faltantes o inconsistentes.
- Mantener trazabilidad de las fuentes utilizadas.
- Evitar modificar datos originales sin autorización.
- Diferenciar información real, simulada y estimada.
- Registrar errores relevantes.
- No presentar datos inventados como resultados empresariales reales.

## 5. Desarrollo de soluciones de IA

Para cualquier agente o funcionalidad de Inteligencia Artificial:

- Definir claramente su objetivo.
- Identificar las fuentes de información necesarias.
- Verificar la disponibilidad de los datos.
- Evitar generar respuestas empresariales sin evidencia.
- Informar cuando los datos sean insuficientes.
- Priorizar resultados verificables.
- No ejecutar acciones críticas sin autorización.
- Documentar las limitaciones del sistema.

## 6. Seguridad

- No almacenar credenciales en el código.
- Utilizar variables de entorno.
- No publicar información sensible.
- Validar entradas externas.
- Evitar registrar secretos en logs.
- No ejecutar operaciones destructivas sin autorización.
- Respetar los permisos de acceso a los datos.

## 7. Estructura del monorepositorio

Antes de crear nuevos componentes:

1. Inspeccionar las carpetas existentes.
2. Identificar la ubicación adecuada.
3. Reutilizar componentes cuando sea posible.
4. Evitar estructuras duplicadas.
5. Mantener una organización consistente.

Las futuras aplicaciones deberán integrarse en la estructura existente del monorepositorio.

## 8. Validación obligatoria

Antes de dar por finalizado un cambio, el agente debe:

- Verificar que los archivos modificados sean correctos.
- Comprobar que no existan errores de sintaxis.
- Ejecutar las pruebas disponibles cuando corresponda.
- Validar los formatos de datos.
- Revisar que no se hayan incorporado credenciales.
- Confirmar que los cambios respetan los objetivos del proyecto.

Si alguna validación no puede ejecutarse, debe documentarse.

## 9. Documentación y seguimiento

Cuando se complete una funcionalidad o decisión importante:

- Actualizar `memory-bank/progress.md`.
- Actualizar `memory-bank/techContext.md` si cambia la arquitectura.
- Documentar nuevas dependencias.
- Registrar limitaciones o bloqueos.
- Diferenciar funcionalidades implementadas de propuestas.

## 10. Criterios de aceptación

La regla se considera cumplida cuando:

- Los cambios están alineados con el contexto de TrackFlow.
- Se respeta la estructura del repositorio.
- Los datos y sus fuentes están identificados.
- Las validaciones aplicables se ejecutaron o se documentó por qué no pudieron ejecutarse.
- No se incorporaron secretos ni credenciales.
- La documentación refleja el estado real del proyecto.
- El agente informa los cambios realizados y los resultados obtenidos.
