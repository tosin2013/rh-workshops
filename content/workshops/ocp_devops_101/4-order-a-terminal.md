---
title: Order a Terminal (Optional)
workshops: ocp_devops_101
workshop_weight: 25
layout: lab
---

{{< related_assets style="grey pf-u-mt-0" >}}
  {{< related_asset title="OpenShift Cluster" specialLink="ocpCluster" >}}{{< /related_asset >}}
{{< /related_assets >}}

Through this workshop you can perform a number of the exercises via either this Web UI or the command-line interface.  This is how you access your own private cloud-based terminal.

The terminal prompt isn't required to complete this workshop, so if you're more comfortable with working solely through the Web UI then feel free to do so.

You can interact with OpenShift via the CLI - to do so you need to set up the ***kubectl*** and ***oc*** binaries on your system.  Alternatively, you can order a cloud-based terminal that's preconfigured and runs out of a container on OpenShift.

{{< twoSideStep title="1. Create a new Project" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/createProjectButton.jpg" title="Create a new Project for your Web Terminal" >}}
        {{< figureImage src="../img/createProjectDialog.jpg" title="Enter unique details for your project" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<ol>
  <li>Click the blue <strong>Create Project</strong> button in the upper right of the Web Console.</li>
  <li>Create a new Project with the following details:
    <ul>
      <li><strong>Name:</strong> student{{< studentNumber >}}-terminal</li>
      <li><strong>Display Name <em>(optional)</em>:</strong> Workshop Terminal</li>
    </ul>
  </li>
  <li>Click <strong>Create</strong> to create the Project, and then find it in your listed Projects and click to enter it.</li>
</ol>

{{% alert info %}}
All Projects/Namespaces in a Kubernetes/OpenShift cluster must have unique names that are valid DNS objects - your Projects/Namespaces can't have overlapping names, even across different users.
{{% /alert %}}

    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="2. Switch to the Developer Console" >}}
    
    {{< leftStep size="7" >}}
        {{< figureImage src="../img/switchToDeveloper.jpg" title="Switch to the Developer Console view" >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<p>In the upper left hand corner of the Web Console, under the OpenShift logo, click the dropdown menu to switch from the <strong>Administrator</strong> console to the <strong>Developer</strong> console.</p>

    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="3. Choose a Deployment Method" >}}
    
    {{< leftStep size="7" >}}
        {{< figureImage src="../img/terminalEmptyProjectDeveloperView.jpg" title="Click the 'From Catalog' button" >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<p>This is a new, blank Project/Namespace in OpenShift.  You can deploy applications from Git, container images from a registry, from a Dockerfile, JSON/YAML for Manifests, from the Service Catalog, Helm Charts Operators, and Databases.</p>
<ol>
  <li>Find the <strong>From Catalog</strong> button and click it</li>
</ol>
<p>We'll go into other deployment methods through the course of this workshop.</p>
    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="4. Order the Workshop Terminal" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/terminalCatalogSearch.jpg" title="Select the 'Workshop Terminal' from the Catalog" >}}
        {{< figureImage src="../img/terminalInstanciate.jpg" title="Click 'Instantiate Template'" >}}
        {{< figureImage src="../img/terminalClickCreate.jpg" title="Scroll down and click 'Create'" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<p>The items from the <strong>Service Catalog</strong> are just <strong>Templates</strong> in the default <em>`openshift`</em> <strong>Project</strong>.  For the purposes of this workshop, there are additional prepared Templates to quickly deploy tools and services.</p>
<ol>
  <li>Type <em>terminal</em> into the Search box, or scroll down until it is found</li>
  <li>Choose the <strong>Workshop Terminal</strong> Template item from the available options by clicking on it</li>
  <li>Click <strong>Instantiate Template</strong></li>
  <li>Continue to deploy and accept the default parameters by clicking <strong>Create</strong> at the bottom</li>
</ol>
    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="5. Waiting Game" >}}
    
    {{< leftStep size="7" >}}
        {{< figureImage src="../img/terminalDeployedAccessRoute.jpg" title="Once the terminal application has been deployed, the circle will turn dark blue" >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<ol>
  <li>Wait a few seconds while the terminal application deploys</li>
  <li>Click the visual representation of the terminal Deployment Configuration (DC) to open the side panel</li>
  <li>Click on the <strong>Route</strong> to access the terminal</li>
</ol>
    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="6. OAuth Access" >}}
    
    {{< leftStep size="7" >}}
        {{< figureImage src="../img/oauth_terminal_access.jpg" title="OpenShift can act as an OAuth Provider for your applications to consume, even if they originate from other identity providers such as LDAP or Active Directory" >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}
<ol>
  <li>Upon clicking the <strong>Route</strong> you're prompted with a login screen</li>
  <li>Select the <strong>Workshop LDAP</strong> identity provider from earlier</li>
  <li>Log in with your credentials <em>- your username is <strong>student{{< studentNumber >}}</strong></em></li>
  <li>Click the <strong>Allow selected permissions</strong> button to authorize the terminal application to consume our user information from the OpenShift OAuth provider.</li>
</ol>
    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="7. Terminal Prompt" >}}
    
    {{< leftStep size="7" >}}
        {{< figureImage src="../img/terminalOCLogin.jpg" title="Welcome to your cloud-based Terminal" >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}
<ol>
  <li>Once authenticated and you have authorizing the application, you should be greeted with this terminal.</li>
  <li>
    Log in to the OpenShift cluster by running <strong>oc login</strong> and supplying your credentials.
    <ul>
      <li>You username is <strong>student{{< studentNumber >}}</strong></li>
    </ul>
  </li>
  <li>This terminal has all the software baked into the container image that would be needed for this workshop without any local set up.</li>
</ol>
    {{< /rightStep >}}
{{< /twoSideStep >}}
