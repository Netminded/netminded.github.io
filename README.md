# NetMinded Website Gatsby/React App

To use the project clone it then cd into to the `netminded-website` folder and checkout the development branch.

### `git checkout development`

Once on the `development` branch run the following to install necessary packages. Gatsby can be installed using `npm install -g gatsby-cli` if you don't already have it. 

### `npm install`

To run the app in development mode and to view it in your browser at [http://localhost:8000](http://localhost:8000) run the following. 
The browser will reload when you make changes. You may also see any lint errors in the console. 
**Note - All changes to project files should be made to new branches e.g. `git checkout -b feature/feature-name` and merged into the `development` branch, not the `main` branch.** 
To view and query the site data (which uses GraphQL), open [http://localhost:8000/___graphql](http://localhost:8000/___graphql) to use the GraphiQL browser IDE. 

### `gatsby develop`

When ready to deploy the following can be run. As part of the deployment a build script runs building the app for production to the `public` folder. 
Once complete the `public` folder is automatically deployed to the `main` branch on GitHub which has been configured in the `package.json` file.

### 🚀 `npm run deploy`

**Note - Any changes to the `main` branch will appear live on the production website. So the `main` branch should only be used for deployment of the `build` static files and not have other branches merged into it or commits made to it directly.**

