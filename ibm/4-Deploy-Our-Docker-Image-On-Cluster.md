Chapter 4 -Deploy Our Docker Image On Cluster
=============================================

In Kubernetes, we can run multiple containers in a POD. But mostly we use one POD for 1 container.
`Deployment` can run multiple containers. So We will run 3 PODs using Deployments and After that we will use `Service` to expose our deployments.

Lets do it.

Add private docker registry on Kubernetes Cluster
=================================================
The Github docker registry is private. We need to add private docker registry to kubernetes.

1. Find `config.json`

Locate the config file. it should be on `~/.docker/config.json` or `/root/.docker/config.json`

2. Now run following command.
If you Docker using sudo but kubectl is on normal user.
```
sudo cat /root/.docker/config.json > config.json
kubectl create secret generic regcred --from-file=.dockerconfigjson=./config.json --type=kubernetes.io/dockerconfigjson
rm -rf config.json
```

otherwise

```
kubectl create secret generic regcred --from-file=.dockerconfigjson=~/.docker/config.json --type=kubernetes.io/dockerconfigjson
```

You should see message like - `secret/regcred created` !

Verify

```
kubectl get secret regcred --output="jsonpath={.data.\.dockerconfigjson}" | base64 --decode
```

More Info : https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/

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
      imagePullSecrets:
        - name: regcred
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