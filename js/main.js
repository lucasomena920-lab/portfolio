document.body.classList.add('js');
const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); menu.focus(); } });
const copy = document.querySelector('.copy');
if (copy) copy.addEventListener('click', async () => { const status = document.querySelector('#copy-status'); try { await navigator.clipboard.writeText('lucasomena920@gmail.com'); status.textContent = 'Email copiado.'; } catch { status.textContent = 'Selecione e copie o endereço apresentado acima.'; } });
const form = document.querySelector('#contact-form');
if (form) form.addEventListener('submit', event => { event.preventDefault(); const data = new FormData(form); const body = `Olá, Lucas!\n\n${data.get('message').trim()}\n\n${data.get('name').trim()}`; window.location.href = `mailto:lucasomena920@gmail.com?subject=${encodeURIComponent(data.get('subject'))}&body=${encodeURIComponent(body)}`; });
