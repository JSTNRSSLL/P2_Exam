const pictureSources = ["img/MOON1.jpeg", "img/MOON2.jpeg", "img/MOON3.jpeg"];
const videoSources = ["vid/Falls1.mp4", "vid/Falls2.mp4", "vid/Falls3.mp4"];

        function changePicture(index) {
            const picture = document.getElementById(`picture${index}`);
            picture.src = pictureSources[index - 1];
        }

        function changeVideo(index) {
            const video = document.getElementById(`video${index}`);
            video.src = videoSources[index - 1];
        }