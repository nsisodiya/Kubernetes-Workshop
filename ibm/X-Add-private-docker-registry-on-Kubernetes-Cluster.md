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

