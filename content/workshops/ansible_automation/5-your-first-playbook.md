---
title: Your first Playbook
workshops: ansible_automation
workshop_weight: 30
layout: lab
---

{{< related_assets style="grey pf-u-mt-0" >}}
  {{< related_asset title="VS Code" href="https://studentVAR_REP_STUDENT_NUMBER-tower.VAR_REP_WORKSHOP_ID.VAR_REP_WORKSHOP_DOMAIN:8443" >}} - A web-based IDE and Terminal{{< /related_asset >}}
  {{< related_asset title="Student Credentials" >}} - student{{< studentNumber >}} / {{< span_studentPassword >}} {{< /related_asset >}}
{{< /related_assets >}}

While Ansible ad hoc commands are useful for simple operations, they are not suited for complex configuration management or orchestration scenarios. For such use cases playbooks are the way to go.

**Playbooks** are files which describe the desired configurations or steps to implement on managed hosts. Playbooks can change lengthy, complex administrative tasks into easily repeatable routines with predictable and successful outcomes.

A playbook is where you can take some of those ad-hoc commands you just ran and put them into a repeatable set of plays and tasks.

A playbook can have multiple plays and a play can have one or multiple tasks. In a task a module is called, like the modules in the previous chapter. The goal of a play is to map a group of hosts. The goal of a task is to implement modules against those hosts.

## Playbook Basics

Playbooks are text files written in YAML format and therefore need:

- YAML files starting with three dashes (‐‐‐)
- Proper identation using spaces and not tabs!

There are some important concepts used in a Playbook:

- **hosts**: The managed hosts to perform the tasks on
- **tasks**: The operations to be performed by invoking Ansible modules and passing them the necessary options.
- **become**: Privilege escalation in Playbooks, same as using -b in the ad hoc command.

{{< alert >}}The ordering of the contents within a Playbook is important, because Ansible executes plays and tasks in the order they are presented.{{< /alert >}}

A Playbook should be ***idempotent***, so if a Playbook is run once to put the hosts in the correct state, it should be safe to run it a second time and it should make no further changes to the hosts.  Most Ansible modules are idempotent, so it is relatively easy to ensure this is true, though keep in mind that idempotency is on a per-module basis.

---

## Creating a Directory Structure and File for your Playbook

Enough theory, it’s time to create your first Playbook. In this lab you use a Playbook to set up an Apache webserver in a few easy steps:

1. Install httpd package
2. Enable/start httpd service
3. Create an index.html file

You could do so much more as well just as easily such as templating out the server configuration, virtual host files, set firewall rules, and so on.  For this workshop we'll keep things simple and in the interest of speed you're provided the Playbook already built.

{{< twoSideStep title="Open your Playbook in VS Code" >}}
    {{< leftStep size="7" >}}
      {{< figureImage src="../img/vsCodeOpenPlaybook.jpg" title="Inspect the Playbook file in VS Code" >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

{{% markdownify %}}
- As mentioned earlier, the Playbook is YAML so it starts with 3 dashes `---`
- We have a ***name*** for the Playbook, what ***hosts*** this is applied to, and a ***become*** option set to elevate permissions
- The variable set is used in the ***template*** module below - feel free to change the message!
- The ***tasks*** stanza lets you define tasks and the modules that are used by them
{{% /markdownify %}}
    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="Run your Playbook" >}}
    {{< leftStep size="7" >}}
    {{< figureImageSet >}}
      {{< figureImage src="../img/vsCodeRunPlaybook.jpg" title="Use the ansible-playbook command to execute the Playbook" >}}
      {{< figureImage src="../img/vsCodePlaybookRan.jpg" title="You should see a number of changed tasks" >}}
      {{< figureImage src="../img/vsCodePlaybookRanAgain.jpg" title="What happens if you run a Playbook again?" >}}
      {{< figureImage src="../img/vsCodeCurlSite.jpg" title="Check to ensure the page and server was deployed" >}}
    {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

{{% markdownify %}}
- After inspecting the Playbook, switch over to the VS Code Terminal and run the following:

    `ansible-playbook apache_web_server.yml`

- You'll notice color-coded output a most every task should be ***changed***
- Feel free to run the Playbook again - observe how the output is now different but the desired result on the system is still the same
- Now run the following command to test the site: `curl studentVAR_REP_STUDENT_NUMBER-node1`
{{% /markdownify %}}
    {{< /rightStep >}}
{{< /twoSideStep >}}

## Bonuses: Templates and Variables

This Playbook utilizes the ***templates*** module - open the ***templates/index.html.j2*** file and observe how it uses the ***web_message*** Variable from the Playbook as well as some other Ansible Facts which are special variables gathered from the systems.

This is great and all, however a Playbook can get long and asset management can be complicated - how do you make these automation functions more atomic, distributable, maintainable, and reusable?  ***Enter Collections and Roles...***