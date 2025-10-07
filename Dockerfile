FROM node:18-alpine as build

# Явно меняем зеркало репозитория на альтернативное
RUN echo "http://mirror.leaseweb.net/alpine/v3.21/main" > /etc/apk/repositories && \
    echo "http://mirror.leaseweb.net/alpine/v3.21/community" >> /etc/apk/repositories

# Теперь обновляем списки пакетов и устанавливаем curl и unzip
RUN apk update && apk add --no-cache curl unzip

# Установка Deno
RUN curl -fsSL https://deno.land/install.sh | sh
ENV PATH="/root/.deno/bin:$PATH"

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# --- Финальный этап ---
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]