document.addEventListener('DOMContentLoaded', function () {
    var mobileBtn = document.getElementById('mobile_btn');
    
    mobileBtn.addEventListener('click', function () {
        var mobileMenu = document.getElementById('mobile_menu');
        
        // Alterna a classe 'active' do menu
        mobileMenu.classList.toggle('active');
        
        // Alterna a rotação do ícone do botão
        var icon = mobileBtn.querySelector('i');
        if (icon) {
            icon.style.transform = icon.style.transform === 'rotate(90deg)' ? 'rotate(0deg)' : 'rotate(90deg)';
        }
    });
});