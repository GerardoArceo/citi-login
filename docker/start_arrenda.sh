#!/bin/sh

ENV=`echo $ENV`

if [ "$ENV" == "ECS-DEV-namicggtd12d" ] || [ "$ENV" == "DEV" ]; then
    cp -R /opt/middleware/httpd/www/html/dev/* /opt/middleware/httpd/www/html/
elif [ "$ENV" == "ECS-UAT-namicgswd13u-icg-msst-webcreditplatform-151442" ] || [ "$ENV" == "UAT" ]; then
    cp -R /opt/middleware/httpd/www/html/uat/* /opt/middleware/httpd/www/html/
elif [ "$ENV" == "ECS-PROD-lacicgqrd10p-icg-msst-webcreditplatform-151442" ] || [ "$ENV" == "PROD" ]; then
    cp -R /opt/middleware/httpd/www/html/prod/* /opt/middleware/httpd/www/html/
elif [ "$ENV" == "ECS-PROD-lacicgjrd10p-icg-msst-webcreditplatform-151442" ]; then
    cp -R /opt/middleware/httpd/www/html/prod1/* /opt/middleware/httpd/www/html/    
fi

ENV=`echo $ENV_NAME`

if [ "$ENV_NAME" == "ECS-DEV-namicggtd12d" ] || [ "$ENV_NAME" == "DEV" ]; then
    cp -R /opt/middleware/httpd/www/html/dev/* /opt/middleware/httpd/www/html/
elif [ "$ENV_NAME" == "ECS-UAT-namicgswd13u-icg-msst-webcreditplatform-151442" ] || [ "$ENV_NAME" == "UAT" ]; then
    cp -R /opt/middleware/httpd/www/html/uat/* /opt/middleware/httpd/www/html/
elif [ "$ENV_NAME" == "ECS-PROD-lacicgqrd10p-icg-msst-webcreditplatform-151442" ] || [ "$ENV" == "PROD" ]; then
    cp -R /opt/middleware/httpd/www/html/prod/* /opt/middleware/httpd/www/html/
elif [ "$ENV_NAME" == "ECS-PROD-lacicgjrd10p-icg-msst-webcreditplatform-151442" ]; then
    cp -R /opt/middleware/httpd/www/html/prod1/* /opt/middleware/httpd/www/html/    
fi

exec /opt/middleware/httpd/sbin/httpd -k start -f /opt/middleware/httpd/conf/httpd.conf -DFOREGROUND 