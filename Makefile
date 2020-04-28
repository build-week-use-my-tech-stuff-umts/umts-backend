PROJECT_NAME ?= umts-backend
DOCKER_DEV_COMPOSE_FILE := ./.docker/dev/docker-compose.yml

# a variable that stores application's container id if the container is running
CONTAINER_ID := $(shell docker-compose -f ./.docker/dev/docker-compose.yml ps -q app)
ifeq ($(CONTAINER_ID),)
	CONTAINER := $(shell docker-compose -f ./.docker/dev/docker-compose.yml ps -q app)
else
	CONTAINER := $(shell docker ps -q --no-trunc | grep $$(docker-compose -f ./.docker/dev/docker-compose.yml ps -q app))
endif

start: 
	@${INFO} "Creating postgresql database volume"
	@ docker volume create --name=umts_data > /dev/null
	@ echo "  "
	@ ${INFO} "Building required docker images"
	@ docker-compose -f $(DOCKER_DEV_COMPOSE_FILE) build app
	@ ${INFO} "Build Completed successfully"
	@ echo " "
	@ ${INFO} "Starting local development server"
	@ docker-compose -f $(DOCKER_DEV_COMPOSE_FILE) up


## run migrations, the application needs to be running using make start
migrate:
ifeq ($(CONTAINER),)
	$(call container_err)
else
	${INFO} "Running migrations"
	@docker-compose -f $(DOCKER_DEV_COMPOSE_FILE) exec app yarn db:migrate
	${SUCCESS} "Migration executed successfully"
endif

## Remove all development containers and volumes
clean:
	${INFO} "Cleaning your local environment"
	${INFO} "Note all ephemeral volumes will be destroyed"
	@ docker-compose -f $(DOCKER_DEV_COMPOSE_FILE) down -v
	# @ docker-compose -f $(DOCKER_TEST_COMPOSE_FILE) down -v
	@ docker volume rm umts_data
	@ docker images -q -f label=application=$(PROJECT_NAME) | xargs -I ARGS docker rmi -f ARGS
	${INFO} "Removing dangling images"
	@ docker images -q -f dangling=true -f label=application=$(PROJECT_NAME) | xargs -I ARGS docker rmi -f ARGS
	@ docker system prune
	${INFO} "Clean complete"


# COLORS
GREEN  := $(shell tput -Txterm setaf 2)
YELLOW := $(shell tput -Txterm setaf 3)
WHITE  := $(shell tput -Txterm setaf 7)
NC := "\e[0m"
RESET  := $(shell tput -Txterm sgr0)

# Shell Functions
INFO := @bash -c 'printf "\n"; printf $(YELLOW); echo "===> $$1"; printf "\n"; printf $(NC)' SOME_VALUE
SUCCESS := @bash -c 'printf "\n"; printf $(GREEN); echo "===> $$1"; printf "\n"; printf $(NC)' SOME_VALUE