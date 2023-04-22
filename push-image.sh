#! /bin/bash

#RANDOM_STRING="$(cat /dev/urandom | LC_ALL=C tr -dc 'a-zA-Z0-9' | fold -w 50 | head -n 1 | tr A-Z a-z)"
IMAGE_VERSION="$(cat ./package.json | jq -r '.version')"
#IMAGE_TAG="${IMAGE_VERSION}${RANDOM_STRING}"
IMAGE_TAG="${IMAGE_VERSION}"

docker tag $IMAGE_ID $AWS_ACC_ID.dkr.ecr.$AWS_REGION.amazonaws.com/flight-booking:$IMAGE_TAG
docker push $AWS_ACC_ID.dkr.ecr.$AWS_REGION.amazonaws.com/flight-booking:$IMAGE_TAG
