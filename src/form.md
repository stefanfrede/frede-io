---
layout: 'layouts/home.html'
title: 'Stefan Frede'
meta:
  desc: 'Hi. I’m Stefan, a front-end developer from Germany.'
---

<form method="POST" data-netlify="true">

<form
  action="/"
  method="POST"
  name="testform"
  netlify-honeypot="bot-field"
  data-netlify="true"
>
  <label hidden>
    Don’t fill this out if you're human:
    <input name="bot-field" />
  </label>
  <div>
    <fieldset name="Salutation">
      <legend>
        Salutation
      </legend>
      <label>
        <input name="Salutation" type="radio" value="Mrs">
        Mrs
      </label>
      <label>
        <input name="Salutation" type="radio" value="Mr">
        Mr
      </label>
      <label>
        <input name="Salutation" type="radio" value="Mx">
        Mx
      </label>
    </fieldset>
  </div>
  <div>
    <label>
      <input
        name="input"
        type="text"
        placeholder="Just Input"
      />
      Input
    </label>
  </div>
  <button type="submit">
    Submit
  </button>
</form>
