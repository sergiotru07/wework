Meteor.startup(function() {
    const mainAdminUsers = [{
        email: "info@loopa.io",
        password: "Sergioandresandresalejandro0621"
    }, {
        email: "andres@loopa.io",
        password: "Laura127"
    }, ];

    if (Meteor.users.find().count() === 0) {

        mainAdminUsers.forEach((user, i) => {
            const _userId = Accounts.createUser(user);
            Roles.addUsersToRoles(_userId, ["admin"]);
        });
    }
});
