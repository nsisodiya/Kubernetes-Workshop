# Test Locally

# Step 1- Build the Image

```
sudo docker build -t helloworld-microsvc .
```

# Step 2 - Run the container from iamge as Demon.

```
sudo docker run -d --name helloworld-microsvc-container  -p 3000:3000 helloworld-microsvc
sudo docker container list -a
sudo docker logs --follow helloworld-microsvc-container
```

# Step 3 - Remove Container fully

```
sudo docker rm -f helloworld-microsvc-container
```