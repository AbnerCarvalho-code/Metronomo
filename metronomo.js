let menuToggle = document.querySelector('.menuToggle')
        let body = document.querySelector('body')
        let navigation = document.querySelector('.navigation')
        
        menuToggle.onclick = function() {
            menuToggle.classList.toggle('active')
            navigation.classList.toggle('active')
        }