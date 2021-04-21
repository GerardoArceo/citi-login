FROM docker-enterprise-prod-local.artifactrepository.citigroup.net/developersvcs-apache/apache2.4/rhel7/apache-rhel7:2.4.37
LABEL MAINTAINER RC42486
USER root
ENV APP_HOME /opt/icg-msst-webcreditplatform-151442

COPY docker/httpd.conf /opt/middleware/httpd/conf/
COPY docker/mime.types /opt/middleware/httpd/conf/
COPY README.MD /opt/

RUN mkdir -p $APP_HOME/script
COPY docker/start_arrenda.sh $APP_HOME/script
RUN chmod -R 777 $APP_HOME/script

COPY dist/ /opt/middleware/httpd/www/html/
#COPY dist/${env.ENV}/ /opt/middleware/httpd/www/html/
RUN chmod -R 777 /opt/middleware/httpd/www/html/

EXPOSE 4330

ENTRYPOINT exec $APP_HOME/script/start_arrenda.sh
