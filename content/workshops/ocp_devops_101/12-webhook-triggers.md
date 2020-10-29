---
title: CI/CD - Webhook Triggers
workshops: ocp_devops_101
workshop_weight: 65
layout: lab
---

{{< related_assets style="grey pf-u-mt-0" >}}
  {{< related_asset title="OpenShift Cluster" specialLink="ocpCluster" >}}{{< /related_asset >}}
  {{< related_asset title="GitLab SCM" specialLink="gitlabVMOnKemoNetwork" >}}{{< /related_asset >}}
{{< /related_assets >}}

Now that we've explored the built application, you might want to add a new script and automatically trigger a new build when that script is pushed to our forked repository.

{{< twoSideStep title="1. Open the BuildConfiguration" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImage src="../img/ocBuildConfigLink.jpg" title="Click on the 'teleprompter' BuildConfig link under the Deployment Resources" >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<ol>
  <li>While in the <strong>Topology</strong> view, click on the <strong>Deployment</strong> and switch to the <strong>Resources</strong> tab in the right-hand pane</li>
  <li>Click on the <em>teleprompter</em> <strong>BuildConfig</strong> link</li>
</ol>

    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="2. Modify the BuildConfiguration" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/ocpBuildConfigScreen.jpg" title="Click on the YAML tab in the BuildConfig" >}}
        {{< figureImage src="../img/ocpBuildConfigYAML.jpg" title="Scroll down and add a GitLab type trigger" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<ol>
  <li>In the <strong>BuildConfig</strong> view, click on the YAML tab - we'll add some YAML for a GitLab type Webhook Trigger</li>
  <li>Add the following under <strong>spec.triggers</strong>:<br />
  <pre><code>- type: GitLab
  gitlab:
    secret: NOCJ10YvSuOaSyzEgZJd</code></pre>
  </li>
  <li>Ensure the spacing aligns with the other triggers and click <strong>Save</strong></li>
</ol>

    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="3. Add the Webhook to GitLab" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/ocpBuildConfigCopyURL.jpg" title="Click on the 'Copy URL with Secret' button" >}}
        {{< figureImage src="../img/gitLabWebhooksLink.jpg" title="Navigate to 'Settings > Webhooks' in GitLab" >}}
        {{< figureImage src="../img/gitlabAddWebhook.jpg" title="Paste in the Webhook URL and click 'Add webhook'" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<ol>
  <li>Return to the <strong>BuildConfig</strong> view, click on the GitLab <strong>Copy URL with Secret</strong> button under <strong>Webhooks</strong></li>
  <li>Navigate back to GitLab, in your forked repo's side-bar, navigate to <strong>Settings > Webhooks</strong> </li>
  <li>Add the Webhook URL that you just copied to your clipboard from the BuildConfig in OpenShift - click Save</li>
</ol>

    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="4. Push new changes to the repository" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/coderCreateNewScript.jpg" title="Create a new HTML file under the scripts directory with a few paragraph tags" >}}
        {{< figureImage src="../img/coderGitACP.jpg" title="Git add, git commit, and git push the new file" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<ol>
  <li>Return to the Cloud IDE, in the Explorer pane, create a new HTML file under the <em>scripts</em> subdirectory</li>
  <li>Add a few lines of text wrapped in <strong>&lt;p&gt;&lt;/p&gt;</strong> tags and Save it</li>
  <li>In the Cloud IDE Terminal, perform the following actions:<br />
  <code>git add .</code><br /><br />
  <code>git commit -m "new script file"</code><br /><br />
  <code>git push</code>
  </li>
</ol>

    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="5. Watch the triggered build" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/ocpTriggeredBuild.jpg" title="Create a new HTML file under the scripts directory with a few paragraph tags" >}}
        {{< figureImage src="../img/ocpNewBuildComplete.jpg" title="Open the newly built and revised application with your recent changes!" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<ol>
  <li>Return to the OpenShift Developer UI, and watch the new webhook triggered <strong>Build</strong> by the <em>git push</em> we just performed</li>
  <li>Once the Build is complete, navigate back to the Topology view to open the application Route and see the changes you just made</li>
</ol>

    {{< /rightStep >}}
{{< /twoSideStep >}}