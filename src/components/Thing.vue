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
          name: 'Temperatura',
          data: []
        },
        {
          name: 'Umidade do Solo',
          data: []
        },
        {
          name: 'Umidade',
          data: []
        }
      ],
      chartOptions: {
        chart: {
          zoom: {
            enabled: true
          },
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
          size: 0,
          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          type: 'datetime',
          min: new Date().getTime(),
          range: 27000
        },
        yaxis: {
          title: {
            text: 'Nível'
          },
          min: 10,
          max: 200
        },
        legend: {
          show: true,
          position: 'bottom',
          horizontalAlign: 'center',
          floating: true
        }
      }
    }
  },
  methods: {
  },
  sockets: {
    connect () {
      console.log('socket connected')
    },
    sendToFront (payload) {
      let now = new Date(payload.date).getTime()
      let { temperature, soloHumidity, humidity } = payload.values
      soloHumidity = soloHumidity / 10
      let temperatures = this.series[0].data
      let soloHumiditys = this.series[1].data
      let humiditys = this.series[2].data
      temperatures.push([now, temperature])
      soloHumiditys.push([now, soloHumidity])
      humiditys.push([now, humidity])
      this.series = [
        {
          data: temperatures
        },
        {
          data: soloHumiditys
        },
        {
          data: humiditys
        }
      ]
    },
    thingConnected (things) {
      console.log(things)
    }
  }
}
</script>

<style>
</style>
