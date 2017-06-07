'use strict'

        var image=document.getElementById("circle");
        var currentPos = 0;
        var images = ["https://s3.amazonaws.com/ryaong792/Ryan1.jpg","https://s3.amazonaws.com/ryaong792/Ryan2.jpg","https://s3.amazonaws.com/ryaong792/Ryan3.jpg"]

        function volgendefoto() {
            if (++currentPos >= images.length) currentPos = 0;
            image.src = images[currentPos];
        }

        setInterval(volgendefoto, 1000);
