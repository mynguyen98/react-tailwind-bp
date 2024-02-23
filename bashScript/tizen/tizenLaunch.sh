
if [ "$#" -ne 3 ]; then
    echo "Usage: $0 <address:port> <certificate> <device_id>"
    exit 1
fi

# Assign arguments to variables
address="$1"
certificate="$2"
device_id="$3"

# Build and install on the specified device
tizen build-web -- ./tizenos/build 
cd ./tizenos/build/.buildResult
tizen package -t wgt -s "$certificate" -- .
tizen install -t "$device_id" --name Msky.wgt -- .
sdb -s "$address" shell 0 debug SU38eJHGbA.Msky