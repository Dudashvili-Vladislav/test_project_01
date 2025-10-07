FROM nginx:alpine

# Устанавливаем времяzone
RUN apk add --no-cache tzdata && \
    cp /usr/share/zoneinfo/Europe/Moscow /etc/localtime && \
    echo "Europe/Moscow" > /etc/timezone

# Копируем готовый билд (папку dist которая уже есть)
COPY dist /usr/share/nginx/html

# Базовая конфигурация для SPA
RUN echo 'server { \
    listen 80; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]