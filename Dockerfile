# Билдер
FROM node:22 AS builder

WORKDIR /app
COPY . .
RUN npm i --force && npm run build

# Production image
FROM node:22

WORKDIR /app
COPY --from=builder /app/build ./build
RUN npm install -g serve

EXPOSE 3090

CMD ["serve", "-s", "build", "-l", "3090"]
