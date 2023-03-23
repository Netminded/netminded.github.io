# NetMinded Website Gatsby/React App

To use the project clone it then cd into to the `netminded-website` folder and checkout the development branch.

### `git checkout development`

Once on the `development` branch run the following to install necessary packages. Gatsby can be installed using `npm install -g gatsby-cli` if you don't already have it. 

### `npm install`

Create an `.env.production` file in the project root and fill the required variables `GATSBY_ANALYTICS_ID=""`, `GATSBY_FORMSPREE_ID=""`, `GATSBY_FORMSPREE_ID_NETPLAYBOOK=""` and `GATSBY_FORMSPREE_ID_NETPROVE=""` with the NetMinded Google Analytics ID and Formspree ID. 
An `.env.development` file should also be created too and this needs to contain the Formspree variables `GATSBY_FORMSPREE_ID=""`, `GATSBY_FORMSPREE_ID_NETPLAYBOOK=""` and `GATSBY_FORMSPREE_ID_NETPROVE=""` to test Formspree locally (Formspree domain whitelisting may need to be temporarily disabled to test locally). Variables which are required in the browser should be prefixed with `GATSBY_`. Variables which are to be kept private should not be prefixed.

To run the app in development mode and to view it in your browser at [http://localhost:8000](http://localhost:8000) run the following. 
The browser will reload when you make changes. You may also see any lint errors in the console. 
**Note - All changes to project files should be made to new branches e.g. `git checkout -b feature/feature-name` and merged into the `development` branch, not the `main` branch.** 
To view and query the site data (which uses GraphQL), open [http://localhost:8000/___graphql](http://localhost:8000/___graphql) to use the GraphiQL browser IDE. 

### `gatsby develop`

When adding new pages, importing new fonts and before building and deploying the following should be run. This creates/updates a `font-preload-cache.json` file which pre-loads fonts for improved performance.

### `npm run preload-fonts`

Any input fields and other relevant content should be validated and tested. This project uses Jest for testing. To create new tests either add a `__test__` folder where one does not exist or add test files to existing `__test__` folders. Test files should include a relevant name followed by `test.js`, for example, `contact.test.js`. Tests can be run using the following:

### `npm test`

When ready to deploy the following can be run. As part of the deployment a build script runs building the app for production to the `public` folder. 
Once complete the `public` folder is automatically deployed to the `main` branch on GitHub which has been configured in the `package.json` file.

### 🚀 `npm run deploy`

**Note - Any changes to the `main` branch will appear live on the production website. So the `main` branch should only be used for deployment of the `build` static files and not have other branches merged into it or commits made to it directly.**

