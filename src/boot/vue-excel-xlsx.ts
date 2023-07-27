import { boot } from 'quasar/wrappers'
import VueExcelXlsx from 'vue-excel-xlsx'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {  //, router
  app
    .use(VueExcelXlsx)
})
