FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Запускаем сервер для фронта
FROM node:18
WORKDIR /app
COPY --from=build /app/dist .
RUN npm install -g serve
CMD ["serve", "-s", ".", "-l", "8081"]
EXPOSE 8081