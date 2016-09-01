'use strict';

System.register(['lodash', 'jquery', 'jquery.flot', 'jquery.flot.pie'], function (_export, _context) {
  "use strict";

  var _, $, _createClass, SVGDemos;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_lodash) {
      _ = _lodash.default;
    }, function (_jquery) {
      $ = _jquery.default;
    }, function (_jqueryFlot) {}, function (_jqueryFlotPie) {}],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('SVGDemos', SVGDemos = function () {
        function SVGDemos(ctrl) {
          _classCallCheck(this, SVGDemos);

          this.ctrl = ctrl;
        }

        _createClass(SVGDemos, [{
          key: 'clock',
          value: function clock() {
            this.ctrl.panel.svg_data = '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 200 200" >\n' + '  <circle id="circle" style="stroke: black; fill: #f8f8f8;" cx="100" cy="100" r="100"/>\n' + '  <line id="hour0" x1="100" y1="10"  x2="100" y2="0" style="stroke: green;"/>\n' + '  <line id="hour1" x1="150" y1="13"  x2="145" y2="22" style="stroke: green;"/>\n' + '  <line id="hour2" x1="187" y1="50"  x2="178" y2="55" style="stroke: green;"/>\n' + '  <line id="hour3" x1="190" y1="100" x2="200" y2="100" style="stroke: green;"/>\n' + '  <line id="hour4" x1="187" y1="150" x2="178" y2="145" style="stroke: green;"/>\n' + '  <line id="hour5" x1="150" y1="187" x2="145" y2="178" style="stroke: green;"/>\n' + '  <line id="hour6" x1="100" y1="190" x2="100" y2="200" style="stroke: green;"/>\n' + '  <line id="hour7" x1="50"  y1="187" x2="55"  y2="178" style="stroke: green;"/>\n' + '  <line id="hour8" x1="13"  y1="150" x2="22"  y2="145" style="stroke: green;"/>\n' + '  <line id="hour9" x1="0"   y1="100" x2="10"  y2="100" style="stroke: green;"/>\n' + '  <line id="hour10" x1="13"  y1="50"  x2="22"  y2="55" style="stroke: green;"/>\n' + '  <line id="hour11" x1="50"  y1="13"  x2="55"  y2="22" style="stroke: green;"/>\n' + '    <g>\n' + '      <line x1="100" y1="100" x2="100" y2="45" style="stroke-width: 6px; stroke: green;" id="hourhand" />\n' + '      <line x1="100" y1="100" x2="100" y2="15" style="stroke-width: 4px; stroke: blue;"  id="minutehand"/>\n' + '      <line x1="100" y1="100" x2="100" y2="5"  style="stroke-width: 2px; stroke: red;"   id="secondhand"/>\n' + '    </g>\n' + '</svg>';

            this.ctrl.panel.js_code = 'var now = new Date();\n' + 'var angle = 360 * now.getHours()   / 12;\n' + '$(svgnode).find("#hourhand").attr("transform", "rotate("+angle.toString()+ " 100 100)"  );\n' + 'var angle = 360 * now.getMinutes() / 60;\n' + '$(svgnode).find("#minutehand").attr("transform", "rotate("+angle.toString()+ " 100 100)"  );\n' + 'var angle = 360 * now.getSeconds() / 60;\n' + '$(svgnode).find("#secondhand").attr("transform", "rotate("+angle.toString()+ " 100 100)"  );';

            this.ctrl.panel.js_init_code = '';

            this.ctrl.setInitFunction();
            this.ctrl.setHandleMetricFunction();
            this.ctrl.resetSVG();
            this.ctrl.render();
          }
        }, {
          key: 'snap',
          value: function snap() {
            this.ctrl.panel.svg_data = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200" ></svg>';
            this.ctrl.panel.js_code = '';
            this.ctrl.panel.js_init_code = 'var s = Snap(svgnode), circles = [],\n    bg = s.rect(0, 0, 800, 200);\n\nbg.attr({\n  \'fill\': \'#fff\'\n});\n\nvar circleGroup = s.group(bg);\n\n\/\/ create 200 circles\nfor(var i=0; i<200; i++) {\n  var size = Math.random()*5 + 3,\n      cx = Math.random()*800,\n      cy = Math.random()*200,\n      opacity = Math.random(),\n      fill = \'#9d77da\',\n      counter = Math.random()*360;\n      circ = s.circle(cx, cy, size);\n  circ.attr({\n    \'fill\': fill,\n    \'fill-opacity\': opacity\n  });\n  circ.data(\'xOffset\', cx); \n  circ.data(\'cx\', cx);\n  circ.data(\'yOffset\', cy); \n  circ.data(\'cy\', cy);\n  circ.data(\'counter\', counter); \n  circles.push(circ);\n  circleGroup.add(circ);\n  \n}\n\nvar increase = Math.PI * 2 \/40,\n    text = s.text(10, 130, \"SNAPSVG\");\n\ntext.attr({\n  \'font-size\': 120,\n  \'fill\': \'#fff\'\n});\n\ncircleGroup.attr({\n  mask: text\n});\n\nfunction draw() {\n  for(var i=0, l=circles.length; i<l; i++) {\n    var circ = circles[i];\n    \n    if(circ.data(\'cy\') < 0) {\n      circ.data(\'cy\', 200);\n    } else {\n      circ.data(\'cy\', (circ.data(\'cy\')-2));\n    }\n    circ.data(\'cx\', (circ.data(\'xOffset\') + (50*(Math.sin( circ.data(\'counter\')) \/ 5))));\n    circ.attr({\n      cx: circ.data(\'cx\'),\n      cy: circ.data(\'cy\')\n    });\n    \n    circ.data(\'counter\',      circ.data(\'counter\')+increase);\n  }  \n  \n}\n\nfunction animate() {\n  draw();\n  window.requestAnimationFrame(animate);\n}\n\nanimate();';

            this.ctrl.setInitFunction();
            this.ctrl.setHandleMetricFunction();
            this.ctrl.resetSVG();
            this.ctrl.render();
          }
        }, {
          key: 'animationCont',
          value: function animationCont() {
            this.ctrl.panel.svg_data = "<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 47.058 47.058\" style=\"enable-background:new 0 0 47.058 47.058;\" xml:space=\"preserve\">\r\n<g>\r\n\t<path id=\"ventilator\" d=\"M43.029,19.5c0-10.752-8.748-19.5-19.5-19.5s-19.5,8.748-19.5,19.5c0,9.73,7.171,17.794,16.5,19.245v2.386h-4.05\r\n\t\tc-1.634,0-2.964,1.33-2.964,2.963c0,1.634,1.33,2.964,2.964,2.964h14.073c1.634,0,2.963-1.33,2.963-2.964\r\n\t\tc0-1.634-1.33-2.963-2.963-2.963h-4.022v-2.386C35.858,37.294,43.029,29.23,43.029,19.5z M7.029,19.5c0-9.098,7.402-16.5,16.5-16.5\r\n\t\ts16.5,7.402,16.5,16.5S32.627,36,23.529,36S7.029,28.598,7.029,19.5z M30.551,43.13c0.531,0,0.963,0.432,0.963,0.963\r\n\t\ts-0.432,0.964-0.963,0.964H16.479c-0.531,0-0.964-0.433-0.964-0.964s0.433-0.963,0.964-0.963h4.05h6H30.551z M24.529,41.13H22.53\r\n\t\tl0.002-2.181c0.332,0.017,0.66,0.05,0.997,0.05c0.338,0,0.667-0.034,1-0.051V41.13z\" fill=\"#ffffff\"\/>\r\n\t<path id=\"wheel\" d=\"M29.537,23.424c-0.547-0.925-1.324-1.833-2.291-2.708c0.044-0.112,0.074-0.229,0.107-0.345\r\n\t\tc0.747,0.416,1.58,0.95,2.51,1.628l1.454,1.059c0.8,0.583,1.75,0.875,2.7,0.875c0.891,0,1.781-0.257,2.544-0.771\r\n\t\tc0.179-0.113,0.547-0.409,0.569-0.43c0.267-0.242,0.89-1.09,1.037-1.407c0.141-0.292,0.348-1.037,0.374-1.191\r\n\t\tc0.729-3.62-1.675-8.59-4.23-10.451c-1.563-1.139-3.476-1.6-5.389-1.301c-1.911,0.3-3.591,1.327-4.729,2.891\r\n\t\tc-0.771,1.059-1.276,2.444-1.534,4.091c-0.234,0.052-0.463,0.12-0.68,0.212c-0.102-0.777-0.159-1.674-0.159-2.713v-1.709\r\n\t\tc0-1.842-1.17-3.506-2.886-4.131c-0.188-0.074-0.622-0.191-0.656-0.198c-0.347-0.072-1.341-0.075-1.679-0.009\r\n\t\tc-0.319,0.059-1.005,0.318-1.135,0.383c-3.202,1.473-5.686,6.121-5.686,9.136c0,3.82,3.108,6.929,6.929,6.929\r\n\t\tc1.239,0,2.617-0.377,4.094-1.091c0.037,0.035,0.08,0.064,0.119,0.098c-0.766,0.651-1.745,1.335-2.952,2.049l-1.473,0.871\r\n\t\tc-1.588,0.939-2.426,2.795-2.09,4.592c0.033,0.207,0.16,0.657,0.163,0.666c0.115,0.336,0.62,1.197,0.848,1.452\r\n\t\tc0.213,0.244,0.786,0.704,0.909,0.783c1.454,1.007,3.503,1.452,5.514,1.452c2,0,3.963-0.441,5.26-1.208\r\n\t\tC30.389,30.979,31.484,26.716,29.537,23.424z M25.809,12.45c0.825-1.132,2.041-1.875,3.424-2.092\r\n\t\tc1.383-0.218,2.769,0.116,3.901,0.942c1.979,1.44,3.998,5.703,3.445,8.45c-0.028,0.129-0.167,0.601-0.209,0.702\r\n\t\tc-0.083,0.153-0.479,0.692-0.554,0.775c-0.035,0.029-0.223,0.182-0.345,0.26c-0.905,0.609-2.1,0.592-2.976-0.045l-1.454-1.059\r\n\t\tc-1.403-1.023-2.637-1.77-3.697-2.259c-0.386-1.285-1.391-2.29-2.676-2.675C24.885,14.227,25.267,13.194,25.809,12.45z\r\n\t\t M21.529,19.262c0-1.103,0.897-2,2-2s2,0.897,2,2s-0.897,2-2,2S21.529,20.365,21.529,19.262z M11.778,16.333\r\n\t\tc0-2.31,2.129-6.219,4.531-7.323c0.112-0.05,0.546-0.205,0.641-0.228c0.167-0.021,0.786-0.021,0.885-0.009\r\n\t\tc0.042,0.01,0.261,0.068,0.388,0.118c0.955,0.348,1.596,1.257,1.596,2.262v1.709c0,1.678,0.135,3.069,0.388,4.174\r\n\t\tc-0.428,0.637-0.679,1.403-0.679,2.226c0,0.422,0.083,0.82,0.205,1.202c-1.122,0.519-2.143,0.798-3.027,0.798\r\n\t\tC13.989,21.262,11.778,19.051,11.778,16.333z M26.079,31.205c-1.992,1.178-6.448,1.335-8.624-0.172\r\n\t\tc-0.101-0.072-0.456-0.367-0.525-0.438c-0.103-0.132-0.416-0.665-0.46-0.763c-0.013-0.045-0.073-0.257-0.095-0.39\r\n\t\tc-0.187-1.001,0.27-2.018,1.137-2.53l1.474-0.871c1.657-0.98,2.944-1.933,3.879-2.844c0.217,0.037,0.437,0.067,0.664,0.067\r\n\t\tc0.964,0,1.837-0.357,2.529-0.927c0.745,0.695,1.341,1.401,1.758,2.106C29.201,26.785,28.422,29.819,26.079,31.205z\" fill=\"#ffffff\"\/>\r\n<\/g>\r\n<\/svg>";
            this.ctrl.panel.js_code = "if (this.isVentilating) {\r\n  this.stopAnimation()\r\n}\r\nelse {\r\n  this.startAnimation()\r\n}\r\n";
            this.ctrl.panel.js_init_code = "this.draw = function() {\r\n  this.angle--;\r\n  var s = Snap(svgnode);\r\n  var w = s.select(\"#wheel\"); \r\n  w.attr({ transform: \"rotate(\"+this.angle+\" 23.592 19.5)\"});\r\n}\r\n\r\nthis.animate = function() {\r\n    if (this.isVentilating) {  \r\n      this.draw();\r\n      window.requestAnimationFrame(this.animate.bind(this));\r\n    }\r\n}\r\n\r\nthis.stopAnimation = function() {\r\n    this.isVentilating = false;\r\n}\r\n\r\nthis.startAnimation = function() {\r\n    if (!this.isVentilating) {\r\n      this.isVentilating = true;\r\n      this.animate();\r\n    }\r\n}\r\n\r\nthis.stopAnimation();\r\nthis.angle=0; \r\nthis.startAnimation();";
            this.ctrl.setInitFunction();
            this.ctrl.setHandleMetricFunction();
            this.ctrl.resetSVG();
            this.ctrl.render();
          }
        }]);

        return SVGDemos;
      }());

      _export('SVGDemos', SVGDemos);
    }
  };
});
//# sourceMappingURL=demos.js.map
