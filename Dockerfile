FROM node:18-alpine as build

# Устанавливаем необходимые пакеты с использованием официальных зеркал
RUN apk update && apk add --no-cache curl unzip

# Безопасная установка Deno (предпочтительный способ)
RUN curl -fsSL https://deno.land/x/install/install.sh | sh

ENV DENO_INSTALL="/root/.deno/bin"
ENV PATH="$DENO_INSTALL:$PATH"

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# --- Финальный этап ---
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]