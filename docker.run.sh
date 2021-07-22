#!/bin/bash

mv /usr/share/nginx/html /usr/share/nginx/tmp
mkdir /usr/share/nginx/html
mv usr/share/nginx/tmp /usr/share/nginx/html/$URL_PATH_PREFIX

RUN sed -i "s/#error_page  404/error_page  404/g" /etc/nginx/conf.d/default.conf
RUN sed -i "s/404.html/$URL_PATH_PREFIX\/index.html/g" /etc/nginx/conf.d/default.conf

find ./usr/share/nginx -type f -exec sed -i "s/quizzle_parse/$URL_PATH_PREFIX/g" {} \;

nginx -g 'daemon off;'