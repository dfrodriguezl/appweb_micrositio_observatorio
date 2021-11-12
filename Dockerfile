FROM node:12

ENV TZ="America/Bogota"

WORKDIR /src

RUN npm install pm2 -g

COPY dist dist
COPY backend backend
COPY ecosystem.config.js ecosystem.config.js

CMD ["pm2-runtime", "ecosystem.config.js" ,"--json"]
