// // // vue.config.js
module.exports = {
    // 将baseUrl: '/api',改为baseUrl: '/',http://sz.canxingjian.com/http://www.smarant.com/
    baseUrl: './',

    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
    //去除打包后生成的.map文件
    productionSourceMap: false,

    devServer: {
        proxy: {
            '../..': {
                target: 'http://sz.canxingjian.com',
                changeOrigin: true,
                ws: false,
                pathRewrite: {
                    '^../..': ''
                }
            }

            
        }

    },

    outputDir: undefined,
    assetsDir: 'assets',
    runtimeCompiler: true,
    parallel: undefined,
    lintOnSave: true,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue:75, // 换算的基数
                        selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
                        propList: ['*'],
                    }),
                ]
            }
        }
    },
    
}