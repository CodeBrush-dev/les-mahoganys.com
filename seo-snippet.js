// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.les-mahoganys.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.les-mahoganys.com/","title_tag":"Location vacances Diamant | Les Mahoganys","meta_description":"Résidence de tourisme au Diamant: meublés de tourisme et bungalows en bord de mer. Réservation en ligne pour vos vacances en Martinique chez Les Mahoganys."},{"page_url":"https://www.les-mahoganys.com/reservation-en-ligne","title_tag":"Réservation en ligne Martinique | Les Mahoganys","meta_description":"Réservation en ligne de meublés de tourisme au Diamant. Bungalows et villas en bord de mer pour vos vacances en Martinique. Réservez facilement."},{"page_url":"https://www.les-mahoganys.com/bungalow-coeur-sur-la-main","title_tag":"Bungalow Coeur sur la Main | Les Mahoganys","meta_description":"Bungalow 1 chambre au Diamant, meublé de tourisme 3*. Accès plage et vue mer. Réservez vos vacances en Martinique en ligne avec Les Mahoganys."},{"page_url":"https://www.les-mahoganys.com/appartement-locbir","title_tag":"Meublé de tourisme Diamant | Les Mahoganys","meta_description":"Appartement T2 meublé de tourisme au Diamant, accès plage à 200m. Idéal pour vos vacances en Martinique. Réservation en ligne chez Les Mahoganys."},{"page_url":"https://www.les-mahoganys.com/villa-tourterelle","title_tag":"Villa Tourterelle - Villa en bord de mer | Les Mahoganys","meta_description":"Villa Tourterelle: villa 3 chambres avec piscine privative, accès plage 100m. Parfaite pour location villa Diamant et vos vacances en Martinique. Réservez en ligne."},{"page_url":"https://www.les-mahoganys.com/villa-hhh","title_tag":"Villa Héron - Villa en bord de mer | Les Mahoganys","meta_description":"Villa Héron: 3 chambres, piscine privative et vue sur le Rocher du Diamant. Idéale pour vos vacances en Martinique. Réservation en ligne possible."},{"page_url":"https://www.les-mahoganys.com/villa-bwicam","title_tag":"Villa Kayali - Location villa Diamant | Les Mahoganys","meta_description":"Villa Kayali: 2 chambres, terrasse et jardin privé, accès plage 100m. Location villa Diamant idéale pour vos vacances en Martinique. Réservez en ligne."},{"page_url":"https://www.les-mahoganys.com/villa-le-colibri","title_tag":"Villa Colibri - Villas en bord de mer | Les Mahoganys","meta_description":"Villa Colibri: villa 2 chambres, piscine privative et vue mer. Meublé de tourisme 5*. Parfaite pour vacances en Martinique au Diamant. Réservation en ligne."},{"page_url":"https://www.les-mahoganys.com/contact","title_tag":"Contact - Location vacances Diamant | Les Mahoganys","meta_description":"Contactez Les Mahoganys pour réservation de meublés de tourisme au Diamant. Infos, itinéraire et assistance pour vos vacances en Martinique."}],"keywords":["bungalow martinique","location vacances diamant","meubles de tourisme","vacances en martinique","residence de tourisme","location villa diamant","bungalow coeur sur la main","villas en bord de mer","reservation en ligne martinique","tourisme au diamant"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Les Mahoganys",
  "url": "https://www.les-mahoganys.com/",
  "description": "Résidence de tourisme au Diamant, Martinique. Pour votre prochaine location de maison de vacances en Martinique, Cathy et Bruno seront ravis de vous accueillir sur leur propriété située en bord de mer sur la commune du Diamant. Dans nos 6 logements meublés et indépendants, vous profiterez d'un confort exceptionnel. Chaque logement dispose d'une vue sur la baie du Rocher du Diamant et d'un accès à pied à la plage.",
  "telephone": "+33 7 85 63 63 16",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+33 6 08 08 17 89",
      "contactType": "reservations",
      "areaServed": "FR"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+33 7 85 63 63 16",
      "contactType": "reservations",
      "areaServed": "FR"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rue Frantz Fanon, Anse Caffard",
    "addressLocality": "Le Diamant",
    "postalCode": "97223",
    "addressCountry": "FR"
  },
  "priceRange": "55€ - 245€ / nuit",
  "image": [
    "https://static.wixstatic.com/media/cde9b3_0e91c2bebab34cba869c7b405d2d1c63~mv2.jpg/v1/crop/x_126,y_0,w_2348,h_1737/fill/w_431,h_344,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/bungalow%20diamant%20martinique%20mahogany.jpg",
    "https://static.wixstatic.com/media/cde9b3_2c1e4775fcda4063ab0b2ee8c8ec0a2b~mv2.jpg/v1/fill/w_112,h_84,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/vue.jpg",
    "https://static.wixstatic.com/media/cde9b3_5fb3bddd5ff2449ba5fe183f8c848746%7Emv2.png/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/cde9b3_5fb3bddd5ff2449ba5fe183f8c848746%7Emv2.png"
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "Bungalow - Coeur sur la main",
      "url": "https://www.les-mahoganys.com/bungalow-coeur-sur-la-main",
      "price": "60",
      "priceCurrency": "EUR",
      "itemOffered": {
        "@type": "Room",
        "name": "Coœur sur la main - Bungalow",
        "description": "Bungalow 1 chambre – 2 personnes. Vue Mer. Accès plage 200m. Chambre climatisée, cuisine équipée.",
        "occupancy": {
          "@type": "QuantitativeValue",
          "maxValue": 2
        }
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Surface",
          "value": "53 m2"
        },
        {
          "@type": "PropertyValue",
          "name": "Frais de ménage",
          "value": "60€"
        },
        {
          "@type": "PropertyValue",
          "name": "Durée minimum de location",
          "value": "5 nuits"
        }
      ]
    },
    {
      "@type": "Offer",
      "name": "Appartement - LocBir",
      "url": "https://www.les-mahoganys.com/appartement-locbir",
      "price": "55",
      "priceCurrency": "EUR",
      "itemOffered": {
        "@type": "Room",
        "name": "LocBir - Appartement T2",
        "description": "Appartement 1 chambre – 2 personnes. Surface 60 m2. Vue mer. Accès plage 200m.",
        "occupancy": {
          "@type": "QuantitativeValue",
          "maxValue": 2
        }
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Surface",
          "value": "60 m2"
        },
        {
          "@type": "PropertyValue",
          "name": "Frais de ménage",
          "value": "60€"
        },
        {
          "@type": "PropertyValue",
          "name": "Durée minimum de location",
          "value": "5 nuits"
        }
      ]
    },
    {
      "@type": "Offer",
      "name": "Villa Tourterelle",
      "url": "https://www.les-mahoganys.com/villa-tourterelle",
      "price": "225",
      "priceCurrency": "EUR",
      "itemOffered": {
        "@type": "Room",
        "name": "Villa Tourterelle",
        "description": "Villa 3 chambres – 6 personnes. Piscine privative. Grande terrasse avec vue mer.",
        "occupancy": {
          "@type": "QuantitativeValue",
          "maxValue": 6
        }
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Surface",
          "value": "175 m2"
        },
        {
          "@type": "PropertyValue",
          "name": "Frais de ménage",
          "value": "250€"
        },
        {
          "@type": "PropertyValue",
          "name": "Durée minimum de location",
          "value": "6 nuits"
        },
        {
          "@type": "PropertyValue",
          "name": "Caution",
          "value": "2000€"
        }
      ]
    },
    {
      "@type": "Offer",
      "name": "Villa Héron",
      "url": "https://www.les-mahoganys.com/villa-hhh",
      "price": "245",
      "priceCurrency": "EUR",
      "itemOffered": {
        "@type": "Room",
        "name": "Villa Héron",
        "description": "Villa 3 chambres – 6/8 personnes. Piscine privative. Terrasse et deck avec vue mer et Rocher du Diamant.",
        "occupancy": {
          "@type": "QuantitativeValue",
          "maxValue": 8
        }
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Surface",
          "value": "175 m2"
        },
        {
          "@type": "PropertyValue",
          "name": "Frais de ménage",
          "value": "250€"
        },
        {
          "@type": "PropertyValue",
          "name": "Durée minimum de location",
          "value": "6 nuits"
        },
        {
          "@type": "PropertyValue",
          "name": "Caution",
          "value": "2000€"
        }
      ]
    },
    {
      "@type": "Offer",
      "name": "Villa Kayali",
      "url": "https://www.les-mahoganys.com/villa-bwicam",
      "price": "95",
      "priceCurrency": "EUR",
      "itemOffered": {
        "@type": "Room",
        "name": "Villa Kayali",
        "description": "Villa 2 chambres – 4 personnes. Terrasse et jardin privatif. Accès plage 100m.",
        "occupancy": {
          "@type": "QuantitativeValue",
          "maxValue": 4
        }
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Surface",
          "value": "90 m2"
        },
        {
          "@type": "PropertyValue",
          "name": "Frais de ménage",
          "value": "100€"
        },
        {
          "@type": "PropertyValue",
          "name": "Durée minimum de location",
          "value": "6 nuits"
        },
        {
          "@type": "PropertyValue",
          "name": "Caution",
          "value": "500€"
        }
      ]
    },
    {
      "@type": "Offer",
      "name": "Villa Colibri",
      "url": "https://www.les-mahoganys.com/villa-le-colibri",
      "price": "155",
      "priceCurrency": "EUR",
      "itemOffered": {
        "@type": "Room",
        "name": "Villa Colibri",
        "description": "Villa 2 chambres – 4 personnes. Meublé de tourisme classé 5*. Piscine privative. Vue mer.",
        "occupancy": {
          "@type": "QuantitativeValue",
          "maxValue": 4
        }
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Surface",
          "value": "130 m2"
        },
        {
          "@type": "PropertyValue",
          "name": "Frais de ménage",
          "value": "200€"
        },
        {
          "@type": "PropertyValue",
          "name": "Durée minimum de location",
          "value": "6 nuits"
        },
        {
          "@type": "PropertyValue",
          "name": "Caution",
          "value": "2000€"
        }
      ]
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
