import React, { useState } from "react";
import AppLayout from "../../components/AppLayout/AppLayout";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import pd from "../../images/footer/politicas.pdf";
import "./Politicas.css";

const Politicas = (props) => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;
  return (
    <AppLayout>
      <Document
        file={pd}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </AppLayout>
  );
};


export default Politicas;




// import React from "react";
// import { Container } from "react-bootstrap";

// const Politicas = () => {
//   return (
//     <AppLayout>
//       <Container className="container-politicas">
//         <div>
//           <h3>Políticas de privacidad de YES MOM PERU S.A.C</h3>
//           <p>
//             YES MOM se interesa en la privacidad de sus visitantes, usuarios y
//             de todos los que tratemos sus datos personales, por tanto, estamos
//             totalmente comprometidos con la protección de sus datos personales y
//             con su correcto uso, en cumplimiento de la ley N° 29733, Ley de
//             Protección de Datos Personales, su reglamento y sus modificaciones
//             que regula el tratamiento de datos personales en nuestro país
//             (Perú). Esta política describe cómo recopilamos, utilizamos sus
//             datos personales, entre otros, así como los derechos y las opciones
//             disponibles para los titulares de los datos personales con respecto
//             a dicha información.
//           </p>
//           <p>
//             Le recomendamos que lea esta política y se asegure de que la
//             comprende completamente, antes de acceder a o utilizar cualquiera de
//             nuestros servicios. 
//           </p>
//           <ol>
//             <li>
//               <span>Lea con atención:</span>
//               <p>
//                 Esta política de privacidad de YES MOM (en adelante, "PP")
//                 describe como nosotros (YES MOM PERU S.A.C.) tratamos la
//                 información que llega a nuestros bancos de datos, en relación
//                 con su acceso y uso de nuestro sitio web (incluyendo y
//                 cualquiera de sus subdominios, de corresponder), aplicaciones en
//                 la web, aplicaciones móviles, servicios relacionados, entre
//                 otros. Los mencionados bancos de datos están registrados ante la
//                 autoridad correspondiente en el Perú, el Ministerio de Justicia
//                 y Derechos Humanos.
//               </p>
//               <p>
//                 El propósito de esta PP es darle una explicación clara acerca de
//                 cuándo, por qué y cómo recopilamos y usamos su información
//                 personal o datos personales, así como una explicación de sus
//                 derechos establecidos. Esta PP no tiene la finalidad de
//                 sobrepasar los términos de cualquier contrato que usted tenga
//                 con nosotros ni ningún derecho que usted pueda tener bajo las
//                 leyes aplicables respecto a la protección de datos personales.
//               </p>
//               <p>
//                 Si usted lee, comprende esta PP y continúa oponiéndose a
//                 nuestras buenas prácticas, lamentablemente, debe salir de este
//                 sitio web, aplicación o servicio de inmediato, y evitar o
//                 descontinuar todo uso de cualquiera de nuestros servicios. Si
//                 tiene alguna pregunta o inquietud respecto a esta política,
//                 póngase en contacto con nosotros mediante el siguiente correo:
//                 info@yesmom.com.pe
//               </p>
//               <p>
//                 Recordar que, al acceder a o utilizar cualquiera de nuestros
//                 servicios, usted reconoce que ha leído esta PP.
//               </p>
//             </li>
//             <li>
//               <span>
//                 {" "}
//                 ¿Qué información recopilamos?
//                 <br />
//                 Recopilamos dos tipos de información acerca de nuestros
//                 visitantes y usuarios:
//               </span>

//               <div>
//                 {" "}
//                 <span>2.1. Información para visitantes y/o usuarios</span>
//                 <p>
//                   1. Información no identificada y no identificable relativa a
//                   un visitante o usuario no identificado, que puede ser puesta a
//                   nuestra disposición o recopilada automáticamente a través de
//                   nuestra opción de recibir nuevas noticias. Dicha Información
//                   No Personal no nos permite identificar el visitante o usuario
//                   de quien fue recopilada.
//                 </p>
//                 <p>
//                   2. La Información identificable individualmente; es decir,
//                   información que identifica a un individuo, puede ser de
//                   naturaleza privada o sensible ("Información Personal").
//                 </p>
//                 <p>
//                   La Información Personal recopilada por nosotros consiste
//                   principalmente en los datos de contacto (por ejemplo: nombre,
//                   correo electrónico o número de teléfono), los datos de
//                   facturación (nombre, dirección física de facturación, detalles
//                   de las transacciones y método de pago) que solo se recopilan
//                   de usuarios con servicios registrados, y cualquier otra
//                   Información Personal que nos suministren los visitantes o
//                   usuarios a través de su acceso y/o uso de nuestros servicios.
//                 </p>
//                 <p>
//                   Para evitar cualquier duda, cualquier Información No Personal
//                   que se encuentre conectada o vinculada a la Información
//                   Personal (por ejemplo, con el fin de mejorar los servicios que
//                   ofrecemos) es considerada y tratada por nosotros como
//                   Información Personal, siempre y cuando existe tal conexión o
//                   enlace.
//                 </p>
//               </div>
//             </li>

//             <li>
//               <span>¿Cómo recolectamos dicha información?</span>
//               <p>
//                 Mediante nuestras diversas plataformas virtuales, nuestra
//                 empresa recolecta información de la siguiente manera:
//               </p>
//               <ul>
//                 <li>
//                   <p>
//                     <span>
//                       {" "}
//                       1. Recopilamos información a través del uso de nuestros
//                       servicios.
//                     </span>
//                     Cuando usted visita o utiliza nuestros servicios, incluso
//                     cuando navega en el sitio web, se registra como usuario,
//                     edita sus datos, carga información y contenido y/o descarga
//                     y utiliza cualquier aplicación web o móvil de YES MOM;
//                     tenemos conciencia de esto y usualmente recogeremos,
//                     recopilaremos y registraremos dichos usos, sesiones e
//                     información relacionada, ya sea en forma independiente o con
//                     la ayuda de terceros.
//                   </p>
//                 </li>
//                 <li>
//                   <p>
//                     <span>
//                       {" "}
//                       2. Recopilamos información que usted nos proporciona
//                     </span>
//                     voluntariamente. Por ejemplo, recopilamos la Información
//                     Personal que nos proporciona cuando se registra a nuestros
//                     servicios; cuando se comunica con nosotros directamente por
//                     cualquier canal de comunicación (reclamos, sugerencias,
//                     envío de información, etc.)
//                   </p>
//                 </li>
//                 <li>
//                   <p>
//                     3. De ser el caso, recopilamos información que alguno de
//                     nuestros partners/marcas nos proporcione, siempre
//                     salvaguardando el buen tratamiento de datos personales.
//                   </p>
//                 </li>
//               </ul>
//             </li>
//           </ol>
//         </div>
//       </Container>
//     </AppLayout>
//   );
// };

// export default Politicas;
