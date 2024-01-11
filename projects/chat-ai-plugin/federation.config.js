const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'chat-ai-plugin',

  exposes: {
    './Component': './projects/chat-ai-plugin/src/app/app.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: false, /*includeSecondaries: true, */requiredVersion: 'auto' })
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    '@xmagic/nz-formly/echarts',
    'ng-zorro-antd/cron-expression',
    'ng-zorro-antd/color-picker',
    'ng-zorro-antd/graph',
    '@angular/common/locales'
    // Add further packages you don't need at runtime
  ]

});
