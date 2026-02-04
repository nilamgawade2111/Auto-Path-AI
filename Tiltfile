# car Tiltfile
# Auto-generated - paths are relative to this directory

docker_build(
    'car',
    '.',
    live_update=[
        sync('./src', '/app/src'),
        sync('./index.html', '/app/index.html'),
        sync('./vite.config.js', '/app/vite.config.js'),
        sync('./tailwind.config.js', '/app/tailwind.config.js'),
        sync('./postcss.config.js', '/app/postcss.config.js'),
    ],
)

k8s_yaml([
    './deployment.yaml',
    './service.yaml',
    './ingressroute.yaml',
])

k8s_resource(
    'car',
    # Removed port_forwards - access via Traefik instead
    auto_init=True,
)
