FROM denoland/deno:alpine as deno-setup

FROM node:20-alpine as build

# Копируем Deno из официального образа
COPY --from=deno-setup /usr/local/bin/deno /usr/local/bin/deno

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]