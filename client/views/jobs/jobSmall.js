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
      if (index > 2){
         return "hidden-xs hidden-sm";
      }else if(index > 1){
         return "hidden-xs";
      }else{
         return "";
      }
   }
});


// Template.jobSmall.onRendered(function () {
//    this.$('.job-card').velocity("fadeIn", { duration: 350 })
// });

// Template.jobSmall.onDestroyed(function () {
//    this.$('.job-card').velocity("fadeOut", { duration: 500 });
// });