## A simple NestJS monorepo example
<div>
<a
    href="http://nestjs.com/"
    target="blank"
  >
    <img
      src="https://nestjs.com/img/logo_text.svg"
      width="70"
      alt="Nest Logo"
    />
  </a>
</h1>
</div>

## Features
- GraphQL with playground
- GraphQL code first
- REST API with Swagger
- TyperORM

## Description

This repository shows a simple [NestJS](https://github.com/nestjs/nest) monorepo project to create REST and GraphQL APIs that share the same business logic.

## Requirements
- Docker
- Docker Compose
- NodeJS

## Installation

```bash
$ npm install
$ docker-compose up -d
```

## Running the apps

```bash
# running the REST api on default port 3000 (set SERVER_PORT env to choose a different port)
$ npm run start rest

# running the GraphQL api on port 4000
$ SERVER_PORT=4000 npm run start graphql
```

## Test

In order to test applications, you can use Swagger and GraphQL Playground (thanks NestJS integrations) with the following address in the browser.

[http://localhost:3000/api](http://localhost:3000/api)


[http://localhost:4000/graphql](http://localhost:4000/graphql)

## License

[MIT licensed](LICENSE)

