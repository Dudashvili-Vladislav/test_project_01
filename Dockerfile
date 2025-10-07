FROM node:18-bullseye as build

WORKDIR /app

COPY package*.json ./

# Устанавливаем зависимости
RUN npm install --include=dev

COPY . .

RUN npm run build

FROM nginx:stable
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]