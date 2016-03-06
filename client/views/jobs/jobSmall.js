Template.jobSmall.helpers({
   alertMessage: function(){
      return this.status === "active" ? "success" : "warning"
   },

   jobTags: function () {
      return _.take(this.tags, 3);
   },

   slicedDescription: function (desc, len) {
      return desc.length < len ? desc : `${desc.substring(0, len)}...`
   }
});


// Template.jobSmall.onRendered(function () {
//    this.$('.job-card').velocity("fadeIn", { duration: 350 })
// });

// Template.jobSmall.onDestroyed(function () {
//    this.$('.job-card').velocity("fadeOut", { duration: 500 });
// });