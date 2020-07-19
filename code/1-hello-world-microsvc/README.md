# Test Locally

# Step 1- Build the Image

```sh
sudo docker build -t helloworld-microsvc .
```

# Step 2 - Run the container from iamge as Demon.

```sh
sudo docker run -d --name helloworld-microsvc-container  -p 3000:3000 helloworld-microsvc
sudo docker container list -a
sudo docker logs --follow helloworld-microsvc-container
```

# Step 3 - Remove Container fully

```sh
sudo docker rm -f helloworld-microsvc-container
```