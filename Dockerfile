# Build code
FROM node:14-alpine AS builder
RUN npm install -g npm@7.6.2
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Create image with compiled code
FROM node:14-alpine
RUN npm install -g npm@7.6.2
WORKDIR /app
COPY --from=builder ./app/dist .
RUN npm install --only=prod
CMD ["npm","run","start"]
