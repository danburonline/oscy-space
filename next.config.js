module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.wav$/,
        loader: 'file-loader',
        query: {
            name: 'static/media/[name].[hash:8].[ext]'
        }
      })
  
      return config
    },
  }