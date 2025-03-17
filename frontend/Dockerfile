FROM node:22.14-alpine3.20 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --only=production --no-cache
COPY . .
RUN npm run build && rm -rf .next/cache

FROM node:22.14-alpine3.20 AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
COPY --from=builder /app/node_modules ./node_modules
COPY ./public .
EXPOSE 3000
CMD ["npm", "run", "start"]
