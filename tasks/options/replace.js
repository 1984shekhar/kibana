module.exports = function(config) {
  return {
    base_url: {
      src: ['./dist/**/*.html', './dist/**/*.css', './dist/**/!(hawtioPlugin).js', './dist/**/*.json'],
      overwrite: true,
      replacements: [{
        from: /(['"])app\//g,
        to: "$1/hawtio-kibana/app/"
      }, {
        from: /\.\/app\//g,
        to: "/hawtio-kibana/app/"
      }, {
        from: /"img\//g,
        to: '"/hawtio-kibana/img/'
      }, {
        from: /\(img\//g,
        to: '(/hawtio-kibana/img/'
      }]
    }
  };
};