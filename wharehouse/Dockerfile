# ---- Base Node ----
FROM node:10.15.0 AS base
WORKDIR /app

# ---- Dependencies ----
FROM base AS build  
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src ./src
COPY webpack.config.js .
COPY tsconfig.json .
RUN npm run webpack


# --- Release with Alpine ----
FROM node:10.15.0-alpine AS release  
WORKDIR /app
COPY --from=build /app/package*.json ./
RUN npm install --only=production
COPY --from=build /app/dist ./dist/
EXPOSE 4000
# HEALTHCHECK CMD curl --fail http://localhost:4000/ || exit 1
CMD ["npm","run","start:docker"]