---
title: Access the Workshop Environment
workshops: ansible_automation
workshop_weight: 20
layout: lab
---

{{< related_assets style="grey pf-u-mt-0" >}}
  {{< related_asset title="VS Code" href="https://studentVAR_REP_STUDENT_NUMBER-tower.VAR_REP_WORKSHOP_ID.VAR_REP_WORKSHOP_DOMAIN:8443" >}} - A web-based IDE and Terminal{{< /related_asset >}}
  {{< related_asset title="Student Credentials" >}} - student{{< studentNumber >}} / {{< span_studentPassword >}} {{< /related_asset >}}
{{< /related_assets >}}

As a workshop student you'll interact with two different interface - a VSCode instance for easy YAML editing and Terminal functionailty, and Ansible Tower which will be provided later.  These resources you can find right at the top of every page in the ***Related Assets*** block.

## Your Lab Environment

In this workshop you operate in a pre-configured lab environment.  You will have access to the following hosts:

| Role                       | Inventory Name                     | Inventory Groups | Hostname                                                                               |
| -------------------------- | ---------------------------------- | ---------------- | -------------------------------------------------------------------------------------- |
| Ansible Control/Tower Node | student{{< studentNumber >}}-tower | tower            | student{{< studentNumber >}}-tower.{{< span_workshopID >}}.{{< span_workshopDomain >}} |
| Managed Host 1             | student{{< studentNumber >}}-node1 | nodes, web       | student{{< studentNumber >}}-node1.{{< span_workshopID >}}.{{< span_workshopDomain >}} |
| Managed Host 2             | student{{< studentNumber >}}-node2 | nodes, db        | student{{< studentNumber >}}-node2.{{< span_workshopID >}}.{{< span_workshopDomain >}} |
| Managed Host 3             | student{{< studentNumber >}}-node3 | nodes, container | student{{< studentNumber >}}-node3.{{< span_workshopID >}}.{{< span_workshopDomain >}} |


{{< twoSideStep title="1. Launch VS Code" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/selfSSLError.jpg" title="You may see a self-signed SSL Certificate error - skip past it" >}}
        {{< figureImage src="../img/codeServerLogin.jpg" title="The password is the same as your student credentials" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<p>A lot of your initial work will be done out of a VS Code instance in your browser, at least until we jump into Ansible Tower</p>
{{% markdownify %}}
- At the top of the page, in the ***Related Assets*** block, click on the ***VS Code*** link
- You may be prompted about a self-signed certificate - skip past this screen
- The password to your **code-server** is the same as your student password
{{% /markdownify %}}
    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="2. Open the Terminal" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/vsCodeLaunchTerminal.jpg" title="Use the Menu at the top, Terminal > New Terminal" >}}
        {{< figureImage src="../img/vsCodeTerminalOpen.jpg" title="Now you have a web-based IDE and terminal!" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}
{{% markdownify %}}
- With VSCode open, you are in the **/home/student{{< studentNumber >}}/workshop/** directory
- Open a Terminal by opening the ***Terminal*** menu and selecting ***New Terminal***
{{% /markdownify %}}
    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="3. Test Ansible" >}}
    
    {{< leftStep size="7" >}}
        {{< figureImage src="../img/vsCodeTerminalAnsibleTest.jpg" title="Check the version of Ansible installed" >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}
{{% markdownify %}}
- In the Terminal, run the command `ansible --version` to check the installed Ansible
{{% /markdownify %}}
    {{< /rightStep >}}
{{< /twoSideStep >}}
