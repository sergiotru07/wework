Template.layoutJobs.events({
	'click #menu-toggle': function(e, t){
		e.preventDefault();
    	t.$("#wrapper").toggleClass("toggled");
	},
	'click .dark-bg': function(e, t){
    	t.$("#wrapper").toggleClass("toggled");
	}
})