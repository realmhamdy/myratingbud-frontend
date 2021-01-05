#!/bin/bash

set -o errexit
set -o pipefail
set -o nounset

npm run build

serve -s build
