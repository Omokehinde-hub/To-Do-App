FROM nginx:alpine

MKDIR /app

COPY ..

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
