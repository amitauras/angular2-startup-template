(function (global) {

    // map tells the System loader where to look for things
    let map = {
        'app': 'app',
        '@angular': 'node_modules/@angular',
        'rxjs': 'node_modules/rxjs',
        '@ng-bootstrap': 'node_modules/@ng-bootstrap'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    let packages = {
        app: {
            main: 'app.main.js',
            defaultExtension: 'js'
        },
        rxjs: {
            defaultExtension: 'js'
        },
        '@ng-bootstrap/ng-bootstrap': {
            main: '/bundles/ng-bootstrap.js',
            defaultExtension: 'js'
        }
    };

    let ngPackageNames = Array.of(
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'upgrade'
    );

    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
    }

    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
    }

    // Most environments should use UMD; some (Karma) need the individual index files
    let setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);

    let config = {
        map, packages
    };

    System.config(config);

} (this));