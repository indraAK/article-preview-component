document.addEventListener('DOMContentLoaded', () => {
   const shareMedia = document.getElementById('share-media');

   document.body.addEventListener('click', (e) => {
      if (e.target.classList.contains('share__icon-btn') ||
         e.target.classList.contains('fa-share') ||
         e.target.classList.contains('share__media')) {
         shareMedia.classList.add('open');
      } else {
         shareMedia.classList.remove('open');
      }
   })
});