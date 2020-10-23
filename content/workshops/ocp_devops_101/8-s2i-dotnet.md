---
title: Source2Image - .NET Core
workshops: ocp_devops_101
workshop_weight: 45
layout: lab
---

{{< related_assets style="grey pf-u-mt-0" >}}
  {{< related_asset title="OpenShift Cluster" specialLink="ocpCluster" >}}{{< /related_asset >}}
{{< /related_assets >}}

A common misconception is that OpenShift can only deploy classically Linux-based workloads.

OpenShift can deploy Linux *and* Windows containers, *AND* VMs!

Aside from that, the years of collaboration between Microsoft and Red Hat have paved the way for developers to deploy .NET Core applications and MSSQL database on Linux, and yes, even on OpenShift.

{{< twoSideStep title="1. Create a new Project" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/developerConsoleCreateProjectDD.jpg" title="Create a new Project for your Container Image" >}}
        {{< figureImage src="../img/s2iDotNetCreateProject.jpg" title="Enter unique details for your project" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<p>You can create a new <strong>Project</strong> from either the Administrator or Developer Console.</p>

<ol>
  <li>To the right of the navigation sidebar, click the <strong>Project</strong> dropdown and click <strong>Create Project</strong></li>
  <li>Create a new Project with the following details:
    <ul>
      <li><strong>Name:</strong> <code>s2i-dotnet-{{< studentNumber >}}</code></li>
      <li><strong>Display Name <em>(optional)</em>:</strong> <code>S2I .NET Core</code></li>
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
        {{< figureImage src="../img/s2iDotNetEmptyProject.jpg" title="Select From Git" >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<blockquote>With your new S2I PHP Project created, select <strong>From Git</strong> as the Deployment Method</blockquote>

    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="3. Import from Git" >}}
    
    {{< leftStep size="7" >}}
        {{< figureImage src="../img/s2iDotNetImportFromGit.jpg" title="Fill in the Git repo to pull the code from, and click 'Create'" >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

{{% markdownify %}}
1. Enter the following ***Git Repo URL***: `https://github.com/kenmoini/s2i-dotnetcore-demo-app`
2. Click the ***Show Advanced Git Options*** link below the ***Git Repo URL*** input field
3. In the ***Context Dir*** input field, enter `/src` to target the application source in the repo subdirectory
4. Since this application is more complex and has the .NET app in a subdirectory, OpenShift can't detect the type correctly - select the ***.NET Core*** Builder Image
5. Click the ***Create*** button
{{% /markdownify %}}

    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="4. Explore the built application" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/s2iDotNetBuildComplete.jpg" title="Wait for the container to build and view the Build Logs" >}}
        {{< figureImage src="../img/s2iDotNetGitLink.jpg" title="This application object has a link to the Git Repo it was built from" >}}
        {{< figureImage src="../img/s2iDotNetRouteLink.jpg" title="Open the application with the associated Route" >}}
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

{{< alert info >}}
This .NET Core application has some functions to generate load and manipulate the environment in which it operates - explore some of the functions and how you can also monitor the actions taken in OpenShift's Monitoring capabilties
{{< /alert >}}
    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="5. Clean Up" >}}
    
    {{< leftStep size="7" >}}
        {{< figureImage src="../img/s2iDotNetDeleteProject.jpg" title="Once you have tested the application, delete the Project" >}}
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