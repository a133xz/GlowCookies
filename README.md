<img src="https://cabas.b-cdn.net/glowcookies/glowcookies.png" data-canonical-src="https://cabas.b-cdn.net/glowcookies/glowcookies.png" width="100%" />

This is a forked project from [GlowCookies](https://github.com/manucaralmo/GlowCookies). I've added a few improvements on top of the original that are explained below.

# 🍪 Google Analytics Cookie Consent Banner In JavaScript

Simple and full automated cookies banner for any website. Complies with the new European regulations. Activate and deactivate Google Analytics, cookies whenever the user wishes, with just one click.

[![Foo](https://cdn.glowmedia.es/upload/uploads/ed1952btn.svg)](https://manucaralmo.github.io/glow-cookies-web/)

## Cookie banner

<img src="https://cdn.glowmedia.es/upload/uploads/90c82dbanner.png" data-canonical-src="https://cdn.glowmedia.es/upload/uploads/90c82dbanner.png" width="375" />

## New features

In short, the new features were added to keep using Google Analytics with the `anonymize_ip` feature and to be properly used in frameworks more efficiently:

- `glowCookies` is a namespace
- Minify version of the CSS and JS library
- Stored the selected value in cookies (Accept or Decline)
- Settings saved for `365 + 31` days
- If a user declines the use of cookies, Google Analytics will be installed with [IP Anonymization](https://support.google.com/analytics/answer/2763052?hl=en), which complies with the GDPR requirements
- Google Analytics, and Spanish and English only (we can add any language whenever)

## How to use

Add this code to your html `<head>` or `<body>` tag.

```html
<script src="https://cdn.jsdelivr.net/gh/a133xz/GlowCookies@master/dist/glowCookies.js"></script>
<script>
  glowCookies.start("en", {
    style: 1,
    analytics: "G-FH87DE17XF",
    policyLink: "https://link-to-your-policy.com",
  });
</script>
```

For more information about the configuration, please [follow the original documentation](https://github.com/manucaralmo/GlowCookies).

## Thanks

Thank you to the [original author](https://github.com/manucaralmo/GlowCookies) for this amazing javascript library.
