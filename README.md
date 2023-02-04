# Siga la construccion de los contenedores 

# Contenedor de base de datos

## Posicionarse en database_postgres y crear la imagen

```
cd database_postgres
docker build -t database
```

## Correr el servidor de la imagen de base de datos

```
docker run --name mande_db -p 5432:5432 -e POSTGRES_PASSWORD=123456 -d database
```

# Contenedor del express

Devolverse a la raiz del proyecto

```
cd ..
```

Entrar al backend-express

```
cd backend-express
```

## Crear el contenedor para de express

```
docker build -t express .
```

## instalar las dependencias de npm

```
docker run -it --rm -v $(pwd):/usr/src/app express /bin/bash
```

En la terminar hacer

```
npm install
exit
```

## Crear un contenedor con la imagen y conectarla a la base de datos

```
docker run -it -rm -p 3001:3001 -v $(pwd):/usr/src/app --link mande_db:postgres --name express express
```

## Probar el funcionamiento

Visite

`localhost:3001/`
`localhost:3001/probarbasededatos`
