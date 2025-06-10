# Build stage
FROM node:20-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV NODE_ENV=production
ENV TIDB_HOST=your-tidb-host
ENV TIDB_PORT=4000
ENV TIDB_USER=your-username
ENV TIDB_PASSWORD=your-password
ENV TIDB_DATABASE=your-database
RUN npm run build

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
