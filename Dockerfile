FROM node:16.14.2-alpine AS development 

WORKDIR /app

# This is separate so layers are cached nicely
COPY ./package.json .
COPY ./package-lock.json .

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]