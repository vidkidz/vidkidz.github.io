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

    m.hideStatus();
}

const loadSwfbyUrl = (Module, url) => {
    console.log('WAFLASH> load from =>', url);
    const res = Module.ccall('reopenBuffer', 'int', ['string', 'number', 'number'], [url, 0, 0]);
}

const loadSwfByFile = (Module, file) => {
    if (file.size < (256 * 1024 * 1024)) {
        const reader = new FileReader();
        reader.onload = function (loadEvent) {
            console.log('WAFLASH> file loaded!')
            const content = loadEvent.target.result;
            if (content) {
                console.log('WAFLASH> content length: ' + content.byteLength);
                let uint8Array = new Uint8Array(content);
                let buf = Module._malloc(uint8Array.length);
                Module.HEAP8.set(uint8Array, buf);
                let res = Module.ccall('reopenBuffer',
                    'int',
                    ['string', 'number', 'number'],
                    [file.name, buf, uint8Array.length]);
                Module._free(buf);
                if (res == 0) {
                    console.warn('WAFLASH> load failed!');
                }
            }
            else {
                console.warn('WAFLASH> load result empty!');
            }
        };
        reader.readAsArrayBuffer(file);
    }
    else {
        console.warn('WAFLASH> ignoring dropped file because it is too big');
    }
}

const initDragAndDrop = (m) => {
    const o = document; //m['canvas'];
    o.addEventListener('dragenter', (e) => {e.stopPropagation(); e.preventDefault();}, false);
    o.addEventListener('dragleave', (e) => {e.stopPropagation(); e.preventDefault();}, false);
    o.addEventListener('dragover', (e) => {e.stopPropagation(); e.preventDefault();}, false);
    o.addEventListener('drop', (e) => {e.stopPropagation(); e.preventDefault(); loadSwf(m, e); }, false);

    m.setStatus(navigator.language && navigator.language.startsWith('ko') ? 'SWF 파일을 재생하려면 드래그하여 여기에 놓으세요!' : 'Drop a SWF file here to play!');
}

export default createModule;
export { initDragAndDrop };
