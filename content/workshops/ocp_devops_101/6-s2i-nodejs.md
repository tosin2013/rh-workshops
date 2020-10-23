---
title: Source2Image - NodeJS
workshops: ocp_devops_101
workshop_weight: 35
layout: lab
---

{{< related_assets style="grey pf-u-mt-0" >}}
  {{< related_asset title="OpenShift Cluster" specialLink="ocpCluster" >}}{{< /related_asset >}}
{{< /related_assets >}}

In the last exercise we deployed a pre-built container image - what if you don't have a container image built already?

Thankfully, OpenShift can take your Source Code and turn it into an Image!  This is called Source2Image, or S2I.

OpenShift will attempt to detect the application language, and take it straight from a Git repo and build a secure container right on the cluster with everything needed to run it!

{{< twoSideStep title="1. Create a new Project" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/developerConsoleCreateProjectDD.jpg" title="Create a new Project for your Container Image" >}}
        {{< figureImage src="../img/s2iNodeCreateProject.jpg" title="Enter unique details for your project" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<p>You can create a new <strong>Project</strong> from either the Administrator or Developer Console.</p>

<ol>
  <li>To the right of the navigation sidebar, click the <strong>Project</strong> dropdown and click <strong>Create Project</strong></li>
  <li>Create a new Project with the following details:
    <ul>
      <li><strong>Name:</strong> s2i-nodejs-{{< studentNumber >}}</li>
      <li><strong>Display Name <em>(optional)</em>:</strong> S2I NodeJS</li>
    </ul>
  </li>
  <li>Click <strong>Create</strong> to create the Project, and then find it in your listed Projects and click to enter it.</li>
</ol>

{{% alert info %}}
All Projects/Namespaces in a Kubernetes/OpenShift cluster must have unique names that are valid DNS objects - your Projects/Namespaces can't have overlapping names, even across different users.
{{% /alert %}}

    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="2. Deployment Method" >}}
    
    {{< leftStep size="7" >}}
        {{< figureImage src="../img/s2iNodeEmptyProject.jpg" title="Select From Git" >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<blockquote>With your new S2I Project created, select <strong>From Git</strong> as the Deployment Method</blockquote>

    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="3. Import from Git" >}}
    
    {{< leftStep size="7" >}}
        {{< figureImage src="../img/s2iNodeImportFromGit.jpg" title="Fill in the Git repo to pull the code from, and click 'Create'" >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

{{% markdownify %}}
1. Enter the following Git Repo URL: `https://github.com/kenmoini/demo-app-slide-deck`
2. The ***Builder Image*** should be automatically detect as Node.js - if not, select it
3. Click the ***Create*** button
{{% /markdownify %}}

    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="4. Explore the built application" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/s2iNodeBuildComplete.jpg" title="Wait for the container to build and view the Build Logs" >}}
        {{< figureImage src="../img/s2iNodeGitLink.jpg" title="This application object has a link to the Git Repo it was built from" >}}
        {{< figureImage src="../img/s2iNodeRouteLink.jpg" title="Open the application with the associated Route" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<ol>
  <li>Wait a few seconds while the application builds</li>
  <li>Click the visual representation of the <strong>Deployment (D)</strong> to open the side panel for more information on the application assets</li>
  <li>Explore the additional assets such as the <strong>Build</strong> and the <strong>Build Logs</strong></li>
  <li>The visual explorer also has a quick link to the <strong>Git Repo</strong> used to build the application container</li>
  <li>Click the <strong>Route</strong> to open the application</li>
</ol>
    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="5. Clean Up" >}}
    
    {{< leftStep size="7" >}}
        {{< figureImage src="../img/s2iNodeDeleteProject.jpg" title="Once you have tested the application, delete the Project" >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<p>Once you have explored the built application, make sure to remove the project and assets within it to conserve resources.</p>
<ol>
  <li>In the left-hand navigation sidebar, click on <strong>Project</strong></li>
  <li>Open the <strong>Actions</strong> dropdown, click <strong>Delete Project</strong></li>
  <li>Enter the Project name to confirm deletion</li>
</ol>
    {{< /rightStep >}}
{{< /twoSideStep >}}