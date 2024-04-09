FROM node:21.7.2
WORKDIR /app
COPY package.json .

ARG APP_ENV
RUN if [ "$APP_ENV" = "development" ]; then \
        npm install; \
    else \
        npm install --only=production; \
    fi

COPY . .
ENV PORT 3000
EXPOSE $PORT
CMD ["node", "index.js"]