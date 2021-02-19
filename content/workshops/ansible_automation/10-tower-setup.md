---
title: Ansible Tower Setup
workshops: ansible_automation
workshop_weight: 55
layout: lab
---

{{< related_assets style="grey pf-u-mt-0" >}}
  {{< related_asset title="Ansible Tower" href="https://studentVAR_REP_STUDENT_NUMBER-tower.VAR_REP_WORKSHOP_ID.VAR_REP_WORKSHOP_DOMAIN" >}} - Ansible Web UI and API Server{{< /related_asset >}}
  {{< related_asset title="VS Code" href="https://studentVAR_REP_STUDENT_NUMBER-tower.VAR_REP_WORKSHOP_ID.VAR_REP_WORKSHOP_DOMAIN:8443" >}} - A web-based IDE and Terminal{{< /related_asset >}}
  {{< related_asset title="Student Credentials" >}} - student{{< studentNumber >}} / {{< span_studentPassword >}} {{< /related_asset >}}
{{< /related_assets >}}

Setting up Ansible Tower is rather easy - some RBAC organization, add some Credentials, some Inventories, a few Projects, sprinkle of Job Templates and you'll be automating within an hour!

{{< twoSideStep title="1. Organizations, Teams, and Users" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/ansibleTowerOrganizations.jpg" title="Navigate to Organizations, click the green plus" >}}
        {{< figureImage src="../img/ansibleTowerCreateOrganization.jpg" title="Give your organization life" >}}
        {{< figureImage src="../img/ansibleTowerCreateTeam.jpg" title="Add a Team to the Organization you just created" >}}
        {{< figureImage src="../img/ansibleTowerCreateUser.jpg" title="Make a user and remember the credentials" >}}
        {{< figureImage src="../img/ansibleTowerAddUserToTeam.jpg" title="Add the User to your Team" >}}
        {{< figureImage src="../img/ansibleTowerAddUserToTeamChecked.jpg" title="Check the box next to your user, click Save" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

{{% markdownify %}}
- Navigate to *Organizations* and create a new Organization - all that's really needed is a Name
- Next, create a *Team*, ensure it's associated that new Organization
- Then make a new *User* associated to your Organization, don't forget the credentials because we'll use them later to run our automation in Tower
- Finally, navigate back to the *Teams* page, select your Team, click the Users tab, and use the green plus sign to add the User to the Team
{{% /markdownify %}}
    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< alert info >}}You can of course map the Organizations, Teams, and Users in Ansible Tower to your enterprise identity provider such as Active Directory, OAuth, SAML, etc{{< /alert >}}

{{< twoSideStep title="2. Inventories" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/ansibleTowerCreateInventory.jpg" title="Navigate to Inventories, create a new Inventory" >}}
        {{< figureImage src="../img/ansibleTowerSaveInventory.jpg" title="Give it a name, associate with your Organization" >}}
        {{< figureImage src="../img/ansibleTowerImportInventory.jpg" title="Import your Inventory via the VS Code Terminal" >}}
        {{< figureImage src="../img/ansibleTowerSeeImportedHosts.jpg" title="View your imported Inventory Hosts" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

{{% markdownify %}}
Ansible Tower can utilize dynamically synced inventories such as those from AWS EC2, GCE, Red Hat Satellite, and so on.  For our purposes, we'll import the inventory we used earlier into Ansible Tower via the Terminal in VS Code.

- First, define the Inventory in Ansible Tower by navigating to the *Inventories* page and using the green plus to create a normal Inventory - not a Smart Inventory
- It just needs a Name and to be associated with your Organization - then click Save
- Switch back to VS Code and the Terminal - run the following command, adjusting for your Inventory Name:

    `sudo tower-manage inventory_import --source=/home/studentVAR_REP_STUDENT_NUMBER/workshop/inventory --inventory-name="Workshop Inventory"`

- Finally, switch back to Ansible Tower, click the *Hosts* tab in your Inventory and see all your imported hosts
{{% /markdownify %}}
    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="3. Credentials" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/ansibleTowerCreateCredential.jpg" title="Navigate to Credentials, create a new Credential" >}}
        {{< figureImage src="../img/ansibleTowerBasicCredentialInfo.jpg" title="Give your Credential a Name, set to your Organization" >}}
        {{< figureImage src="../img/ansibleTowerSelectCredentialType.jpg" title="Select the Machine type Credential" >}}
        {{< figureImage src="../img/ansibleTowerSetCredentialConfig.jpg" title="Fill in the username/password and set Escalation Method" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

{{% markdownify %}}
Ansible Tower can securely store a number of different types of Credentials - for our purposes in this workshop we'll create a simple Machine Credential

- Navigate to the *Credentials* page, click the green plus to create a new Credential
- Give it a Name, set it to your Organization, and then click the magnifying glass icon to the left of *Credential Type*
- Find the Machine type Credential in the pop-up modal
- Fill in the username of `studentVAR_REP_STUDENT_NUMBER`, your password, and set the Privilege Escalation Method to *sudo*
- Click Save

This Machine type Credential will allow Ansible Tower to log in to the nodes we were controlling earlier.
{{% /markdownify %}}
    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="4. Ad-hoc commands in Ansible Tower" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/ansibleTowerInventoriesListing.jpg" title="Navigate to Inventory, click on your Inventory" >}}
        {{< figureImage src="../img/ansibleTowerInventoriesHostsChecked.jpg" title="Check the box of few of your hosts, click the RUN COMMANDS button" >}}
        {{< figureImage src="../img/ansibleTowerAdHocCommand.jpg" title="Select the ping module, your Machine Credentials, and click Launch" >}}
        {{< figureImage src="../img/ansibleTowerAdHocCommandRan.jpg" title="You should see a classive game of Ping Pong" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

{{% markdownify %}}
Now that we have the basics set up, we can test our connection and run an ad-hoc command to ping our hosts like we did earlier via the Ansible CLI in the Terminal.

- Navigate to the *Inventories* page, click on your Inventory
- Click over to the *Hosts* tab - check the box to the left of a few of your Hosts, then click the *Run Commands* button
- Select the *ping* module from the drop-down, as well as your Machine Credentials - then click *Launch*
- Watch the ad-hoc command run across your hosts in Ansible Tower - very useful for quick patching or (un)installation of packages
{{% /markdownify %}}
    {{< /rightStep >}}
{{< /twoSideStep >}}