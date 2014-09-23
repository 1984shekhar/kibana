module.exports = function(config) {
  return {
    // Compile in place when not building
    dist:{
      options: {
        paths: ["<%= srcDir %>/vendor/bootstrap/less"],
        yuicompress:true
      },
      files: {
        "<%= srcDir %>/css/bootstrap.dark.min.css": "<%= srcDir %>/vendor/bootstrap/less/bootstrap.dark.less",
        "<%= srcDir %>/css/bootstrap.light.min.css": "<%= srcDir %>/vendor/bootstrap/less/bootstrap.light.less",
        "<%= srcDir %>/css/bootstrap.hawtio.min.css": "<%= srcDir %>/vendor/bootstrap/less/bootstrap.hawtio.less"
      }
    }
  };
};