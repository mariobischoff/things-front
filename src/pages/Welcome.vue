<template>
  <q-page padding>
    <div class="q-pa-md q-ma-md column no-warp justify-center items-center">
      <div class="q-gutter-md">
        <q-carousel
          v-model="slide"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="primary"
          navigation
          padding
          arrows
          height="auto"
          class="text-primary"
        >
          <q-carousel-slide name="prim" class="column no-wrap flex-center">
            <q-avatar size="56px">
              <img src="../assets/temperature.svg" >
            </q-avatar>
            <div class="q-mt-md text-center">
              <p> Em diversas situações os ambientes termicamente ideias são extremamente necessários, para que seja possível realizar tarefa de forma produtiva, por exemplo, laboratórios, locais de testes, plantio ou até mesmo em estoques, onde se torna necessário ambientes termicamente adequados.</p>
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="sec" class="column no-wrap flex-center">
            <q-avatar size="56px">
              <img src="../assets/greenhouse.svg" >
            </q-avatar>
            <div class="q-mt-md text-center">
              <p>Em nosso projeto tem como foco automatizar o controle de ambientes, no sentido de umidade, temperatura e/ ou iluminação. Esse controle se dá através de sensores, onde se possibilita regular ou controlar diversas necessidades do local em questão.</p>
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="ter" class="column no-wrap flex-center">
            <q-avatar size="70px">
              <img src="../assets/Vovo_Juju.png" width="20px" height="40px" >
            </q-avatar>
            <div class="q-mt-md text-center">
              <p>Trabalho realizado pelos integrantes <b>Felipe Mafrin</b>, <b>Mario Bischoff</b> e <b>Thalles Sobral</b>, orientados pelo <b>Prof. Giuliano Lacerda Dall' Armellina</b>.</p>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      slide: 'style'
    }
  }
}
</script>
