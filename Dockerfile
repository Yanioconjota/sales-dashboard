# Establecer la imagen base de Node.js
FROM node:16-alpine as build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo package.json y package-lock.json (si está disponible)
COPY package.json package-lock.json* ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Exponer el puerto que utiliza Angular CLI (por defecto 4200)
EXPOSE 4200

# Comando para iniciar la aplicación con Angular CLI
CMD ["npm", "start"]
