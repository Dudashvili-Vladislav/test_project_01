FROM nginx:alpine

# Копируем готовый билд
COPY dist /usr/share/nginx/html

# Копируем правильный конфиг
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Даем правильные права
RUN chown -R nginx:nginx /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]