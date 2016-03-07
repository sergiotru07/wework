Template.jobSmall.helpers({
   alertMessage: function(){
      return this.status === "active" ? "success" : "warning"
   },

   jobTags: function () {
      return _.take(this.tags, 4);
   },

   slicedDescription: function (desc, len) {
      return desc.length < len ? desc : `${desc.substring(0, len)}...`;
   },

   hideOnSmall: function (index) {
      return index > 1 ? "hidden-xs" :  "";
   }
});


// Template.jobSmall.onRendered(function () {
//    this.$('.job-card').velocity("fadeIn", { duration: 350 })
// });

// Template.jobSmall.onDestroyed(function () {
//    this.$('.job-card').velocity("fadeOut", { duration: 500 });
// });