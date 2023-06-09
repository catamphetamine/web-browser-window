export default function isFullScreenSupported() {
	return Boolean(document.documentElement.requestFullscreen && document.exitFullscreen)
}