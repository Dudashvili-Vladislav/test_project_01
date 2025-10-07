# ЭТАП 1: Сборка на основе Debian (slim) вместо Alpine
FROM node:18-slim as build

# Используем apt-get для установки пакетов
# --no-install-recommends - не ставит лишние пакеты
# rm -rf /var/lib/apt/lists/* - очищаем кэш после установки
RUN apt-get update && apt-get install -y curl unzip --no-install-recommends && rm -rf /var/lib/apt/lists/*

# Установка Deno (эта команда универсальна и будет работать)
RUN curl -fsSL https://deno.land/install.sh | sh
# Путь к Deno в Debian-based образах может быть другим, но /root/.deno/bin обычно работает
ENV PATH="/root/.deno/bin:$PATH"

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# ЭТАП 2: Финальный образ (здесь можно оставить nginx:alpine, он не требует сети)
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

