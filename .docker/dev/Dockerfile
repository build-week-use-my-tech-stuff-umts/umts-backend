FROM node:10

WORKDIR /var/www

COPY . /var/www

RUN npm install

EXPOSE 3300

RUN  ["chmod", "+x", "/var/www/entrypoint.sh"]
ENTRYPOINT [ "/var/www/entrypoint.sh"]

