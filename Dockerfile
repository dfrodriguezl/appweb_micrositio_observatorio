FROM node:12

ENV TZ="America/Bogota"

COPY package.json /datos/apps/containers/appweb_microsito_observatorio

COPY webpack-back.config.js /datos/apps/containers/appweb_microsito_observatorio

COPY backend /datos/apps/containers/appweb_microsito_observatorio

WORKDIR /datos/apps/containers/appweb_microsito_observatorio 

RUN npm install pm2 -g

RUN npm install

RUN npm run build_back

RUN adduser observatorio && CHOWN -R observatorio /datos/apps/containers/appweb_microsito_observatorio

USER observatorio

CMD ["pm2-runtime", "backend/server.bundle.js", "--json"]








