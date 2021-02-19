---
title: Intro to Ansible Tower
workshops: ansible_automation
workshop_weight: 50
layout: lab
---

{{< related_assets style="grey pf-u-mt-0" >}}
  {{< related_asset title="Ansible Tower" href="https://studentVAR_REP_STUDENT_NUMBER-tower.VAR_REP_WORKSHOP_ID.VAR_REP_WORKSHOP_DOMAIN" >}} - Ansible Web UI and API Server{{< /related_asset >}}
  {{< related_asset title="VS Code" href="https://studentVAR_REP_STUDENT_NUMBER-tower.VAR_REP_WORKSHOP_ID.VAR_REP_WORKSHOP_DOMAIN:8443" >}} - A web-based IDE and Terminal{{< /related_asset >}}
  {{< related_asset title="Student Credentials" >}} - student{{< studentNumber >}} / {{< span_studentPassword >}} {{< /related_asset >}}
{{< /related_assets >}}

## Ansible Tower - Automation at Scale

---

We've used the Ansible CLI and now it's time to graduate to ***Ansible Tower*** - an incredibly powerful extension of Ansible with a Web UI, RESTful API to integrate into other systems, RBAC, and much more.

Before we dive further into using Ansible Tower for your automation at scale, you should get familiar with some concepts and naming conventions.

**Projects**

Projects are logical collections of Ansible playbooks in Ansible Tower. These playbooks either reside on the Ansible Tower instance, or in a source code version control system supported by Tower.

**Inventories**

An Inventory is a collection of hosts against which jobs may be launched, the same as an Ansible inventory file. Inventories are divided into groups and these groups contain the actual hosts. Groups may be populated manually, by entering host names into Tower, from one of Ansible Tower’s supported cloud providers or through dynamic inventory scripts.

**Credentials**

Credentials are utilized by Tower for authentication when launching Jobs against machines, synchronizing with inventory sources, and importing project content from a version control system. Credential configuration can be found in the Settings.

Tower credentials are imported and stored encrypted in Tower, and are not retrievable in plain text on the command line by any user. You can grant users and teams the ability to use these credentials, without actually exposing the credential to the user.

**Templates**

A job template is a definition and set of parameters for running an Ansible job. Job templates are useful to execute the same job many times. Job templates also encourage the reuse of Ansible playbook content and collaboration between teams. To execute a job, Tower requires that you first create a job template.

**Jobs**

A job is basically an instance of Tower launching an Ansible playbook against an inventory of hosts.

**Workflows**

Workflows organize multiple Jobs or Templates into a larger orchestrated task.  They can have multiple paths defined, Pass/Fail constraints, and many other triggers built into how you create your workflows.

{{< twoSideStep title="Launch Ansible Tower" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/selfSSLError.jpg" title="You may see a self-signed SSL Certificate error - skip past it" >}}
        {{< figureImage src="../img/ansibleTowerLogin.jpg" title="The username is admin and the password is the same as your student credentials" >}}
        {{< figureImage src="../img/ansibleTowerHomeScreen.jpg" title="You should see something similar to this" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<p>We've been working out of the Web IDE and Terminal, now we're load Ansible Tower as well.</p>
{{% markdownify %}}
- At the top of the page, in the ***Related Assets*** block, click on the ***Ansible Tower*** link
- You may be prompted about a self-signed certificate - skip past this screen
- The username is `admin` and the password is the same as your student credentials
- You should be presented with the Ansible Tower Dashboard
{{% /markdownify %}}
    {{< /rightStep >}}
{{< /twoSideStep >}}