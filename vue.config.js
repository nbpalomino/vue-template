module.exports = {
    outputDir: './dist/',
    indexPath: 'index.html',
    // // disable hashes in filenames
    // filenameHashing: false,
    // // delete HTML related webpack plugins
    chainWebpack: config => {
        // THIS IS FOR ONLY GENERATE JS AND CSS
        // config.plugins.delete('html')
        // config.plugins.delete('preload')
        // config.plugins.delete('prefetch')

        // THIS ONLY CHANGES SOURCE HTML but NO ASSETS
        // config
        //     .plugins('html')
        //     .tap(args => {
        //         args[0].template = './resources/index.html'
        //         return args
        //     })
    },
    css: {
        requireModuleExtension: false,
    }
}