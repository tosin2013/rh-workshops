---
title: DevOps on OpenShift
workshops: ocp_devops_101
menu:
  main:
    parent: workshops
    pre: fa fa-code-fork
---

# DevOps on Red Hat OpenShift Container Platform

## Description 

Getting up and running with Kubernetes can be tough - there are a few reasons why [Kelsey Hightower's](https://twitter.com/kelseyhightower) [Kubernetes the Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way) is infamous.

Kubernetes doesn't have to be difficult though, and it doesn't have to come with the vendor lock-in of the hyperscalar cloud managed solutions.

In this workshop you will be working with Red Hat's [OpenShift Container Platform](https://www.openshift.com/), a secure enterprise Kubernetes distribution ready for the hybrid cloud.

You will start by deploying a container from [Quay](https://quay.io/), and creating native container images straight from source code with no modifications, utilizing DevOps CI/CD pipelines, and learning to leverage the power of OpenShift 4 to build, deploy, scale, and automate.

## Who should attend

- Anyone who has had any exposure to Containers
- Architects
- Developers
- Technical leads
- Operations Engineers

## What you will learn

- Deploying Pre-built Containers
- Source2Image (S2I)
- Basic Git Workflows
- CI/CD pipelines driven by GitLab

## Labs

{{< labs ocp_devops_101 >}}

<br>

{{% alert info %}}
These labs have been tailored for OpenShift v4.5
{{% /alert %}}

{{< importPartial "footer/footer.html" >}}
