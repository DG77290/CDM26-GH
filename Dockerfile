FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4175
ENV DATA_DIR=/data

COPY package.json ./
COPY server.js index.html app.js styles.css ./
COPY assets ./assets

RUN addgroup -S app && \
  adduser -S app -G app && \
  mkdir -p /data && \
  chown -R app:app /app /data

USER app

EXPOSE 4175
VOLUME ["/data"]

CMD ["node", "server.js"]
