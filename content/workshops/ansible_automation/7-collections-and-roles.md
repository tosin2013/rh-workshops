---
title: Collections and Roles
workshops: ansible_automation
workshop_weight: 40
layout: lab
---

{{< related_assets style="grey pf-u-mt-0" >}}
  {{< related_asset title="VS Code" href="https://studentVAR_REP_STUDENT_NUMBER-tower.VAR_REP_WORKSHOP_ID.VAR_REP_WORKSHOP_DOMAIN:8443" >}} - A web-based IDE and Terminal{{< /related_asset >}}
  {{< related_asset title="Student Credentials" >}} - student{{< studentNumber >}} / {{< span_studentPassword >}} {{< /related_asset >}}
{{< /related_assets >}}

## Collections

Ansible Collections are a way to package automation assets such as modules, roles, plugins, and more.  These Collections can expand the functionality of Ansible with new modules, or they could be simple Roles.

In the next exercises, we'll be utilizing a number of Collections pulled from [Ansible Galaxy](https://galaxy.ansible.com/) and you can pull in all of the needed Collections with one command in your Terminal:

```bash
ansible-galaxy collection install -r collections/requirements.yml
```

---

## Roles

While it is possible to write a playbook in one file as we’ve done throughout this workshop, eventually you’ll want to reuse files and start to organize things.

Ansible Roles are the way we do this. When you create a role, you deconstruct your playbook into parts and those parts sit in a directory structure. This is explained in more detail in the best practice already mentioned earlier.

### Role Directory Structure

Roles follow a defined directory structure; a role is named by the top level directory. Some of the subdirectories contain YAML files, named *main.yml*. The files and templates subdirectories can contain objects referenced by the YAML files.

An example project structure could look like this, the name of the role would be “deploy_apache”:

```output
deploy_apache/
├── defaults
│   └── main.yml
├── files
├── handlers
│   └── main.yml
├── meta
│   └── main.yml
├── README.md
├── tasks
│   └── main.yml
├── templates
├── tests
│   ├── inventory
│   └── test.yml
└── vars
    └── main.yml
```

Using Roles in a Playbook is straight forward:

```output
- name: Launch roles
  hosts: web
  roles:
  - role1
  - role2
```

For each role, the tasks, handlers and variables of that role will be included in the Playbook, in that order. Any copy, script, template, or include tasks in the role can reference the relevant files, templates, or tasks without absolute or relative path names. Ansible will look for them in the role’s files, templates, or tasks respectively, based on their use.

---

## Putting it all together

For the next exercise we'll be using a Playbook that utilizes a number of Roles that rely on the Collections that we installed just a moment ago.

{{< twoSideStep title="Inspect your Playbook" >}}
    {{< leftStep size="7" >}}
      {{< figureImage src="../img/vsCodeInspectRolePlaybook.jpg" title="Check out the changes in this Playbook with the use of Blocks, Conditionals (*when:*), Roles, and Tags" >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

{{% markdownify %}}
Inspect the Playbook and note the following:

- We'll deploy a mySQL server to the *db* host group
- The *Update System* Task uses the *include_role* module - inspect the *tasks/main.yml* in the *update_system* role.
- The *Update System* Task also conditionally runs *when* the system is RHEL based
- The Tasks in thie Playbook are ***Tagged*** - Tags let you enable/disable specific parts of the Playbook at execution.  There are special tags like *never* and *always*.
- There is a ***Block*** and the associated Rescue pairing in case the Tasks in the Block fails
{{% /markdownify %}}
    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="Run your Playbook" >}}
    {{< leftStep size="7" >}}
    {{< figureImageSet >}}
      {{< figureImage src="../img/vsCodeRunRolePlaybook.jpg" title="Use the ansible-playbook command to execute the Playbook" >}}
      {{< figureImage src="../img/vsCodeRolePlaybookRan.jpg" title="You should see a number of changed tasks" >}}
    {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

{{% markdownify %}}
- After inspecting the Playbook, switch over to the VS Code Terminal and run the following:

    `ansible-playbook --extra-vars "new_db_password=sup3rSecr3t" deploy_db.yml`

- Note how we're passing along an extra variable called *new_db_password* which is something we wouldn't want to store plain-text
- Now run the following command to test the database: `ansible studentVAR_REP_STUDENT_NUMBER-node2 -m community.mysql.mysql_info -a "login_user=root"`
{{% /markdownify %}}
    {{< /rightStep >}}
{{< /twoSideStep >}}

---

### Bonus: Check Mode and Tag Switching

Now this Playbook deploys a database which could be scary - what if you could see what the automation would do, without actually performing the actions?

This is where the ***--check*** flag comes into play - let us combine that with the ***--tags=remove_mysql_server*** to see if anything happen without making actual changes:

```bash
ansible-playbook deploy_db.yml --check --tags=remove_mysql_server
```