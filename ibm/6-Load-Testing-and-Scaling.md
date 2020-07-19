
Chapter 6 - Load Testing and Scaling
====================================

We will be using hey - https://github.com/rakyll/hey first install and lets run our first command.

How to see CPU Utilisation
==========================
```sh
watch -n 1 kubectl top nodes
```

this will output as

```sh
Every 1.0s: kubectl top nodes

NAME            CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%   
10.76.195.192   153m         7%     2006Mi          70%
```

You can also see CPU load using Kubernetes Dashboard

[![](./img/5/2020-07-19_11-42.png)](#)