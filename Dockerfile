FROM ubuntu

RUN apt-get update && apt-get install -y nginx && apt-get install -y npm
RUN mkdir -p /tmp/nginx/vue-single-page-app
RUN mkdir -p /var/log/nginx
RUN mkdir -p /var/www/html

# Copy the respective nginx configuration file
COPY src/nginx_config/nginx.conf /etc/nginx/nginx.conf
COPY src/nginx_config/default.conf /etc/nginx/conf.d/default.conf


WORKDIR /tmp/nginx/vue-single-page-app
COPY . .
# Install the dependencies, can be commented out if you're running the same node version
#RUN npm install

# run webpack and the vue-loader
RUN npm run build

# copy the built app to our served directory
RUN cp -r dist/* /var/www/html

# make all files belong to the nginx user
RUN useradd nginx && chown nginx:nginx /var/www/html

# start nginx and keep the process from backgrounding and the container from quitting
CMD ["nginx", "-g", "daemon off;"]