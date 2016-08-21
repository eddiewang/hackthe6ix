// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/app',
      name: 'mainApp',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/MainApp/reducer'),
          System.import('containers/Notification/reducer'),
          System.import('containers/Notification/sagas'),
          System.import('containers/MainApp/sagas'),
          System.import('containers/MainApp'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, notificationReducer, notificationSagas, sagas, component]) => {
          injectReducer('app', reducer.default);
          injectReducer('notifications', notificationReducer.default);
          injectSagas(notificationSagas.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      childRoutes: [{
        path: '/app/journal',
        name: 'journal',
        getComponent(nextState, cb) {
          const importModules = Promise.all([
            System.import('containers/Journal/reducer'),
            System.import('containers/Journal/sagas'),
            System.import('containers/Journal'),
          ]);

          const renderRoute = loadModule(cb);

          importModules.then(([reducer, sagas, component]) => {
            injectReducer('journal', reducer.default);
            injectSagas(sagas.default);
            renderRoute(component);
          });

          importModules.catch(errorLoading);
        },
      }, {
        path: '/app/analytics',
        name: 'analytics',
        getComponent(nextState, cb) {
          const importModules = Promise.all([
            System.import('containers/Analytics/reducer'),
            System.import('containers/Analytics/sagas'),
            System.import('containers/Analytics'),
          ]);

          const renderRoute = loadModule(cb);

          importModules.then(([reducer, sagas, component]) => {
            injectReducer('analytics', reducer.default);
            injectSagas(sagas.default);
            renderRoute(component);
          });

          importModules.catch(errorLoading);
        },
      }]
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
