module.exports = function () {
    var client = '';
    var server = './src/server/';
    var clientApp = client + 'app/';
    var root = './';
    var temp = './.tmp/';
    var wiredep = require('wiredep');
    var bowerFiles = wiredep({ devDependencies: true })['js'];

    var config = {
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        build: './wwwroot/',
        client: client,
        css: [
            temp + 'styles.css',
            client + 'styles/**/*.css'
        ],
        fonts: './bower_components/font-awesome/fonts/**/*.*',
        html: client + '**/*.html',
        htmltemplates: clientApp + '**/*.html',
        images: client + 'images/**/*.*',
        index: client + 'index.html',
        // app js, with no specs
        js: [
             clientApp + '**/*.module.js',
             clientApp + '**/*.js',
             '!' + clientApp + '**/*.spec.js'
        ],
        less: client + 'styles/styles.less',
       // report: report,
        root: root,
        server: server,
        source: 'src/',
        temp: temp,

        /**
         * optimized files
         */
        optimized: {
            app: 'app.js',
            lib: 'lib.js'
        },
        /**
         * template cache
         */
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'app.core',
                root: 'app/',
                standAlone: false,
            }
        },
        /**
         * Bower and NPM locations
         */
        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../'
        },
        packages: [
            './package.json',
            './bower.json'
        ],

    };

    /**
     * wiredep and bower settings
     */
    config.getWiredepDefaultOptions = function () {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };


    return config;
}