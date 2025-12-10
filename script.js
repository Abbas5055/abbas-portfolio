// Smooth scrolling & mobile menu toggle
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    // close mobile menu if open
    const nav = document.querySelector('.nav-links');
    if(nav && nav.style.display === 'block') nav.style.display = '';
  });
});

const menuBtn = document.querySelector('.menu-btn');
menuBtn && menuBtn.addEventListener('click', ()=>{
  const nav = document.querySelector('.nav-links');
  if(!nav) return;
  if(nav.style.display === 'block') nav.style.display = '';
  else nav.style.display = 'block';
});
