---
title: Executing Automation with Tower
workshops: ansible_automation
workshop_weight: 65
layout: lab
---

{{< related_assets style="grey pf-u-mt-0" >}}
  {{< related_asset title="Ansible Tower" href="https://studentVAR_REP_STUDENT_NUMBER-tower.VAR_REP_WORKSHOP_ID.VAR_REP_WORKSHOP_DOMAIN" >}} - Ansible Web UI and API Server{{< /related_asset >}}
  {{< related_asset title="VS Code" href="https://studentVAR_REP_STUDENT_NUMBER-tower.VAR_REP_WORKSHOP_ID.VAR_REP_WORKSHOP_DOMAIN:8443" >}} - A web-based IDE and Terminal{{< /related_asset >}}
  {{< related_asset title="Student Credentials" >}} - student{{< studentNumber >}} / {{< span_studentPassword >}} {{< /related_asset >}}
{{< /related_assets >}}

Now that we have everything set up, let us execute this automation as a user - remember the User you created earlier in the Team?

{{< twoSideStep title="1. User Log In" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/ansibleTowerUserDashboard.jpg" title="A more limited Dashboard" >}}
        {{< figureImage src="../img/ansibleTowerUserTemplates.jpg" title="Launch the Template" >}}
        {{< figureImage src="../img/ansibleTowerUserSurvey.jpg" title="Set your Survey variables" >}}
        {{< figureImage src="../img/ansibleTowerUserJobLaunchedWaiting.jpg" title="Waiting for Approval - check the Notification bell" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

{{% markdownify %}}
- Log out as the *admin* User
- Log in with the User you created earlier - you should see a more limited Dashboard and set of Assets
- Click into Templates, and click the rocket ship to Launch your available Template
- Set the Container User as your user, ***student{{< studentNumber >}}***
- Feel free to change the message as well - click Next, then Launch
{{% /markdownify %}}
    {{< /rightStep >}}
{{< /twoSideStep >}}


{{< twoSideStep title="2. Admin Approval" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/ansibleTowerAdminNotification.jpg" title="As the Admin, click on the Notification bell" >}}
        {{< figureImage src="../img/ansibleTowerAdminApprove.jpg" title="Click Approve" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

{{% markdownify %}}
- Log out as the User, log back in as the *admin*
- Open the new Notification - click Approve
- Now log out and switch back to your normal User to watch the rest of the automation workflow play out
{{% /markdownify %}}
    {{< /rightStep >}}
{{< /twoSideStep >}}


{{< twoSideStep title="3. Access the Container" >}}
    
    {{< leftStep size="7" >}}
      {{< figureImageSet >}}
        {{< figureImage src="../img/ansibleTowerFinishedWorkflow.jpg" title="As your User, navigate back to your Job" >}}
        {{< figureImage src="../img/ansibleTowerInfiniteMario.jpg" title="Play some Mario!" >}}
      {{< /figureImageSet >}}
    {{< /leftStep >}}

    {{< rightStep size="5" >}}

{{% markdownify %}}
As the normal User, you can view the execution of the Workflow Template after it was approved by the admin.

- Once you see a Finished and Successful Workflow Template, you can proceed to test the container deployment
- Navigate to:

  `http://studentVAR_REP_STUDENT_NUMBER-node2.VAR_REP_WORKSHOP_ID.VAR_REP_WORKSHOP_DOMAIN:8080/`

- Marvel at your awesome automation!
{{% /markdownify %}}
    {{< /rightStep >}}
{{< /twoSideStep >}}

