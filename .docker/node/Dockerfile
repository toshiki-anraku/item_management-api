FROM node:18
WORKDIR /app
RUN apt-get update && \
    apt-get install -y git vim && \
    rm -rf /var/lib/apt/lists/*
USER node
EXPOSE 3000
