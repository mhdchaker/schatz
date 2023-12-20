# Ad Spend Manager
This Code will pause your campaign when it reaches a specific threshold. The code also sends you an E-Mail when the threshold is reached. The code is light and efficient.

# Setup

Customise the code as you want. Please add the exactname of your campaign. Please note that this code was made to pause one campaign ONLY.

```javascript
var campaignName = 'CAMPAIGN_NAME'; // Write the exact name of your campaign
var spendThreshold = 9000; // Spend threshold in €
var emailAddress = 'example@example.com'; // Set your email address here

```

if you want to customise the email body, you can edit it here:

```java script
    MailApp.sendEmail(emailAddress, 'Campaign Paused: Spend Threshold Reached', 
      'The campaign "' + campaignName + '" has been paused because it reached the spend threshold of ' + spendThreshold + ' €.');
} else {
  Logger.log('Campaign "' + campaignName + '" not paused. Current spend: ' + spend + ' €');
}
```
# Limitation
the code was tested for Search campaigns and worked fine, however, for Performance Max it didn't work. I created a new code specifically for the Performance Max campaigns
