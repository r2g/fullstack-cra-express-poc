bootstrap: setup-npm-deps start

setup-npm-deps:
	cd ./api && yarn
	cd ./frontend && yarn
start:
	nf start
