if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <device_name>"
    exit 1
fi

# Assign arguments to variables
device_name="$1"
ares-install --device "$device_name"  ./webos/apk/msky.app_1.0.3_all.ipk
ares-launch --device "$device_name" msky.app
ares-inspect --device "$device_name" --app msky.app --open