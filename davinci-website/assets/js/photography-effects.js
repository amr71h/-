(() => {
    'use strict';
    const markup = `
        <div class="photo-fx-flash" id="photoFxFlash" aria-hidden="true"></div>
        <div class="photo-fx-shutter" id="photoFxShutter" aria-hidden="true"></div>
        <div class="photo-fx-aperture" id="photoFxAperture" aria-hidden="true"><svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="2"/><path d="M50 5L50 50L85 25ZM50 50L95 50L70 85ZM50 50L50 95L15 70ZM50 50L5 50L30 15ZM50 50L85 75L50 95ZM50 50L15 25L5 50Z" fill="none" stroke="currentColor" stroke-width="1.2" opacity=".55"/><circle cx="50" cy="50" r="6" fill="currentColor"/></svg></div>
        <div class="photo-fx-filmstrip top" id="photoFxFilmTop" aria-hidden="true"></div><div class="photo-fx-filmstrip bottom" id="photoFxFilmBottom" aria-hidden="true"></div>
        <div class="photo-fx-lens-flare" id="photoFxLensFlare" aria-hidden="true"></div>
        <div class="photo-fx-viewfinder" id="photoFxViewfinder" aria-hidden="true"><span class="vf-corner tl"></span><span class="vf-corner tr"></span><span class="vf-corner bl"></span><span class="vf-corner br"></span><span class="vf-rec">REC</span><span class="vf-battery"><span></span></span><span class="vf-focus"></span></div>`;
    const get = id => document.getElementById(id);
    const toggleFor = (id, duration, active = true) => { const element = get(id); if (!element) return; element.classList.toggle('active', active); if (active && duration) window.setTimeout(() => element.classList.remove('active'), duration); };
    const PhotoFx = {
        flash: duration => toggleFor('photoFxFlash', duration || 200),
        shutter: duration => toggleFor('photoFxShutter', duration || 220),
        aperture: duration => toggleFor('photoFxAperture', duration || 800),
        filmstrip: duration => { toggleFor('photoFxFilmTop', duration || 1200); toggleFor('photoFxFilmBottom', duration || 1200); },
        lensFlare: () => toggleFor('photoFxLensFlare', 900),
        viewfinder: on => toggleFor('photoFxViewfinder', 0, on !== false),
        capture: () => { PhotoFx.flash(180); PhotoFx.shutter(180); PhotoFx.aperture(600); if (navigator.userActivation?.isActive && 'vibrate' in navigator) try { navigator.vibrate(25); } catch (error) {} },
        film: () => { PhotoFx.filmstrip(1400); PhotoFx.lensFlare(); }
    };
    const boot = () => {
        if (document.getElementById('photoFxFlash')) return;
        document.body.insertAdjacentHTML('beforeend', markup);
        window.PhotoFx = PhotoFx;
        document.querySelectorAll('img:not([data-no-photo-fx]), .photo, .grid-item, .card').forEach(element => {
            element.addEventListener('click', () => PhotoFx.flash(120), { passive: true });
        });
        document.querySelectorAll('form button[type="submit"], .form-button, .shop-submit').forEach(button => {
            button.addEventListener('click', () => PhotoFx.capture(), { passive: true });
        });
        document.querySelectorAll('[data-open-dialog]').forEach(button => {
            button.addEventListener('click', () => PhotoFx.aperture(600), { passive: true });
        });
        const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } })) : null;
        document.querySelectorAll('.photo-fx-reveal').forEach(element => observer ? observer.observe(element) : element.classList.add('visible'));
    };
    document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', boot, { once: true }) : boot();
})();
