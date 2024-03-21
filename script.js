document.addEventListener('DOMContentLoaded', function () {
    var mobileBtn = document.getElementById('mobile_btn');
    
    mobileBtn.addEventListener('click', function () {
        var mobileMenu = document.getElementById('mobile_menu');
        
        // Alternaando a classe 'active' do menu
        mobileMenu.classList.toggle('active');
        var icon = mobileBtn.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-x');
        }
    });
});