---
title: Bring Your Own Container
workshops: ocp_devops_101
workshop_weight: 30
layout: lab
---

{{< related_assets style="grey pf-u-mt-0" >}}
  {{< related_asset title="OpenShift Cluster" specialLink="ocpCluster" >}}{{< /related_asset >}}
{{< /related_assets >}}

Now that you know your way around and have all the tools needed, let's get started.

In this exercise we'll be deploying a pre-built container.  It’s easy to get started with OpenShift whether you’re using our app templates or bringing your existing container assets.

In this quick lab we will deploy an application using an exisiting container image. OpenShift will create all the needed objects in order to run the image as well as deploy and manage containers based on that image.

This container is built with a simple ***Dockerfile***, is hosted on [Quay](https://quay.io), and requires no retooling in order to deploy to OpenShift!

{{< twoSideStep title="1. Create a new Project" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/developerConsoleCreateProjectDD.jpg" title="Create a new Project for your Container Image" >}}
        {{< figureImage src="../img/byoCreateProject.jpg" title="Enter unique details for your project" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<p>You can create a new <strong>Project</strong> from either the Administrator or Developer Console.</p>

<ol>
  <li>To the right of the navigation sidebar, click the <strong>Project</strong> dropdown and click <strong>Create Project</strong></li>
  <li>Create a new Project with the following details:
    <ul>
      <li><strong>Name:</strong> <code>byo-{{< studentNumber >}}</code></li>
      <li><strong>Display Name <em>(optional)</em>:</strong> <code>BYO Container</code></li>
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
        {{< figureImage src="../img/byoBlankProject.jpg" title="Select Container Image" >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<blockquote>With your new BYO Project created, select <strong>Container Image</strong> as the Deployment Method</blockquote>

    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="3. Deploy Image" >}}
    
    {{< leftStep size="7" >}}
        {{< figureImage src="../img/byoDeployImage.jpg" title="Fill in the location to pull the image from, and click 'Create'" >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

{{% markdownify %}}
1. Select the **Image name from external registry** option
2. Enter the container name: `quay.io/kmoini/infinite_mario:latest`
3. Click the ***Create*** button
{{% /markdownify %}}

    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="4. Launch the application" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImage src="../img/byoContainerCreated.jpg" title="Wait for the container to deploy and open the Route" >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<ol>
  <li>Wait a few seconds while the application deploys</li>
  <li>Click the visual representation of the Deployment Configuration (DC) to open the side panel</li>
  <li>Click on the <strong>Route</strong> to access the application</li>
</ol>
    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="5. Clean Up" >}}
    
    {{< leftStep size="7" >}}
        {{< figureImage src="../img/byoDeleteProject.jpg" title="Once you have tested the application, delete the Project" >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<p>Once you have <em>"tested"</em> the application deployed from the container, make sure to remove the project and assets within it to conserve resources.</p>
<ol>
  <li>In the left-hand navigation sidebar, click on <strong>Project</strong></li>
  <li>Open the <strong>Actions</strong> dropdown, click <strong>Delete Project</strong></li>
  <li>Enter the Project name to confirm deletion</li>
</ol>
    {{< /rightStep >}}
{{< /twoSideStep >}}