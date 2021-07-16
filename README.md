# Oscy Space

Oscy Space is the project name for two experimental and immersive spatial audio proof of concepts implemented with React-Three-Fiber, where people can explore interesting nature scenes from Switzerland.

## Branching and Continuous Deployment

This repository divides into three branches which will trigger GitHub Actions pipelines to deploy changes to the corresponding environments automatically:

- **Proof of Concept:** Merge your POC branches into the `proof-of-concept` branch to deploy to <https://poc.oscy.space>. Keep in mind that this branch is totally different from the other two branches since we're using this branch as a playground for testing things not directly bound to any upcoming release.
- **Staging:** Merge your feature branches into the `staging` branch to deploy to <https://staging.oscy.space>. Use this Git [styleguide](https://udacity.github.io/git-styleguide/) for your PRs and commits.
- **Main:** Merge `staging` into this branch to deploy to <https://oscy.space>. Only do this when `staging` is ready for a release.

## Starting Guides

### Run The Build Server

- Build the Docker image with `docker build . -t oscy-space:latest`.
- Run the created image with `docker run -p 3000:3000 oscy-space`.
- Access the site on <http://localhost:3000>.

### Run The Development Server

- Install all dependencies with `yarn`.
- Start the NextJS development server with `yarn dev`.
- Access the site on <http://localhost:3000>.
