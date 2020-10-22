---
title: Key Concepts
workshops: ocp_devops_101
workshop_weight: 15
layout: lab
---

#### Agile and DevOps practices can provide unparalleled speed in software development. Developers for years have enjoyed the benefits on their local workstations, however taking these systems and enabling the organization at large can prove challenging to say the least.

Now, consider that these DevOps stacks that have been Lifted-n-Shifted from developer laptops into your organizations production environments may not have the best security constructs in mind. This can open the flood gates to adverse licenses, CI/CD sprawl, compromised dependancies, and vulnerabilities across your Software Development Lifecycle (SDLC) stack which is the very core of what drives your development business and delivers value to your customers and end-users.

***Do you really trust everything on Docker Hub or from NPM?***

***How long will it take for top-down mandates to erode your culture?***

***In this day and age of Containers, Kubernetes, and Microservices, does your team have the training and skills they need to get up to speed quickly and go the distance?***

---

![Secure Software Factory](../img/secureSoftwareFactoryPipeline.png)

---

## Terminology

We will be using the following terms throughout the workshop labs so here are some basic definitions you should be familiar with. You'll learn more terms along the way, but these are the basics to get you started.

- **Master** - The foreman of the OpenShift architecture; the master schedules operations, watches for problems, and orchestrates everything
- **Node** - Where the compute happens; your containers and software are run on nodes
- **Container** - Your software wrapped in a complete filesystem containing everything it needs to run
- **Image** - We are talking about docker images; read-only and used to create containers
- **Project/Namespace** - A project, or namespace, is a group of resources that are related logically
- **Pod** - One or more docker containers that run together
- **Service** - Provides a common DNS name to access a pod (or replicated set of pods)
- **Route** - a labeled and DNS mapped network path to a service from outside OpenShift
- **Pipeline** - Automates the control, building, deploying, and promoting your applications
- **Deployment** - An update to your application triggered by a image change or config change
- **Build** - The process of turning your source code into a runnable image
- **BuildConfig** - configuration data that determines how to manage your build