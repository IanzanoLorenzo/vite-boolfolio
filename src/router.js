import {createRouter, createWebHistory} from 'vue-router';  

import AppHome from './pages/AppHome.vue';
import AppProjects from './pages/AppProjects.vue';
import AppProjectShow from './pages/AppProjectShow.vue';
import AppNotFound from './pages/AppNotFound.vue';
import ProjectNotFound from './pages/ProjectNotFound.vue';



const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: AppProjectShow
        },
        {
            path: '/project/not-found',
            name: 'project-not-found',
            component: ProjectNotFound
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: AppNotFound
        },
    ]
});

export {router};