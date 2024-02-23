npm run build:webosstaging
shopt -s dotglob
cp -rf ./webos/webosConfig/* ./webos/build
shopt -u dotglob
sed -i 's/<script type="text\/javascript" src="$WEBAPIS\/webapis\/webapis.js"><\/script>//g' ./webos/build/index.html
ares-package ./webos/build -o ./webos/apk/