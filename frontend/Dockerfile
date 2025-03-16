FROM node:22.14-alpine3.20 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --omit=dev --no-chace
COPY . .
RUN npm run build && rm -rf .next/cache /root/.npm

FROM node:22.14-alpine3.20 AS runner
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "run", "start"]