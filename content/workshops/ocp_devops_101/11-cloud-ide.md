---
title: CI/CD - Cloud IDE Development
workshops: ocp_devops_101
workshop_weight: 60
layout: lab
---

{{< related_assets style="grey pf-u-mt-0" >}}
  {{< related_asset title="OpenShift Cluster" specialLink="ocpCluster" >}}{{< /related_asset >}}
  {{< related_asset title="GitLab SCM" specialLink="gitlabVMOnKemoNetwork" >}}{{< /related_asset >}}
{{< /related_assets >}}

Now that we have our own Forked repo, we can make modifications, test new functions, and collaborate easier with others.

While we won't be diving deep into Branching Strategies, Pull Requests, and other functions of Git, we'll be using some other functions to do basic additions to our own Fork.

{{< twoSideStep title="1. Clone into your Cloud IDE" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImage src="../img/coderGitClone.jpg" title="Clone your repository via the Cloud IDE terminal" >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<ol>
  <li>Launch the Cloud IDE that you previously provisioned and access the <strong>Terminal</strong></li>
  <li>Run the following command to pull in your forked repository: <code class="generatedText">git clone git@gitlab.kemo.network:studentVAR_REP_STUDENT_NUMBER/teleprompter.git</code></li>
</ol>

    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="2. Open a Workspace" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/coderOpenExplorer.jpg" title="Click the double file icon in the left toolbar to expand the 'Explorer'" >}}
        {{< figureImage src="../img/coderSelectTeleprompterPath.jpg" title="Select the cloned 'teleprompter' path" >}}
        {{< figureImage src="../img/coderClickOKPath.jpg" title="Click OK" >}}
        {{< figureImage src="../img/coderWorkspaceOpened.jpg" title="Now your Cloud IDE is aware of what workspace to use" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<ol>
  <li>In the left toolbar, click the double-file icon under the hamburger menu to open the <strong>Explorer</strong> pane - Click the <strong>Add Folder</strong> button</li>
  <li>Select the <strong>teleprompter</strong> folder that was just created from the <em>git clone</em> command</li>
  <li>Click <strong>OK</strong> once the folder has been selected to open the path in the workspace</li>
  <li>With the folder open you now have the proper workspace context applied -  you may notice the Terminal also is now aware of the Git context as well</li>
</ol>
    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="3. Explore the content" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImage src="../img/coderDockerfileView.jpg" title="Explore the Dockerfile to examine what OpenShift will be building" >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<ol>
  <li>In the <strong>Explorer</strong> pane, select the <strong>Dockerfile</strong> file to view the contents</li>
</ol>

<p>You can see that this Dockerfile is not very complex, but does use a secure container from the <a href="https://catalog.redhat.com/software/containers/explore">Red Hat Registry</a></p>

<p>No modifications are needed to the Dockerfile, just a high-level view of how you can quickly adapt your current Docker strategies to a secure platform deployment.</p>

    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="4. Deploy to OpenShift" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/coderOCLogin.jpg" title="Log into the OpenShift cluster" >}}
        {{< figureImage src="../img/coderOCNewProject.jpg" title="Create a new Project" >}}
        {{< figureImage src="../img/coderOCCreateSecret.jpg" title="Make a Secret with the SSH Key generated earlier so OpenShift can access your repo" >}}
        {{< figureImage src="../img/coderOCNewApp.jpg" title="Create a new Application with the Docker Build Strategy" >}}
        {{< figureImage src="../img/coderOCSetBuildSecret.jpg" title="Associate the Builder with the SSH Key Secret" >}}
        {{< figureImage src="../img/coderOCStartBuild.jpg" title="Start a new Build of the application" >}}
        {{< figureImage src="../img/coderOCExposeService.jpg" title="Expose the Service with a Route" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<ol>
  <li>In the Cloud IDE terminal, run the following command to log into the OpenShift cluster via the CLI:<br /><code class="generatedText">oc login api.VAR_REP_WORKSHOP_ID.VAR_REP_WORKSHOP_DOMAIN:6443</code></li>
  <li>Create a new Project:<br /><code class="generatedText">oc new-project teleprompter-VAR_REP_STUDENT_NUMBER</code></li>
  <li>Provide your SSH Key to OpenShift as a Secret so it can clone your fork:<br /><code>oc create secret generic repo-at-gitlab --from-file=ssh-privatekey=/home/coder/.ssh/id_rsa --type=kubernetes.io/ssh-auth</code></li>
  <li>Create a new Application using the Dockerfile Build Strategy:<br /><code class="generatedText">oc new-app git@gitlab.kemo.network:studentVAR_REP_STUDENT_NUMBER/teleprompter.git --name teleprompter --strategy=docker</code></li>
  <li>Associate the Secret and Builder:<br /><code>oc set build-secret --source bc/teleprompter repo-at-gitlab</code></li>
  <li>Start a build now that it can access the repository:<br /><code>oc start-build teleprompter</code></li>
  <li>Expose the Service as a Route:<br /><code>oc expose svc/teleprompter</code></li>
</ol>
    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="5. View in the OpenShift Web UI" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImage src="../img/ocpTeleprompterBuilt.jpg" title="View the built and deployed application" >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<ol>
  <li>Once those commands are run, we can see the result of the actions taken and the assets generated by launching back into the OpenShift Web UI.<br>You can also of course access most of this information via the <code>oc</code> CLI but the Web UI is a bit more intuitive.</li>
  <li>Navigate to your <strong class="generatedText">teleprompter-VAR_REP_STUDENT_NUMBER</strong> Project in the Developer console</li>
  <li>Click on the <strong>Deployment</strong> in the Topology Map to see the assets generated from the Build.</li>
  <li>Open the application by clicking on the <strong>Route</strong></li>
</ol>
    {{< /rightStep >}}
{{< /twoSideStep >}}
