FROM node:20-alpine as builder

WORKDIR /app/frontend
COPY package.json package-lock.json /app/frontend/
COPY . .

RUN npm install
RUN npm run build -- --configuration=production


FROM nginx:alpine
COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/frontend/dist/store /usr/share/nginx/html

EXPOSE  80