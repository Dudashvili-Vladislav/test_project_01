FROM node:20-alpine as build

# Устанавливаем необходимые пакеты
RUN apk update && apk add --no-cache curl unzip

# Установка Deno
RUN curl -fsSL https://deno.land/x/install/install.sh | sh

ENV PATH="/root/.deno/bin:$PATH"

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# --- Финальный этап ---
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]