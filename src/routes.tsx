import { lazy, Suspense } from 'react';
import type { PartialRouteObject } from 'react-router';
import LoadingScreen from './components/LoadingScreen';
import MainLayout from './components/layout/MainLayout';

const Loadable = (Component:any) => (props:any) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

// Browse pages


// Authentication pages


// Blog pages


// Dashboard pages

// Docs pages


// Error pages


// Projects pages


// Social pages


// Other pages
const Home = Loadable(lazy(() => import('./pages/Home')));

const routes: PartialRouteObject[] = [
  {
    path: '*',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      // {
      //   path: 'browse',
      //   element: <BrowseLayout />,
      //   children: [
      //     {
      //       path: '/',
      //       element: <Browse />
      //     },
      //   ]
      // },
    ]
  },
    // {
  //   path: 'authentication',
  //   children: [
  //     {
  //       path: 'login',
  //       element: (
  //         <GuestGuard>
  //           <Login />
  //         </GuestGuard>
  //       )
  //     },
  //     {
  //       path: 'login-unguarded',
  //       element: <Login />
  //     },
  //     {
  //       path: 'password-recovery',
  //       element: <PasswordRecovery />
  //     },
  //     {
  //       path: 'password-reset',
  //       element: <PasswordReset />
  //     },
  //     {
  //       path: 'register',
  //       element: (
  //         <GuestGuard>
  //           <Register />
  //         </GuestGuard>
  //       )
  //     },
  //     {
  //       path: 'register-unguarded',
  //       element: <Register />
  //     },
  //     {
  //       path: 'verify-code',
  //       element: <VerifyCode />
  //     }
  //   ]
  // },
  // {
  //   path: 'blog',
  //   element: <BlogLayout />,
  //   children: [
  //     {
  //       path: '/',
  //       element: <BlogPostList />
  //     },
  //     {
  //       path: 'new',
  //       element: <BlogPostCreate />
  //     },
  //     {
  //       path: ':postId',
  //       element: <BlogPostDetails />
  //     }
  //   ]
  // },
  // {
  //   path: 'contact',
  //   element: <Contact />
  // },
  // {
  //   path: 'dashboard',
  //   element: (
  //     <AuthGuard>
  //       <DashboardLayout />
  //     </AuthGuard>
  //   ),
  //   children: [
  //     {
  //       path: '/',
  //       element: <Overview />
  //     },
  //     {
  //       path: 'account',
  //       element: <Account />
  //     },
  //     {
  //       path: 'analytics',
  //       element: <Analytics />
  //     },
  //     {
  //       path: 'calendar',
  //       element: <Calendar />
  //     },
  //     {
  //       path: 'chat',
  //       children: [
  //         {
  //           path: '/',
  //           element: <Chat />
  //         },
  //         {
  //           path: 'new',
  //           element: <Chat />
  //         },
  //         {
  //           path: ':threadKey',
  //           element: <Chat />
  //         }
  //       ]
  //     },
  //     {
  //       path: 'customers',
  //       children: [
  //         {
  //           path: '/',
  //           element: <CustomerList />
  //         },
  //         {
  //           path: ':customerId',
  //           element: <CustomerDetails />
  //         },
  //         {
  //           path: ':customerId/edit',
  //           element: <CustomerEdit />
  //         }
  //       ]
  //     },
  //     {
  //       path: 'invoices',
  //       children: [
  //         {
  //           path: '/',
  //           element: <InvoiceList />
  //         },
  //         {
  //           path: ':invoiceId',
  //           element: <InvoiceDetails />
  //         }
  //       ]
  //     },
  //     {
  //       path: 'kanban',
  //       element: <Kanban />
  //     },
  //     {
  //       path: 'mail',
  //       children: [
  //         {
  //           path: '/',
  //           element: (
  //             <Navigate
  //               to="/dashboard/mail/all"
  //               replace
  //             />
  //           )
  //         },
  //         {
  //           path: 'label/:customLabel',
  //           element: <Mail />
  //         },
  //         {
  //           path: 'label/:customLabel/:emailId',
  //           element: <Mail />
  //         },
  //         {
  //           path: ':systemLabel',
  //           element: <Mail />
  //         },
  //         {
  //           path: ':systemLabel/:emailId',
  //           element: <Mail />
  //         }
  //       ]
  //     },
  //     {
  //       path: 'orders',
  //       children: [
  //         {
  //           path: '/',
  //           element: <OrderList />
  //         },
  //         {
  //           path: ':orderId',
  //           element: <OrderDetails />
  //         }
  //       ]
  //     },
  //     {
  //       path: 'finance',
  //       element: <Finance />
  //     },
  //     {
  //       path: 'products',
  //       children: [
  //         {
  //           path: '/',
  //           element: <ProductList />
  //         },
  //         {
  //           path: 'new',
  //           element: <ProductCreate />
  //         }
  //       ]
  //     },
  //     {
  //       path: 'projects',
  //       children: [
  //         {
  //           path: 'browse',
  //           element: <ProjectBrowse />
  //         },
  //         {
  //           path: 'new',
  //           element: <ProjectCreate />
  //         },
  //         {
  //           path: ':projectId',
  //           element: <ProjectDetails />
  //         }
  //       ]
  //     },
  //     {
  //       path: 'social',
  //       children: [
  //         {
  //           path: 'feed',
  //           element: <SocialFeed />
  //         },
  //         {
  //           path: 'profile',
  //           element: <SocialProfile />
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   path: 'docs',
  //   element: <DocsLayout />,
  //   children: [
  //     {
  //       path: '/',
  //       element: (
  //         <Navigate
  //           to="/docs/overview/welcome"
  //           replace
  //         />
  //       )
  //     },
  //     {
  //       path: '*',
  //       element: <Docs />
  //     }
  //   ]
  // },
];

export default routes;
