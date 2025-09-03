document.addEventListener('DOMContentLoaded', function() {
	document.querySelectorAll('.card-media').forEach(function(media) {
		var img = media.querySelector('.card-img');
		var video = media.querySelector('.card-video');
		if (img && video) {
			media.addEventListener('mouseenter', function() {
				img.style.display = 'none';
				video.style.display = 'block';
				video.play();
			});
			media.addEventListener('mouseleave', function() {
				video.pause();
				video.currentTime = 0;
				video.style.display = 'none';
				img.style.display = 'block';
			});
		}
	});
});
// This file is intentionally left blank.