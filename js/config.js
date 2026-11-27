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
       "Existimos para amar a Dios y a la gente y crecer en una relación genuina con Jesús a través del estudio de la palabra de Dios.",
       " El propósito de La iglesia Refugio de Gracia",
      "Nuestro propósito es hacer iglesia para personas que no tienen iglesia o que no están interesadas en pertenecer a ninguna, deseamos expandir el mensaje del evangelio de formas y maneras que nos permitan ganar a las personas que Dios desea añadir a su cuerpo y a nuestra iglesia."
    ],


    pilares: [
      { titulo: "Amar",     texto: "A Dios y a la gente." },
      { titulo: "Servicio",  texto: "Tus dones al servicio de Dios." },
      { titulo: "Crecer",        texto: "A través de la palabra." }
    ]
  },

  /* ---- PASTOR ---- */
  pastor: {
    nombre: "Pastor Fernando Zoquier",
    cargo: "Pastor de Iglesia Refugio de Gracia",
    foto: "",                       // Ej: "img/pastor.jpg" (foto vertical). Vacío = espacio reservado.
    descripcion: [
      "El pastor Fernando Zoquier guía a la congregación en la enseñanza de la Palabra y en el cuidado espiritual de cada familia.",
      "(Edita este texto en js/config.js para añadir su historia y su labor ministerial.)"
    ]
  },

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
