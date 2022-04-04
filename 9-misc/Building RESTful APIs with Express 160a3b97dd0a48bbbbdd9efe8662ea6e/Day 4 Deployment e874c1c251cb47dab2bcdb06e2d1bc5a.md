# Day 4 Deployment

<table class="properties"><tbody><tr class="odd property-row property-row-text"><th><span class="icon property-icon"><img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTQgMTQiIHN0eWxlPSJ3aWR0aDoxNHB4O2hlaWdodDoxNHB4O2Rpc3BsYXk6YmxvY2s7ZmlsbDpyZ2JhKDU1LCA1MywgNDcsIDAuNCk7ZmxleC1zaHJpbms6MDstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuIiBjbGFzcz0idHlwZXNUZXh0Ij48cGF0aCBkPSJNNyw0LjU2ODE4IEM3LDQuMjkyMDQgNi43NzYxNCw0LjA2ODE4IDYuNSw0LjA2ODE4IEwwLjUsNC4wNjgxOCBDMC4yMjM4NTgsNC4wNjgxOCAwLDQuMjkyMDQgMCw0LjU2ODE4IEwwLDUuNjEzNjQgQzAsNS44ODk3OCAwLjIyMzg1OCw2LjExMzY0IDAuNSw2LjExMzY0IEw2LjUsNi4xMTM2NCBDNi43NzYxNCw2LjExMzY0IDcsNS44ODk3OCA3LDUuNjEzNjQgTDcsNC41NjgxOCBaIE0wLjUsMSBDMC4yMjM4NTgsMSAwLDEuMjIzODU4IDAsMS41IEwwLDIuNTQ1NDUgQzAsMi44MjE2IDAuMjIzODU4LDMuMDQ1NDUgMC41LDMuMDQ1NDUgTDEyLjUsMy4wNDU0NSBDMTIuNzc2MSwzLjA0NTQ1IDEzLDIuODIxNiAxMywyLjU0NTQ1IEwxMywxLjUgQzEzLDEuMjIzODU4IDEyLjc3NjEsMSAxMi41LDEgTDAuNSwxIFogTTAsOC42ODE4MiBDMCw4Ljk1Nzk2IDAuMjIzODU4LDkuMTgxODIgMC41LDkuMTgxODIgTDExLjUsOS4xODE4MiBDMTEuNzc2MSw5LjE4MTgyIDEyLDguOTU3OTYgMTIsOC42ODE4MiBMMTIsNy42MzYzNiBDMTIsNy4zNjAyMiAxMS43NzYxLDcuMTM2MzYgMTEuNSw3LjEzNjM2IEwwLjUsNy4xMzYzNiBDMC4yMjM4NTgsNy4xMzYzNiAwLDcuMzYwMjIgMCw3LjYzNjM2IEwwLDguNjgxODIgWiBNMCwxMS43NSBDMCwxMi4wMjYxIDAuMjIzODU4LDEyLjI1IDAuNSwxMi4yNSBMOS41LDEyLjI1IEM5Ljc3NjE0LDEyLjI1IDEwLDEyLjAyNjEgMTAsMTEuNzUgTDEwLDEwLjcwNDU1IEMxMCwxMC40Mjg0IDkuNzc2MTQsMTAuMjA0NTUgOS41LDEwLjIwNDU1IEwwLjUsMTAuMjA0NTUgQzAuMjIzODU4LDEwLjIwNDU1IDAsMTAuNDI4NCAwLDEwLjcwNDU1IEwwLDExLjc1IFoiPjwvcGF0aD48L3N2Zz4=" class="typesText" /></span>Aux Notes</th><td></td></tr><tr class="even property-row property-row-text"><th><span class="icon property-icon"><img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTQgMTQiIHN0eWxlPSJ3aWR0aDoxNHB4O2hlaWdodDoxNHB4O2Rpc3BsYXk6YmxvY2s7ZmlsbDpyZ2JhKDU1LCA1MywgNDcsIDAuNCk7ZmxleC1zaHJpbms6MDstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuIiBjbGFzcz0idHlwZXNUZXh0Ij48cGF0aCBkPSJNNyw0LjU2ODE4IEM3LDQuMjkyMDQgNi43NzYxNCw0LjA2ODE4IDYuNSw0LjA2ODE4IEwwLjUsNC4wNjgxOCBDMC4yMjM4NTgsNC4wNjgxOCAwLDQuMjkyMDQgMCw0LjU2ODE4IEwwLDUuNjEzNjQgQzAsNS44ODk3OCAwLjIyMzg1OCw2LjExMzY0IDAuNSw2LjExMzY0IEw2LjUsNi4xMTM2NCBDNi43NzYxNCw2LjExMzY0IDcsNS44ODk3OCA3LDUuNjEzNjQgTDcsNC41NjgxOCBaIE0wLjUsMSBDMC4yMjM4NTgsMSAwLDEuMjIzODU4IDAsMS41IEwwLDIuNTQ1NDUgQzAsMi44MjE2IDAuMjIzODU4LDMuMDQ1NDUgMC41LDMuMDQ1NDUgTDEyLjUsMy4wNDU0NSBDMTIuNzc2MSwzLjA0NTQ1IDEzLDIuODIxNiAxMywyLjU0NTQ1IEwxMywxLjUgQzEzLDEuMjIzODU4IDEyLjc3NjEsMSAxMi41LDEgTDAuNSwxIFogTTAsOC42ODE4MiBDMCw4Ljk1Nzk2IDAuMjIzODU4LDkuMTgxODIgMC41LDkuMTgxODIgTDExLjUsOS4xODE4MiBDMTEuNzc2MSw5LjE4MTgyIDEyLDguOTU3OTYgMTIsOC42ODE4MiBMMTIsNy42MzYzNiBDMTIsNy4zNjAyMiAxMS43NzYxLDcuMTM2MzYgMTEuNSw3LjEzNjM2IEwwLjUsNy4xMzYzNiBDMC4yMjM4NTgsNy4xMzYzNiAwLDcuMzYwMjIgMCw3LjYzNjM2IEwwLDguNjgxODIgWiBNMCwxMS43NSBDMCwxMi4wMjYxIDAuMjIzODU4LDEyLjI1IDAuNSwxMi4yNSBMOS41LDEyLjI1IEM5Ljc3NjE0LDEyLjI1IDEwLDEyLjAyNjEgMTAsMTEuNzUgTDEwLDEwLjcwNDU1IEMxMCwxMC40Mjg0IDkuNzc2MTQsMTAuMjA0NTUgOS41LDEwLjIwNDU1IEwwLjUsMTAuMjA0NTUgQzAuMjIzODU4LDEwLjIwNDU1IDAsMTAuNDI4NCAwLDEwLjcwNDU1IEwwLDExLjc1IFoiPjwvcGF0aD48L3N2Zz4=" class="typesText" /></span>Day</th><td>d4</td></tr><tr class="odd property-row property-row-text"><th><span class="icon property-icon"><img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTQgMTQiIHN0eWxlPSJ3aWR0aDoxNHB4O2hlaWdodDoxNHB4O2Rpc3BsYXk6YmxvY2s7ZmlsbDpyZ2JhKDU1LCA1MywgNDcsIDAuNCk7ZmxleC1zaHJpbms6MDstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuIiBjbGFzcz0idHlwZXNUZXh0Ij48cGF0aCBkPSJNNyw0LjU2ODE4IEM3LDQuMjkyMDQgNi43NzYxNCw0LjA2ODE4IDYuNSw0LjA2ODE4IEwwLjUsNC4wNjgxOCBDMC4yMjM4NTgsNC4wNjgxOCAwLDQuMjkyMDQgMCw0LjU2ODE4IEwwLDUuNjEzNjQgQzAsNS44ODk3OCAwLjIyMzg1OCw2LjExMzY0IDAuNSw2LjExMzY0IEw2LjUsNi4xMTM2NCBDNi43NzYxNCw2LjExMzY0IDcsNS44ODk3OCA3LDUuNjEzNjQgTDcsNC41NjgxOCBaIE0wLjUsMSBDMC4yMjM4NTgsMSAwLDEuMjIzODU4IDAsMS41IEwwLDIuNTQ1NDUgQzAsMi44MjE2IDAuMjIzODU4LDMuMDQ1NDUgMC41LDMuMDQ1NDUgTDEyLjUsMy4wNDU0NSBDMTIuNzc2MSwzLjA0NTQ1IDEzLDIuODIxNiAxMywyLjU0NTQ1IEwxMywxLjUgQzEzLDEuMjIzODU4IDEyLjc3NjEsMSAxMi41LDEgTDAuNSwxIFogTTAsOC42ODE4MiBDMCw4Ljk1Nzk2IDAuMjIzODU4LDkuMTgxODIgMC41LDkuMTgxODIgTDExLjUsOS4xODE4MiBDMTEuNzc2MSw5LjE4MTgyIDEyLDguOTU3OTYgMTIsOC42ODE4MiBMMTIsNy42MzYzNiBDMTIsNy4zNjAyMiAxMS43NzYxLDcuMTM2MzYgMTEuNSw3LjEzNjM2IEwwLjUsNy4xMzYzNiBDMC4yMjM4NTgsNy4xMzYzNiAwLDcuMzYwMjIgMCw3LjYzNjM2IEwwLDguNjgxODIgWiBNMCwxMS43NSBDMCwxMi4wMjYxIDAuMjIzODU4LDEyLjI1IDAuNSwxMi4yNSBMOS41LDEyLjI1IEM5Ljc3NjE0LDEyLjI1IDEwLDEyLjAyNjEgMTAsMTEuNzUgTDEwLDEwLjcwNDU1IEMxMCwxMC40Mjg0IDkuNzc2MTQsMTAuMjA0NTUgOS41LDEwLjIwNDU1IEwwLjUsMTAuMjA0NTUgQzAuMjIzODU4LDEwLjIwNDU1IDAsMTAuNDI4NCAwLDEwLjcwNDU1IEwwLDExLjc1IFoiPjwvcGF0aD48L3N2Zz4=" class="typesText" /></span>External Links</th><td></td></tr><tr class="even property-row property-row-text"><th><span class="icon property-icon"><img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTQgMTQiIHN0eWxlPSJ3aWR0aDoxNHB4O2hlaWdodDoxNHB4O2Rpc3BsYXk6YmxvY2s7ZmlsbDpyZ2JhKDU1LCA1MywgNDcsIDAuNCk7ZmxleC1zaHJpbms6MDstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuIiBjbGFzcz0idHlwZXNUZXh0Ij48cGF0aCBkPSJNNyw0LjU2ODE4IEM3LDQuMjkyMDQgNi43NzYxNCw0LjA2ODE4IDYuNSw0LjA2ODE4IEwwLjUsNC4wNjgxOCBDMC4yMjM4NTgsNC4wNjgxOCAwLDQuMjkyMDQgMCw0LjU2ODE4IEwwLDUuNjEzNjQgQzAsNS44ODk3OCAwLjIyMzg1OCw2LjExMzY0IDAuNSw2LjExMzY0IEw2LjUsNi4xMTM2NCBDNi43NzYxNCw2LjExMzY0IDcsNS44ODk3OCA3LDUuNjEzNjQgTDcsNC41NjgxOCBaIE0wLjUsMSBDMC4yMjM4NTgsMSAwLDEuMjIzODU4IDAsMS41IEwwLDIuNTQ1NDUgQzAsMi44MjE2IDAuMjIzODU4LDMuMDQ1NDUgMC41LDMuMDQ1NDUgTDEyLjUsMy4wNDU0NSBDMTIuNzc2MSwzLjA0NTQ1IDEzLDIuODIxNiAxMywyLjU0NTQ1IEwxMywxLjUgQzEzLDEuMjIzODU4IDEyLjc3NjEsMSAxMi41LDEgTDAuNSwxIFogTTAsOC42ODE4MiBDMCw4Ljk1Nzk2IDAuMjIzODU4LDkuMTgxODIgMC41LDkuMTgxODIgTDExLjUsOS4xODE4MiBDMTEuNzc2MSw5LjE4MTgyIDEyLDguOTU3OTYgMTIsOC42ODE4MiBMMTIsNy42MzYzNiBDMTIsNy4zNjAyMiAxMS43NzYxLDcuMTM2MzYgMTEuNSw3LjEzNjM2IEwwLjUsNy4xMzYzNiBDMC4yMjM4NTgsNy4xMzYzNiAwLDcuMzYwMjIgMCw3LjYzNjM2IEwwLDguNjgxODIgWiBNMCwxMS43NSBDMCwxMi4wMjYxIDAuMjIzODU4LDEyLjI1IDAuNSwxMi4yNSBMOS41LDEyLjI1IEM5Ljc3NjE0LDEyLjI1IDEwLDEyLjAyNjEgMTAsMTEuNzUgTDEwLDEwLjcwNDU1IEMxMCwxMC40Mjg0IDkuNzc2MTQsMTAuMjA0NTUgOS41LDEwLjIwNDU1IEwwLjUsMTAuMjA0NTUgQzAuMjIzODU4LDEwLjIwNDU1IDAsMTAuNDI4NCAwLDEwLjcwNDU1IEwwLDExLjc1IFoiPjwvcGF0aD48L3N2Zz4=" class="typesText" /></span>Other</th><td></td></tr><tr class="odd property-row property-row-multi_select"><th><span class="icon property-icon"><img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTQgMTQiIHN0eWxlPSJ3aWR0aDoxNHB4O2hlaWdodDoxNHB4O2Rpc3BsYXk6YmxvY2s7ZmlsbDpyZ2JhKDU1LCA1MywgNDcsIDAuNCk7ZmxleC1zaHJpbms6MDstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuIiBjbGFzcz0idHlwZXNNdWx0aXBsZVNlbGVjdCI+PHBhdGggZD0iTTQsMyBDNCwyLjQ0NzcxNSA0LjQ0NzcxNSwyIDUsMiBMMTIsMiBDMTIuNTUyMywyIDEzLDIuNDQ3NzE2IDEzLDMgQzEzLDMuNTUyMjggMTIuNTUyMyw0IDEyLDQgTDUsNCBDNC40NDc3MTUsNCA0LDMuNTUyMjggNCwzIFogTTQsNyBDNCw2LjQ0NzcxNSA0LjQ0NzcxNSw2IDUsNiBMMTIsNiBDMTIuNTUyMyw2IDEzLDYuNDQ3NzE2IDEzLDcgQzEzLDcuNTUyMjggMTIuNTUyMyw4IDEyLDggTDUsOCBDNC40NDc3MTUsOCA0LDcuNTUyMjggNCw3IFogTTQsMTEgQzQsMTAuNDQ3NzE1IDQuNDQ3NzE1LDEwIDUsMTAgTDEyLDEwIEMxMi41NTIzLDEwIDEzLDEwLjQ0NzcxNiAxMywxMSBDMTMsMTEuNTUyMjggMTIuNTUyMywxMiAxMiwxMiBMNSwxMiBDNC40NDc3MTUsMTIgNCwxMS41NTIyOCA0LDExIFogTTIsNCBDMS40NDc3MTUyNSw0IDEsMy41NTIyODQ3NSAxLDMgQzEsMi40NDc3MTUyNSAxLjQ0NzcxNTI1LDIgMiwyIEMyLjU1MjI4NDc1LDIgMywyLjQ0NzcxNTI1IDMsMyBDMywzLjU1MjI4NDc1IDIuNTUyMjg0NzUsNCAyLDQgWiBNMiw4IEMxLjQ0NzcxNTI1LDggMSw3LjU1MjI4NDc1IDEsNyBDMSw2LjQ0NzcxNTI1IDEuNDQ3NzE1MjUsNiAyLDYgQzIuNTUyMjg0NzUsNiAzLDYuNDQ3NzE1MjUgMyw3IEMzLDcuNTUyMjg0NzUgMi41NTIyODQ3NSw4IDIsOCBaIE0yLDEyIEMxLjQ0NzcxNTI1LDEyIDEsMTEuNTUyMjg0NyAxLDExIEMxLDEwLjQ0NzcxNTMgMS40NDc3MTUyNSwxMCAyLDEwIEMyLjU1MjI4NDc1LDEwIDMsMTAuNDQ3NzE1MyAzLDExIEMzLDExLjU1MjI4NDcgMi41NTIyODQ3NSwxMiAyLDEyIFoiPjwvcGF0aD48L3N2Zz4=" class="typesMultipleSelect" /></span>Tags</th><td></td></tr></tbody></table>

