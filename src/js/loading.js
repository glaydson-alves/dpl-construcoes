const enviarButton = document.getElementById('submit')
        const loader = document.getElementById('loader')

        enviarButton.addEventListener('click', function() {
            
            enviarButton.style.display = 'none'
            enviarButton.innerHTML = ''
            loader.style.display = 'block'

            setTimeout(function() {
                enviarButton.style.display = 'block'
                enviarButton.innerHTML = 'ENVIAR'
                loader.style.display = 'none'
            }, 3000); 
        });