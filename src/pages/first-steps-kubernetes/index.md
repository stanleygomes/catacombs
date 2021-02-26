---
title: My first steps with kubernetes
date: '2020-01-05'
spoiler: Everyone is talking about kubernetes.
tags: kubernetes, devops
---

Everyone is talking about kubernetes. Every time I visit<span class="notranslate">&nbsp;medium</span> website or read <span class="notranslate">newsletter</span> in my emails, even in google articles recomendations.

![kubernetes everywhere](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/nodevader-first-release%2F7J0MeuR.jpg?alt=media&token=2a8d3ea5-1da1-4e0d-8da7-f9e1d1f2dcaa)

Let me share with you a little of what I've learnt.

## But what is it?

Kubernetes is a container orchestration manager engine. It's a great solution to manage application abstracting monitoring complexity. And the best part: *it's fully open source* 👏.

![kubernetes logo](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/nodevader-first-release%2FrnZ4LLR.jpg?alt=media&token=a0dd27ea-88f4-47f9-bcbd-1dea4f5976cf)
Image by [GeekHunter](https://blog.geekhunter.com.br/kubernetes-a-arquitetura-de-um-cluster/amp)

In other words, you don't have to worry about application monitoring, scale and restart, this is a kubernetes job.

Originally created by Google, was donated to community in 2015, so you can use it freely.

## What is the proposal?

The main proposal is easily go from development to production, ready for scale and monitor application state.

Thus the developer doesn't need to worry about infrastructure, but the app's integration, and for <span class="notranslate">devops</span> team we have same environment in development, staging and production.

![kubernetes proposal](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/nodevader-first-release%2F2cIoemv.png?alt=media&token=39fe08cc-f0d0-41f9-adf0-9b75101a575a)
Image by [confluence](https://confluence.atlassian.com/adminjiraserver073/promoting-jira-configuration-from-development-to-production-895358577.html)

It also provide a better conversation between devs and <span class="notranslate">devops</span>, since they now use the same tool. 🤜🤛

## Why do I need to learn it?

Kubernetes is a great patter for application deployment and management and it's getting big part of the market today. Being able to work with it makes you ahead both as developer or a <span class="notranslate">&nbsp;devops</span>.

Take a look at this chart bellow 👇 from 2017.

![Kubernetes adoption](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/nodevader-first-release%2Fuhny3ep.png?alt=media&token=3d5c5f80-2cde-4df9-866f-503c7c1d9f23)
Image by [The New Stack](https://thenewstack.io/data-says-kubernetes-deployment-patterns)

## Kubernetes architecture basics

Kubernetes follows a client-server architecture. It consists in a cluster, compound of a master machine wich control other node machines.

![Kubernetes architecture](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/nodevader-first-release%2Fq2vl3wo.png?alt=media&token=ac507b4f-5e7b-4cb8-a71d-225da41a18ff)

I found these definitions bellow in kubernetes [docs](https://kubernetes.io/docs/concepts/overview/components).

### Cluster

A `cluster` is a set of machines, called nodes, that run containerized applications managed by Kubernetes. A cluster has at least one worker node and at least one master node.

### Master node

`Master`, in turn, is a machine that controls Kubernetes nodes. This is where all task assignments in the cluster originate.

### Other nodes

A `node` is a worker machine in Kubernetes. A `node` may be a VM or physical machine. Each `node` contains the services necessary to run pods and is managed by the master components.

### <span class="notranslate">Pod</span>

A `Pod` represents processes running on your Cluster. A `Pod` encapsulates an application’s container (or, in some cases, multiple containers), storage resources, a unique network IP, and options that govern how the container(s) should run.

Phew!! 😰 Take a time to dominate theses concepts. They are main basics of kubernetes.

## Next steps?

The best way to learn anything is getting your hands dirty 😬.

You can start by reading the kubernetes official website docs [here](https://kubernetes.io/docs/home), wich is very good.

In theses tutorial you'll be using [minikube](https://kubernetes.io/docs/tasks/tools/install-minikube) tool to test it locally. You can also use a [google cloud free trial](https://cloud.google.com/free) to test kubernetes platform in a online server.

Good luck 🖖 and have great studies 💻.

Let me known if I can help you with anything. I'm learning too 😅.

Thanks for reading.
