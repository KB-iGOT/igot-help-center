# ---------- Stage 1: Build React App ----------
FROM node:22.6.0 AS build
WORKDIR /app

# Copy dependencies and install
COPY package*.json ./
RUN npm install --force

# Copy source and build
COPY . .
RUN npm run build

# ---------- Stage 2: Serve with npm (serve) ----------
FROM node:22.6.0-alpine

# Install 'serve' globally
RUN npm install -g serve

WORKDIR /app

# Copy React build output from Stage 1
COPY --from=build /app/dist ./dist

EXPOSE 3000

# Serve the dist folder; -s flag enables SPA (single-page app) routing
CMD ["serve", "-s", "dist", "-l", "3000"]
