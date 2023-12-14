const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

const pingElement = document.getElementById('pingPong')
const pingPong = async () => {
    const response = await window.versions.ping()
    pingElement.innerText = `response from ipc ping: ${response}`
}

pingPong()
