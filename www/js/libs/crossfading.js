/*
  This file is part of the Ofi Labs X2 project.

  Copyright (C) 2011 Ariya Hidayat <ariya.hidayat@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of the <organization> nor the
      names of its contributors may be used to endorse or promote products
      derived from this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

/*global window:true Int16Array:true */

function Crossfader(canvas, image1, image2) {

    var context = canvas.getContext('2d'),
        width = canvas.width,
        height = canvas.height,
        len = 4 * width * height,
        result = context.createImageData(width, height),
        offset = new Array(len),
        delta = new Array(len),
        timestamp = Date.now(),
        frames = 0,
        value = 0,
        ticker;

    /** @roshow: Center images on canvas when drawing them **/
    var image2_x = (width - image2.width)/2,
        image2_y = (height - image2.height)/2;
    if (!image1.isData) {
        image1_x = (width - image1.width)/2,
        image1_y = (height - image1.height)/2
    }
    function init() {
        var i, source, target;
        
        canvas.style.opacity = 0;

        /** @roshow: added the canvas clearing, so we get 2 distinct images even if they're not 
          the same size. Swapped order so first image is last one loaded. **/
        context.clearRect(0, 0, width, height);
        context.drawImage(image2, image2_x, image2_y);
        target = context.getImageData(0, 0, width, height);

        context.clearRect(0, 0, width, height);
        if (!image1.isData) {
            context.drawImage(image1, image1_x, image1_y);
            source = context.getImageData(0, 0, width, height);
        }
        else {
            source = image1.img;
            context.putImageData (source, 0, 0);    
        }

        result = context.createImageData(width, height);
        for (i = 0; i < len; i += 1) {
            offset[i] = target.data[i];
            delta[i] = source.data[i] - target.data[i];
            result.data[i] = 255;
        }

        /** @roshow: Using the current image to start fading, so commenting out this fill **/
        // context.fillStyle = '#fff';
        // context.fillRect(0, 0, width, height);

        canvas.style.opacity = 1;
    }

    function tween(factor) {
        var i, r;
        r = result.data;
        for (i = 0; i < len; i += 4) {
            r[i] = offset[i] + delta[i] * factor;
            r[i + 1] = offset[i + 1] + delta[i + 1] * factor;
            r[i + 2] = offset[i + 2] + delta[i + 2] * factor;
            /** @roshow: added this for transparency **/
            r[i + 3] = offset[i + 3] + delta[i + 3] * factor;
        }
        context.putImageData(result, 0, 0);
        frames += 1;
    }

    function start() {
        /** @roshow: value = 0 is perfectly between the 2 images. Not sure why 1.2 is fully on the first image **/
        value = 1.2;
        timestamp = Date.now();
        ticker = window.setInterval(function () {
            value += 0.1;
            tween(0.5 + 0.5 * Math.sin(value));
            // console.log(value);
            /** @roshow: Aaaaaaaaaaaand... no clue why 4.5 is the end of a complete crossfade. **/
            if (value >= 4.5) window.clearInterval(ticker);
        }, 1000 / 180);
    }

    function stop() {
        window.clearInterval(ticker);
    }

    function frameRate() {
        return (1000 * frames / (Date.now() - timestamp));
    }

    if (typeof Int16Array !== 'undefined') {
        offset = new Int16Array(len);
        delta = new Int16Array(len);
    }

    init();

    return {
        value: value,
        start: start,
        stop: stop,
        frameRate: frameRate
    };
}