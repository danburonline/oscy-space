# Oscy Space

## 🚀 Starting Guides

- Clone the repository with `git clone`.
- Navigate to the project directory with `cd oscy-space`.

### Use The Oscy Restful API

- Navigate to <https://oscy.space/api>.
- Fetch whatever you want, e.g. <https://oscy.space/api/rooms?q=all>.
- More information on how to use our API will be added to the [Wiki](https://github.com/danburonline/oscy-space/wiki).

### Run The Build Server

- Build the Docker image with `docker build . -t oscy-space:latest`.
- Run the created image with `docker run -p 3000:3000 oscy-space`.
- Access the site on <http://localhost:3000>.

### Run The Development Server

- Install all dependencies with `yarn`.
- Start the NextJS development server with `yarn dev`.
- Access the site on <http://localhost:3000>.

### Deploy The Project

- Push your branch to this repository and create a merge request.
- As soon as your MR is merged, it will trigger a GitHub Action to automatically deploy the Docker image to Google Cloud Run.
- Access the deployed application via <https://oscy.space>.
