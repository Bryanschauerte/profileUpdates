export function template( bundleName, body, title ){
  return `
    <!DOCTYPE html>
    <html>
      <head>

        <title>${title}</title>
        <link rel="stylesheet" href="public/main.css">
      </head>

      <body>
        <div id="root">${body}</div>
      </body>

      <script src="/assets/${bundleName}.js"></script>
    </html>
  `;
};

// <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>z
export function createPage(html) {
  return `
    <!doctype html>
    <html>
      <!-- etc. --->
      <body>
        <div id="app">${html}</div>

        <!-- its a string -->

      </body>
    </html>
  `
}
