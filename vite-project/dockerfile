
FROM node:18.16.0-alpine
WORKDIR /src/App
COPY . .
RUN npm ci
ENV NODE_ENV production
EXPOSE 3000
CMD [ "npm", "run", "dev" ]
