FROM mhart/alpine-node:11 AS builder
WORKDIR /
COPY . .
RUN npm install react-scripts -g --silent
RUN npm install
RUN npm run build

FROM mhart/alpine-node
RUN  yarn global add serve
WORKDIR /
COPY --from=builder /build .
CMD ["serve", "-p", "8080", "-s", "."]doc
