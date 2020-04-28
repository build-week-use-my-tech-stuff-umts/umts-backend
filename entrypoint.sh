#!/bin/bash
printf "\n\n======================================\n"
printf "Making database migrations"
printf "\n======================================\n\n"
export NODE_ENV=development

npm run migrate
npm run seed

printf "\n\n======================================\n"
printf "Start the application"
printf "\n======================================\n\n"
npm run start:dev

exit 0
