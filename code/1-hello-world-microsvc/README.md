# Test Locally

# Step 1- Build the Image

```
docker build -t helloworld-microsvc .
```

# Step 2 - Run the container from iamge as Demon.

```
docker run -d --name helloworld-microsvc-container  -p 3000:3000 helloworld-microsvc
docker container list -a
docker logs --follow helloworld-microsvc-container
```

# Step 3 - Remove Container fully

```
docker rm -f helloworld-microsvc-container
```