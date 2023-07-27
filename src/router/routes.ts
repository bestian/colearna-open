import { RouteRecordRaw } from 'vue-router';

/*  所有頁面的路由和檔名 */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'sandbox', component: () => import('pages/SandBox.vue') },
      {
        path: 'member_only',
        component: () => import('pages/MemberOnlyPage.vue'),
      },
      { path: 'profile', component: () => import('pages/ProfilePage.vue') },
      { path: 'assesment', component: () => import('pages/AssesmentPage.vue') },
      { path: 'cart', component: () => import('pages/CartPage.vue') },
      { path: 'admin', component: () => import('pages/AdminPage.vue') },
      {
        path: 'teacher_board',
        component: () => import('pages/TeacherBoardPage.vue'),
      },
      {
        path: 'teacher_user_info/:tid',
        component: () => import('pages/TeacherUserInfoPage.vue'),
      },
      {
        path: 'teacher_info/:tid',
        component: () => import('pages/TeacherInfoPage.vue'),
      },
      { path: 'teachers', component: () => import('pages/TeacherPage.vue') },
      {
        path: 'sample_article',
        component: () => import('pages/SampleArticlePage.vue'),
      },
      { path: 'articles', component: () => import('pages/ArticlesPage.vue') },
      {
        path: 'zoom_in_art/:aid',
        component: () => import('pages/Zoom_In_Art_Page.vue'),
      },
      { path: 'my_point', component: () => import('pages/PointPage.vue') },
      { path: 'cal', component: () => import('pages/CalPage.vue') },
      { path: 'my_fav', component: () => import('pages/FavPage.vue') },
      { path: 'classes', component: () => import('pages/ClassesPage.vue') },
      {
        path: 'class_info/:cid',
        component: () => import('pages/ClassInfoPage.vue'),
      },
      { path: 'about', component: () => import('pages/AboutPage.vue') },
      { path: 'faq', component: () => import('pages/FAQPage.vue') },
      { path: 'term', component: () => import('pages/TermPage.vue') },
      { path: 'privacy', component: () => import('pages/PrivacyPage.vue') },
      { path: 'contact', component: () => import('pages/ContactPage.vue') },
      { path: 'news', component: () => import('pages/NewsPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
