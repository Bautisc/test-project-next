# Proyecto Prisma + GraphQL + Next.js

Este es un proyecto que utiliza Prisma, GraphQL, Next.js y otras tecnologías modernas. El objetivo es proporcionar una base para trabajar con un backend de GraphQL, integración con una base de datos y el uso de Prisma como ORM.

## Tecnologías utilizadas

- Prisma: ORM para interactuar con la base de datos de manera eficiente.
- GraphQL: API de datos que permite a los clientes consultar y modificar la información de manera flexible.
- Next.js: Framework de React para crear aplicaciones web.
- React: Biblioteca para construir la interfaz de usuario.
- TailwindCSS: Framework CSS para crear interfaces de usuario personalizadas de manera rápida y eficiente.
- ESLint: Herramienta de linting para mantener el código limpio y coherente.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- Node.js (v18 o superior).
- npm (o Yarn como alternativa).
- Prisma CLI (automáticamente instalado como dependencia).
- Base de datos PostgreSQL instalada

## Instalación

Sigue estos pasos para instalar y configurar el proyecto en tu entorno local:

### 1. Clonar el repositorio

Primero, clona este repositorio en tu máquina local:
```bash
git clone https://github.com/Bautisc/test-project-next
```
### 2. Instalar las dependencias

Instala las dependencias del proyecto:
```bash
npm install
```
### 3. Configurar la base de datos

Asegúrate de tener tu base de datos configurada y accesible. en este caso PostgreSQL 

#### a) Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables (reemplaza con los valores adecuados para tu base de datos):

```bash
DATABASE_URL="mysql://usuario:contraseña@localhost:3306/nombre_base_de_datos"
```

#### b) Ejecutar migraciones de Prisma

Una vez que hayas configurado tu base de datos, ejecuta las migraciones de Prisma para crear las tablas necesarias:
```bash
npx prisma migrate deploy
```

### 4. Sembrar la base de datos con datos de prueba

Puedes llenar la base de datos con datos de prueba ejecutando el siguiente comando:
```bash
npm run prisma:seed
```
### 5. Ejecutar el proyecto

Ahora puedes iniciar el servidor de desarrollo de Next.js. Esto iniciará tanto el servidor de Next.js como la API de GraphQL:
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:3000` y la api de graphql en `/api/graphql`.

---

## Estructura del Proyecto

A continuación se describe la estructura del proyecto:
/pages -> Páginas de Next.js /api -> Endpoints de la API (incluye GraphQL y otras APIs) /prisma -> Archivos relacionados con Prisma, incluyendo el esquema y migraciones /seed.js -> Script para poblar la base de datos con datos de prueba /components -> Componentes reutilizables de React /styles -> Archivos de estilos, incluido TailwindCSS

---

## API de GraphQL

Este proyecto utiliza GraphQL para consultar y modificar los datos de la base de datos. De momento falta desarrollar todos los distintos tipos de querys y mutations.. estos son los que estan disponibles

### Consultar todos los usuarios

Realiza una consulta a la API de GraphQL para obtener todos los usuarios y sus sesiones relacionadas:

```graphql
query { users { id firstName lastName email completedSessions remainingSessions sessions { sessionNumber sessionDate } } }

```
### Crear un nuevo usuario

Puedes crear un nuevo usuario usando la siguiente mutación:

```graphql
mutation { newUser(nUser: { firstName: "Juan", lastName: "Perez", email: "juan@ejemplo.com", completedSessions: 5, remainingSessions: 10 }) { id firstName lastName email } }

```

## Desarrollo

Este proyecto está configurado para ser desarrollado y escalado fácilmente. A continuación se detallan algunos de los aspectos clave:

- Prisma se encarga de la interacción con la base de datos, incluyendo migraciones, consultas y semillas.
- Apollo Server se utiliza para configurar y servir la API de GraphQL.
- Next.js facilita la creación de la interfaz de usuario y las rutas.
- TailwindCSS proporciona una forma rápida y flexible de diseñar la interfaz.

---

## Comandos útiles

- Iniciar el servidor de desarrollo: `npm run dev`
- Ejecutar migraciones de Prisma: `npx prisma migrate deploy`
- Sembrar la base de datos con datos de prueba: `npm run prisma:seed`

---
