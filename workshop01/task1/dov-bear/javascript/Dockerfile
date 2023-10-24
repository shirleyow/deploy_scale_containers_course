FROM node:20

LABEL name="dov-bear"

WORKDIR /

ADD main.js .
ADD package.json .
ADD package-lock.json .
ADD public public
ADD views views

RUN npm ci

ENV APP_PORT=3000
ENV INSTANCE_NAME=""
ENV INSTANCE_HASH=""

HEALTHCHECK --interval=30s --timeout=5s --retries=3 CMD curl -s http://localhost:${APP_PORT}/healthz || exit 1

EXPOSE ${APP_PORT}

ENTRYPOINT node main.js