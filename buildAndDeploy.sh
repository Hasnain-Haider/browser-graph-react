#! /bin/bash
docker build -t graph-react:amd64 .
docker tag graph-react:amd64 us-west1-docker.pkg.dev/sturdy-index-386400/docker/graph-react:amd64
docker push us-west1-docker.pkg.dev/sturdy-index-386400/docker/graph-react:amd64
