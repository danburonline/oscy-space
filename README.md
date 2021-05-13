# Oscy Space

## 🚀 Starting Guides

- Clone the repository with `git clone`.
- Navigate into the project directory with `cd oscy-space`.

### Run The Build Server

- Build the Docker image with `docker build . -t oscy-space:latest`.
- Run the created image with `docker run -p 3000:3000 oscy-space`. With the `-p` flag or port forwarding, this allows you to access the site on <http://localhost:3000>.

### Run The Development Server

- Install all dependencies with `yarn`.
- Start the NextJS development server with `yarn dev`.
- Access the site on <http://localhost:3000>.
