module.exports = {
    // ...other webpack configuration options...
    module: {
      rules: [
        {
          test: /\.(scss|sass)$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
  };
  