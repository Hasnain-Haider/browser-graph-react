FROM --platform=linux/amd64 node:20-alpine 

WORKDIR /app

COPY . .
RUN npm ci --omit=dev
RUN npm run build
ENV NODE_ENV production
EXPOSE 3000
CMD [ "npx", "serve", "build" ]