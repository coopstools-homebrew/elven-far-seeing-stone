FROM node:lts-alpine AS builder
WORKDIR /app/src
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/src/dist /usr/share/nginx/html
COPY ./docker.run.sh .
EXPOSE 80
CMD ["sh", "docker.run.sh"]
