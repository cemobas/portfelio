var exec = require("child_process").exec;

exec("node shopper-v2", function(err, stdout) {
    
    if (err) {
        throw err;
    }

    console.log(`
                #############################
                ### Shopper-V2 in action! ###
                #############################\n\n`);

    console.log(stdout);

});
