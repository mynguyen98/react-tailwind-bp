# Run the build commands with variables
npm run build:tizenos
shopt -s dotglob  #config to copy deep file .
cp -rf ./tizenos/tizenConfig/* ./tizenos/build
shopt -u dotglob
rm -rf ./tizenos/build/webOSTV-dev.js
rm -rf ./tizenos/build/webOSTV.js
sed -i 's/<script src=".\/webOSTV.js" charset="utf-8"><\/script>//g' ./tizenos/build/index.html
sed -i 's/<script src=".\/webOSTV-dev.js" charset="utf-8"><\/script>//g' ./tizenos/build/index.html


# Build and install on the specified device
