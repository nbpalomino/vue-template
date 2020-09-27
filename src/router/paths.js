/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
    {
        path: '/',
        // Relative to /src/views
        name: 'index',
        view: 'Main'
    },
    {
        path: '/services',
        name: 'services',
        view: 'Services'
    },
    // {
    //     path: '/panel/aplicaciones/:slug/edit',
    //     name: 'app_edit',
    //     view: 'app/Edit'
    // },
    // {
    //     path: '/panel/:slug',
    //     name: 'app_index',
    //     view: 'app/Index'
    // }
]