---
title: Order a Web IDE
workshops: ocp_devops_101
workshop_weight: 50
layout: lab
---

{{< related_assets style="grey pf-u-mt-0" >}}
  {{< related_asset title="OpenShift Cluster" specialLink="ocpCluster" >}}{{< /related_asset >}}
{{< /related_assets >}}

Now that we've built a few containers with little effort, let's take a look at Cloud-Native Development.

Red Hat offers CodeReady Workspace which is a managed multi-user cloud-native IDE, however in this lightweight workshop we'll be using VS Code instead.

{{< twoSideStep title="1. Create a new Project" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/developerConsoleCreateProjectDD.jpg" title="Create a new Project for your Web IDE" >}}
        {{< figureImage src="../img/cloudIDECreateProject.jpg" title="Enter unique details for your project" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<ol>
  <li>Click the blue <strong>Create Project</strong> button in the upper right of the Web Console.</li>
  <li>Create a new Project with the following details:
    <ul>
      <li><strong>Name:</strong> <code>ide-{{< studentNumber >}}</code></li>
      <li><strong>Display Name <em>(optional)</em>:</strong> <code>Cloud IDE</code></li>
    </ul>
  </li>
  <li>Click <strong>Create</strong> to create the Project, and then find it in your listed Projects and click to enter it.</li>
</ol>

{{% alert info %}}
All Projects/Namespaces in a Kubernetes/OpenShift cluster must have unique names that are valid DNS objects - your Projects/Namespaces can't have overlapping names, even across different users.
{{% /alert %}}

    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="2. Choose a Deployment Method" >}}
    
    {{< leftStep size="7" >}}
        {{< figureImage src="../img/cloudIDESelectDeploymentType.jpg" title="Click the 'From Catalog' button" >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<ol>
  <li>Find the <strong>From Catalog</strong> button and click it</li>
</ol>
    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="3. Order the Workshop IDE" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/cloudIDECatalogSearch.jpg" title="Select the 'Workshop IDE' from the Catalog" >}}
        {{< figureImage src="../img/cloudIDEInstantiate.jpg" title="Click 'Instantiate Template'" >}}
        {{< figureImage src="../img/cloudIDECreateDeployment.jpg" title="Scroll down and click 'Create'" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<p>The items from the <strong>Service Catalog</strong> are just <strong>Templates</strong> in the default <em>`openshift`</em> <strong>Project</strong>.  For the purposes of this workshop, there are additional prepared Templates to quickly deploy tools and services.</p>
<ol>
  <li>Type <em>workshop</em> into the Search box, or scroll down until it is found</li>
  <li>Choose the <strong>Workshop IDE</strong> Template item from the available options by clicking on it</li>
  <li>Click <strong>Instantiate Template</strong></li>
  <li>Continue to deploy and accept the default parameters by clicking <strong>Create</strong> at the bottom</li>
</ol>

{{% alert info %}}
Take note of the Password - most often it is `r3dh4t1!`
{{% /alert %}}
    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="4. Waiting Game" >}}
    
    {{< leftStep size="7" >}}
        {{< figureImage src="../img/cloudIDELaunchRoute.jpg" title="Once the IDE application has been deployed, the circle will turn dark blue" >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<ol>
  <li>Wait a few seconds while the IDE application deploys</li>
  <li>Click the visual representation of the terminal Deployment Configuration (DC) to open the side panel</li>
  <li>Click on the <strong>Route</strong> to access the IDE</li>
</ol>
    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="5. Launch IDE Terminal" >}}
    
    {{< leftStep size="7" >}}
        {{< figureImage src="../img/coderOpenTerminal.jpg" title="The Cloud IDE has a built in terminal that we'll use through these next exercises" >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}
<ol>
  <li>Once you have launched the Cloud IDE and submitted the Password, you'll be greeted with a blank IDE</li>
  <li>Use the Hamburger Menu in the upper left corner of the screen to open the Menu and navigate to <strong>Terminal > New Terminal</strong></li>
</ol>
    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="6. Set Git Config" >}}
    
    {{< leftStep size="7" >}}
        {{< figureImage src="../img/coderSetGitConfig.jpg" title="Set the Name and Email address of your Student User for Git" >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}
<p>Before being able to commit changes to a Git repo, we need to set some basic configuration</p>
<ol>
  <li>Set your Name with <code>git config --global user.name "Student User{{< studentNumber >}}"</code></li>
  <li>Set your Email with <code>git config --global user.email student{{< studentNumber >}}@<span class="generatedText">VAR_REP_WORKSHOP_DOMAIN</span></code></li>
</ol>
    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="7. Generate and Display SSH Keys" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/coderGenerateSSHKeys.jpg" title="Generate a new SSH Key to use with Git" >}}
        {{< figureImage src="../img/coderCatPublicKey.jpg" title="Use cat to dump the contents of your PUBLIC SSH Key" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}
{{% markdownify %}}
Before we can continue we need to generate some SSH Keys

1. Generate a new key pair with the command `ssh-keygen -t rsa -b 4096`
2. Press ***Enter*** at the prompts to accept the default locations and to create a key pair without a passcode
3. Display the contents of the ***PUBLIC*** SSH Key and copy them to your clipboard - we'll use this with GitLab momentarily `cat ~/.ssh/id_rsa.pub`
4. Copy the contents of the ***Public SSH Key*** to the clipboard, including the entire block of text starting from ***ssh-rsa*** all the way to the end notation of ***coder@coder-ide-1-hash***
{{% /markdownify %}}
    {{< /rightStep >}}
{{< /twoSideStep >}}
