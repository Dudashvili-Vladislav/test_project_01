FROM node:18-alpine as build
RUN apk add --no-cache curl unzip
RUN curl -fsSL https://deno.land/install.sh | sh
ENV PATH="/root/.deno/bin:$PATH"
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build # <-- Собираем статику в папку /app/dist


FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html # <-- Копируем только результат
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
