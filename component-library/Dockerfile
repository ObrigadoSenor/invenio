# Builder
FROM node:14 as builder

COPY ./package.json ./yarn.lock ./lerna.json ./tsconfig.json ./
RUN yarn --non-interactive 
COPY . ./app
WORKDIR /app
RUN yarn --non-interactive
RUN npm cache verify
RUN yarn openshift:build:storybook
# Runtime
FROM registry.access.redhat.com/ubi8/nginx-118
COPY --from=builder /app/build-storybook /opt/app-root/src
CMD ["nginx", "-g", "daemon off;"]