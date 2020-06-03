.PHONY: init dev

# 初始化项目
init:
	yarn

# 开发
dev: init
	yarn start

build: init
	yarn run build
