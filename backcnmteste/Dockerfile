# https://hub.docker.com/_/php?tab=description
FROM php:7.3.2-apache-stretch as testecnm

# Utilidade
RUN apt-get update && apt-get install -y \
    vim \ 
    sudo \ 
    iputils-ping

RUN docker-php-ext-install pdo_mysql
# Enable rewrite
RUN a2enmod rewrite

# Setup www-data user
# Set user ID as 1000
RUN usermod -u 1000 www-data

# Set user group as staff anc www-data
RUN usermod -G staff www-data

# Set user as nopassword
RUN echo "www-data ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers 

# Set apache user for next commands
USER www-data

# Define o diretorio de trabalho
WORKDIR /var/www/html

# Copia os arquivos
COPY --chown=www-data:www-data . /var/www/html

# Set root for next commands
USER root

# Changing timezone
ENV TZ=America/Sao_Paulo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Set the start command
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]