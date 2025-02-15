// تحميل مكتبة AdSense
let script = document.createElement("script");
script.async = true;
script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9944180153367872";
script.crossOrigin = "anonymous";
document.head.appendChild(script);

// إنشاء وحدة إعلانية
let adContainer = document.createElement("ins");
adContainer.className = "adsbygoogle";
adContainer.style.display = "block";
adContainer.setAttribute("data-ad-client", "ca-pub-9944180153367872");
adContainer.setAttribute("data-ad-slot", "9700363255");
adContainer.setAttribute("data-ad-format", "auto");
adContainer.setAttribute("data-full-width-responsive", "true");

document.body.appendChild(adContainer);

// تفعيل الإعلانات
script.onload = () => {
    (adsbygoogle = window.adsbygoogle || []).push({});
};
