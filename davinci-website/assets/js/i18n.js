(() => {
    'use strict';

    const supportedLanguages = ['EN', 'AR', 'SV'];
    const languageLabels = { EN: 'English', AR: 'العربية', SV: 'Svenska' };
    const strings = {
        Home: { AR: 'الرئيسية', SV: 'Hem' },
        Store: { AR: 'المتجر', SV: 'Butik' },
        Portfolio: { AR: 'الأعمال', SV: 'Portfolio' },
        History: { AR: 'القصص', SV: 'Berättelser' },
        Service: { AR: 'الخدمات', SV: 'Tjänster' },
        Services: { AR: 'الخدمات', SV: 'Tjänster' },
        Comments: { AR: 'الآراء', SV: 'Omdömen' },
        Contacts: { AR: 'تواصل', SV: 'Kontakt' },
        Reviews: { AR: 'الآراء', SV: 'Omdömen' },
        More: { AR: 'المزيد', SV: 'Mer' },
        'Open menu': { AR: 'فتح القائمة', SV: 'Öppna menyn' },
        'Close menu': { AR: 'إغلاق القائمة', SV: 'Stäng menyn' },
        'Main navigation': { AR: 'التنقل الرئيسي', SV: 'Huvudnavigering' },
        'Back to top': { AR: 'العودة إلى الأعلى', SV: 'Tillbaka till toppen' },
        'MANAL STUDIO home': { AR: 'الصفحة الرئيسية لمنال استوديو', SV: 'MANAL STUDIO startsida' },
        'MANAL STUDIO': { AR: 'منال استوديو', SV: 'MANAL STUDIO' },
        'Manal Studio': { AR: 'منال استوديو', SV: 'Manal Studio' },
        'Wedding & visual storytelling across the Arab world and Europe': { AR: 'تصوير الزفاف والحكايات البصرية في الوطن العربي وأوروبا', SV: 'Bröllop och visuellt berättande i Arabvärlden och Europa' },
        'Manal Studio Stories': { AR: 'قصص منال استوديو', SV: 'Manal Studio-berättelser' },
        'Manal Studio Store': { AR: 'متجر منال استوديو', SV: 'Manal Studio-butik' },
        'Tools for your visual story': { AR: 'أدوات لقصتك البصرية', SV: 'Verktyg för din visuella berättelse' },
        'Leave review': { AR: 'أضف رأيك', SV: 'Lämna ett omdöme' },
        'Your name': { AR: 'اسمك', SV: 'Ditt namn' },
        'Your Name': { AR: 'اسمك', SV: 'Ditt namn' },
        'Contacts or email': { AR: 'رقم التواصل أو البريد الإلكتروني', SV: 'Kontaktuppgift eller e-post' },
        'Phone number or email': { AR: 'رقم الهاتف أو البريد الإلكتروني', SV: 'Telefonnummer eller e-post' },
        'Your message': { AR: 'رسالتك', SV: 'Ditt meddelande' },
        'Your Message': { AR: 'رسالتك', SV: 'Ditt meddelande' },
        'Your review': { AR: 'رأيك', SV: 'Ditt omdöme' },
        Send: { AR: 'إرسال', SV: 'Skicka' },
        'Send review': { AR: 'إرسال الرأي', SV: 'Skicka omdöme' },
        'Close review form': { AR: 'إغلاق نموذج الرأي', SV: 'Stäng omdömesformuläret' },
        'Leave a request': { AR: 'أرسل طلبك', SV: 'Skicka en förfrågan' },
        'Book a Date': { AR: 'احجز موعداً', SV: 'Boka ett datum' },
        'Ask a question': { AR: 'اطرح سؤالاً', SV: 'Ställ en fråga' },
        'All collections': { AR: 'كل الفئات', SV: 'Alla kollektioner' },
        'Back to all collections': { AR: 'العودة إلى كل الفئات', SV: 'Tillbaka till alla kollektioner' },
        'View collection': { AR: 'عرض المجموعة', SV: 'Visa kollektion' },
        Image: { AR: 'الصورة', SV: 'Bild' },
        'Wedding & Visual Storytelling Across the Arab World and Europe': { AR: 'تصوير الزفاف والحكايات البصرية في الوطن العربي وأوروبا', SV: 'Bröllop och visuellt berättande i Arabvärlden och Europa' },
        'Manal Studio creates refined, heartfelt photography for weddings, celebrations, and personal stories. Each experience is shaped around your people, culture, and the place you choose.': { AR: 'تقدم منال استوديو تصويرًا راقيًا وصادقًا لحفلات الزفاف والاحتفالات والقصص الشخصية. نصمم كل تجربة حول أشخاصكم وثقافتكم والمكان الذي تختارونه.', SV: 'Manal Studio skapar förfinade och känslomässiga bilder för bröllop, firanden och personliga berättelser. Varje upplevelse formas kring människorna, kulturen och platsen ni väljer.' },
        'Start your story': { AR: 'ابدأوا قصتكم', SV: 'Börja er berättelse' },
        'Tell Manal Studio about your date, location, and vision. We will reply to discuss the best way to document your celebration.': { AR: 'أخبروا منال استوديو عن الموعد والمكان ورؤيتكم. سنجيبكم لمناقشة أفضل طريقة لتوثيق احتفالكم.', SV: 'Berätta för Manal Studio om ert datum, er plats och er vision. Vi återkommer för att diskutera det bästa sättet att dokumentera ert firande.' },
        'I agree that Manal Studio may use my details to reply to this request.': { AR: 'أوافق على استخدام منال استوديو لبياناتي للرد على هذا الطلب.', SV: 'Jag godkänner att Manal Studio använder mina uppgifter för att svara på denna förfrågan.' },
        'View Portfolio': { AR: 'عرض الأعمال', SV: 'Visa portfolio' },
        'Client Reviews': { AR: 'آراء العملاء', SV: 'Kundomdömen' },
        'MANAL STUDIO stories': { AR: 'قصص منال استوديو', SV: 'MANAL STUDIO-berättelser' },
        History: { AR: 'القصص', SV: 'Berättelser' },
        'November 5, 2024': { AR: '5 نوفمبر 2024', SV: '5 november 2024' },
        'A wedding story told through quiet details, genuine emotion, and photographs made to live beyond the day itself.': { AR: 'قصة زفاف تُروى عبر التفاصيل الهادئة والمشاعر الصادقة وصور صُممت لتبقى بعد انتهاء اليوم.', SV: 'En bröllopsberättelse berättad genom stilla detaljer, äkta känslor och bilder som lever vidare långt efter dagen.' },
        'Open story': { AR: 'افتحوا القصة', SV: 'Öppna berättelsen' },
        'Wedding photography packages': { AR: 'باقات تصوير الزفاف', SV: 'Bröllopsfotograferingspaket' },
        'Light package': { AR: 'الباقة الخفيفة', SV: 'Light-paketet' },
        'Package Standard': { AR: 'الباقة القياسية', SV: 'Standardpaketet' },
        'Package Love Story': { AR: 'باقة قصة الحب', SV: 'Love Story-paketet' },
        'Love Story Premium': { AR: 'قصة حب فاخرة', SV: 'Love Story Premium' },
        'Photography of the bride and groom getting ready for up to 2 hours.': { AR: 'تصوير استعداد العروس والعريس لمدة تصل إلى ساعتين.', SV: 'Fotografering av brudparets förberedelser i upp till två timmar.' },
        'Photography of the bride and groom getting ready plus the wedding banquet until 22:00.': { AR: 'تصوير استعداد العروس والعريس وحفل الزفاف حتى الساعة 22:00.', SV: 'Fotografering av brudparets förberedelser och bröllopsfesten fram till 22.00.' },
        '30 photos in magazine retouching, ready up to 15 days.': { AR: '30 صورة بتعديل احترافي بأسلوب المجلات، جاهزة خلال 15 يومًا.', SV: '30 bilder med professionell retuschering, levererade inom 15 dagar.' },
        '30 photos in magazine retouching, ready up to 1 month.': { AR: '30 صورة بتعديل احترافي بأسلوب المجلات، جاهزة خلال شهر.', SV: '30 bilder med professionell retuschering, levererade inom en månad.' },
        '50 photos in magazine retouching, ready up to 1 month.': { AR: '50 صورة بتعديل احترافي بأسلوب المجلات، جاهزة خلال شهر.', SV: '50 bilder med professionell retuschering, levererade inom en månad.' },
        'All footage in the author\'s color correction, ready up to 1 week.': { AR: 'جميع الصور بتصحيح الألوان الخاص بالاستوديو، جاهزة خلال أسبوع.', SV: 'Alla bilder med fotografens färgkorrigering, levererade inom en vecka.' },
        'All footage in the author\'s color correction, ready up to 15 days.': { AR: 'جميع الصور بتصحيح الألوان الخاص بالاستوديو، جاهزة خلال 15 يومًا.', SV: 'Alla bilder med fotografens färgkorrigering, levererade inom 15 dagar.' },
        'All photos transferred via the Cloud.': { AR: 'تُنقل جميع الصور عبر التخزين السحابي.', SV: 'Alla bilder levereras via molnet.' },
        'Studio rental, makeup artist and stylist services are paid separately.': { AR: 'يُدفع إيجار الاستوديو وخدمات خبيرة المكياج ومصفف الشعر بشكل منفصل.', SV: 'Studiohyra samt makeup- och stylisttjänster betalas separat.' },
        'Photo session in nature, one location, 1–1.5 hours of shooting.': { AR: 'جلسة تصوير في الطبيعة، موقع واحد، ولمدة تتراوح بين ساعة وساعة ونصف.', SV: 'Fotografering i naturen på en plats, 1–1,5 timmars fotografering.' },
        'Photo and video shooting on different days in nature.': { AR: 'تصوير فوتوغرافي وفيديو في أيام مختلفة داخل الطبيعة.', SV: 'Foto- och videoinspelning i naturen under olika dagar.' },
        '3 locations across 3 days, 1–1.5 hours each.': { AR: '3 مواقع خلال 3 أيام، من ساعة إلى ساعة ونصف لكل موقع.', SV: '3 platser under 3 dagar, 1–1,5 timmar per plats.' },
        '25 retouched photos from each location plus a 2–3 minute film.': { AR: '25 صورة معدلة من كل موقع، بالإضافة إلى فيلم مدته 2–3 دقائق.', SV: '25 retuscherade bilder från varje plats samt en film på 2–3 minuter.' },
        'All footage in the author\'s color correction and delivered via Cloud.': { AR: 'جميع الصور بتصحيح ألوان الاستوديو وتسليمها عبر التخزين السحابي.', SV: 'Alla bilder med fotografens färgkorrigering och leverans via molnet.' },
        'Order a photo session': { AR: 'اطلبوا جلسة تصوير', SV: 'Boka en fotografering' },
        'I would be glad to become your wedding photographer. To submit a request for a shoot, fill out the feedback form or ask me any clarifying questions on social networks.': { AR: 'يسعدني أن أكون مصور حفل زفافكم. لإرسال طلب جلسة تصوير، املؤوا نموذج التواصل أو اطرحوا أسئلتكم عبر شبكات التواصل الاجتماعي.', SV: 'Jag blir gärna er bröllopsfotograf. Skicka en förfrågan genom formuläret eller ställ era frågor via sociala medier.' },
        'Give me a question': { AR: 'اطرحوا سؤالًا', SV: 'Ställ en fråga' },
        'Client reviews': { AR: 'آراء العملاء', SV: 'Kundomdömen' },
        'The photos are simply amazing. Manal Studio has a beautiful eye for emotion and detail — one hundred percent!': { AR: 'الصور مذهلة ببساطة. لدى منال استوديو عين جميلة للمشاعر والتفاصيل — أوصي بها百分ائة!', SV: 'Bilderna är helt fantastiska. Manal Studio har en underbar blick för känsla och detaljer — hundra procent!' },
        'The best photographer! Each photograph is more beautiful than the last.': { AR: 'أفضل مصورة! كل صورة أجمل من التي قبلها.', SV: 'Den bästa fotografen! Varje bild är vackrare än den förra.' },
        'Thank you so much for the wonderful photographs. They turned out natural, warm, and full of life. It was so easy and pleasant to work together.': { AR: 'شكرًا جزيلًا على الصور الرائعة. ظهرت طبيعية ودافئة ومليئة بالحياة. كان التعاون سهلًا وممتعًا جدًا.', SV: 'Tack så mycket för de underbara bilderna. De blev naturliga, varma och fulla av liv. Det var så enkelt och trevligt att arbeta tillsammans.' },
        'Thank you very much! The very best photographer.': { AR: 'شكرًا جزيلًا! أفضل مصورة على الإطلاق.', SV: 'Tusen tack! Den allra bästa fotografen.' },
        "I'm so happy with these pictures. Thank you so much — it was wonderful and they look very beautiful.": { AR: 'أنا سعيدة جدًا بهذه الصور. شكرًا جزيلًا — كانت التجربة رائعة والصور جميلة جدًا.', SV: 'Jag är så glad över bilderna. Tusen tack — det var underbart och de blev så vackra.' },
        'Your review will be sent directly to Manal Studio.': { AR: 'سيُرسل رأيكم مباشرة إلى منال استوديو.', SV: 'Ert omdöme skickas direkt till Manal Studio.' }
    };

    const titleMap = {
        'MANAL STUDIO | Wedding & Visual Storytelling': { AR: 'منال استوديو | تصوير زفاف وحكايات بصرية', SV: 'MANAL STUDIO | Bröllop och visuellt berättande' },
        'Store | MANAL STUDIO': { AR: 'المتجر | منال استوديو', SV: 'Butik | MANAL STUDIO' },
        'Portfolio | MANAL STUDIO': { AR: 'الأعمال | منال استوديو', SV: 'Portfolio | MANAL STUDIO' },
        'History | MANAL STUDIO': { AR: 'القصص | منال استوديو', SV: 'Berättelser | MANAL STUDIO' },
        'Services | MANAL STUDIO': { AR: 'الخدمات | منال استوديو', SV: 'Tjänster | MANAL STUDIO' },
        'Comments | MANAL STUDIO': { AR: 'الآراء | منال استوديو', SV: 'Omdömen | MANAL STUDIO' },
        'Contacts | MANAL STUDIO': { AR: 'تواصل | منال استوديو', SV: 'Kontakt | MANAL STUDIO' }
    };

    const sourceText = new WeakMap();
    const sourceAttributes = new WeakMap();
    const translate = (value, language) => {
        if (strings[value]?.[language]) return strings[value][language];
        return Object.entries(strings).reduce((result, [source, translations]) => (
            translations[language] ? result.replaceAll(source, translations[language]) : result
        ), value);
    };

    const applyText = (language) => {
        document.querySelectorAll('[data-en][data-ar][data-sv]').forEach((element) => {
            element.innerHTML = element.dataset[language.toLowerCase()];
        });
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                const parent = node.parentElement;
                if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName) || parent.closest('[data-language-control]') || parent.closest('[data-en][data-ar][data-sv]')) return NodeFilter.FILTER_REJECT;
                return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
            }
        });
        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);
        nodes.forEach((node) => {
            if (!sourceText.has(node)) sourceText.set(node, node.nodeValue);
            const original = sourceText.get(node);
            const leading = original.match(/^\s*/)[0];
            const trailing = original.match(/\s*$/)[0];
            node.nodeValue = `${leading}${translate(original.trim(), language)}${trailing}`;
        });
        document.querySelectorAll('[aria-label], [alt], [placeholder], [title]').forEach((element) => {
            if (element.closest('[data-language-control]')) return;
            if (!sourceAttributes.has(element)) {
                sourceAttributes.set(element, Object.fromEntries(['aria-label', 'alt', 'placeholder', 'title']
                    .filter((attribute) => element.hasAttribute(attribute))
                    .map((attribute) => [attribute, element.getAttribute(attribute)])));
            }
            Object.entries(sourceAttributes.get(element)).forEach(([attribute, value]) => element.setAttribute(attribute, translate(value, language)));
        });
    };

    const setLanguage = (language) => {
        if (!supportedLanguages.includes(language)) return;
        document.documentElement.lang = language.toLowerCase();
        document.documentElement.dir = language === 'AR' ? 'rtl' : 'ltr';
        applyText(language);
        const originalTitle = document.documentElement.dataset.originalTitle || document.title;
        document.documentElement.dataset.originalTitle = originalTitle;
        document.title = titleMap[originalTitle]?.[language] || originalTitle;
        document.querySelectorAll('[data-language-choice]').forEach((button) => {
            const active = button.dataset.languageChoice === language;
            button.classList.toggle('is-active', active);
            button.setAttribute('aria-pressed', String(active));
        });
        try { localStorage.setItem('manal-language', language); } catch (error) { /* Storage is optional. */ }
    };

    const setupLanguageControl = () => {};

    const addLanguageStyles = () => {
        const font = document.createElement('link');
        font.rel = 'stylesheet';
        font.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;500;600&display=swap';
        document.head.append(font);
        const style = document.createElement('style');
        style.textContent = `
            .language-picker, .site-language-control { display: none !important; }
            .socials, .footer-socials { flex-wrap: wrap; }
            .site-language-control { display:flex; align-items:center; gap:5px; margin-left:auto; margin-right:18px; }
            .site-language-control button { min-width:31px; height:31px; border:1px solid rgba(255,255,255,.48); background:transparent; color:#fff; font:500 10px/1 'Montserrat',sans-serif; letter-spacing:.04em; cursor:pointer; transition:background .2s,color .2s; }
            .site-language-control button:hover, .site-language-control button.is-active { background:#fff; color:#000; }
            html[lang="ar"] body { font-family:'Noto Sans Arabic',sans-serif; line-height:1.85; }
            html[lang="ar"] h1, html[lang="ar"] h2, html[lang="ar"] h3, html[lang="ar"] .logo-text strong { font-family:'Noto Sans Arabic',sans-serif; letter-spacing:0; line-height:1.32; }
            html[lang="ar"] .header, html[lang="ar"] .overlay { direction:rtl; }
            html[lang="ar"] .site-language-control { margin-right:auto; margin-left:18px; direction:ltr; }
            html[lang="ar"] input, html[lang="ar"] textarea { font-family:'Noto Sans Arabic',sans-serif; text-align:right; }
            @media (max-width:760px) { .site-language-control { margin-left:auto; margin-right:12px; gap:3px; } .site-language-control button { min-width:28px; height:28px; } html[lang="ar"] .site-language-control { margin-right:auto; margin-left:12px; } }
        `;
        document.head.append(style);
    };

    window.ManalI18n = { setLanguage, t: (value) => translate(value, document.documentElement.lang.toUpperCase()) };
    document.addEventListener('DOMContentLoaded', () => {
        addLanguageStyles();
        setupLanguageControl();
        let language = 'EN';
        try { language = localStorage.getItem('manal-language') || language; } catch (error) { /* Use English by default. */ }
        setLanguage(supportedLanguages.includes(language) ? language : 'EN');
    });
})();
