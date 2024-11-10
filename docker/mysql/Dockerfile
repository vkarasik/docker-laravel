ARG MYSQL_VERSION

FROM mysql:${MYSQL_VERSION}

COPY ./custom.cnf /etc/mysql/conf.d/custom.cnf

CMD ["mysqld"]
