document.addEventListener('DOMContentLoaded', function() {
 console.log('Document loaded and ready!');
});

function copyToClipboard(text) {
 const el = document.createElement('textarea');
 el.value = text;
 document.body.appendChild(el);
 el.select();
 document.execCommand('copy');
 document.body.removeChild(el);
 alert('Commande copiée dans le presse-papiers!');
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.table-of-contents a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);
            
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});
