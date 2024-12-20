// script.js

document.addEventListener("DOMContentLoaded", () => {
    displayOverlay();
    fetchAnnouncement("Bell Ringer! Please Open Your ChromeBooks and complete questions #1-5 about homeostatis and pH.");
});

function gotoUrl() {
    const urlInput = document.getElementById("url-input").value;
    if (urlInput.trim() === "") {
        alert("Please enter a valid URL.");
        return;
    }
    window.location.href = urlInput;
}

function gotoGoogle() {
    window.location.href = "https://google.com";
}

function openUnderProxy() {
    window.location.href = "https://uv.shieldbotlist.xyz/uv/service/hvtrs8%2F-wmoqh%3B109%2Cgktju%60.ko-rgdkrgcvoml-";
}

function gotoProxy(proxy) {
    let url;
    switch (proxy) {
        case "uvplain":
            fetchAnnouncement("Using UV Plain Proxy. It is still in beta, so expect some bugs!");
            url = "https://uv.shieldbotlist.xyz";
            break;
        case "stellar":
            url = "https://flowos.shieldbotlist.xyz";
            break;
        case "flowos":
            url = "https://cyberproxy.shieldbotlist.xyz";
            break;
        default:
            alert("Unknown proxy option.");
            return;
    }
    window.location.href = url;
}

function fetchAnnouncement(customAnnouncement) {
    const announcement = customAnnouncement ||
        "Welcome! Stay updated with our announcements. Submit your own <a href='https://forms.gle/X9cciDEcrUHgEwaCA'>here</a>.";

    document.getElementById("announcement").innerHTML = announcement;
    document.getElementById("modal-announcement").innerHTML = announcement;
}

function displayOverlay() {
    document.getElementById("overlay").style.display = "flex";
}

function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
}
