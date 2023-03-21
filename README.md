# WebKick's Website

## Getting Started

## Docker containers

3 environments are available:

1. Development
2. Staging
3. Production

Use the following command to build, start and stop the containers (using Makefile):

```bash
make build-[development, staging, production]
make start-[development, staging, production]
make stop-[development, staging, production]
```

## Locally

Run the project locally using the following command:

in development mode:

```bash
npm run dev
```

in production mode:

```bash
npm run build
npm run start
```
