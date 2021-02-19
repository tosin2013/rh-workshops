---
title: Projects and Templates
workshops: ansible_automation
workshop_weight: 60
layout: lab
---

{{< related_assets style="grey pf-u-mt-0" >}}
  {{< related_asset title="Ansible Tower" href="https://studentVAR_REP_STUDENT_NUMBER-tower.VAR_REP_WORKSHOP_ID.VAR_REP_WORKSHOP_DOMAIN" >}} - Ansible Web UI and API Server{{< /related_asset >}}
  {{< related_asset title="VS Code" href="https://studentVAR_REP_STUDENT_NUMBER-tower.VAR_REP_WORKSHOP_ID.VAR_REP_WORKSHOP_DOMAIN:8443" >}} - A web-based IDE and Terminal{{< /related_asset >}}
  {{< related_asset title="Student Credentials" >}} - student{{< studentNumber >}} / {{< span_studentPassword >}} {{< /related_asset >}}
{{< /related_assets >}}

Ansible Tower integrates seamlessly with your GitOps pipelines and can sync ***Projects*** from Git repos and define ***Templates*** from the Playbooks in those Projects.

{{< twoSideStep title="1. Projects" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/ansibleTowerProjectsEmpty.jpg" title="Navigate to Projects, click the green plus" >}}
        {{< figureImage src="../img/ansibleTowerProjectName.jpg" title="Give the Project a Name and Organization, set SCM Type" >}}
        {{< figureImage src="../img/ansibleTowerProjectConfiged.jpg" title="Configure the Project" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

{{% markdownify %}}
- Navigate to *Projects* and create a new Project - give it a Name, Organization association, and select Git as the SCM Type
- Enter the following repo for the *SCM URL*:

    `https://github.com/kenmoini/ansible-podman-demo`

- Set the *SCM Branch/Tag/Commit* to *main*
- Click Save

The Project should now start to sync and pull content from GitHub
{{% /markdownify %}}
    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="2. Templates" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/ansibleTowerCreateJobTemplate.jpg" title="Navigate to Templates, click the green plus, select Job Template" >}}
        {{< figureImage src="../img/ansibleTowerConfigureJobTemplate.jpg" title="Configure the Job Template selecting one of the Playbooks" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

{{% markdownify %}}
Now with a Project available, we can define our Templates that'll be used from within the Project.

- Navigate to *Templates* and create a new Template - give it a Name, select your Inventory, choose your Project, add your Machine type Credentials, set a *Limit* of `container`, and select one of the Playbooks
- Click Save
{{% /markdownify %}}
    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="3. Workflow Templates" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/ansibleTowerCreateJobWorkflowTemplate.jpg" title="Navigate back to Templates, click the green plus, select Workflow Template" >}}
        {{< figureImage src="../img/ansibleTowerConfigureWorkflowTemplate.jpg" title="Configure the Workflow Template and click Save" >}}
        {{< figureImage src="../img/ansibleTowerEmptyWorkflowVisualizer.jpg" title="The Workflow Visualizer" >}}
        {{< figureImage src="../img/ansibleTowerAddWorkflowNodeApproval.jpg" title="Add an Approval node" >}}
        {{< figureImage src="../img/ansibleTowerAddWorkflowNodeProjectSync.jpg" title="Add a Project Sync node" >}}
        {{< figureImage src="../img/ansibleTowerAddWorkflowNodeTemplate.jpg" title="Add the Template node" >}}
        {{< figureImage src="../img/ansibleTowerAddWorkflowFinished.jpg" title="Click Save to close the Workflow Visualizer" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

{{% markdownify %}}
You can combine multiple Templates and other Actions into Workflow Jobs with extra logic to control the execution of the workflow - this is extremely helpful where you need conditional execution across multiple assets.

- Navigate back to *Templates* and create a new *Workflow Template* - give it a Name, select your Organization and Inventory
- Click Save
- If it does not automatically open, click on the *Workflow Visualizer* button to launch the Workflow Visualizer
- Click the Start button - add an Approval Node, give it a Name, and click Select
- Hover over the Approval Node that you just added - click on the green plus button that appears on mouse-over.
- Add a Project Sync node for your Project to get the freshest version on every run
- Next add a Template node targeting the Template that was just created before this Workflow Template
- Finally click Save to close the Workflow Visualizer
- Click Save on the actual Workflow Template as well
{{% /markdownify %}}
    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="4. Surveys" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/ansibleTowerAddASurveyButton.jpg" title="In the Workflow Template, Add a Survey" >}}
        {{< figureImage src="../img/ansibleTowerAddSurveyContainerUser.jpg" title="Add a Survey Prompt for the container_user variable" >}}
        {{< figureImage src="../img/ansibleTowerAddSurveyCustomMessage.jpg" title="Add a Survey Prompt for the custom_message variable" >}}
        {{< figureImage src="../img/ansibleTowerAddSurveySave.jpg" title="Click the Save button in the Add Survey modal" >}}
        {{< figureImage src="../img/ansibleTowerWorkflowWithSurvey.jpg" title="Click the Save button in the Workflow Template as well" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

{{% markdownify %}}
Setting variables can be done when creating Templates or it can be done at execution in Tower via Surveys.  Surveys will prompt the user for input that will be passed along as overriding variables to the Templates.

- In your Workflow Template, click the *Add Survey* button
- Add a Survey Prompt for the `container_user` variable name, with a type of Text, and default of root - click Add
- Add a Survey Prompt for the `custom_message` variable name, with a type of Textarea, and a default of whatever you want - click Add
- Click Save to close the Add Survey modal
- Click Save in the Workflow Template screen as well
{{% /markdownify %}}
    {{< /rightStep >}}
{{< /twoSideStep >}}

{{< twoSideStep title="5. Permissions" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/ansibleTowerAddPermission.jpg" title="In the Workflow Template, click over to the Permissions tab" >}}
        {{< figureImage src="../img/ansibleTowerAddPermissionToTeam.jpg" title="Add Execute Permissions to the Team you created earlier" >}}
        {{< figureImage src="../img/ansibleTowerAddPermissionDone.jpg" title="Your Permissions should look similar" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

{{% markdownify %}}
You could continue to Launch the Workflow Template - or you could delegate it to that Team/User we created earlier which will be great for demonstrating that Approval Node.

- In your Workflow Template, click the *Permissions* tab - click the green plus sign to Add Users/Teams
- Give your Team Execute Permissions - click Save
{{% /markdownify %}}
    {{< /rightStep >}}
{{< /twoSideStep >}}
