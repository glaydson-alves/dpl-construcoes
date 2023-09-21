const enviarButton = document.getElementById('submit')
        const loader = document.getElementById('loader')

        enviarButton.addEventListener('click', function() {
            
            enviarButton.style.display = 'none'
            loader.style.display = 'block'
        });