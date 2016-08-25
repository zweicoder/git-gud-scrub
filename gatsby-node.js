exports.modifyWebpackConfig = function(config, env) {
  config.removeLoader('css');
  config.removeLoader('sass');
  const cssModulesConf = 'css?modules&minimize&importLoaders=1';
  const cssModulesConfDev = `${cssModulesConf}&sourceMap&localIdentName=[name]---[local]---[hash:base64:5]`;

  config.loader('css', function(cfg) {
    cfg.test = /\.css$/
    cfg.loader = `style!${cssModulesConfDev}`
    return cfg
  })

  config.loader('sass', function(cfg){
    cfg.test = /\.(sass|scss)/
    cfg.loader = `style!${cssModulesConfDev}!sass`
    return cfg
  })

  return config
}
