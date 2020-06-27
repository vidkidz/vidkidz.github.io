// Copyright 2020 Jinsoo Park. All rights reserved.

import createModule from './waflash.js';

const loadSwf = (m, e) => {
    const text = e.dataTransfer.getData('text');
    if (text && /^https?:\/\/.*\.swf$/.test(text)) {
        loadSwfbyUrl(m, text);
    }
    else if (e.dataTransfer.files.length > 0) {
        loadSwfByFile(m, e.dataTransfer.files[0]);
    }
}

const loadSwfbyUrl = (Module, url) => {
    console.log('Waflash> load from =>', url);
    const res = Module.ccall('reopenBuffer', 'int', ['string', 'number', 'number'], [url, 0, 0]);
}

const loadSwfByFile = (Module, file) => {
    if (file.size < (100 * 1024 * 1024)) {
        const reader = new FileReader();
        reader.onload = function (loadEvent) {
            console.log('Waflash> file loaded!')
            const content = loadEvent.target.result;
            if (content) {
                console.log('Waflash> content length: ' + content.byteLength);
                let uint8Array = new Uint8Array(content);
                let buf = Module._malloc(uint8Array.length);
                Module.HEAP8.set(uint8Array, buf);
                let res = Module.ccall('reopenBuffer',
                    'int',
                    ['string', 'number', 'number'],  // name, data, size
                    [file.name, buf, uint8Array.length]);
                Module._free(buf);
                if (res == 0) {
                    console.warn('Waflash> load failed!');
                }
            }
            else {
                console.warn('Waflash> load result empty!');
            }
        };
        reader.readAsArrayBuffer(file);
    }
    else {
        console.warn('Waflash> ignoring dropped file because it is too big')
    }
}

const initDragAndDrop = (module) => {
    const o = module['canvas'];
    o.addEventListener('dragenter', (e) => {e.stopPropagation(); e.preventDefault();}, false);
    o.addEventListener('dragleave', (e) => {e.stopPropagation(); e.preventDefault();}, false);
    o.addEventListener('dragover', (e) => {e.stopPropagation(); e.preventDefault();}, false);
    o.addEventListener('drop', (e) => {e.stopPropagation(); e.preventDefault(); loadSwf(module, e); }, false);
}

export default createModule;
export { initDragAndDrop };
