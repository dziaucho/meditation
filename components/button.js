function createButton(isImage, content, cls, evt, call, alt = "default") {
    const button = document.createElement("button");
    button.className = cls;
    if (isImage) {
        button.innerHTML = `<img src="${content}" alt="${alt.replace(/"/g, '&quot;')}" />`;
    } else {
        button.textContent = content;
    }
    if (typeof window[`on${evt}`] !== 'undefined') {
        button.addEventListener(evt, call);
    }
    return button;
}