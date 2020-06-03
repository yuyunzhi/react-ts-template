.PHONY: init dev lint

# 初始化项目
init:
	yarn

# 开发
dev: init
	yarn lint
	yarn start

# 打包项目
build:clean
	yarn
	yarn run build
	rm -rf build/**/*.map
	make zip

# 代码格式化
lint:
	yarn lint

clean:
	rm -rf build
	rm -rf build.zip

# 压缩打包文件
zip:
	zip -r build.zip build
