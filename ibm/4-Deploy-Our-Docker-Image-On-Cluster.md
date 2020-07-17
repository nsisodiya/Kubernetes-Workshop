Chapter 4 -Deploy Our Docker Image On Cluster
=============================================

In Kubernetes, we can run multiple containers in a POD. But mostly we use one POD for 1 container.
`Deployment` can run multiple containers. So We will run 3 PODs using Deployments and After that we will use `Service` to expose our deployments.

Lets do it.

Deployment
===========

```
apiVersion: apps/v1beta1
kind: Deployment
metadata:
  name: helloworld-deployment
spec:
  replicas: 3
  template:
    metadata:
      labels:
        app: helloworld-microsvc
    spec:
      containers:
        - name: helloworld-microsvc
          image: docker.pkg.github.com/nsisodiya/kubernetes-workshop/helloworld-microsvc:v1
          ports:
            - containerPort: 3000
```