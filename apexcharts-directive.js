angular.module('apexCharts').directive('apexCharts', [function () {
    return {
        restrict: 'EA',
        template: '<div></div>',
        scope: {
            chartOptions: '='
        },   
        link: function (scope, element, attrs) {
            
            if (!scope.chartOptions){
                return;
            }
            var options = scope.chartOptions;
            var chart = new ApexCharts(element[0].querySelector("div"), options);
            chart.render();

            setTimeout(function () {
                chart.updateOptions(scope.chartOptions);
            }, 100);

            scope.$watch('chartOptions', function (val) {
                chart.updateOptions(val);
            }, true);

            scope.$on('$destroy', function(){
                chart.destroy();
            })
        }
  
    };
}]);