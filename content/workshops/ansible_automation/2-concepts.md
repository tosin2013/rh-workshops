---
title: Key Concepts
workshops: ansible_automation
workshop_weight: 15
layout: lab
---

## Why Automate?

Automation requires an investment in time, technology, and people. Make the most of your investment with an enterprise automation platform that delivers agility and flexibility.

Solve problems once. Scale automation with control and insight. Collaborate across teams. Manage policy enforcement and governance. Bring the power of automation to your whole organization.

## Ansible for Automation

There are a number of ways to automate your tasks, be that the classic Bash script, a CI/CD pipeline, some custom Python scripts, and more. The problem with most of these solutions is that you need to know how to program to build and use these automation constructs, and they’re largely point-tools that are only usable by a certain type of actor or for a certain limited set of use cases.

Ansible flips this paradigm on its head:

- Ansible is simple to create and read, is based on YAML so knowing a programming language is not required
- Can be used to automate an endless list of possibilities - servers, applications, containers, networks, and more.
- Agent-less architecture is more secure and flexible

### Ansible Engine

***Ansible Engine*** is the primary component when working with Ansible.  It is a supported product by [Red Hat](https://www.ansible.com/products/engine) building upon the upstream Ansible project.  Using Ansible Engine is primarily through a command line interface (CLI), and can be done as one-off ad-hoc commands, or orchestrated among Playbooks and Roles which can be easily stored in a Git repository.

### Ansible Tower

***Ansible Tower*** is another supported product by Red Hat that provides additional capabilities on top of Ansible Engine.  [Ansible Tower](https://www.ansible.com/products/tower) provides a centralized Web UI that can integrate into enterprise systems such as Active Directory (AD), LDAP, and more.  Ansible Tower also provides an expressive RESTful API and a number of extensions out of the box, such as connecting to **Slack** or **ServiceNOW**.