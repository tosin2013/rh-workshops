---
title: CI/CD - Scaling and Recovery
workshops: ocp_devops_101
workshop_weight: 70
layout: lab
---

{{< related_assets style="grey pf-u-mt-0" >}}
  {{< related_asset title="OpenShift Cluster" specialLink="ocpCluster" >}}{{< /related_asset >}}
  {{< related_asset title="GitLab SCM" specialLink="gitlabVMOnCluster" >}}{{< /related_asset >}}
{{< /related_assets >}}

OpenShift can provide native load-balancing and can scale applications across your cluster with a few simple pushes of a button.

Not only that, but in the event that an application container does fail, OpenShift will spin up a new container to maintain the defined scaled state.

{{< twoSideStep title="1. Scale up your Teleprompter" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/ocpScalePod.jpg" title="Scale up your Pods in the Details tab of your Deployment" >}}
        {{< figureImage src="../img/ocpScaledPodListing.jpg" title="Switch to the Resources tab and see the additional Pods now made available from the scaling action" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<ol>
  <li>In the Topology view, click on the Deployment and change over to the <strong>Details</strong> tab in the right-pane that opens.  Click the up-arrow to scale the application up.</li>
  <li>Switch back over to the <strong>Resources</strong> tab and see how OpenShift has created additional Pods to meet the scaling input</li>
</ol>

    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="2. Delete a Pod" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/ocpDeletePod.jpg" title="Select one of those Pods, then under its 'Actions' menu, select 'Delete Pod' and Confirm" >}}
        {{< figureImage src="../img/ocpAutoHealingPods.jpg" title="OpenShift will auto-heal and scale up a new Pod to ensure the desired state" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<ol>
  <li>In the Topology view, with the Deployment open, under the <strong>Resources</strong> tab in the right-pane, click on one of the <strong>Pods</strong>.<br />Use the <strong>Actions</strong> menu to <strong>Delete Pod</strong> and Confirm the action.</li>
  <li>The dashboard will redirect you to the Pods listing in this Project where you can see the events taking place to replace that Pod that was just deleted.</li>
</ol>

    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="3. Scale Down" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImage src="../img/ocpScaleDown.jpg" title="To conserve resources, scale the Pods back down to 1" >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

<ol>
  <li>Before proceeding, scale the application back down to 1 Pod.</li>
</ol>

    {{< /rightStep >}}
{{< /twoSideStep >}}