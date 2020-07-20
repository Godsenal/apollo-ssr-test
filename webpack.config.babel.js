import nodeExternals from 'webpack-node-externals'

const bundle = (_, argv) => {
  const clientConfig = {
    entry: './build/client.js',
    output: {
      filename: './app.js',
      publicPath: 'http://localhost:9000/',
    },
    devServer: {
      port: 9000,
      headers: { 'Access-Control-Allow-Origin': '*' },
      disableHostCheck: true,
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
      ],
    },
    stats: {
      modules: false,
      hash: false,
      chunks: false,
      chunkModules: false,
      version: false,
      children: false,
    },
  }

  const serverConfig = {
    ...clientConfig,
    entry: './build/server.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
      path: __dirname,
      filename: 'server.js',
      publicPath: '/',
    },
  }

  if (argv.for === 'client') return clientConfig
  if (argv.for === 'server') return serverConfig

  return [clientConfig, serverConfig]
}

export default bundle
