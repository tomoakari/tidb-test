# Build stage
FROM node:20-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV NODE_ENV=production
RUN npm run prepare && npm run build

# Production stage
FROM node:20-slim
WORKDIR /app
COPY --from=build /app/package*.json ./
COPY --from=build /app/build ./build
RUN npm ci --production
ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080
CMD ["node", "build"]
