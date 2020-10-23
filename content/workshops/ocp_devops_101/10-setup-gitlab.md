---
title: Setup GitLab
workshops: ocp_devops_101
workshop_weight: 55
layout: lab
---

{{< related_assets style="grey pf-u-mt-0" >}}
  {{< related_asset title="OpenShift Cluster" specialLink="ocpCluster" >}}{{< /related_asset >}}
  {{< related_asset title="GitLab SCM" specialLink="gitlabVM" >}}{{< /related_asset >}}
{{< /related_assets >}}

We have a Cloud IDE generally set up and ready to roll, let's Setup our Gitlab user

{{< twoSideStep title="1. Open GitLab and Log In" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImage src="../img/gitLabLogin.jpg" title="Log into GitLab with your same LDAP credentials" >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<ol>
  <li>Use the <strong>Related Assets</strong> header above to launch this workshop's GitLab instance, or use the following link:</li>
  {{< related_asset title="GitLab SCM" specialLink="gitlabVM" >}}{{< /related_asset >}}
  <li>Note that you should use the <strong>WorkshopLDAP</strong> login provider, with the same credentials your workshop proctor provided you to use with OpenShift - all primary services are serviced by <a href="https://access.redhat.com/products/identity-management">Red Hat Identity Management</a></li>
</ol>

    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="2. Configure User Settings" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/gitLabUserSettingsDropdown.jpg" title="Click the User Avatar to expand the dropdown and click on 'Settings'" >}}
        {{< figureImage src="../img/gitLabUserSettings.jpg" title="Click 'SSH Keys' in the left-hand menu" >}}
        {{< figureImage src="../img/gitLabPasteInSSHKey.jpg" title="Paste in your Public SSH Key" >}}
        {{< figureImage src="../img/gitLabSSHKeyAdded.jpg" title="You should now see your stored Public Key" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<ol>
  <li>Using the top navigation bar, click on the <strong>User Avatar</strong> to expand that menu and click <strong>Settings</strong></li>
  <li>In the left-hand pane, click on <strong>SSH Keys</strong></li>
  <li>Paste in your Public SSH Key that was previously displayed in your Cloud IDE terminal - click <strong>Add Key</strong></li>
  <li>Once your Public SSH Key has been added, you should see the fingerprint read-out</li>
</ol>
    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="3. Fork a Repository" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/gitLabExploreProjectsMenu.jpg" title="From the 'Projects' dropdown, select 'Explore Projects'" >}}
        {{< figureImage src="../img/gitLabProjectsListing.jpg" title="Find the 'Workshop / Teleprompter' repos and navigate to it" >}}
        {{< figureImage src="../img/gitLabTeleprompterClickFork.jpg" title="Click the 'Fork' button in the upper right portion of the page" >}}
        {{< figureImage src="../img/gitLabForkProjectToUser.jpg" title="Click 'Select' under your user" >}}
        {{< figureImage src="../img/gitLabForkedProject.jpg" title="You now have your own copy of the repo!" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<p>The items from the <strong>Service Catalog</strong> are just <strong>Templates</strong> in the default <em>`openshift`</em> <strong>Project</strong>.  For the purposes of this workshop, there are additional prepared Templates to quickly deploy tools and services.</p>
<ol>
  <li>With the SSH Key in place, use the <strong>Projects</strong> dropdown menu to select the <strong>Explore Projects</strong> link</li>
  <li>Enter the <strong>Workshop / Teleprompter</strong> repository</li>
  <li>Click the <strong>Fork</strong> button to the far right of the title</li>
  <li>Fork it to your user by clicking <strong>Select</strong> under your user listing</li>
  <li>Within a few moments you will have your own fork to freely operate upon</li>
</ol>

    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="4. Copy the Clone Link" >}}
    
    {{< leftStep size="7" >}}
        {{< figureImage src="../img/gitLabCopyCloneLink.jpg" title="Copy the URL for the 'Clone with SSH' option" >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<ol>
  <li>While in your Fork, click the blue <strong>Clone</strong> dropdown menu</li>
  <li>Click the <strong>Copy URL</strong> button next to the git link under <strong>Clone with SSH</strong></li>
  <li>With that, return to the Cloud IDE running in OpenShift</li>
</ol>
    {{< /rightStep >}}
{{< /twoSideStep >}}
