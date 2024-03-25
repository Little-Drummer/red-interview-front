FROM node:lts-alpine3.19 AS build

# 设置维护者信息
LABEL maintainer="w1085561450@gmail.com"

RUN npm install -g pnpm
RUN pnpm run build