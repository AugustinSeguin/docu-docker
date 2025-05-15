FROM node:24.0-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install 

COPY . .

RUN npm run build

COPY . .

EXPOSE 3000

CMD ["npm", "start", "--", "--host", "0.0.0.0"]
