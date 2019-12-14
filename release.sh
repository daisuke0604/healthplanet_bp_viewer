#!/bin/bash

set -euC
cd $(dirname $0)

sudo cp index.html /var/www/html/bp/
sudo cp public/bundle.js /var/www/html/bp/public/
