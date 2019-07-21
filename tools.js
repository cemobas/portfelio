module.exports = {
    grab: function (flag) {
        var index = process.argv.indexOf(flag);
        return (index === -1) ? null : process.argv[index+1];
    },
    login: function (user, id) {
        if (!user || !id) {
            console.log("You can't go on without name or id, sorry!");
            process.exit();
        } else {
            process.stdout.write(`
                    #######################
                    ######  WELCOME  ######
                    ######    TO    #######
                    ###### PORTFELIO! #####
                    #######################\n\n`);
        }

        if(user) {
            console.log(`User name: ${user}`);
        }

        if(id){
            console.log(`User ID: ${id}`);
        }
    }
};