# Objective 1 - extract configuration into environment variables

## **Overview**

When you develop and run code on your machine, you run code in its `development` environment.

Most companies will have a `testing` environment similar to production; it has the same versions of software and runs on similar, albeit weaker, hardware. They do this to mitigate the risks when moving the to `production` servers that clients use.

Ideally, all environments run on the same stack, platforms, and versions. Still, it is common to have developers on the Windows platform with the latest version of Node.js and the `production` server running on Linux with the last stable version of Node.js. For those cases, it is essential to have a `testing/staging` environment that also runs the Linux and Node.js versions found on the production server. A staging environment can detect any regressions that may occur during deployment before code reaches the user.

## **Follow Along**

### **Starter Code**

You can find the starter code for this tutorial in [this repository (Links to an external site.)](https://github.com/LambdaSchool/webapi-iv-guided).

### **Configure a "server" Script**

The server is not configured to run when typing `npm run server`. It is also not using `nodemon` to restart on changes. Let's configure both.

-   Add `nodemon` as a development-time dependency: `npm install -D nodemon`.

<!-- -->

-   Open `package.json` and modify the "test" script to read:

<!-- -->

    "server": "nodemon index.js"

-   Test from a terminal.

When we deploy the API, Heroku will look for a "start" script that uses `node` to run the server. We need to add that script to `package.json`.

### **Add "start" script**

Add a "start" script that uses `node` instead of `nodemon` to run `index.js`.

The "scripts" section of `package.json` should look like so:

    "scripts": {
        "start": "node index.js",
        "server": "nodemon index.js"
      },

After this change, Heroku knows how to start our server but needs to control which `port` the API will use. The port is hard-coded as 4,000, and we need to make it dynamic.

### **Make the Port Dynamic**

-   Introduce `process.env`.

<!-- -->

-   Introduce the [dotenv npm module (Links to an external site.)](https://www.npmjs.com/package/dotenv). Show the documentation on `npmjs.com`.

<!-- -->

-   Install `dotenv` as a production dependency.

<!-- -->

-   Change `index.js`:

<!-- -->

    // it's recommended to load configuration for .env as early as possible
    require('dotenv').config(); // add this line as the first thing to run1

    const server = require('./api/server.js');

    // we'll read the port from the server environment if it is there
    // Heroku will have the PORT environment variable set
    const port = process.env.PORT || 5000;

    // we can now use that port, if set up by heroku or read from .env or 5000 as a default if not set
    server.listen(port, () => {
      console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
    });

-   add a `.env` file to the root folder (next to `package.json`) with the following content

<!-- -->

    PORT=4000

It is recommended to add `.env` to `.gitignore` to prevent it from being uploaded to GitHub.

The reason is that most systems add configuration secrets to that file that are different between environments. Some examples are database connection credentials or API keys for external services.

-   **stop the server** and restart it again, or the server will not detect the change to `.env`.

<!-- -->

-   the API should be using port 4000 now as specified in `.env`.

## **Challenge**

Extract all secrets and values that need to change between `development` and `production` environments.

# Objective 2 - deploy a web-api to Heroku

## **Overview**

In this lesson, we'll deploy an Express API to Heroku.

## **Follow Along**

### **Starter Code**

This tutorial continues to work with [this repository (Links to an external site.)](https://github.com/LambdaSchool/webapi-iv-guided).

### **Setup Continuous Deployment from GitHub**

-   Login to Heroku and create an app.

<!-- -->

-   In the "Deploy" tab, select *GitHub* in the "Deployment Method" section.

<!-- -->

-   Heroku will ask GitHub for authorization to access. You need to approve access.

<!-- -->

-   Search for the repository (their fork of the starter code) in the "Connect to GitHub" section and click *Connect*.

<!-- -->

-   In the "Automatic deploys" section, pick the "main" branch and click "Enable Automatic Deploys".
    -   Note that Heroku automatically deploys to `master`. We strongly encourage you to use a `main` branch instead. You can override this automatic deployment using `git push -f heroku main:master`

<!-- -->

-   In the "Manual deploy" section, click on "Deploy Branch" to kick-start the first deployment.

<!-- -->

-   Scroll to the top and move to the "Overview" tab to see the deployment in action.

<!-- -->

-   On the top right, click "Open App".

The deployment succeeded, but opening the App fails because the fork on GitHub still has the old code without the dynamic port and new `start` script.

Our application displays `Application Error` and information on how to open the logs. We can fix it by pushing our changes to the main branch on GitHub.

-   Commit and push the changes to the forked repository on GitHub

<!-- -->

-   Check the "Overview" tab on Heroku and wait for the message showing that Heroku deployed the application.

<!-- -->

-   Refresh the browser where the application is running, and there should be an empty array. Success!

Use Postman to connect to the API and post a few shoutouts to people that deserve it.

An example:

    {
      "shout": "to all students for successfully deploying an empty array for the world to see and marvel!"
    }

## **Add an Environment Variable on Heroku**

-   change the GET to `/` endpoint to include a message of the day as part of the response.

<!-- -->

    server.get('/', async (req, res) => {
      try {
        const shoutouts = await db('shoutouts');
        const messageOfTheDay = process.env.MOTD || 'Hello World!'; // add this line
        res.status(200).json({ motd: messageOfTheDay, shoutouts }); // change this line
      } catch (error) {
        console.error('\nERROR', error);
        res.status(500).json({ error: 'Cannot retrieve the shoutouts' });
      }
    });

-   add the MOTD to the `.env` file.

<!-- -->

    PORT=4000
    MOTD=Hello from my computer

-   **restart the server** running on localhost.

<!-- -->

-   request the API running on localhost to verify that the `motd` property is there.

<!-- -->

-   commit and push to GitHub.

<!-- -->

-   once the new changes are deployed, refresh the application on Heroku. Note that we get the default `Hello World!` message because the environment variable does not exist on Heroku.

Now we are going to add that configuration variable on Heroku.

-   on Heroku, go to the "Settings" tab.

<!-- -->

-   Click on "Reveal Config Vars" in the "Config Vars" section.

<!-- -->

-   add a `MOTD` config var with the value *"Hello from the World Wide Web"*

<!-- -->

-   refresh the application.

Note the environment variable on Heroku overrides the value in code and the value in our local `.env` file. We can use environment variables to store API keys, database connection information, and any other secrets in a more secure manner.

## **Challenge**

Using the information you've obtained from the guided project, create an application on Heroku to set-up continuous deployment from one of your GitHub repositories.
