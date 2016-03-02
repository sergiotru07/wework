Template.jobSmall.helpers({
   alertMessage: function(){
      return this.status === "active" ? "success" : "warning"
   }
});