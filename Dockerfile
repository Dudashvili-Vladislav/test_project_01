FROM denoland/deno:2.0.0 as builder

WORKDIR /app
COPY . .

# Устанавливаем зависимости и собираем проект
RUN deno install --allow-scripts=npm:esbuild@0.15.18,npm:@swc/core@1.7.35
RUN deno task build

# Финальный образ с nginx
FROM nginx:alpine

# Копируем собранные файлы из стадии сборки
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]