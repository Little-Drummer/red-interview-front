FROM node:lts-alpine AS build

# 设置维护者信息
LABEL maintainer="w1085561450@gmail.com"
# 设置工作目录
WORKDIR /app

# 安装pnpm
RUN npm install -g pnpm


# 复制`package.json`和`pnpm-lock.yaml`文件
COPY package.json pnpm-lock.yaml ./

# 安装项目依赖
RUN pnpm install

# 复制项目文件到工作目录
COPY . .

# 构建项目
RUN pnpm run build-only


