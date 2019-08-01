const indexTemplate = () => `<!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>UMTS</title>
            <style>
              * {
                box-sizing: border-box;
              }
            html, body{
              height: 100vh;
            }
            body {
              padding: 0;
              margin: 0;
            }
            
            .container {
              border: 1px solid #6784C7;
              height: 100vh;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            .container> div {
          
              font-size: 15rem;
              text-align: center;
              
            }
            hr {
              border: 1px solid #6784C7;
              width: 10rem;
              padding: 0;
              margin: 0;
            }
            @media screen and (min-width: 768px) {
              .error {
                width: 300px;
              }
            }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>User My Tech Stuff</h1>
              <h2><a href="https://documenter.getpostman.com/view/4448465/SVYkw1n2?version=latest">API Docs</a></h2> 
            </div>
          </body>
          </html>`;
export default indexTemplate;
