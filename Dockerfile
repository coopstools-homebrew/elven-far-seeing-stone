FROM node:lts-alpine AS builder
WORKDIR /app/src
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/src/dist /usr/share/nginx/html
EXPOSE 80
RUN sed -i 's/#error_page  404              \/404.html;/error_page  404              \/index.html;/g' /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
