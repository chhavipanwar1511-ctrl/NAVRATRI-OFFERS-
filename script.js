/* ================================
   CHHAVI MEHNDI ART
   NAVRATRI • GEN-Z • GARBA VIBE
================================ */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #fff8f0;
    color: #321b12;
    line-height: 1.5;
    overflow-x: hidden;
}

/* ================================
   MAIN CONTAINER
================================ */

.container {
    width: 92%;
    max-width: 500px;
    margin: auto;
}

/* ================================
   HERO SECTION
================================ */

.hero {
    min-height: 100vh;
    padding: 35px 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    background:
        radial-gradient(circle at top left, #ffd66b 0, transparent 28%),
        radial-gradient(circle at bottom right, #ff8a65 0, transparent 30%),
        linear-gradient(145deg, #fff4df, #ffe0b2);

    position: relative;
    overflow: hidden;
}

/* Decorative circles */

.hero::before,
.hero::after {
    content: "✦";
    position: absolute;
    font-size: 80px;
    opacity: 0.12;
}

.hero::before {
    top: 30px;
    left: 15px;
}

.hero::after {
    bottom: 30px;
    right: 15px;
}

/* ================================
   HERO CONTENT
================================ */

.hero-content {
    position: relative;
    z-index: 2;
}

.small-text {
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 12px;
}

.hero h1 {
    font-size: clamp(32px, 9vw, 48px);
    line-height: 1.05;
    margin-bottom: 15px;
    font-weight: 900;
}

.hero h1 span {
    display: block;
}

.hero p {
    font-size: 15px;
    max-width: 350px;
    margin: auto;
    margin-bottom: 25px;
}

/* ================================
   BUTTON
================================ */

.btn {
    display: inline-block;
    text-decoration: none;
    background: #321b12;
    color: #fff;
    padding: 13px 25px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 700;
    transition: 0.25s ease;
    box-shadow: 0 7px 0 #e69b32;
}

.btn:hover {
    transform: translateY(3px);
    box-shadow: 0 4px 0 #e69b32;
}

/* ================================
   SECTION
================================ */

section {
    padding: 55px 18px;
}

.section-title {
    text-align: center;
    margin-bottom: 28px;
}

.section-title .mini {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
}

.section-title h2 {
    font-size: 28px;
    margin-top: 5px;
}

/* ================================
   OFFER SECTION
================================ */

.offers {
    background: #321b12;
    color: white;
}

.offer-heading {
    text-align: center;
    margin-bottom: 25px;
}

.offer-heading h2 {
    font-size: 30px;
}

.offer-heading p {
    font-size: 13px;
    opacity: 0.8;
}

/* ================================
   PRICE CARDS
================================ */

.offer-card {
    background: #fff8f0;
    color: #321b12;
    border-radius: 22px;
    padding: 22px;
    margin-bottom: 18px;
    border: 2px solid #f3b33d;
}

.offer-card h3 {
    font-size: 21px;
    margin-bottom: 5px;
}

.offer-card .tag {
    display: inline-block;
    background: #f3b33d;
    color: #321b12;
    padding: 4px 9px;
    border-radius: 20px;
    font-size: 10px;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 12px;
}

.price-row {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: 15px;
}

.price-box {
    flex: 1;
    background: #ffe7bf;
    padding: 12px;
    border-radius: 14px;
    text-align: center;
}

.price-box span {
    display: block;
    font-size: 11px;
}

.price-box strong {
    display: block;
    font-size: 21px;
    margin-top: 3px;
}

/* ================================
   GROUP OFFER
================================ */

.group-offer {
    background: linear-gradient(135deg, #f3b33d, #ff7043);
    color: #321b12;
    border-radius: 24px;
    padding: 25px 20px;
    text-align: center;
    margin-top: 25px;
}

.group-offer .big {
    font-size: 26px;
    font-weight: 900;
}

.group-offer p {
    font-size: 13px;
    margin-top: 8px;
}

/* ================================
   DESIGN GALLERY
================================ */

.gallery {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
}

.gallery img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 18px;
    display: block;
}

/* First image slightly bigger */

.gallery img:first-child {
    grid-column: span 2;
    aspect-ratio: 16 / 10;
}

/* ================================
   NAVRATRI LOOK
================================ */

.navratri-box {
    background: #fff0d3;
    border: 1px solid #f0bd62;
    border-radius: 25px;
    padding: 25px 20px;
    text-align: center;
}

.navratri-box h2 {
    font-size: 25px;
    margin-bottom: 10px;
}

.navratri-box p {
    font-size: 14px;
}

.vibe-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    margin-top: 18px;
}

.vibe-tags span {
    background: white;
    border: 1px solid #e7b15a;
    padding: 7px 12px;
    border-radius: 30px;
    font-size: 11px;
    font-weight: 700;
}

/* ================================
   TIME / BOOKING INFO
================================ */

.info-list {
    margin-top: 20px;
}

.info-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 13px 0;
    border-bottom: 1px solid #ead8c5;
    font-size: 14px;
}

.info-item:last-child {
    border-bottom: none;
}

.info-icon {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffe0a3;
    border-radius: 50%;
}

/* ================================
   INSTAGRAM
================================ */

.instagram {
    background: #f7d7a6;
    text-align: center;
}

.instagram h2 {
    font-size: 25px;
    margin-bottom: 8px;
}

.instagram p {
    font-size: 13px;
    margin-bottom: 18px;
}

.insta-btn {
    display: inline-block;
    text-decoration: none;
    color: white;
    background: #321b12;
    padding: 12px 23px;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 700;
}

/* ================================
   ADDRESS
================================ */

.address {
    text-align: center;
    background: #fff8f0;
}

.address h2 {
    font-size: 23px;
    margin-bottom: 10px;
}

.address p {
    font-size: 13px;
    line-height: 1.7;
}

/* ================================
   FOOTER
================================ */

footer {
    background: #321b12;
    color: white;
    text-align: center;
    padding: 25px 15px;
}

footer h3 {
    font-size: 18px;
}

footer p {
    font-size: 11px;
    opacity: 0.7;
    margin-top: 5px;
}

/* ================================
   MOBILE
================================ */

@media (max-width: 380px) {

    .hero h1 {
        font-size: 30px;
    }

    .hero p {
        font-size: 13px;
    }

    section {
        padding: 45px 15px;
    }

    .offer-card {
        padding: 18px;
    }

    .price-box strong {
        font-size: 18px;
    }

}

/* ================================
   SIMPLE ANIMATION
================================ */

@keyframes float {

    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-6px);
    }

    100% {
        transform: translateY(0);
    }

}

.hero-content {
    animation: float 4s ease-in-out infinite;
}
