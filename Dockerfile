FROM php:7.3-apache 
RUN docker-php-ext-install mysqli


FROM composer:latest AS composer
FROM php:7.3-apache
COPY --from=composer /usr/bin/composer /usr/bin/composer
RUN composer --version && php --v