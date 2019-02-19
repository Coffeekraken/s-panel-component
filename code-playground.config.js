module.exports = {
  // server port
  port: 3000,

  // title
  title: 's-panel-component',

  // layout
  layout: 'right',

  // compile server
  compileServer: {
    // compile server port
    port: 4000
  },

  // editors
  editors: {
    html: {
      language: 'html',
      data: `
        <div class="panel m-b">
          <div class="mo">
            <div class="mo__content">
              <p class="p">Aenean a ultricies hendrerit donec suspendisse vehicula sagittis curabitur consequat erat senectus torquent elementum felis blandit habitasse urna lacus et quis mi pharetra venenatis odio dictumst laoreet in sapien lacinia scelerisque facilisis tristique fusce montes fermentum proin sem tellus imperdiet pellentesque bibendum arcu faucibus vivamus tempus luctus metus vitae cubilia</p>
            </div>
            <div class="mo__content p-r">
              <s-icon driver="fontawesome" class="s-bigger" icon="far fa-user"></s-icon>
            </div>
          </div>
        </div>
        <div class="panel panel--primary m-b">
          <div class="mo">
            <div class="mo__content p-r">
              <s-icon driver="fontawesome" class="s-bigger" icon="far fa-user"></s-icon>
            </div>
            <div class="mo__content">
              <p class="p">Aenean a ultricies hendrerit donec suspendisse vehicula sagittis curabitur consequat erat senectus torquent elementum felis blandit habitasse urna lacus et quis mi pharetra venenatis odio dictumst laoreet in sapien lacinia scelerisque facilisis tristique fusce montes fermentum proin sem tellus imperdiet pellentesque bibendum arcu faucibus vivamus tempus luctus metus vitae cubilia</p>
            </div>
          </div>
        </div>
        <div class="panel panel--secondary m-b">
          <div class="mo">
            <div class="mo__content p-r">
              <img src="https://source.unsplash.com/random/200x200" />
            </div>
            <div class="mo__content">
              <p class="p m-b">Aenean a ultricies hendrerit donec suspendisse vehicula sagittis curabitur consequat erat senectus torquent elementum felis blandit habitasse urna lacus et quis mi pharetra venenatis odio dictumst laoreet in sapien lacinia scelerisque facilisis tristique fusce montes fermentum proin sem tellus imperdiet pellentesque bibendum arcu faucibus vivamus tempus luctus metus vitae cubilia</p>
              <p class="p">Aenean a ultricies hendrerit donec suspendisse vehicula sagittis curabitur consequat erat senectus torquent elementum felis blandit habitasse urna lacus et quis mi pharetra venenatis odio dictumst laoreet in sapien lacinia scelerisque facilisis tristique fusce montes fermentum proin sem tellus imperdiet pellentesque bibendum arcu faucibus vivamus tempus luctus metus vitae cubilia</p>
            </div>
          </div>
        </div>
        <div class="panel panel--success m-b">
          <div class="mo">
            <div class="mo__content p-r">
              <s-icon driver="fontawesome" class="s-bigger" icon="far fa-user"></s-icon>
            </div>
            <div class="mo__content">
              <p class="p">Aenean a ultricies hendrerit donec suspendisse vehicula sagittis curabitur consequat erat senectus torquent elementum felis blandit habitasse urna lacus et quis mi pharetra venenatis odio dictumst laoreet in sapien lacinia scelerisque facilisis tristique fusce montes fermentum proin sem tellus imperdiet pellentesque bibendum arcu faucibus vivamus tempus luctus metus vitae cubilia</p>
            </div>
          </div>
        </div>
        <div class="panel panel--error m-b">
          <div class="mo">
            <div class="mo__content">
              <p class="p m-b">Aenean a ultricies hendrerit donec suspendisse vehicula sagittis curabitur consequat erat senectus torquent elementum felis blandit habitasse urna lacus et quis mi pharetra venenatis odio dictumst laoreet in sapien lacinia scelerisque facilisis tristique fusce montes fermentum proin sem tellus imperdiet pellentesque bibendum arcu faucibus vivamus tempus luctus metus vitae cubilia</p>
              <p class="p">Aenean a ultricies hendrerit donec suspendisse vehicula sagittis curabitur consequat erat senectus torquent elementum felis blandit habitasse urna lacus et quis mi pharetra venenatis odio dictumst laoreet in sapien lacinia scelerisque facilisis tristique fusce montes fermentum proin sem tellus imperdiet pellentesque bibendum arcu faucibus vivamus tempus luctus metus vitae cubilia</p>
            </div>
            <div class="mo__content p-l">
              <img src="https://source.unsplash.com/random/200x200" />
            </div>
          </div>
        </div>
        <div class="panel panel--warning m-b">
          <div class="mo">
            <div class="mo__content p-r">
              <img src="https://source.unsplash.com/random/200x200" />
            </div>
            <div class="mo__content">
              <p class="p m-b">Aenean a ultricies hendrerit donec suspendisse vehicula sagittis curabitur consequat erat senectus torquent elementum felis blandit habitasse urna lacus et quis mi pharetra venenatis odio dictumst laoreet in sapien lacinia scelerisque facilisis tristique fusce montes fermentum proin sem tellus imperdiet pellentesque bibendum arcu faucibus vivamus tempus luctus metus vitae cubilia</p>
              <p class="p">Aenean a ultricies hendrerit donec suspendisse vehicula sagittis curabitur consequat erat senectus torquent elementum felis blandit habitasse urna lacus et quis mi pharetra venenatis odio dictumst laoreet in sapien lacinia scelerisque facilisis tristique fusce montes fermentum proin sem tellus imperdiet pellentesque bibendum arcu faucibus vivamus tempus luctus metus vitae cubilia</p>
            </div>
          </div>
        </div>
        <div class="panel panel--info m-b">
          <div class="mo">
            <div class="mo__content">
              <p class="p">Aenean a ultricies hendrerit donec suspendisse vehicula sagittis curabitur consequat erat senectus torquent elementum felis blandit habitasse urna lacus et quis mi pharetra venenatis odio dictumst laoreet in sapien lacinia scelerisque facilisis tristique fusce montes fermentum proin sem tellus imperdiet pellentesque bibendum arcu faucibus vivamus tempus luctus metus vitae cubilia</p>
            </div>
            <div class="mo__content p-r">
              <s-icon driver="fontawesome" class="s-bigger" icon="far fa-user"></s-icon>
            </div>
          </div>
        </div>
      `
    },
    css: {
      language: 'scss',
      data: `
        @import 'node_modules/coffeekraken-sugar/index';
        @import 'node_modules/coffeekraken-s-typography-component/index';
        @import 'index';
        @include s-init();
        @include s-classes();
        @include s-typography-classes();
        body {
          padding: s-space(bigger);
        }
        @include s-panel-classes(
          $colors: default primary secondary success error warning info
        );
      `
    },
    js: {
      language: 'js',
      data: `
        import 'coffeekraken-s-icon-component'
      `
    }
  }
}
