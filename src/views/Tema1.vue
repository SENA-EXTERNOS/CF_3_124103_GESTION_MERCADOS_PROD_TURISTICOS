<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Comunicación

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img1.svg', alt='Texto que describa la imagen').banner-principal-decorativo-5 

      .col-lg-8
        p.mt-5 La comunicación es un proceso recíproco de transmisión de información y conceptos, por medio de un sistema ordenado, que requiere en su mayoría, hacer uso de canales. No todas las personas se comunican de la misma forma, sin embargo, gracias a la comunicación es posible generar interacciones diferentes. 

        p Cabe mencionar que la comunicación ha cambiado en los últimos años, principalmente gracias a la tecnología, ya que es posible usar sistemas y códigos que permiten eliminar barreras como la distancia y la época, desarrollando modelos de entendimiento y organización.


    .row.mt-5
      p La comunicación cumple con una serie de funciones, las cuales dependen de los objetivos propuestos:

      figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img2.svg', alt='Texto que describa la imagen') 


    .row.justify-content-around.align-items-center.mt-5
      .col-lg-3
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img3.svg', alt='Texto que describa la imagen').banner-principal-decorativo-5

      .col-lg-9
        p.mt-5 La comunicación cuenta con diferentes elementos:

        ul.lista-ul--color
          li 
            i.fas.fa-check
            p.mb-0 <b>Emisor</b>, que es la persona que ejecuta la transmisión del mensaje. 

          li 
            i.fas.fa-check
            p.mb-0 <b>Receptor</b>, que es la persona a la que se destina el mensaje.

          li 
            i.fas.fa-check
            p.mb-0 <b>Mensaje</b>, que es aquello que se quiere informar.

          li 
            i.fas.fa-check
            p.mb-0 <b>Medio</b>, que es la forma como se comunica el mensaje (si se trata de un lenguaje hablado, escrito, etc.).

          li 
            i.fas.fa-check
            p.mb-0 <b>Feedback</b>, que es la retroalimentación, es decir, la respuesta que genera en la otra persona todo el sistema comentado. 
      
    .row.mt-5
      p Frecuentemente se comete el error de utilizar los conceptos de información y comunicación de forma indistinta, cuando en realidad se dirigen a realidades diferentes. Las diferencias entre los dos conceptos son:


    .bg--img_03.mt-5
      .row.justify-content-center.mb-4
        
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")

            .row(titulo="La información")
              .col-12
                p.mb-0 Es unidireccional, pues va en una sola dirección y la persona que la recibe no puede responder, ya que no puede emitir un mensaje de respuesta y se limita únicamente a recibir la información.

            .row(titulo="La comunicación")
              .col-12
                p.mb-0 Es bidireccional, ya que una persona emite un mensaje y otra lo recibe, lo que le permite reaccionar y dar una respuesta inmediata, dando así paso a la retroalimentación.

        
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img4.svg", alt="alt").img400.m-auto

    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b Tipos de comunicación]

      p Los principales tipos de comunicación son verbal, no verbal, mixta y escrita.

    .tarjeta.tarjeta--azul.p-4.banner1-tema-1
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0 
            P #[b Comunicación verbal]
            p Es aquella que se practica a través del lenguaje hablado. Dentro de esta se destaca la importancia que posee el vocabulario, el estilo, etc.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img5.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0 
            P #[b Comunicación no verbal]
            p Es la que se practica a través del lenguaje no hablado, es decir, con el lenguaje corporal o gestual. La comunicación no verbal tiene que ver tanto con las características físicas como las actitudinales, es decir, tono de voz, movimientos, posturas, color de ojos, cabello, vestuario, etc.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img6.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0 
            P #[b Comunicación mixta]
            p Son las formas de comunicación que combinan la comunicación verbal y la no verbal, como ocurre en los cómics, por ejemplo, donde se combinan palabras y formas para transmitir un mensaje.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img7.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0 
            P #[b Comunicación escrita]
            p Incluye palabras representadas mediante algún tipo de marcas o trazos. La escritura es artificial y debe ser aprendida; cuenta con enormes ventajas, como comunicar a un emisor y a un receptor separados por años, siglos o kilómetros de distancia.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img8.png', alt='Texto que describa la imagen')



    separador

    #t_1_1

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.1 Manejo y control de la información

    .row
      p Hoy en día en el contexto empresarial la información es un tema de alto interés, ya que las decisiones se toman con base en esta. Sin embargo, no es posible mencionar este concepto sin antes conocer un poco sobre los datos, que son aquellos que posibilitan la existencia de la información. 

    .row.justify-content-center.mt-5
      .col-lg-4.d-none.d-lg-flex
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img9.png", alt="alt").m-auto

      .col-lg-8
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta clr--gris")
          .row(titulo="¿Qué son los datos?")
            .col-12
              p Son números, cifras e incluso palabras que están almacenados en algún repositorio.

          .row(titulo="Conjunto de datos con significado")
            .col-12
              p En términos técnicos, son la representación de una variable cuantitativa (números) o cualitativa (cualidades o características); teniendo presente lo referenciado, se puede afirmar que la información es un conjunto de datos con contexto o significado. 

          .row(titulo="Dato e información")
            .col-12
              p A modo de ejemplo, en la siguiente tabla se muestra la aplicación de estos conceptos, donde se evidencia la relación entre ambos conceptos. 

              figure(data-aos="zoom-in")
               img(src="@/assets/curso/temas/tema1/img10.svg", alt="alt")

              p Por una parte, se cuenta con cuatro datos, tres de ellos cuantitativos ($200.000, 16 y 12) y uno de ellos cualitativo (servicial); en este sentido el usuario de la información solo tiene ese conjunto de datos, sin mayor contexto.

              p Cuando se toman estos datos y se les da un alcance, o se asocian a una situación específica, se identifica la importancia de cada uno y se pasa a mencionar la información.


    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b Tipos de información]

      p Existen diferentes tipos de información, los cuales se pueden clasificar desde diferentes perspectivas, según su fuente, el objeto comunicacional, los criterios de programación en sistemas, entre otros. Sin embargo, la clasificación más referenciada a nivel empresarial es la asociada con la relación que existe entre quien la produce o pública (emisor) y los potenciales solicitantes (receptores). Esta clasificación se muestra en la Figura 1:

      .titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 1
        p #[i Tipos de información según la relación entre emisor y receptor]

      figure(data-aos="zoom-in")
        img(src="@/assets/curso/temas/tema1/img11.svg", alt="alt")


    .row.mt-5
      p En el siguiente video se describen los diferentes tipos de información y los principios que la rigen. 

    .row.justify-content-center.align-items-center.mb-5.mt-5          
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            
              

    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b ISO 27001]

      p Las normas ISO son una serie de estándares que propenden por la buena gestión al interior de las organizaciones, y si bien son voluntarias, hoy en día se convierten en un respaldo para los clientes y una forma de mostrar el compromiso de la empresa para contar con buenos procesos. 


    .row.justify-content-around.align-items-center.mt-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 2
          p #[i Logo de la ISO y su norma 27001]


        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img12.svg", alt="alt")

    .tarjeta--container.row.mb-5.mt-5
      .col-md.tarjeta.background-tarjeta-tema1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img13.svg', alt='Texto que describa la imagen')
          
        h2.text-center ISO 27001
        p Está orientada a la seguridad de la información, por lo cual promueve acciones para preservar la confidencialidad, la integridad y la disponibilidad de la información. De acuerdo con lo anterior, esta norma se convierte en un marco de buenas prácticas para las empresas, pues propende por cuidar la información que hoy en día es uno de los activos de mayor importancia para las organizaciones. 

      .col-md.tarjeta.background2-tarjeta-tema1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img14.svg', alt='Texto que describa la imagen')
          
        h2.text-center Evaluación de los riesgos
        p La norma ISO 27001 pone especial énfasis en la evaluación de los riesgos, dado que estos son considerados una amenaza por el impacto negativo reputacional, legal y/o financiero que puede desencadenar para la empresa una pérdida de información; por tanto, la norma detalla de manera especial cómo se pueden mejorar y mitigar los riesgos asociados a la pérdida de información.

      .col-md.tarjeta.background-tarjeta-tema1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img15.svg', alt='Texto que describa la imagen')
          
        h2.text-center Protección de la información
        p Teniendo presentes los diferentes tipos de información que se pueden originar y gestionar en una empresa y los marcos para la protección de la misma, como la Ley 1581 de 2012 y la norma ISO 27001, se recalca entonces que es un aspecto fundamental hoy en día para las empresas custodiar la información, y en este sentido, realizar las acciones necesarias para garantizar que la información esté protegida.


    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b Canales de contacto]

    .row.mt-5
      p Los canales de contacto son los medios que puede utilizar un cliente para realizar contactos con una empresa. Los canales de contacto existentes hoy en día son los presenciales, telefónicos y digitales. En la siguiente tabla se evidencian las ventajas y desventajas más relevantes de cada uno de estos canales de contacto:

    
    .row.justify-content-around.align-items-center.mt-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 2
            p #[i Ventajas y desventajas de las ventas según el canal de contacto]
        
        .tabla-a.color-acento-contenido 
          table
            thead
              tr
                th Canal de contacto
                th Ventaja
                th Desventaja

            tbody
              tr
                td Canal presencial
                td Generar mayor cercanía con el cliente
                td Mayores costos para la empresa

              tr
                td Canal telefónico
                td Efectividad para gestionar temas específicos
                td En ocasiones, generan desconfianza entre los clientes

              tr
                td Canal digital
                td Menores costos frente a las ventas presenciales y telefónicas
                td No aplican para todo tipo de clientes dada la brecha digital (clientes que no tienen el conocimiento o la confianza para utilizar canales digitales).

    .row.mt-5
      p A continuación, se presentan detalladamente los diversos canales de contacto y sus características más relevantes.

    
    .row.justify-content-center.mb-4
      .col-lg-12
        .crd.clr--gray.brd--rad.p-4.banner2-tema-1
          PasosB.color-acento-botones
            .row.justify-content-center(titulo="Canal 1").pt-3
              .col-lg-4.col-xs-6
                figure
                  img(src='@/assets/curso/temas/tema1/img16.svg', alt='')

              .col-lg-7.mb-4.mb-lg-0
                p.mt-3 #[b Canales presenciales:] también llamados canales ‘cara a cara’, son aquellos en los cuales interactúan dos o más personas a través de contacto directo. Son importantes porque generan cercanía con los clientes, por tanto, la efectividad de este canal depende de la comunicación empática y asertiva.

            .row.justify-content-center(titulo="Canal 2").pt-3
              .col-lg-4.col-xs-6
                figure
                  img(src='@/assets/curso/temas/tema1/img17.svg', alt='')

              .col-lg-7.mb-4.mb-lg-0
                p.mt-3 #[b Canales telefónicos:] son relevantes para generar interacciones enfocadas en gestionar trámites y solicitudes; posibilitan la atención proactiva (la empresa contacta al cliente) o reactiva (el cliente llama a la empresa).

            .row.justify-content-center(titulo="Canal 3").pt-3
              .col-lg-4.col-xs-6
                figure
                  img(src='@/assets/curso/temas/tema1/img18.svg', alt='')

              .col-lg-7.mb-4.mb-lg-0
                p.mt-3 #[b Canales digitales: ] son los canales que están soportados por la tecnología; se caracterizan por ser bidireccionales, es decir, que el emisor envía la información, y haciendo uso del mismo canal, el receptor le responde. Los más utilizados son las redes sociales, aplicaciones para mensajería instantánea, chatbots y el correo electrónico.

            .row.justify-content-center(titulo="Canal 4").pt-3
              .col-lg-4.col-xs-6
                figure
                  img(src='@/assets/curso/temas/tema1/img19.svg', alt='')

              .col-lg-7.mb-4.mb-lg-0
                p.mt-3 #[b Las redes sociales: ]  en los últimos años este canal ha ido en ascenso, las marcas y empresas las utilizan para generar todo tipo de interacciones con sus clientes actuales y potenciales. Las redes sociales más utilizadas por las empresas en Colombia son Twitter, Facebook, LinkedIn y YouTube.

            .row.justify-content-center(titulo="Canal 5").pt-3
              .col-lg-4.col-xs-6
                figure
                  img(src='@/assets/curso/temas/tema1/img20.svg', alt='')

              .col-lg-7.mb-4.mb-lg-0
                p.mt-3 #[b Aplicaciones para mensajería instantánea: ] denominadas también apps de chat o apps de mensajería, son canales en los que se puede hablar en tiempo real a través de la mediación tecnológica; permiten la comunicación vía texto, llamada o videollamada, sin embargo, requieren que tanto emisor como receptor cuenten con un dispositivo con conectividad (computador, tablet o smartphone). Las apps de mensajería más utilizadas actualmente son: WhatsApp, Telegram, Facebook Messenger, Snapchat y Google chat.

            .row.justify-content-center(titulo="Canal 6").pt-3
              .col-lg-4.col-xs-6
                figure
                  img(src='@/assets/curso/temas/tema1/img21.svg', alt='')

              .col-lg-7.mb-4.mb-lg-0
                p.mt-3 #[b Chatbots: ] este medio de atención al cliente es sin duda el más rápido, teniendo en cuenta que se trata de un canal muy eficaz. Los chatbots aparecieron hace pocos años, como una tecnología novedosa que permite la atención automatizada del cliente utilizando la inteligencia artificial; este tipo de tecnología es relativamente útil para hacer preguntas técnicas, sin embargo, su desventaja es que aún no es lo suficientemente eficaz como para mantener conversaciones en lenguaje natural.

            .row.justify-content-center(titulo="Canal 7").pt-3
              .col-lg-4.col-xs-6
                figure
                  img(src='@/assets/curso/temas/tema1/img22.svg', alt='')

              .col-lg-7.mb-4.mb-lg-0
                p.mt-3 #[b Correo electrónico (#[i e-mail]): ] este medio sirve para enviar y recibir mensajes a través de redes de comunicación electrónica; así mismo, posibilita informar las novedades de una marca o producto. Adicionalmente, es útil como medio para dejar trazabilidad de la comunicación con un cliente.

            .row.justify-content-center(titulo="Canal 8").pt-3
              .col-lg-4.col-xs-6
                figure
                  img(src='@/assets/curso/temas/tema1/img23.svg', alt='')

              .col-lg-7.mb-4.mb-lg-0
                p.mt-3 #[b Tipos de canales: ] En el contexto actual, lo ideal es que la empresa utilice todos los canales (presencial, telefónico y digital), esto posibilita brindar una mejor experiencia al cliente, ya que le da la oportunidad a este de decidir con cuál canal se siente más cómodo para contactar a la empresa.


          
    
    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b Protocolos de comunicación comercial]


    .row.justify-content-around.align-items-center.mt-5
      .col-lg-3
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img24.svg', alt='Texto que describa la imagen') 

      .col-lg-9
        p.mt-3 A nivel empresarial, los protocolos de comunicación se basan en algo denominado ‘etiqueta empresarial’, la cual se interpreta como un conjunto de normas que define la empresa, con el fin de actuar de manera correcta en los diferentes ámbitos de la compañía, comunicando siempre su identidad corporativa.

        p En este sentido, la etiqueta empresarial es una de las herramientas de comunicación y relacionamiento muy práctica y poderosa para la empresa, dado que, la aplicación de esta permitirá una diferenciación positiva frente a otras empresas. En términos prácticos, la etiqueta empresarial no solo es un tema personal (de los colaboradores), sino organizacional, por lo que, la aplicación de esta transmite confianza, tranquilidad y genera una buena imagen.


    .row.mt-5
      p Las normas básicas de etiqueta empresarial están asociadas a:

    .row.justify-content-center.mb-5
      .col-lg-8
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Presentación personal") En algunas empresas se utilizan los uniformes, en este caso deben llevarse de manera correcta. En aquellos casos donde no se use, la organización debe definir un ‘código de vestuario’, que logre fortalecer su identidad corporativa.

          p(numero="2" titulo="Código de vestuario") En el contexto de los vendedores, el código de vestuario está asociado principalmente al tipo de portafolio que comercializan, a la empresa que representan y al tipo de cliente con el que interactúan. <br> Por ejemplo, en el sector turístico es muy usual que los diferentes actores de la cadena usen uniforme, porque permite la identificación de la marca; sin embargo, en ventas empresariales el vestuario es más formal y propio de cada vendedor.

          p(numero="3" titulo="Identificación de la marca") Por ejemplo, en el sector turismo es muy usual que los diferentes actores de la cadena usen uniforme porque permite la identificación de la marca; sin embargo, en ventas empresariales el vestuario es más formal y propio de cada vendedor.

          p(numero="4" titulo="Forma de presentarse con el cliente") La empresa debe definir cómo se deben presentar los colaboradores cuando van a tener interacción con un cliente (Protocolo de presentación). Sin embargo, lo mínimo que se debe asegurar es saludar, indicar el nombre con apellidos y el cargo. 

          p(numero="5" titulo="Normas de cortesía") La empresa debe definir cómo se deben presentar los colaboradores cuando van a tener interacción con un cliente (Protocolo de presentación). Sin embargo, lo mínimo que se debe asegurar es saludar, indicar el nombre con apellidos y el cargo. 

          p(numero="6" titulo="Etiqueta empresarial") A modo de referente, Bogotá Emprende, a través de la Secretaría de Desarrollo Económico de Bogotá, Cámara de Comercio de Bogotá, plantea las reglas de oro en materia de etiqueta empresarial, las cuales tienen como fin dar algunas pautas para los colaboradores de la empresa, que permitan orientar de una forma más asertiva la comunicación.

      .col-8.col-lg-4.mt-3
        figure
          img(src="@/assets/curso/temas/tema1/img25.svg", alt="alt")

    .row.mt-5
      p A modo de referente, Bogotá Emprende, a través de la Secretaría de Desarrollo Económico de Bogotá, Cámara de Comercio de Bogotá, plantea las reglas de oro en materia de etiqueta empresarial, las cuales tienen como fin dar algunas pautas para los colaboradores de la empresa, que permitan orientar de una forma más asertiva la comunicación.

      p A continuación la recopilación de dichas reglas: 

    .row.justify-content-center.mb-5.mt-3
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 3
          p #[i Reglas de oro en la etiqueta empresarial]

        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img26.svg", alt="alt")

    .row.justify-content-center.mb-5.mt-3
      .col-lg-8.banner3-tema-1.p-2
        p #[b Nota:] Creación propia a partir de la Cartilla Práctica de Etiqueta Empresarial. Bogotá Emprende, 2010, p.18- p.20, aquí se listan y explican 10 aspectos fundamentales para tener presentes en la etiqueta empresarial.

         
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
