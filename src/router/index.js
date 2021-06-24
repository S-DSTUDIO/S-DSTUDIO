import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
      children: [{
        path: '',
        name: 'Index',
        component: () => import('../views/Index.vue'),
      },
      {
        path: 'projects/:id',
        name: 'Projects',
        component: () => import('../views/Projects.vue'),
      },
      {
        path: 'postproduction/:id',
        name: 'PostProduction',
        component: () => import('../views/PostProduction.vue'),
      },
      {
        path: 'singleproject/:id',
        name: 'Singleproject',
        component: () => import('../views/SingleProject.vue'),
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue'),
      }],
    },
  ],
});

export default router;
