# Cvičení: Komponenty

Cvičení do breakrooms pro kurz JavaScript 2 od Czechitas.

## 1. Produkt

Představte si, že tvoříte e-shop a na hlavní stránce chcete zobrazit vaše produkty. K dispozici je pole produktů, které zatím vložíme natvrdo do programu.

```javascript
const products = [
  {
    name: 'Mlýnek na kávu',
    price: 520,
    currency: 'Kč',
  },
  {
    name: 'Varná konvice',
    price: 670,
    currency: 'Kč',
  },
  {
    name: 'Sada hrničků',
    price: 1020,
    currency: 'Kč',
  },
  {
    name: 'Kávovar',
    price: 5800,
    currency: 'Kč',
  },
];
```
- Založte si nový projekt příkazem

```javascript
npm init kodim-app@latest cviceni-produkt html-css-js
```
- Otevřete si ve VS Code vytvořenou složku `cviceni-produkt`.

- Vytvořte HTML stránku s následující strukturou `body`:

```html
<body>
  <section id="products-section"></section>
</body>
```
- Vložte do stránky soubor `index.js` a na jeho začátek vložte pole s produkty.

- Vytvořte funkci `Product` s jedním parametrem `props`. Tato funkce bude představovat komponentu pro jeden produkt.

- Do funkce `Product` vložte kód vytvářející HTML pro jeden produkt. Dejte pozor, že uvnitř komponenty se produkt předává v parametru `props`. Nechť vaše funkce jako svůj výsledek vrátí vyrobené HTML v tomto tvaru:

```html
<div class="product">
  <h2 class="product__name">Mlýnek na kávu</h2>
  <p class="product__price">Cena: 520 Kč</p>
</div>
```

- Vytvořte funkci `renderProducts`, která vybere ze stránky element s *id* `products-section` a naplní jej obsahem s pomocí komponenty `Product`.

- Zavolejte vaši funkci a vyzkoušejte, že se produkty zobrazují správně. V reálné aplikaci bychom samozřejmě tuto funkci volali jako reakci na nějaký `fetch` dat.

