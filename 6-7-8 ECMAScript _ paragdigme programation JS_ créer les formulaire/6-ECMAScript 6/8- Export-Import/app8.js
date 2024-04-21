//6.8- Export-Import

/**
 * voir index8.html
 *  <script type="module" src="app8.js"></script>
 */

import {data, data1} from './header.js';
import maFonctionExportee from './header.js'; //importe la fonction hello en lui donnant le nom maFonctionExportee ( on peut faire cela car on a qu'un seul 'export default' par page)

console.log(data, data1);
maFonctionExportee();

/**
 * les imports et les exporte sont très utile quand on trvaille avec des frameworks comme React, AngularJS, etc.
 */