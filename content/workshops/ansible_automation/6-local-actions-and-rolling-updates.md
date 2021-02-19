---
title: Local Actions and Rolling Updates
workshops: ansible_automation
workshop_weight: 35
layout: lab
---

{{< related_assets style="grey pf-u-mt-0" >}}
  {{< related_asset title="VS Code" href="https://studentVAR_REP_STUDENT_NUMBER-tower.VAR_REP_WORKSHOP_ID.VAR_REP_WORKSHOP_DOMAIN:8443" >}} - A web-based IDE and Terminal{{< /related_asset >}}
  {{< related_asset title="Student Credentials" >}} - student{{< studentNumber >}} / {{< span_studentPassword >}} {{< /related_asset >}}
{{< /related_assets >}}

Ansible is great for operating tasks across a number of remote hosts, but what if you need to perform some actions locally on your control node? Maybe you need to specify a group or host that a certain task should apply to, skipping the others in the play inventory? What if you don’t want Ansible to operate in parallel?

{{< twoSideStep title="Local Actions & Multi-Play Playbooks" >}}
    {{< leftStep size="7" >}}
    {{< figureImageSet >}}
      {{< figureImage src="../img/vsCodeLocalActionsPlaybook.jpg" title="Multiple Plays can be in a Playbook" >}}
      {{< figureImage src="../img/vsCodeLocalActionsPlaybookRan.jpg" title="Run the Playbook and notice the output keys for PLAY" >}}
    {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

{{% markdownify %}}
Inspect the Playbook and note the following:

- There are multiple Plays in the Playbook
- The first Play operates on *localhost* with a *local* connection
- The *command* module registers a variable which is bound to the localhost - that variable is later referenced on the host in the second Play to see if the same user exists across the *web* group
- Run the Playbook with the following:

    `ansible-playbook local_actions.yml`
{{% /markdownify %}}
    {{< /rightStep >}}
{{< /twoSideStep >}}

**By default, Ansible runs with 5 forks which means it will execute on 5 hosts in parallel. What if you’re attempting a rolling update and only need to execute on a single host at a time?**

{{< twoSideStep title="Rolling Updates" >}}
    {{< leftStep size="7" >}}
    {{< figureImageSet >}}
      {{< figureImage src="../img/vsCodeRollingUpdatesPlaybook.jpg" title="Rolling Updates are great for clustered systems" >}}
      {{< figureImage src="../img/vsCodeRollingUpdatesPlaybookRan.jpg" title="Run the Playbook and notice the individual host execution" >}}
    {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

{{% markdownify %}}
Inspect the Playbook and note the following:

- The *serial* key limits the number of hosts the Play can be run against at once
- Run the Playbook with the following:

    `ansible-playbook rolling_updates.yml`
{{% /markdownify %}}
    {{< /rightStep >}}
{{< /twoSideStep >}}