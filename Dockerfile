# Use Node.js LTS version
FROM node:22.15.0 AS base
WORKDIR /app

# Stage 1: Install
FROM base AS install
COPY package.json ./
RUN if [ -f package-lock.json ]; then cp package-lock.json ./; fi
RUN npm i

# Stage 2: Build
FROM base AS builder
COPY . .
RUN rm -rf .env.*
# RUN if [ -f .env.production ]; then cp .env.production .env.production; fi
COPY .env.production .env.production
COPY --from=install /app/node_modules node_modules
ENV NODE_ENV=production
RUN npm run build

# Stage 3: Production
FROM node:22-alpine AS production
WORKDIR /app

COPY --from=install --chown=node:node /app/node_modules ./node_modules
COPY --from=install --chown=node:node /app/package.json ./package.json
COPY --from=builder --chown=node:node /app/.next ./.next
COPY --from=builder /app/public ./public

USER node
EXPOSE 3000/tcp
ENV NODE_ENV=production
CMD ["npm", "start"]
