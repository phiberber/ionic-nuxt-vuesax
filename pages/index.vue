<template>

  <ion-page>

    <vs-button @click="sampleNotification">
      Sobre
    </vs-button>

  </ion-page>

</template>

<script>

export default {

  methods: {
  
    sampleNotification() { 
      this.$vs.notification({
        flat: true,
        color: 'primary',
        position: 'top-right',
        title: 'Notificação de Teste',
        text: 'Obrigado por usar este template, aqui você encontrará uma integração de NuxtJS, Ionic e VueSax.'
      })
    },

  }  

}

</script>