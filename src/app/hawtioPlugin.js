"use strict";

/* global hawtioPluginLoader */
/* global Logger */
/* global angular */

var Kibana = (function (Kibana) {

  Kibana.pluginName = "kibana";
  Kibana.log = Logger.get(Kibana.pluginName);
  Kibana.templatePath = "../hawtio-kibana/app/partials/";

  // hmm, took out ngRoute
  angular.module(Kibana.pluginName, ['hawtioCore'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/kibana', {templateUrl: Kibana.templatePath + 'dashboard.html'});
    }])
    .run(function (workspace) {
      Kibana.log.info("plugin running");

      // Add a top level tab to hawtio's navigation bar
      workspace.topLevelTabs.push({
        id: "kibana",
        content: "Kibana",
        title: "Kibana",
        /*jshint unused:false*/
        isValid: function (workspace) {
          return true;
        },
        href: function () {
          return "#/kibana";
        },
        isActive: function () {
          return workspace.isLinkActive("kibana");
        }
      });

    });

  return Kibana;
}(Kibana || {}));

hawtioPluginLoader.addModule(Kibana.pluginName);
