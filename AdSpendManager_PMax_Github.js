// Made by E.Chaker 

function main() {
  var campaignName = 'Christmas Sale 2023'; // Replace with your Performance Max campaign name
  var spendThreshold = 500; // Spend threshold in €
  var emailAddress = 'your-email@example.com'; // Set your email address here

  // Retrieve Performance Max campaign by name
  var campaignIterator = AdsApp.performanceMaxCampaigns()
    .withCondition('Name = "' + campaignName + '"')
    .get();

  if (campaignIterator.hasNext()) {
    var campaign = campaignIterator.next();

    // Check if the spend has reached the threshold
    var stats = campaign.getStatsFor('ALL_TIME');
    var spend = stats.getCost();
    if (spend >= spendThreshold) {
      // Pause the campaign
      campaign.pause();
      Logger.log('Performance Max Campaign "' + campaignName + '" paused due to reaching spend threshold.');

      // Send email notification
      MailApp.sendEmail(emailAddress, 'Performance Max Campaign Paused: Spend Threshold Reached', 
        'The Performance Max campaign "' + campaignName + '" has been paused because it reached the spend threshold of ' + spendThreshold + ' €.');
    } else {
      Logger.log('Performance Max Campaign "' + campaignName + '" not paused. Current spend: ' + spend + ' €');
    }
  } else {
    Logger.log('No Performance Max campaign found with the name "' + campaignName + '".');
  }
}
