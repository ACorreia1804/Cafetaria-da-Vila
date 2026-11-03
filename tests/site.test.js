const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const test = require("node:test");

const html = readFileSync(join(__dirname, "..", "index.html"), "utf8");

test("the public page has Portuguese metadata and a keyboard skip link", () => {
  assert.match(html, /<html lang="pt-PT">/);
  assert.match(html, /<meta name="description"/);
  assert.match(html, /class="salto-conteudo" href="#conteudo"/);
  assert.match(html, /<main id="conteudo">/);
});

test("the opening section displays the café logo instead of the cake illustration", () => {
  assert.match(html, /<a class="marca" href="#inicio" aria-label="Cafetaria da Vila — início">\s*<img src="img\/logo\.jpg" alt="Cafetaria da Vila">/);
  assert.match(html, /<figure class="hero-foto">\s*<img src="img\/logo\.jpg" alt="Logótipo da Cafetaria da Vila">/);
  assert.doesNotMatch(html, /bolo-ilustracao|fatia-bolo|cobertura-bolo|morangos-bolo/);
});

test("structured business data matches the published address and opening hours", () => {
  const [, jsonLd] = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/) ?? [];
  assert.ok(jsonLd, "JSON-LD block should exist");

  const business = JSON.parse(jsonLd);
  assert.equal(business["@type"], "CafeOrCoffeeShop");
  assert.equal(business.telephone, "+351239134703");
  assert.equal(business.address.postalCode, "3150-232");
  assert.deepEqual(business.openingHoursSpecification[0].dayOfWeek, [
    "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ]);
});

test("Google review summaries are balanced and link to the original platform", () => {
  assert.match(html, /4,7\/5/);
  assert.match(html, /4,8\/5/);
  assert.match(html, /<span class="total-plataforma">776<\/span>/);
  assert.equal((html.match(/class="origem-opiniao"/g) ?? []).length, 3);
  assert.match(html, /reviews\/facebook/);
  assert.match(html, /Ver todas no Google/);
  assert.match(html, /tempo de espera/);
  assert.match(html, /demasiado frio/);
});
