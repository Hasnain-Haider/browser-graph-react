
## Available Scripts

### building docker image
### `docker buildx build --platform=linux/amd64 -t graph-react:amd64 .`

### upload to artifactory
#### `docker tag graph-react:amd64 us-west1-docker.pkg.dev/sturdy-index-386400/docker/graph-react:amd64`
#### `docker push us-west1-docker.pkg.dev/sturdy-index-386400/docker/graph-react:amd64`

### Dev
#### `npm start`
* Dev server
#### `npm run build`
* Build app for production