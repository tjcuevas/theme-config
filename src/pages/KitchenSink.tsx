import React from 'react';
import Blockquote from '../core_ui/blockquote/Blockquote';
import Input from '../core_ui/Input/Input';
import ThemeValues from '../components/ThemeValues';

interface KitchenSinkProps {}

function KitchenSink({}: KitchenSinkProps) {
  return (
    <>
    <main>
      <h1>A Visual Type Scale</h1>

<p>What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction.</p>

<p>When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.</p>

<h2>A Visual Type Scale</h2>

<p>What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction.</p>

<p>When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.</p>

<Blockquote>
There are many <strong>variations of passages</strong> of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
</Blockquote>
<h3>A Visual Type Scale</h3>

<p>What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction.</p>

<p>When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.</p>

<h4>A Visual Type Scale</h4>

<p>What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction.</p>

<p>When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.</p>

<ul>
  <li>Hey</li>
  <li>Hello</li>
  <li>It's me</li>
</ul>

<h5>A Visual Type Scale</h5>

<p>What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction.</p>

<p>When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.</p>

<p className="text_small">— Excerpt from A Voyage to Arcturus, by David Lindsay.</p>
<Input name="fo" type="text" />
<Input name="fo" type="number" />
<Input name="fo" type="date" />
<Input name="fo" type="tel" />

    </main>
<ThemeValues />
    </>
  );


}

export default KitchenSink;
