UI.registerHelper("formatDate", function(timestamp) {
	if(timestamp)
		return moment(timestamp).format('M/D/YY');
});

UI.registerHelper("currentUserDisplayName", function() {
	return getUserName(Meteor.user());
});


UI.registerHelper("currentUserEmail", function() {
	return getUserEmail(Meteor.user());
});

UI.registerHelper("resizeImageUrl", function(imageUrl, height, width) {
	if(imageUrl)
      return imageUrl + "-/resize/" + height + "x" + width + "/";
});

UI.registerHelper("country", function() {
   return Session.get("country");
});

UI.registerHelper("city", function() {
   return Session.get("city");
});