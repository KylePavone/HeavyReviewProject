FROM richarvey/nginx-php-fpm
ADD app /var/www/app
RUN rm -Rf /etc/nginx/sites-enabled/*
ADD docker/conf/nginx/site.conf /etc/nginx/sites-available/site.conf
RUN ln -s /etc/nginx/sites-available/site.conf /etc/nginx/sites-enabled/site.conf
RUN apt-get update && apt-get install -y \
    imagemagick libmagickwand-dev --no-install-recommends \
    && pecl install imagick \
    && docker-php-ext-enable imagick