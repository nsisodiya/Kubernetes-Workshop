Chapter 4 -Deploy Our Docker Image On Cluster
=============================================

In Kubernetes, we can run multiple containers in a POD. But mostly we use one POD for 1 container.
`Deployment` can run multiple containers. So We will run 3 PODs using Deployments and After that we will use `Service` to expose our deployments.

Lets do it.

Deployment
===========
Content of `1-helloworld-deployment.yaml`

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: helloworld-microsvc
  labels:
    app: helloworld-microsvc
spec:
  replicas: 3
  selector:
    matchLabels:
      app: helloworld-microsvc
  template:
    metadata:
      labels:
        app: helloworld-microsvc
    spec:
      containers:
        - name: helloworld-microsvc
          image: docker.pkg.github.com/nsisodiya/kubernetes-workshop/helloworld-microsvc:v1
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: 3000
          env:
            - name: TARGET
              value: World V1

```

Lets apply this deployments.

```
$ cd deploy
$ kubectl apply -f 1-helloworld-deployment.yaml

deployment.apps/helloworld-microsvc created
```
If you face problem with YML then you can validate at - https://kubeyaml.com/


Check Deployments
=================
```
kubectl get deploy,pods,svc -l app=helloworld-microsvc
```