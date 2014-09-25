"use strict";

/* global hawtioPluginLoader */
/* global Logger */
/* global angular */
/* global $ */
/* global Core */

var Kibana = (function (Kibana) {

  Kibana.pluginName = "kibana.hawtio";
  Kibana.log = Logger.get(Kibana.pluginName);
  Kibana.templatePath = "../hawtio-kibana/app/partials/";

  angular.module(Kibana.pluginName, ['hawtioCore'])
    .run(function () {
      Kibana.log.info("plugin running");
    });

  return Kibana;
}(Kibana || {}));

hawtioPluginLoader.registerPreBootstrapTask(function (nextTask) {
  require(['app'], function () {
    var requiredModules = [];

    var panelTypes = 'bettermap column dashcontrol derivequeries fields filtering ' +
      'goal histogram hits map query sparklines stats table terms ' +
      'text timepicker trends';

    $.each(panelTypes.split(' '),
      function (index, panelType) {
        requiredModules.push('./panels/' + panelType + '/module');
      });

    require(requiredModules, function () {
      hawtioPluginLoader.addModule('ngSanitize');
      hawtioPluginLoader.addModule('$strap.directives');
      hawtioPluginLoader.addModule('elasticjs.service');
      hawtioPluginLoader.addModule('pasvaz.bindonce');
      hawtioPluginLoader.addModule('kibana.controllers');
      hawtioPluginLoader.addModule('kibana.services');
      hawtioPluginLoader.addModule('kibana.factories');
      hawtioPluginLoader.addModule('kibana.directives');
      hawtioPluginLoader.addModule('kibana.filters');

      hawtioPluginLoader.addModule('kibana');

      $.each(panelTypes.split(' '),
        function (index, panelType) {
          hawtioPluginLoader.addModule('kibana.panels.' + panelType);
        });
      hawtioPluginLoader.addModule(Kibana.pluginName);

      Core.addCSS('../hawtio-kibana/css/bootstrap.hawtio.min.css');

      nextTask();
    });
  });
});
