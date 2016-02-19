module.exports = function (w) {

    return {
        files: [
            { pattern: 'jspm_packages/system.js', instrument: false },
            { pattern: 'config.js', instrument: false },
            { pattern: 'jspm_packages/system-polyfills.js', instrument: false },

            { "pattern": "src/**/*.ts", "load": false }
            // ,
            // { "pattern": "src/**/*.Spec.ts", "ignore": true, "load": false }
        ],

        tests: [
            { "pattern": "test2/**/*.Spec.ts", "load": false }
        ],


        compilers: {
            'test2/**/*.Spec.ts': w.compilers.typeScript({
                "module": 1,
                "emitDecoratorMetadata": true,
                "experimentalDecorators": true,
                "noImplicitAny": false
            })
        },


        middleware: (app, express) => {
            app.use('/jspm_packages',
                express.static(
                    require('path').join(__dirname, 'jspm_packages')));
        },

//         bootstrap: function (wallaby) {
//             wallaby.delayStart();
// 
//             var promises = [];
//             for (var i = 0, len = wallaby.tests.length; i < len; i++) {
//                 promises.push(System['import'](wallaby.tests[i].replace(/\.js$/, '')));
//             }
// 
//             Promise.all(promises).then(function () {
//                 wallaby.start();
//             });
//         },


        debug: true
    };
};