# Prime numbers API
Welcome to prime numbers API.

# Commands

1. Install dependecies
	```shell
	npm i
	```
2. Execute in development mode
	```shell
	npm run dev
	```
3. Execute tests
	```shell
	npm run tests
	```
## Build docker image

	docker build --no-cache -t prime-numbers:1.0 .
	
## Run docker container
	
	docker run -d --name prime-numbers -p 8085:8085 -d prime-numbers:1.0
	
## Explore API

Go to: http://localhost:8085



*by Orlando Marín - 08/2022*