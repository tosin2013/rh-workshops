---
title: Running Ad Hoc Commands
workshops: ansible_automation
workshop_weight: 25
layout: lab
---

{{< related_assets style="grey pf-u-mt-0" >}}
  {{< related_asset title="VS Code" href="https://studentVAR_REP_STUDENT_NUMBER-tower.VAR_REP_WORKSHOP_ID.VAR_REP_WORKSHOP_DOMAIN:8443" >}} - A web-based IDE and Terminal{{< /related_asset >}}
  {{< related_asset title="Student Credentials" >}} - student{{< studentNumber >}} / {{< span_studentPassword >}} {{< /related_asset >}}
{{< /related_assets >}}

For our first exercise, we are going to run some ad-hoc commands to help you get a feel for how Ansible works. Ansible Ad-Hoc commands enable you to perform tasks on remote nodes without having to write a playbook. They are very useful when you simply need to do one or two things quickly and often, to many remote nodes.

## Working with your Inventory

To use the ***ansible*** command for host management, you need to provide an ***Inventory*** file which defines a list of hosts to be managed from the control node. In this lab the inventory is pre-provided. The inventory is an ini formatted file listing your hosts, sorted in groups, additionally providing some variables.

{{< twoSideStep title="Open your Inventory in VS Code" >}}
    {{< leftStep size="7" >}}
      {{< figureImage src="../img/vsCodeOpenInventory.jpg" title="Inspect the inventory in VS Code" >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

{{% markdownify %}}
- In the left-hand File Explored pane, double click on the ***inventory*** file to open it
- Notice how there are multiple groups, groups of groups, and variables set
- Your inventory file may look a little different, that's normal
{{% /markdownify %}}
    {{< /rightStep >}}
{{< /twoSideStep >}}

Ansible is already configured to use the inventory specific to your environment. Let us execute some simple commands to work with the inventory.

To reference inventory hosts, you supply a host pattern to the ansible command. Ansible has a *--list-hosts* option which can be useful for clarifying which managed hosts are referenced by the host pattern in an ansible command.

The most basic host pattern is the name for a single managed host listed in the inventory file. This specifies that the host will be the only one in the inventory file that will be acted upon by the ansible command. Run the following in the VS Code Terminal:

```bash
ansible student{{< studentNumber >}}-node1 --list-hosts
```

The returned command should look like this:

```output
[student{{< studentNumber >}}@student{{< studentNumber >}}-tower workshop]$ ansible student{{< studentNumber >}}-node1 --list-hosts
  hosts (1):
    student{{< studentNumber >}}-node1
```

An inventory file can contain a lot more information, it can organize your hosts in groups or define variables. In our example, the current inventory has the groups web and control. Run Ansible with these host patterns and observe the output:

```bash
ansible tower --list-hosts
ansible web,tower --list-hosts
ansible 'student*' --list-hosts
ansible all --list-hosts
```

As you see it is OK to put systems in more than one group. For instance, a server could be both a web server and a database server. Note that in Ansible the groups are not necessarily hierarchical.

---

## Ping a Host

Let’s start with something really basic - pinging a host. To do that we use the Ansible ***ping*** module. The ping module makes sure our target hosts are responsive. Basically, it connects to the managed host, executes a small script there and collects the results. This ensures that the managed host is reachable and that Ansible is able to execute commands properly on it.

Ansible needs to know that it should use the ***ping*** module: The *-m* option defines which Ansible module to use. Options can be passed to the specified modul using the *-a* option.  Run the following:

```bash
ansible nodes -m ping
```

The result should look like this:

```output
[student{{< studentNumber >}}@student{{< studentNumber >}}-tower workshop]$ ansible nodes -m ping
student{{< studentNumber >}}-node2 | SUCCESS => {
    "ansible_facts": {
        "discovered_interpreter_python": "/usr/libexec/platform-python"
    },
    "changed": false,
    "ping": "pong"
}
student{{< studentNumber >}}-node1 | SUCCESS => {
    "ansible_facts": {
        "discovered_interpreter_python": "/usr/libexec/platform-python"
    },
    "changed": false,
    "ping": "pong"
}
```

---

## Using the *command* module

Now let’s see how we can run a good ol’ fashioned Linux command and format the output using the ***command*** module. It simply executes the specified command on a managed host:

```bash
ansible student{{< studentNumber >}}-node1 -m command -a "id"
```

```output
[student{{< studentNumber >}}-node1@{{< studentNumber >}}-tower workshop]$ ansible student{{< studentNumber >}}-node1 -m command -a "id"
node1 | CHANGED | rc=0 >>
uid=1001(student{{< studentNumber >}}) gid=1001(student{{< studentNumber >}}) groups=1001(student{{< studentNumber >}}) context=unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023
```

What about running a command across all your hosts?

```bash
ansible all -m command -a 'uname -a'
ansible all -m command -a 'uptime' -o
```

```output
[student{{< studentNumber >}}@student{{< studentNumber >}}-tower workshop]$ ansible all -m command -a 'uname -a' -o
student{{< studentNumber >}}-node2 | CHANGED | rc=0
Linux student{{< studentNumber >}}-node2 4.18.0-240.15.1.el8_3.x86_64 #1 SMP Wed Feb 3 03:12:15 EST 2021 x86_64 x86_64 x86_64 GNU/Linux
student{{< studentNumber >}}-node1 | CHANGED | rc=0
Linux student{{< studentNumber >}}-node1 4.18.0-240.15.1.el8_3.x86_64 #1 SMP Wed Feb 3 03:12:15 EST 2021 x86_64 x86_64 x86_64 GNU/Linux
student{{< studentNumber >}}-tower | CHANGED | rc=0
Linux student{{< studentNumber >}}-tower 4.18.0-240.15.1.el8_3.x86_64 #1 SMP Wed Feb 3 03:12:15 EST 2021 x86_64 x86_64 x86_64 GNU/Linux
```

What about a more compact output?

```bash
ansible all -m command -a 'uptime' -o
```

```output
[student{{< studentNumber >}}@student{{< studentNumber >}}-tower workshop]$ ansible all -m command -a 'uptime' -o
student{{< studentNumber >}}-node2 | CHANGED | rc=0 | (stdout)  14:45:12 up  5:41,  1 user,  load average: 0.00, 0.00, 0.00
student{{< studentNumber >}}-node1 | CHANGED | rc=0 | (stdout)  14:45:12 up  5:41,  1 user,  load average: 0.02, 0.03, 0.00
student{{< studentNumber >}}-tower | CHANGED | rc=0 | (stdout)  14:45:12 up  5:41,  1 user,  load average: 0.17, 0.16, 0.06
```