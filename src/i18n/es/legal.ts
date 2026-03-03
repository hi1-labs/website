import type { LegalTranslations } from '../types';

export const legal: LegalTranslations = {
  privacy: {
    meta: {
      title: 'Política de privacidad — App Name — hi1 labs',
      description: 'Política de privacidad de App Name por hi1 labs. Descubre cómo manejamos tus datos.',
      ogTitle: 'Política de privacidad — hi1 labs',
      ogDescription: 'Descubre cómo hi1 labs maneja tus datos. Recopilamos lo mínimo posible y nunca vendemos tu información personal.',
    },
    header: {
      eyebrow: 'Legal',
      title: 'Política de privacidad',
      lastUpdated: 'Última actualización: 1 de marzo de 2026',
    },
    contentHtml: `
  <h2>1. Introducción</h2>
  <p>Esta Política de privacidad describe cómo <strong>hi1 labs</strong> ("nosotros", "nos", "nuestro") maneja la información en relación con <strong>App Name</strong> ("la Aplicación"). Nos comprometemos a proteger tu privacidad y a ser transparentes sobre nuestras prácticas de datos.</p>
  <p><strong>Nuestro principio fundamental:</strong> recopilamos la menor cantidad de datos posible y nunca vendemos tu información personal.</p>

  <h2>2. Información que recopilamos</h2>
  <p>A continuación se detalla un resumen claro de nuestras prácticas de datos:</p>

  <div class="table-wrapper">
    <table class="data-table">
      <thead>
        <tr>
          <th>Tipo de datos</th>
          <th>¿Se recopila?</th>
          <th>Propósito</th>
          <th>¿Se comparte?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Registros de fallos</td>
          <td><span class="badge badge-yes">Sí</span></td>
          <td>Corregir errores y mejorar la estabilidad (a través de Firebase Crashlytics)</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Analítica anónima</td>
          <td><span class="badge badge-yes">Sí</span></td>
          <td>Comprender qué funciones se utilizan (a través de Firebase Analytics)</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Contenido del usuario</td>
          <td><span class="badge badge-yes">Sí</span></td>
          <td>Almacenado localmente solo en tu dispositivo</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Información personal</td>
          <td><span class="badge badge-no">No</span></td>
          <td>—</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Datos de ubicación</td>
          <td><span class="badge badge-no">No</span></td>
          <td>—</td>
          <td>No</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>3. Servicios de terceros</h2>
  <p>La Aplicación utiliza los siguientes servicios de terceros que pueden recopilar datos según sus propias políticas de privacidad:</p>
  <ul>
    <li><strong>Firebase Analytics</strong> (Google) — analítica anónima de uso. <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">Política de privacidad</a></li>
    <li><strong>Firebase Crashlytics</strong> (Google) — informes de fallos. <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">Política de privacidad</a></li>
  </ul>

  <h2>4. Almacenamiento y seguridad de datos</h2>
  <ul>
    <li>Todo el contenido del usuario se almacena <strong>localmente en tu dispositivo</strong></li>
    <li>Los datos analíticos son procesados por Firebase según sus estándares de seguridad</li>
    <li>No mantenemos servidores propios que almacenen tus datos personales</li>
  </ul>

  <h2>5. Retención y eliminación de datos</h2>
  <ul>
    <li><strong>Datos de Firebase</strong> se retienen hasta 14 meses, luego se eliminan automáticamente</li>
    <li><strong>Datos locales</strong> se eliminan al desinstalar la Aplicación o borrar sus datos</li>
    <li>Puedes solicitar la eliminación de datos analíticos contactándonos</li>
  </ul>

  <h2>6. Privacidad infantil</h2>
  <p>La Aplicación no está dirigida a menores de 13 años. No recopilamos datos de niños intencionalmente. Si crees que hemos recopilado datos de un menor inadvertidamente, contáctanos y los eliminaremos de inmediato.</p>

  <h2>7. Tus derechos</h2>
  <p>Dependiendo de tu ubicación, puedes tener derecho a:</p>
  <ul>
    <li>Acceder a los datos que tenemos sobre ti</li>
    <li>Solicitar la eliminación de tus datos</li>
    <li>Optar por no participar en la recopilación analítica</li>
    <li>Solicitar la portabilidad de datos</li>
  </ul>
  <p>Para ejercer cualquiera de estos derechos, contáctanos usando los datos a continuación.</p>

  <h2>8. Cambios en esta política</h2>
  <p>Podemos actualizar esta Política de privacidad periódicamente. Te notificaremos de cambios importantes actualizando la fecha de "Última actualización". El uso continuado de la Aplicación después de los cambios constituye la aceptación de la política actualizada.</p>

  <h2>9. Contáctanos</h2>
  <p>Si tienes preguntas sobre esta Política de privacidad o nuestras prácticas de datos, contáctanos:</p>
  <ul>
    <li>Email: <a href="mailto:privacy@hi1labs.com">privacy@hi1labs.com</a></li>
    <li>Sitio web: <a href="https://hi1labs.com">hi1labs.com</a></li>
  </ul>`,
  },
  terms: {
    meta: {
      title: 'Términos de servicio — App Name — hi1 labs',
      description: 'Términos de servicio de App Name por hi1 labs.',
      ogTitle: 'Términos de servicio — hi1 labs',
      ogDescription: 'Términos de servicio de App Name por hi1 labs. Lee nuestros términos antes de usar la app.',
    },
    header: {
      eyebrow: 'Legal',
      title: 'Términos de servicio',
      lastUpdated: 'Última actualización: 1 de marzo de 2026',
    },
    contentHtml: `
  <h2>1. Aceptación de los términos</h2>
  <p>Al descargar, instalar o utilizar <strong>App Name</strong> ("la Aplicación"), aceptas vincularte a estos Términos de servicio ("Términos"). Si no estás de acuerdo con estos Términos, no utilices la Aplicación.</p>
  <p>La Aplicación es desarrollada y mantenida por <strong>hi1 labs</strong> ("nosotros", "nos", "nuestro").</p>

  <h2>2. Uso de la Aplicación</h2>
  <p>Aceptas utilizar la Aplicación solo para fines legales y de acuerdo con estos Términos. Aceptas no:</p>
  <ul>
    <li>Utilizar la Aplicación de manera que viole leyes o regulaciones aplicables</li>
    <li>Intentar realizar ingeniería inversa, descompilar o desensamblar la Aplicación</li>
    <li>Utilizar la Aplicación para transmitir contenido dañino, ofensivo o ilegal</li>
    <li>Intentar obtener acceso no autorizado a cualquier parte de la Aplicación</li>
    <li>Utilizar la Aplicación de manera que pueda dañar, deshabilitar o perjudicar su funcionalidad</li>
  </ul>

  <h2>3. Propiedad intelectual</h2>
  <p>La Aplicación y su contenido original, funciones y funcionalidad son propiedad de hi1 labs y están protegidos por leyes internacionales de derechos de autor, marcas comerciales y otras leyes de propiedad intelectual.</p>

  <h2>4. Descargo de garantías</h2>
  <p>La Aplicación se proporciona "TAL CUAL" y "SEGÚN DISPONIBILIDAD" sin garantías de ningún tipo, ya sean expresas o implícitas, incluyendo, pero sin limitarse a, garantías implícitas de comerciabilidad, aptitud para un propósito particular y no infracción.</p>

  <h2>5. Limitación de responsabilidad</h2>
  <p>En la máxima medida permitida por la ley, hi1 labs no será responsable de daños indirectos, incidentales, especiales, consecuentes o punitivos, ni de pérdida de beneficios o ingresos, ya sean directos o indirectos, que surjan de:</p>
  <ul>
    <li>Tu uso o imposibilidad de usar la Aplicación</li>
    <li>Cualquier acceso no autorizado a tus datos</li>
    <li>Cualquier contenido o servicio de terceros al que se acceda a través de la Aplicación</li>
  </ul>

  <h2>6. Cambios en estos términos</h2>
  <p>Podemos actualizar estos Términos periódicamente. Te notificaremos de cambios importantes actualizando la fecha de "Última actualización". El uso continuado de la Aplicación después de los cambios constituye la aceptación de los Términos actualizados.</p>

  <h2>7. Ley aplicable</h2>
  <p>Estos Términos se regirán e interpretarán de acuerdo con las leyes de [Tu jurisdicción], sin tener en cuenta sus disposiciones sobre conflictos de leyes.</p>

  <h2>8. Contáctanos</h2>
  <p>Si tienes preguntas sobre estos Términos, contáctanos:</p>
  <ul>
    <li>Email: <a href="mailto:hello@hi1labs.com">hello@hi1labs.com</a></li>
    <li>Sitio web: <a href="https://hi1labs.com">hi1labs.com</a></li>
  </ul>`,
  },
};
