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
    },
    printItems: function(shopping) {
        process.stdout.write(`You have bought `);
        for(var i=0; i<shopping.cart.length; ++i) {
            process.stdout.write(`${shopping.cart[i].title}`);
            if(i<shopping.cart.length-1) {
                process.stdout.write(`, `);
            }
        }
        process.stdout.write(` in ${shopping.store} today. Spent: ${shopping.total} złoty.\n\n`);
    }
};