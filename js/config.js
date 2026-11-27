/* =====================================================================
   ARCHIVO DE CONFIGURACIÓN — AQUÍ SE EDITA TODO EL CONTENIDO
   Cambia solo lo que está entre comillas "..." y guarda el archivo.
   Si dejas un dato vacío ("") su botón aparece como "Próximamente".
   ===================================================================== */
const SITE = {

  nombre: "Iglesia Refugio de Gracia",
  logo: "img/logo.png",            // Para cambiar el logo, reemplaza img/logo.png (mismo nombre)

  /* ---- PORTADA ---- */
  hero: {
    titulo: "Un lugar donde la gracia de Dios transforma vidas",
    texto: "Te invitamos a conocer nuestra iglesia, una familia que ora, aprende la Biblia y crece junta en la fe.",
    imagen: ""                      // Ej: "img/portada.jpg" (foto de adoración, horizontal, máx. 400 KB). Vacío = fondo azul con luz.
  },


/* ---- SOBRE NOSOTROS ---- */
nosotros: {
  titulo: "La iglesia Refugio de Gracia",
  parrafos: [
    "<strong>Nuestra Misión</strong>",
    "Existimos para amar a Dios y a la gente y crecer en una relación genuina con Jesús a través del estudio de la palabra de Dios.",
    "<strong>El propósito de La iglesia Refugio de Gracia</strong>",
    "Nuestro propósito es hacer iglesia para personas que no tienen iglesia o que no están interesadas en pertenecer a ninguna, deseamos expandir el mensaje del evangelio de formas y maneras que nos permitan ganar a las personas que Dios desea añadir a su cuerpo y a nuestra iglesia."
  ],


    pilares: [
      { titulo: "Amar",     texto: "A Dios y a la gente." },
      { titulo: "Servicio",  texto: "Tus dones al servicio de Dios." },
      { titulo: "Crecer",        texto: "A través de la palabra." }
    ]
  },

/* ---- Los pilares ---- */
creencias: [
  {
    titulo: "Adoración",
    texto: "Creemos que todas las personas existen para la gloria de Dios y que Dios creó a los seres vivos para que lo adoren, estamos enfocados en que la adoración a nuestro Dios sea uno de los elementos más importantes en nuestras reuniones semanales."
  },
  {
    titulo: "Evangelismo",
    texto: "La mayor parte de nuestra programación está enfocada en el cumplimiento de Mateo 28:19-20, creemos firmemente que todo lo que hacemos como iglesia debe estar dentro del marco de la Gran comisión dada por nuestro Señor Jesucristo."
  },
  {
    titulo: "Discipulado",
    texto: "Creemos fielmente en como la enseñanza de la palabra Dios puede llevar a las personas a ser verdaderos discípulos, y estamos convencidos de que esto ocurrirá a través del proceso de discipulado."
  },
  {
    titulo: "Enseñanza",
    texto: "Creemos que la enseñanza es uno de los principales ministerios dados por el señor a su iglesia, toda nuestra enseñanza gira en torno a los principios bíblicos, creemos firmemente en la plena autoridad de las escrituras."
  },
  {
    titulo: "Servicio",
    texto: "Creemos que cuando el señor salva a las personas el Espíritu Santo le regala dones espirituales para que sean utilizados para la edificación de su cuerpo esto es, la iglesia, por lo que los dones que el señor nos ha dado son para servir en la congregación, por eso promovemos la plataforma para que todos puedan servir, tenemos un lema: Aquí tus dones Importan."
  }
],

  /* ---- HORARIOS (puedes agregar o quitar bloques { }) ---- */
  servicios: [
    { dia: "Miércoles", hora: "7:30 p. m.", detalle: "Estudio Biblico" },
    { dia: "Sábados", hora: "7:30 p. m.", detalle: "Hogares de Gracia" },
    { dia: "Domingos",  hora: "6:30 p. m.", detalle: "Servicio" }
  ],

  /* ---- UBICACIÓN ---- */
 
ubicacion: {
  direccion: "Calle C, Local A #20, Los Americanos, M.V.S.",
  ciudad: "San Cristóbal, República Dominicana",
  referencia: "Luego de pasar el puentecito",
  mapa: "https://maps.app.goo.gl/mkoSMxcrqtAQ7S1d6"
},


  /* ---- CONTACTO (déjalos vacíos hasta tener los datos reales) ---- */
  contacto: {
    whatsapp:  "1-809-632-9237",                  // Solo números con código de país, sin + ni espacios
    facebook:  "https://www.facebook.com/iglesiarefugiodegracia/",                  // Enlace completo: https://facebook.com/...
    instagram: "https://www.instagram.com/iglesiarefugiodegracia/",                  // Enlace completo: https://instagram.com/...
    correo:    "IglesiaRerugiodegracia@gmail.com"                   // Correo electrónico
  },

  copyright: "Iglesia Refugio de Gracia. Todos los derechos reservados."
};
