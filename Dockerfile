FROM oraclelinux:7-slim

RUN yum -y install oracle-nodejs-release-el7 && \
    yum -y install nodejs && \
    yum -y install oracle-instantclient-release-el7 && \
    yum -y install oracle-instantclient-basiclite && \
    rm -rf /var/cache/yum

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
