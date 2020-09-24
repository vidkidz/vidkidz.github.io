// Copyright 2020 Jinsoo Park. All rights reserved.

import createWaflashModule from './waflash.js';

const WAFLASH_BASE_URL = "https://vidkidz.github.io/wasm/";

const createWaflash = (src) => {
    if (!src) src = '';

    let waflash = {
        arguments: [ src ],
        preRun: [],
        postRun: [],
        locateFile(path, prefix) {
            return WAFLASH_BASE_URL + path;
        },
        print(text) {
            console.log(text);
        },
        printErr(text) {
            console.error(text);
        },
        canvas: (function () {
            const canvas = document.getElementById("canvas");
            // As a default initial behavior, pop up an alert when webgl context is lost. To make your
            // application robust, you may want to override this behavior before shipping!
            // See http://www.khronos.org/registry/webgl/specs/latest/1.0/#5.15.2
            canvas.addEventListener("webglcontextlost", function (e) { alert('WebGL context lost. You will need to reload the page.'); e.preventDefault(); }, false);
            return canvas;
        })(),
        statusElement: (() => document.getElementById('waflashStatus'))(),
        setStatus: (text) => {
            if (!text) return;

            text = text.replace(/Downloading data\.\.\. \((\d+)\/(\d+)\)/, (match, receivedBytes, totalBytes) => {
                return 'Downloading player... ' + Math.floor(parseInt(receivedBytes)/parseInt(totalBytes)*100) + '%';
            });

            console.log('WAFLASH> ' + text);

            if (text.indexOf('Loading SWF...') == 0) {
                text = `Loading SWF <svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="48px" height="20px" viewBox="0 0 64 16" xml:space="preserve"><path fill="#beb5f9" fill-opacity="0.42" d="M6.4,4.8A3.2,3.2,0,1,1,3.2,8,3.2,3.2,0,0,1,6.4,4.8Zm12.8,0A3.2,3.2,0,1,1,16,8,3.2,3.2,0,0,1,19.2,4.8ZM32,4.8A3.2,3.2,0,1,1,28.8,8,3.2,3.2,0,0,1,32,4.8Zm12.8,0A3.2,3.2,0,1,1,41.6,8,3.2,3.2,0,0,1,44.8,4.8Zm12.8,0A3.2,3.2,0,1,1,54.4,8,3.2,3.2,0,0,1,57.6,4.8Zm12.8,0A3.2,3.2,0,1,1,67.2,8,3.2,3.2,0,0,1,70.4,4.8Zm12.8,0A3.2,3.2,0,1,1,80,8,3.2,3.2,0,0,1,83.2,4.8ZM96,4.8A3.2,3.2,0,1,1,92.8,8,3.2,3.2,0,0,1,96,4.8Zm12.8,0A3.2,3.2,0,1,1,105.6,8,3.2,3.2,0,0,1,108.8,4.8Zm12.8,0A3.2,3.2,0,1,1,118.4,8,3.2,3.2,0,0,1,121.6,4.8Z"/><g><path fill="#654ff0" fill-opacity="1" d="M-42.7,3.84A4.16,4.16,0,0,1-38.54,8a4.16,4.16,0,0,1-4.16,4.16A4.16,4.16,0,0,1-46.86,8,4.16,4.16,0,0,1-42.7,3.84Zm12.8-.64A4.8,4.8,0,0,1-25.1,8a4.8,4.8,0,0,1-4.8,4.8A4.8,4.8,0,0,1-34.7,8,4.8,4.8,0,0,1-29.9,3.2Zm12.8-.64A5.44,5.44,0,0,1-11.66,8a5.44,5.44,0,0,1-5.44,5.44A5.44,5.44,0,0,1-22.54,8,5.44,5.44,0,0,1-17.1,2.56Z"/><animateTransform attributeName="transform" type="translate" values="23 0;36 0;49 0;62 0;74.5 0;87.5 0;100 0;113 0;125.5 0;138.5 0;151.5 0;164.5 0;178 0" calcMode="discrete" dur="1170ms" repeatCount="indefinite"/></g></svg>`;
            }

            waflash.statusElement.innerHTML = text;
            waflash.showStatus();
        },
        showStatus() { // helper function
            waflash.statusElement.style.display = 'block';
        },
        hideStatus() { // helper function
            waflash.statusElement.style.display = 'none';
        },
        unload() {},
    };

    window.onerror = (message, url, line) => {
        waflash.setStatus('Ooops! An error occurred. Reload the page and try again.');
    };

    document.getElementById('canvas').addEventListener("keydown", function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
    });

    document.onmousedown = (function () {
        const canvasElement = document.getElementById('canvas');
        let focused = false;
        return function (ev) {
            if (ev.target == canvasElement) {
                if (!focused) {
                    canvasElement.focus();
                    focused = true;
                }
            }
            else {
                if (focused) {
                    focused = false;
                }
            }
            return true;
        }
    })();

    waflash.setStatus("Prepairing...");

    createWaflashModule(waflash).then((o) => {
        console.log("WAFLASH> Waflash module created!");
    });
}

export { createWaflash }
