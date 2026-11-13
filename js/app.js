function showPage(id) {
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'))
    
    const el = document.getElementById(id)
    
    if (el) el.classList.add('active')
        
        window.scrollTo({ top: 0, behavior:'smooth' })
        
        history.replaceState( null, '', '#' + id)
}
        
document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear())