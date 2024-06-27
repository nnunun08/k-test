const btn = document.querySelectorAll('.btnWrap .button');
btn.forEach((e)=> {
    e.addEventListener('click', (e) => {
        const target = e.currentTarget;
        target.style.transform = 'scale(1.2)';
        setTimeout(() => {
            target.style.transform = '';
        }, 300)
    })
})