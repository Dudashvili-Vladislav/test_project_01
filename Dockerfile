FROM node:18-alpine as builder

WORKDIR /app

# Копируем файлы зависимостей отдельно для кэширования
COPY package*.json ./
COPY . .

# Устанавливаем все зависимости включая dev
RUN npm ci

# Сборка приложения
RUN npm run build

# Production образ
FROM nginx:alpine

# Устанавливаем времяzone и обновляем пакеты
RUN apk add --no-cache tzdata && \
    cp /usr/share/zoneinfo/Europe/Moscow /etc/localtime && \
    echo "Europe/Moscow" > /etc/timezone

# Копируем билд
COPY --from=builder /app/dist /usr/share/nginx/html

# Копируем конфиг nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Создаем non-root пользователя для безопасности
RUN chown -R nginx:nginx /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]