const videoThumbnails = document.querySelectorAll(".video-thumbnail");

videoThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", () => {
        const videoPath = thumbnail.getAttribute("data-video");
        const videoWindow = window.open('', '_blank', 'width=800,height=600');
        videoWindow.document.write(`
            <html>
            <head>
                <title>Video Player</title>
                <style>
                    body { margin: 0; }
                    video { width: 100%; height: 100%; }
                </style>
            </head>
            <body>
                <video controls autoplay>
                    <source src="${videoPath}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </body>
            </html>
        `);
    });
});
