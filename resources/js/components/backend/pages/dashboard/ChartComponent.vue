<template>
   <div>
        <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
   </div>
</template>
<script>
  export default{

      props:['dates','total_apps'],

      data(){
          return{
              date:[],
              apps:[],
            series: [{
              name: "Applications",
              data: this.apps
          }],
             chartOptions: {
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            title: {
              text: 'Application Analytics',
              align: 'left'
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
            xaxis: {
              categories:this.date
            }
          },

          }
      },

   methods: {
      init() {

        this.apps = this.total_apps
      },
      int(){
          this.series.data = this.dates
      }

    },
   watch:{
    total_apps: function(new_value) {
        this.init()
      },
    dates: function(new_value) {
        this.int()
      }

    }








  }
</script>
