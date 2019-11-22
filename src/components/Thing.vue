<template>
  <div>
    <apexchart type="line" height=350 width=500 :options="chartOptions" :series="series"  />
  </div>
</template>

<script>
export default {
  name: 'Thing',
  data () {
    return {
      series: [
        {
          data: []
        },
        {
          data: []
        }
      ],
      chartOptions: {
        chart: {
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000
            }
          },
          stroke: {
            curve: 'smooth'
          },
          shadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 1
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#77B6EA', '#545454'],
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: 'smooth'
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        markers: {
          size: 6
        },
        xaxis: {
        },
        yaxis: {
          title: {
            text: 'Solo Humidity'
          },
          min: 200,
          max: 500
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      }
    }
  },
  methods: {
    pushSeries (number) {
      let serie = this.series[0].data
      serie.push(number)
      this.series = [{
        data: serie
      }]
    }
  },
  sockets: {
    connect () {
      console.log('socket connected')
    },
    sendToFront (payload) {
      this.pushSeries(payload.values.soloHumidity)
    },
    thingConnected (things) {
      console.log(things)
    }
  }
}
</script>

<style>
</style>
