<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Ventas
      
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-2
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/img1.svg', alt='Texto que describa la imagen').banner-principal-decorativo-5

      .col-lg-8
        p.mt-5 La venta en sí misma es una transacción comercial entre dos agentes económicos. Es un proceso voluntario donde una empresa o persona ofrece de manera legal productos a otra, denominada cliente potencial, buscando que esta pague el precio esperado. De acuerdo con esto, para que se realice una venta debe asegurarse: 

        ul.lista-ul--color
          li 
            i.fas.fa-check
            p.mb-0 La participación de dos roles (comprador y vendedor).
          li 
            i.fas.fa-check
            p.mb-0 Un producto.
          li 
            i.fas.fa-check
            p.mb-0 Un valor de intercambio (precio).


    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-10
        .cajonAmarillo.bgr-tarjeta-tema1.p-4
           p A modo de ejemplo, se tienen las siguientes situaciones: una agencia de viajes realiza la venta de tiquetes a diferentes empresas para sus ejecutivos; en este caso, como el cliente (es decir, quien paga) es una empresa, es una venta B2B. Cuando las personas van a la oficina de viajes a separar un paquete para sus vacaciones se trata de una venta B2C, ya que aquí la agencia le está vendiendo directamente al usuario; y si la agencia de viajes se presenta a una licitación para gestionar los viajes de la alcaldía de una ciudad, estaría bajo un modelo de negocio B2G, dado que su cliente es una entidad del sector público.


    ul.lista-ul--color
          li 
            i.fas.fa-square
            h3.mb-0 El ciclo de venta
    
    .row.mt-5
      p  A continuación,se mencionan los diferentes aspectos a tener en cuenta en la venta.

    .tarjeta.tarjeta--azul.p-4.banner1-tema-1
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0 
            P #[b Tipos de clientes]
            p Existen diferentes tipos de ventas, sin embargo, para un vendedor de productos turísticos es importante conocer las ventas según el tipo de cliente con el cual esté interactuando. 

            p Este concepto de tipos de ventas según el cliente comenzó con fuerza en el comercio electrónico, sin embargo, actualmente es utilizado también en el contexto <i>offline</i>.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img2.png', alt='Texto que describa la imagen')


        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0 
            P #[b Clases de ventas]

            ul.lista-ul--color
              li 
                i.fas.fa-check
                p.mb-0 <b>Business to Business (B2B):</b>  son aquellas que realiza una empresa a otra empresa.

              li 
                i.fas.fa-check
                p.mb-0 <b>Business to Consumer (B2C):</b> son las que realiza una empresa al consumidor final.


              li 
                i.fas.fa-check
                p.mb-0 <b>Business to Government (B2G):</b> son aquellas en las que una empresa vende sus productos al gobierno o a entidades públicas.

            

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img4.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0 
            P #[b El ciclo de la venta]
            p Para realizar de manera adecuada e influenciar el éxito de la venta, esta debe verse de forma integral. Por ello, se han definido tres momentos secuenciales: preventa, venta y posventa, que se conocen como el ciclo de la venta y en los cuales se desarrolla el ciclo comercial.

            p De acuerdo con lo anterior, a continuación se describen cada una de las fases que conforman el ciclo de venta, las cuales, de acuerdo con la estructura, deben darse secuencialmente: preventa (primer momento), venta (segundo momento) y posventa (tercer momento).

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img5.svg', alt='Texto que describa la imagen')

        
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0 
            P #[b Preventa]
            p Es el momento previo a la venta. En esta etapa el vendedor define quiénes son sus clientes potenciales, de allí extrae a aquellos con mayor probabilidad de éxito (llamados clientes prospectos), los contacta, genera el acercamiento, detecta su necesidad y prepara el tipo de oferta (portafolio) a presentar. 

            p Una buena preventa tiene un gran trabajo previo al contacto con el cliente prospecto, dado que se debe tener buen conocimiento del portafolio de productos, se debe investigar sobre el perfil del cliente y se debe propender por generar un acercamiento muy asertivo de acuerdo a su perfil.


          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img7.png', alt='Texto que describa la imagen')


        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0 
            P #[b Venta]
            p Es el más grande momento de verdad, es decir, allí se tiene el contacto con el cliente (a través de cualquier medio presencial o virtual), se realiza la presentación del portafolio a ofrecer, se resuelven sus inquietudes y se espera que el vendedor llegue al objetivo de esta etapa, el cierre de la venta, es decir, cuando el cliente acepta adquirir el bien o servicio. 

            p En la venta se aplican diferentes técnicas, se debaten objeciones y se implementan modelos de negociación según como se vaya desarrollando el proceso, además se realizan todos los esfuerzos comerciales para que el prospecto diga “sí, voy a comprar el producto”.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img8.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0 
            P #[b Posventa]
            p Es la última etapa del proceso comercial, pero no la menos importante. En esta fase del ciclo es donde se crean verdaderos vínculos con el cliente, se le fideliza e incluso pasa a ser un ‘apóstol’ de la empresa. Esto quiere decir que se debe aspirar a que el cliente no solo compre, sino que también recomiende a terceros la marca o producto. Si bien esta fase ha estado atribuida más al proceso de servicio al cliente, todos los puntos de contactos son importantes para generar una experiencia positiva con el cliente después de haber realizado la compra.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img9.png', alt='Texto que describa la imagen')

     
  
    .row.mt-5
      ul.lista-ul--color
        li 
          i.fas.fa-square
          h3.mb-0 Informes de ventas

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-2
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/img10.svg', alt='Texto que describa la imagen').banner-principal-decorativo-5 

      .col-lg-10
        p.mt-5 Los informes son la herramienta de gestión más utilizada en el ámbito empresarial, en los cuales se resume la planeación, gestión y/o seguimiento sobre un tema, actividad o proyecto en particular. En este sentido, la realización de informes suele ser una actividad específica asociada a los diferentes roles relacionados con mercadeo y ventas.

        p A nivel empresarial, los ítems que se suelen abordar en informes de tipo empresarial son:

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 5
          span #[br] #[i Imagen alusiva a un informe empresarial]

        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema2/img11.svg", alt="alt")

    .bg--img_03.mt-5
      .row.justify-content-center.mb-4
        
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Objetivo")
              .col-12
                p.mb-0 Cuál es la razón que origina la presentación del documento o presentación.

            .row(titulo="Destinatario")
              .col-12
                p.mb-0 A quién está dirigido el informe.

            .row(titulo="Desarrollo de la temática")
              .col-12
                p.mb-0 Se aborda el tema objetivo del informe, para ello se sugiere la incorporación de gráficos, indicadores y tablas que ayuden a un mejor entendimiento.

            .row(titulo="Conclusiones y/o recomendaciones")
              .col-12
                p.mb-0 Este punto constituye el valor agregado de los informes y está orientado a conocer, de una forma técnica, concreta y propositiva, cuál es la percepción de los grandes resultados del informe y cuáles son las opciones de mejora que se identifican. 

            .row(titulo="Entrega de informes")
              .col-12
                p.mb-0 En cuanto a los formatos, la mayoría de los informes son realizados en programas de ofimática, tipo procesador de datos (Word) o tipo presentación (PowerPoint) y entregados en formato no editable (tipo PDF). No obstante, las empresas que implementan informes o reportes en aplicaciones de Inteligencia de Negocios (BI), acuden a herramientas de visualización con el fin de tener la información de forma digital y en tiempo real, lo anterior se conoce como dashboards o tableros de visualización, cada vez más implementados en las compañías. Algunas de las aplicaciones de BI que tienen componentes de visualización de información son: Power BI (de Microsoft), Qlik y Tableau.

            .row(titulo="Reportes de ventas")
              .col-12
                p.mb-0 De acuerdo con lo anterior, los informes de ventas, también conocidos como reportes de ventas, recopilan la información sobre la gestión realizada por un vendedor o un equipo comercial (denominados también ‘fuerza de ventas’); tienen como finalidad dar a conocer al solicitante (usualmente el jefe o coordinador de ventas) el resultado de la gestión realizada durante un período específico de tiempo. 

            .row(titulo="Entrega de informes")
              .col-12
                p.mb-3  Dichos informes, según la empresa, pueden realizarse de forma diaria, semanal o mensual, por lo tanto un vendedor siempre debe tener claras y documentadas las actividades realizadas y cómo se están comportando las cifras de ventas; para quien los recibe son importantes por varias razones:

                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    p.mb-0 Permiten tener una mirada oportuna de lo que está sucediendo en el ámbito de las ventas.

                  li 
                    i.fas.fa-check
                    p.mb-0 Permite consolidar la información del equipo comercial.

                  li 
                    i.fas.fa-check
                    p.mb-0 Permite tomar de manera rápida decisiones para cambiar tendencias, en caso de que los resultados no sean los esperados.
        
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema2/img12.svg", alt="alt").img400.m-auto

    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b ¿Qué debe tener un informe de ventas?]

      P A continuación, se menciona los temas que debe contener un informe de ventas:

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/img13.svg', alt='Texto que describa la imagen') 
      .col-lg-8
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Informe de ventas")
            .col-md-12.mb-4.mb-md-0
              p La mayoría de las empresas hoy tienen centralizados los informes de ventas en áreas responsables de la generación de información; no obstante, sin importar si lo realiza el vendedor o algún área de la empresa, se deben tener en cuenta algunos aspectos mínimos a la hora de presentar un informe. A continuación, se dará una breve mirada para cada perspectiva.

          .row(numero="2" titulo="Cuando el informe de ventas lo realiza el vendedor ")
            .col-md-12.mb-4.mb-md-0

              p En este caso es importante detallar:

              ul.lista-ul--color
                li 
                  i.fas.fa-check
                  p.mb-0 Cumplimiento de la cuota de ventas: la cuota de ventas representa el total de dinero (y en algunas empresas cantidades) que se espera reúna un vendedor al finalizar el mes; en esta línea, el cumplimiento representa lo logrado sobre lo esperado.

                li 
                  i.fas.fa-check
                  p.mb-0 Cantidad de clientes visitados.

                li 
                  i.fas.fa-check
                  p.mb-0 Cantidad de propuestas o cotizaciones enviadas.

          .row(numero="3" titulo="Cuando el informe de ventas lo realiza un grupo de la empresa")
            .col-md-12.mb-4.mb-md-0
              p En este caso se presenta la información consolidada de la gestión comercial, para ello se deben mostrar los siguientes elementos:

              p En este caso es importante detallar:

              ul.lista-ul--color
                li 
                  i.fas.fa-check
                  p.mb-0 Cumplimiento del presupuesto de ventas: es el porcentaje que muestra la cantidad de dinero vendido hasta la fecha, dividido entre el total de dinero esperado. En el caso de que no solo exista presupuesto de ventas en dinero, sino también en cantidades o volumen, se debe mostrar el indicador.

                li 
                  i.fas.fa-check
                  p.mb-0 Cumplimiento del presupuesto de ventas por canales, regiones o segmentos: las empresas con frecuencia dividen su presupuesto por canales de venta, regiones geográficas o segmentos de clientes; en este sentido, se deberá mostrar el comportamiento de la ejecución de las ventas sobre lo planeado.

                li 
                  i.fas.fa-check
                  p.mb-0 Cumplimiento de cada vendedor: este indicador será importante para el director de ventas, ya que conocer el desempeño individual es de relevancia para mirar el aporte de cada uno hacia la meta.

              p Adicional a lo anterior, es relevante no solo tener en cuenta qué indicadores debe contener el informe, sino que además tenga:

              p Información clara que permita entender fácilmente lo que se está mostrando.    

          
          .row(numero="4" titulo="Informe dinámico")
            .col-md-12.mb-4.mb-md-0
              p Es decir, debe permitir realizar modificaciones, ajustes, eliminar o incluir información adicional.

          .row(numero="5" titulo="Información precisa")
            .col-md-12.mb-4.mb-md-0
              p Que incluya datos actualizados y puntuales.


    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          h3.mb-0 Propuesta y plan comercial

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img21.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El plan comercial y la propuesta comercial son dos elementos claves dentro de las ventas; el primero (plan comercial) da línea de cómo la empresa concibe el modelo comercial, en este se plantean cuáles son las tácticas y actividades puntuales que llevarán al cumplimiento de las ventas; con la segunda herramienta (propuesta comercial) se muestra un proceso de ventas estructurado, donde al cliente se le da a conocer de una forma clara, cuál es la oferta comercial que le ofrece la empresa. 

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/img22.svg', alt='Texto que describa la imagen').banner-principal-decorativo-5

      .col-lg-8
        .bloque-texto-b.color-secundario.p-4.mt-3.margin-bloque-texto-b
          .bloque-texto-b__texto
            p En ocasiones, se suele confundir un plan comercial con un plan de ventas; sin embargo, el plan comercial tiene una perspectiva más estratégica, pues está orientado a establecer los objetivos que se tienen en el negocio y las estrategias holísticas que se diseñan para alcanzarlos. No obstante, el plan de ventas describe con detalle el paso a paso de cómo se van a lograr las metas propuestas, por lo tanto, tiene un alcance más táctico y operativo; con todo, algunas empresas suelen realizar un solo plan con el objetivo de tener un poco más de simplicidad en las herramientas de trabajo. 

        .bloque-texto-f.color-secundario.p-4.mt-3 
          .bloque-texto-f__texto
            p A continuación, se expone la estructura de cada uno, y se dejará a libre elección considerar si, según cada empresa, es más recomendable trabajarlos por separado o consolidar toda la información.


    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b Estructura de un plan comercial]

      P El plan comercial, como mínimo, debe llevar los siguientes componentes: 

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-12
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img14.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3(x="8.5%" y="55.5%" numero="")
            figure
              img(src='@/assets/curso/temas/tema2/img23.svg', alt='Texto que describa la imagen').width-img-tema2
            p #[b Objetivos]
            p Definir los objetivos en términos de ingresos (dinero) y de clientes, estas dos son variables que deben estar presentes, porque son las que van a garantizar la sostenibilidad de la empresa en el corto y mediano plazo. 

            p Se sugiere que se extraigan del plan de mercadeo o sean una derivación de este.

          .tarjeta.color-acento-botones.p-3(x="28.5%" y="29.8%" numero="")
            figure
              img(src='@/assets/curso/temas/tema2/img24.svg', alt='Texto que describa la imagen').width-img-tema2
            p #[b Análisis del mercado]
            p Es importante conocer cuál es el comportamiento de las variables del macroentorno, es decir, de la política, la economía, las variables socioculturales, ambientales, tecnológicas y legales que pueden impactar positiva o negativamente a la empresa. Asimismo, se requiere conocer cuál es la posición competitiva de la empresa, es decir, qué cuota o participación tiene en el mercado y cómo está frente a sus competidores.

          .tarjeta.color-acento-botones.p-3(x="50%" y="4.8%" numero="")
            figure
              img(src='@/assets/curso/temas/tema2/img25.svg', alt='Texto que describa la imagen').width-img-tema2
            p #[b Presupuesto de ventas]
            p En este ítem se debe determinar el presupuesto de ingresos (dinero) que se espera alcanzar tanto mensual como anual, y a partir de allí, dividirlo con las variables que se puedan segmentar, por ejemplo, presupuesto por segmento, por zona geográfica, por categoría de producto, por esquema comercial, etc.

          .tarjeta.color-acento-botones.p-3(x="70.6%" y="29.8%" numero="")
            figure
              img(src='@/assets/curso/temas/tema2/img26.svg', alt='Texto que describa la imagen').width-img-tema2
            p #[b Estrategias]
            p Definir cuáles son las estrategias que, desde el punto de vista comercial, se vislumbran como viables para apuntar al cumplimiento de los objetivos comerciales.

          .tarjeta.color-acento-botones.p-3(x="91.6%" y="55.7%" numero="")
            figure
              img(src='@/assets/curso/temas/tema2/img26.svg', alt='Texto que describa la imagen').width-img-tema2
            p #[b Indicadores]
            p Se debe referenciar cómo y cada cuánto se hará seguimiento al cumplimiento de los indicadores de ingreso (dinero) y de clientes. En ocasiones, estas definiciones ya están dadas, por tanto, lo que debe quedar claro es qué información debe ser suministrada desde el equipo comercial.

    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b Estructura de un plan de ventas]

      p Frente al plan comercial, un plan de ventas es una herramienta más específica que detalla cómo se dará alcance al plan comercial; por tanto, se sugiere que como mínimo incluya los siguientes aspectos:


    .row
      .col-lg-12.order-2.order-lg-1
        TabsC.color-acento-contenido.mb-5        
          .tarjeta.clr-paleYellow.p-4.mb-3.text-center(titulo="Objetivos")
            .row.justify-content-center.align-items-center
              .col-lg-2
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema2/img15.svg', alt='Texto que describa la imagen').width-img-tema2

              .col-lg-10
                p Son aquellos que se definieron en el plan comercial. En caso de que la empresa no cuente con plan comercial, debe revisarse el plan de mercadeo, y en caso de que tampoco esté definido, se deben establecer en términos de ventas.

          .tarjeta.clr-paleYellow.p-4.mb-3.text-center(titulo="Presupuesto de ventas")
            .row.justify-content-center.align-items-center
              .col-lg-2
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema2/img16.svg', alt='Texto que describa la imagen').width-img-tema2

              .col-lg-10.mt-3
                p Es el presupuesto anual y mensual aprobado por la alta gerencia. Si se cuenta con plan comercial o plan de mercadeo no debe construirse nada adicional, aunque en algunos casos los directores de ventas elevan dichas cifras con el fin de tener un presupuesto más ambicioso para el equipo comercial.
                

          .tarjeta.clr-paleYellow.p-4.mb-3.text-center(titulo="Plan de acción")
            .row.justify-content-center.align-items-center
              .col-lg-2
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema2/img17.svg', alt='Texto que describa la imagen').width-img-tema2 

              .col-lg-10.mt-3
                p Constituye el detalle exhaustivo de las tácticas y actividades a realizar, tanto a nivel de equipo como individual. En este se asocia responsables y líneas de tiempo (cuándo).

          .tarjeta.clr-paleYellow.p-4.mb-3.text-center(titulo="Presupuesto de costos y gastos")
            .row.justify-content-center.align-items-center
              .col-lg-2
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema2/img18.svg', alt='Texto que describa la imagen').width-img-tema2

              .col-lg-10.mt-3
                p Si bien se dispone de un presupuesto de ingresos, el plan de ventas debe definir también el escenario planteado de costos y gastos, con el fin de asegurar que haya resultados favorables para la operación comercial.


          .tarjeta.clr-paleYellow.p-4.mb-3.text-center(titulo="Seguimiento y control")
            .row.justify-content-center.align-items-center
              .col-lg-2
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema2/img19.svg', alt='Texto que describa la imagen').width-img-tema2

              .col-lg-10.mt-3
                p Como mínimo se debería tener un control semanal del presupuesto de ventas, costos y gastos comerciales, con el fin de realizar los ajustes requeridos en los tiempos oportunos. 

    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b Propuesta comercial]

      p Para ampliar la información lo invitamos a ver el #[b Anexo 1 - Propuesta comercial], en el cual se detallan los elementos sugeridos para una propuesta comercial y la formalización de la venta.


    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-10
        .tarjeta.color-acento-contenido.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/img20.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Anexo 1 - Propuesta comercial
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexo_1-Propuesta_comercial.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajonAmarillo.bgr-tarjeta-tema1.p-4
           p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo, como son la síntesis, la actividad didáctica, el material complementario, entre otros.


</template>

<script>
export default {
  name: 'Tema2',
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
