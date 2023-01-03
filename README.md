# Webkick

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
docker network create webkick_network

# Build prod
docker-compose -f build

# Up prod in detached mode
docker-compose -f up -d
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

## Information:

-   Email: webkick.agency@gmail.com (recovery: frederic.perr@gmail.com)
-   Domain name: GoDaddy (with Gmail address)

### Logos

---

![Square](./public/images/logos/logo.svg)

---

![Text](./public/images/logos/logo-text.svg)

---

Both available in white contrast format too.

## Availability

### Company name

-   World: (_one company but closed, another in build_)
-   Canada: (_WebKick inc. exists in Ontario but nothing seems to be assosiated with_)
-   Québec: Free

### Domains

-   &#x2713; webkick.ca (_owned by agency_)
-   &#x2717; webkick.com (_but unused_)
