# Descripción

## Correr en dev

1. Clonar el repositorio
2. Crear una copia del .env.template a .env con los datos correctos
3. Instalar las dependencias
4. Levantar la base de datos ```docker compose up -d```
5. Correr las migraciones de Prisma ```bunx prisma migrate dev```
6. Llenar la base de datos con información de la semilla. ``````
7. Ejecutar

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Correr en prod
