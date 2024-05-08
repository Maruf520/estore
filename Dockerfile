FROM node:20 as builder

WORKDIR /app/frontend
COPY package.json package-lock.json /app/frontend/

RUN npm install
COPY . .
RUN npm run build -- --configuration=production


FROM nginx:alpine

COPY --from=builder /app/frontend /usr/share/nginx/html

EXPOSE  80