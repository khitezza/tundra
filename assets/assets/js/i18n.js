langSwitcherStyle = function (lang) {
    var arr_lang = document.getElementsByClassName("navbar-lang-content");
    var html_lang = document.documentElement;
    if (lang == "en") {
        arr_lang[0].classList.replace('navbar-lang-noactive', 'navbar-lang-active');
        arr_lang[1].classList.replace('navbar-lang-active', 'navbar-lang-noactive');
        html_lang.setAttribute('lang', lang);
    } else {
        arr_lang[0].classList.replace('navbar-lang-active', 'navbar-lang-noactive');
        arr_lang[1].classList.replace('navbar-lang-noactive', 'navbar-lang-active');
        html_lang.setAttribute('lang', lang);
    }
}

langSwitcher = function (lang) {
    const i18nJSON = fetch('/assets/json/i18n.json').then(res => res.json());
    Promise.all([i18nJSON]).then(([i18nJSON]) => {

        const i18n_top = Array.from(document.getElementsByClassName('i18n-top'));
        i18n_top.forEach(element => {
            element.textContent = i18nJSON.top[lang]
        });

        const i18n_works = Array.from(document.getElementsByClassName('i18n-works'));
        i18n_works.forEach(element => {
            element.textContent = i18nJSON.works[lang]
        });

        const i18n_blogs = Array.from(document.getElementsByClassName('i18n-blogs'));
        i18n_blogs.forEach(element => {
            element.textContent = i18nJSON.blogs[lang]
        });

        const i18n_about = Array.from(document.getElementsByClassName('i18n-about'));
        i18n_about.forEach(element => {
            element.textContent = i18nJSON.about[lang]
        });

        const i18n_more = Array.from(document.getElementsByClassName('i18n-more'));
        i18n_more.forEach(element => {
            element.textContent = i18nJSON.more[lang]
        });

        const i18n_company_name = Array.from(document.getElementsByClassName('i18n-company-name'));
        i18n_company_name.forEach(element => {
            element.textContent = i18nJSON.company_name[lang]
        });

        const i18n_established = Array.from(document.getElementsByClassName('i18n-established'));
        i18n_established.forEach(element => {
            element.textContent = i18nJSON.established[lang]
        });

        const i18n_founder = Array.from(document.getElementsByClassName('i18n-founder'));
        i18n_founder.forEach(element => {
            element.textContent = i18nJSON.founder[lang]
        });

        const i18n_members = Array.from(document.getElementsByClassName('i18n-members'));
        i18n_members.forEach(element => {
            element.textContent = i18nJSON.members[lang]
        });

        const i18n_official_webshop = Array.from(document.getElementsByClassName('i18n-official-webshop'));
        i18n_official_webshop.forEach(element => {
            element.textContent = i18nJSON.official_webshop[lang]
        });

        const i18n_business_outline = Array.from(document.getElementsByClassName('i18n-business-outline'));
        i18n_business_outline.forEach(element => {
            element.textContent = i18nJSON.business_outline[lang]
        });

        const i18n_readmore = Array.from(document.getElementsByClassName('i18n-readmore'));
        i18n_readmore.forEach(element => {
            element.textContent = i18nJSON.readmore[lang]
        });

        const i18n_copy = Array.from(document.getElementsByClassName('i18n-copy'));
        i18n_copy.forEach(element => {
            element.textContent = i18nJSON.footer_copy[lang]
        });

        const i18n_poweredby0 = Array.from(document.getElementsByClassName('i18n-poweredby0'));
        i18n_poweredby0.forEach(element => {
            element.textContent = i18nJSON.poweredby0[lang]
        });

        const i18n_poweredby1 = Array.from(document.getElementsByClassName('i18n-poweredby1'));
        i18n_poweredby1.forEach(element => {
            element.textContent = i18nJSON.poweredby1[lang]
        });

        const i18n_privacy_policy = Array.from(document.getElementsByClassName('i18n-privacy-policy'));
        i18n_privacy_policy.forEach(element => {
            element.textContent = i18nJSON.privacy_policy[lang]
        });

        const i18n_bug_report = Array.from(document.getElementsByClassName('i18n-bug-report'));
        i18n_bug_report.forEach(element => {
            element.textContent = i18nJSON.bug_report[lang]
        });

        const i18n_contact_info = Array.from(document.getElementsByClassName('i18n-contact-info'));
        i18n_contact_info.forEach(element => {
            element.textContent = i18nJSON.contact_info[lang]
        });

        const i18n_statement1_0 = Array.from(document.getElementsByClassName('i18n-statement1-0'));
        i18n_statement1_0.forEach(element => {
            element.textContent = i18nJSON.statement1_0[lang]
        });

        const i18n_statement1_1 = Array.from(document.getElementsByClassName('i18n-statement1-1'));
        i18n_statement1_1.forEach(element => {
            element.textContent = i18nJSON.statement1_1[lang]
        });

        const i18n_postedon = Array.from(document.getElementsByClassName('i18n-postedon'));
        i18n_postedon.forEach(element => {
            element.textContent = i18nJSON.postedon[lang]
        });

        const i18n_author = Array.from(document.getElementsByClassName('i18n-author'));
        i18n_author.forEach(element => {
            element.textContent = i18nJSON.author[lang]
        });

        const i18n_lastmod = Array.from(document.getElementsByClassName('i18n-lastmod'));
        i18n_lastmod.forEach(element => {
            element.textContent = i18nJSON.lastmod[lang]
        });

        const i18n_total = Array.from(document.getElementsByClassName('i18n-total'));
        i18n_total.forEach(element => {
            element.textContent = i18nJSON.total[lang]
        });

        const i18n_words = Array.from(document.getElementsByClassName('i18n-words'));
        i18n_words.forEach(element => {
            element.textContent = i18nJSON.words[lang]
        });

        const i18n_licensed0 = Array.from(document.getElementsByClassName('i18n-licensed0'));
        i18n_licensed0.forEach(element => {
            element.textContent = i18nJSON.licensed0[lang]
        });

        const i18n_licensed1 = Array.from(document.getElementsByClassName('i18n-licensed1'));
        i18n_licensed1.forEach(element => {
            element.textContent = i18nJSON.licensed1[lang]
        });

        const i18n_licensed2 = Array.from(document.getElementsByClassName('i18n-licensed2'));
        i18n_licensed2.forEach(element => {
            element.textContent = i18nJSON.licensed2[lang]
        });

        const i18n_thanks = Array.from(document.getElementsByClassName('i18n-thanks'));
        i18n_thanks.forEach(element => {
            element.textContent = i18nJSON.thanks[lang]
        });
    })

}
