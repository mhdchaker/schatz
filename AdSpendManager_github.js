// Made by E.Chaker

function main() {
  var campaignName = 'CAMPAIGN_NAME'; // Write the exact name of your campaign
  var spendThreshold = 9000; // Spend threshold in €
  var emailAddress = 'example@example.com'; // Set your email address here

  var campaignIterator = AdsApp.campaigns()
    .withCondition('Name = "' + campaignName + '"')
    .get();

  if (campaignIterator.hasNext()) {
    var campaign = campaignIterator.next();
        
    var stats = campaign.getStatsFor('ALL_TIME');
    var spend = stats.getCost();
    if (spend >= spendThreshold) {
      
      campaign.pause();
      Logger.log('Campaign "' + campaignName + '" paused due to reaching spend threshold.');

      // Customize the content of the E-Mail as you want 
      MailApp.sendEmail(emailAddress, 'Campaign Paused: Spend Threshold Reached', 
        'The campaign "' + campaignName + '" has been paused because it reached the spend threshold of ' + spendThreshold + ' €.');
    } else {
      Logger.log('Campaign "' + campaignName + '" not paused. Current spend: ' + spend + ' €');
    }
  } else {
    Logger.log('No campaign found with the name "' + campaignName + '".');
  }
}