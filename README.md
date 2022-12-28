# Archetype

## Customization

Set the information in `constants/*.ts` files.
Change the icons (favicons) of the website in `public/images/favicons/` using the [RealFaviconGenerator](https://realfavicongenerator.net/).

Customize the service cards in `constants/services.ts`.

## Installation & Running

### How to use

Optionally, after the installation is complete:

-   Run `npm install`.

It is recommended to commit a lockfile to version control. Although the example will work without one, build errors are more likely to occur when using the latest version of all dependencies. This way, we're always using a known good configuration to develop and run in production.

### Prerequisites

Install [Docker Desktop](https://docs.docker.com/get-docker) for Mac, Windows, or Linux. Docker Desktop includes Docker Compose as part of the installation.

### Development

First, run the development server:

```bash
# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
docker network create archetype_network

# Build dev
# Note: Keep v1 command until "Use Docker Compose v2" is enabled by default for Docker Desktop for Linux
# Docker aliases `docker-compose` (v1 command) to `docker compose` (v2 command), but not the other way around
docker-compose -f docker-compose.dev.yml build

# Up dev
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

### Production

Multistage builds are highly recommended in production. Combined with the Next [Output Standalone](https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files) feature, only `node_modules` files required for production are copied into the final Docker image.

First, run the production server (Final image approximately 110 MB).

```bash
# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
docker network create archetype_network

# Build prod
docker-compose -f docker-compose.prod.yml build

# Up prod in detached mode
docker-compose -f docker-compose.prod.yml up -d
```

Open [http://localhost:3000](http://localhost:3000).

###

Useful commands

```bash
# Stop all running containers
docker kill $(docker ps -aq) && docker rm $(docker ps -aq)

# Free space (free docker's files on the host filesystem entirely: containers, images, ...)
docker system prune -af --volumes
```
