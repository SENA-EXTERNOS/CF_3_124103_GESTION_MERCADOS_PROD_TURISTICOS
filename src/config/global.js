export default {
  global: {
    componenteFormativo: 'Presentación de la propuesta comercial',
    descripcionCurso:
      'El plan comercial es una herramienta que indica a los vendedores cuáles son los objetivos comerciales y cómo alcanzarlos. Por su parte, la propuesta comercial es un documento valioso que posibilita un acercamiento efectivo con los clientes, ya que plasma de una forma estructurada cuál es la solución propuesta por la empresa frente al requerimiento del cliente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Comunicación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Ventas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.1 Manejo y control de la información',
      referencia:
        'ISO 27001. (2013). <em>Sistemas de Gestión de Seguridad de la Información.</em>',
      tipo: 'Norma',
      link:
        'https://www.isotools.org/pdfs-pro/iso-27001-sistema-gestion-seguridad-informacion.pdf',
    },
    {
      tema: '2. Ventas',
      referencia:
        'Johnston, M. y Marshall, G. (2009). <em>Administración de Ventas</em>. Editorial Mc. Graw Hill. Novena Edición.',
      tipo: 'Libro',
      link:
        'https://utecno.files.wordpress.com/2013/06/administracic3b3n-de-ventas.pdf',
    },
    {
      tema: '2. Ventas',
      referencia:
        'Tracy, B., (2005). <em>Psicología de ventas</em>. Editorial Caribe INC. ',
      tipo: 'Libro',
      link:
        'https://www.eidhi.com/wp-content/uploads/2016/08/Psicologia-de-Ventas-Brian-Tracy.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Canales de contacto',
      significado:
        'son los medios que puede utilizar un cliente para realizar contactos con una empresa.',
    },
    {
      termino: 'Cliente',
      significado:
        'es la razón de ser de la empresa. Es la persona, empresa u organización que paga por los productos de la empresa.',
    },
    {
      termino: 'Cliente potencial',
      significado:
        'son aquellos que aún no son clientes de la empresa, pero pueden llegar a serlo si reúnen ciertas características, como necesidad del producto que ofrece la empresa y capacidad adquisitiva para adquirirlo.',
    },
    {
      termino: 'Empatía',
      significado:
        'principio básico necesario para la interacción con clientes; consiste en ponerse en el lugar del otro, sin perder la objetividad.',
    },
    {
      termino: 'Etiqueta empresarial',
      significado:
        'conjunto de normas que define la empresa con el fin de actuar de manera correcta en los diferentes ámbitos de actuación de la compañía, y así comunicar a partir de la identidad corporativa de la empresa.',
    },
    {
      termino: 'Interacción',
      significado:
        'cualquier tipo de comunicación o contacto de un cliente con alguna persona de la empresa.',
    },
    {
      termino: 'Plan comercial',
      significado:
        'es una herramienta útil para planear y documentar las metas de ventas que una empresa tiene.',
    },
    {
      termino: 'Producto',
      significado:
        'es el objeto de la transacción. En el mercadeo moderno un producto puede ser: un tangible, un intangible, una marca, una persona o un lugar.',
    },
    {
      termino: 'Propuesta comercial',
      significado:
        'es el documento que entrega un vendedor a un cliente presentando a la empresa y su oferta comercial, el portafolio y la solución propuesta para la satisfacción de sus necesidades o requerimientos.',
    },
    {
      termino: 'Venta',
      significado:
        'transacción comercial entre dos agentes: empresa (que ofrece productos) y cliente (que requiere dichos bienes o servicios).',
    },
  ],
  referencias: [
    {
      referencia:
        'Secretaria Distrital de Desarrollo Económico de Bogotá - Cámara de Comercio de Bogotá. (2010). <em>Cartilla práctica Etiqueta Empresarial</em>. Editorial Kimpres. Disponible en:',
      link:
        'https://bibliotecadigital.ccb.org.co/bitstream/handle/11520/1172/4614_cartilla_etiquetaempresarial.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Ley 1581 de 2012. <em>Ley de Protección de Datos. Por la cual se dictan disposiciones generales para la protección de datos personales</em>. Congreso de la República de Colombia. 17 de octubre de 2012. Disponible en:',
      link:
        'https://www.unicauca.edu.co/versionP/sites/default/files/files/LEY_1581_DE_2012.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
