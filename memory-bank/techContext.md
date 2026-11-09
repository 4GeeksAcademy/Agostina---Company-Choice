
# Contexto Tecnológico — TrackFlow

## 1. Contexto general

- Empresa: TrackFlow.
- Proyecto: AI Engineering — 4Geeks Academy.
- Departamentos prioritarios: Tecnología y Dirección Ejecutiva.
- CTO: Andrés Kim.
- Objetivo tecnológico: integrar sistemas empresariales, automatizar procesos y preparar la infraestructura necesaria para incorporar soluciones de Inteligencia Artificial.

## 2. Infraestructura tecnológica actual

Según el briefing empresarial, TrackFlow utiliza:

- Dos sistemas de gestión de almacenes (SGA) diferentes.
- Un ERP corporativo antiguo.
- Scripts de Python que conectan sistemas de forma individual.
- Bases de datos alojadas en dos proveedores cloud distintos.
- Integraciones poco documentadas.
- Sistemas de seguimiento y gestión de operaciones fragmentados.

### Problemas identificados

- Falta de integración entre sistemas.
- Ausencia de telemetría centralizada.
- Falta de monitorización automática.
- Dificultad para detectar fallos técnicos.
- Procesos manuales de recopilación de datos.
- Despliegues lentos de nuevas funcionalidades.
- Información empresarial distribuida entre diferentes plataformas.

## 3. Arquitectura tecnológica propuesta

Se plantea una arquitectura modular que permita conectar diferentes fuentes de datos y ofrecer información consolidada a los sistemas de análisis y agentes de IA.

### Flujo conceptual

Fuentes de datos empresariales
→ APIs e integraciones
→ Pipeline de datos
→ Almacenamiento centralizado
→ Procesamiento y análisis
→ Dashboards y agentes de IA
→ Informes, alertas y decisiones

Esta arquitectura es una propuesta inicial y podrá evolucionar durante los próximos hitos.

## 4. Componentes previstos

### Integración de datos

- Conectar diferentes sistemas operativos.
- Diseñar APIs para consultar información.
- Extraer datos de inventario, pedidos, envíos y devoluciones.
- Normalizar datos procedentes de diferentes fuentes.
- Consolidar información de Estados Unidos y España.

### Pipelines de datos

- Automatizar la recopilación de información.
- Transformar y validar datos.
- Gestionar errores durante el procesamiento.
- Preparar información para dashboards y agentes de IA.

### Monitorización y logging

- Registrar eventos y errores técnicos.
- Supervisar el funcionamiento de APIs y servicios.
- Detectar incidencias.
- Generar alertas automáticas.
- Facilitar el diagnóstico de problemas.

### Inteligencia Artificial

- Desarrollar agentes capaces de consultar información empresarial.
- Procesar consultas en lenguaje natural.
- Generar resúmenes ejecutivos.
- Analizar indicadores operativos.
- Detectar tendencias y anomalías.
- Proponer acciones basadas en los datos disponibles.

### Visualización de información

- Dashboards ejecutivos.
- KPIs operativos.
- Comparaciones entre países.
- Seguimiento de incidencias.
- Informes periódicos automatizados.

## 5. Tecnologías y herramientas

### Tecnologías existentes en TrackFlow

- Python para scripts de integración.
- Sistemas SGA.
- ERP corporativo.
- Bases de datos y servicios cloud.

### Herramientas del entorno de desarrollo

- Git para control de versiones.
- GitHub para alojar el repositorio.
- GitHub Codespaces como entorno de desarrollo.
- Markdown para documentación.
- Agentes de programación asistidos por IA.

### Tecnologías pendientes de definir

- Framework para las APIs.
- Sistema de base de datos.
- Herramienta de orquestación de pipelines.
- Plataforma de monitorización.
- Proveedor y modelos de IA.
- Framework de agentes.
- Herramienta de visualización de dashboards.
- Plataforma de despliegue.

Estas tecnologías deberán seleccionarse según los requisitos de los próximos hitos. No se consideran implementadas actualmente.

## 6. Organización del repositorio

### Documentación existente

- `CONTEXT.es.md`: contexto empresarial.
- `company-choice.md`: elección de empresa y propuesta de IA.
- `memory-bank/projectbrief.md`: objetivos y alcance del proyecto.
- `memory-bank/techContext.md`: contexto tecnológico.
- `memory-bank/progress.md`: seguimiento de avances.

### Estructura prevista para agentes

- `AGENTS.md`: instrucciones generales.
- `.agents/rules/`: reglas de desarrollo.
- `.agents/skills/`: habilidades reutilizables.

Las aplicaciones futuras deberán ubicarse respetando la estructura del monorepositorio y las instrucciones de cada hito.

## 7. Principios de desarrollo

- Mantener una arquitectura modular.
- Priorizar la reutilización de componentes.
- Evitar duplicar información y funcionalidades.
- Documentar integraciones y decisiones técnicas.
- Validar los datos antes de procesarlos.
- Implementar manejo de errores.
- Proteger credenciales y datos sensibles.
- No almacenar secretos en el repositorio.
- Incorporar pruebas cuando corresponda.
- Mantener trazabilidad de los cambios mediante Git.
- Diferenciar funcionalidades propuestas de funcionalidades implementadas.

## 8. Consideraciones para agentes de IA

Los agentes de programación deberán:

- Leer el contexto empresarial antes de proponer cambios.
- Consultar el banco de memoria del proyecto.
- Respetar la estructura existente del repositorio.
- No asumir que una tecnología está implementada sin verificarlo.
- Explicar las decisiones técnicas relevantes.
- Evitar modificaciones innecesarias.
- Validar los cambios realizados.
- Actualizar la documentación cuando corresponda.
- Solicitar confirmación antes de realizar cambios estructurales importantes.

## 9. Estado tecnológico actual del proyecto

- Empresa seleccionada: TrackFlow.
- Contexto empresarial documentado.
- Departamentos prioritarios definidos.
- Propuesta inicial de agente ejecutivo documentada.
- Banco de memoria en preparación.
- Arquitectura tecnológica conceptual definida.
- Stack definitivo pendiente de selección.
- APIs, pipelines, dashboards y agentes operativos todavía no implementados.
