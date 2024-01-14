# How to use Docker

## Add "Dockerfile" to the root of your project

## Describe "Dockerfile"

```py
# Specify platform and it's version
FROM node

# Specify working directory
WORKDIR /app

# Copy main file with all of the dependencies for caching necessary
# in order not to run npm install every time we change the code base
COPY package.json .

# Install node_modules into the container
RUN npm install

# Copy rest of the code to the same container
# Every time we change the code we re-run COPY command of the Docker
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
```

## Build Docker image from Dockerfile

Run in the project root directory (where is Dockerfile is placed) the following command
(Create named image)

```py
docker build -t <your-image-name> .
```

Check the list of Docker images:

```py
docker images
```

Remove unnamed image (if you need so):

```py
docker image rm <image-id>
```

> check out basic Docker cheat sheet: [https://github.com/PavPavv/my_programming_bookmarks/blob/main/md/backend/docker.md](https://github.com/PavPavv/my_programming_bookmarks/blob/main/md/backend/docker.md)

## Create Docker container for the image

Create and run named container with detach function and port from the image:

```py
docker run -d -p 5173:5173 --name <your-container-name> <your-image-name>
```

Check all the running containers:

```py
docker ps
```

Kill a running container if you need so:

```py
docker rm <you-container-name> -f
```
