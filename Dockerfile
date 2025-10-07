FROM denoland/deno:2.0.0 as builder

# Устанавливаем DNS резолвер и настраиваем DNS
RUN echo "nameserver 8.8.8.8" > /etc/resolv.conf && \
    echo "nameserver 8.8.4.4" >> /etc/resolv.conf

WORKDIR /app
COPY . .

# Устанавливаем зависимости и собираем проект
RUN deno install --allow-scripts=npm:esbuild@0.15.18,npm:@swc/core@1.7.35
RUN deno task build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]