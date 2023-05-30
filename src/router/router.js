import AutorisationAr from '../components/AutorisationAr.vue'
import ApplicationSelect from '../components/ApplicationSelect.vue'
import SectionSelect from '../components/SectionSelect.vue'
import LicenseKeys from '../components/LicenseKeys.vue';
import PerformersList from '../components/PerformersList.vue'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: AutorisationAr,
        props: true
    },
    {
      path: '/applicaton',
      component: ApplicationSelect,
      props: true
  },
  {
    path: '/section',
    component: SectionSelect,
    props: true
  },
  {
    path: '/keys',
    component: LicenseKeys,
    props: true
  },
  {
    path: '/persons',
    component: PerformersList,
    props: true
  },

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;