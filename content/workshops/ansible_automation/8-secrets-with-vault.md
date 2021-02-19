---
title: Secrets with Vault
workshops: ansible_automation
workshop_weight: 45
layout: lab
---

{{< related_assets style="grey pf-u-mt-0" >}}
  {{< related_asset title="VS Code" href="https://studentVAR_REP_STUDENT_NUMBER-tower.VAR_REP_WORKSHOP_ID.VAR_REP_WORKSHOP_DOMAIN:8443" >}} - A web-based IDE and Terminal{{< /related_asset >}}
  {{< related_asset title="Student Credentials" >}} - student{{< studentNumber >}} / {{< span_studentPassword >}} {{< /related_asset >}}
{{< /related_assets >}}

## Ansible Vault

Since Ansible assets are primarily YAML documents, these files can easily be centrally stored in a Git repository and collaborated on. In fact, Ansible thrives with GitOps strategies, as you can learn in the Ansible Tower workshop.

However, what about certain secret bits of information? Don’t store them in a Git repository with your playbooks - ***even if it is a private repo or server!***

This is where **Ansible Vault** comes into play - you can securely store secrets as one-way encrypted variable files.

{{< alert danger >}}Vault ONLY protects data 'at rest'. Once decrypted, play and plugin authors are responsible for avoiding any secret disclosure, see <a href="https://docs.ansible.com/ansible/latest/reference_appendices/faq.html#keep-secret-data">no_log</a> for details on hiding output.{{< /alert >}}

{{< twoSideStep title="Vaulting Variables" >}}
    {{< leftStep size="7" >}}
    {{< figureImageSet >}}
      {{< figureImage src="../img/vsCodeViewUnencryptedSecrets.jpg" title="The variable secrets we want to encrypt" >}}
      {{< figureImage src="../img/vsCodeViewEncryptedSecrets.jpg" title="The VS Code editor should live-update once the variables are vaulted" >}}
    {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

{{% markdownify %}}
- Open the ***vars/secrets.yml*** file in VS Code - feel free to change the values
- In the Terminal, run the following command to encrypt that variable file:

    `ansible-vault encrypt vars/secrets.yml`

- You'll be prompted for an encryption password and upon entering it twice you'll notice that the variable file is now changed to house the encrypted form of those variables
- Now run the following command to test the vaulted variables, enter your password when prompted: `ansible-playbook --ask-vault-pass deploy_db.yml`
{{% /markdownify %}}
    {{< /rightStep >}}
{{< /twoSideStep >}}

This encrypted form of the variables file can be stored in a Git repository and unlocked at runtime so long as the user knows the password to decrypt it.