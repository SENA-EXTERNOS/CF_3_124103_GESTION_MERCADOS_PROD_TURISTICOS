<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-8
        .bloque-texto-b.color-secundario.p-4.mt-3 
          .bloque-texto-b__texto
            p Estimado aprendiz, en este componente formativo se desarrollan contenidos relacionados con la presentación de la propuesta comercial y los aspectos a considerar en su estructuración, con enfoque al sector turístico. Desde el ámbito de las relaciones se presenta el componente de comunicación, donde se detallan los diversos tipos de comunicación, la importancia de manejar y controlar el flujo de información, así como los diversos canales de contacto, protocolos de comunicación y sus características. Respecto a las ventas, en este recurso se presenta cómo es el ciclo de venta y cuáles son sus componentes y etapas; adicionalmente, se muestran alternativas de cómo puede elaborarse un informe de ventas teniendo en cuenta los requerimientos de la organización. Con la revisión de las temáticas descritas anteriormente, el aprendiz estará en capacidad de generar propuestas y planes comerciales que potencialicen la gestión de ventas de productos turísticos.

      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/introduccion/img1.svg', alt='Texto que describa la imagen').banner-principal-decorativo-5

    .row.mt-5
      p En el siguiente video conocerá, de forma general, la temática que estudiará a lo largo del componente formativo. #[b ¡Muchos éxitos en este proceso de aprendizaje!]
    
    .row.justify-content-center.align-items-center.mb-5.mt-5          
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            
              

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
