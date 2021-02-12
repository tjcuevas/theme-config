import React from 'react';
import Blockquote from '../core_ui/blockquote/Blockquote';
import Notification from '../core_ui/Notification/Notification';
import Input from '../core_ui/Input/Input';
import ThemeValues from '../components/ThemeValues';
import { Tone } from '../core_ui/Tone';

interface KitchenSinkProps {}

function KitchenSink({}: KitchenSinkProps) {
	return (
		<>
			<header>
				<h3>Bleh</h3>
				<nav>
					<a href="#">Home</a>
					<a href="#">About</a>
					<a href="#">Contact</a>
				</nav>
			</header>
			<main>
				<h1>A Visual Type Scale</h1>
				<Notification tone={Tone.Danger}>Something important is going on!</Notification>
				<Notification tone={Tone.Info}>Something important is going on!</Notification>
				<Notification tone={Tone.Neutral}>Something important is going on!</Notification>
				<Notification tone={Tone.Promote}>Something important is going on!</Notification>
				<Notification tone={Tone.Success}>Something important is going on!</Notification>
				<Notification tone={Tone.Warning}>Something important is going on!</Notification>
				<p>
					What looked like a <a href="#">small patch</a> of purple grass, above
					five feet square, was moving across the sand in their direction.
				</p>

				<p>
					When it came near enough he perceived that it was not grass; there
					were no blades, but only purple roots. The roots were revolving, for
					each small plant in the whole patch, like the spokes of a rimless
					wheel.
				</p>

				<h2>A Visual Type Scale</h2>

				<p>
					What looked like a small patch of purple grass, above five feet
					square, was moving across the sand in their direction.
				</p>

				<p>
					When it came near enough he perceived that it was not grass; there
					were no blades, but only purple roots. The roots were revolving, for
					each small plant in the whole patch, like the spokes of a rimless
					wheel.
				</p>

				<Blockquote>
					There are many <strong>variations of passages</strong> of Lorem Ipsum
					available, but the majority have suffered alteration in some form, by
					injected <a href="#">humour</a>, or randomised words which don't look
					even slightly believable.
				</Blockquote>
				<h3>A Visual Type Scale</h3>

				<p>
					What looked like a small patch of purple grass, above five feet
					square, was moving across the sand in their direction.
				</p>

				<p>
					When it came near enough he perceived that it was not grass; there
					were no blades, but only purple roots. The roots were revolving, for
					each small plant in the whole patch, like the spokes of a rimless
					wheel.
				</p>

				<h4>A Visual Type Scale</h4>

				<p>
					What looked like a small patch of purple grass, above five feet
					square, was moving across the sand in their direction.
				</p>

				<p>
					When it came near enough he perceived that it was not grass; there
					were no blades, but only purple roots. The roots were revolving, for
					each small plant in the whole patch, like the spokes of a rimless
					wheel.
				</p>

				<ul>
					<li>Hey</li>
					<li>Hello</li>
					<li>It's me</li>
				</ul>

				<h5>A Visual Type Scale</h5>

				<p>
					What looked like a small patch of purple grass, above five feet
					square, was moving across the sand in their direction.
				</p>

				<p>
					When it came near enough he perceived that it was not grass; there
					were no blades, but only purple roots. The roots were revolving, for
					each small plant in the whole patch, like the spokes of a rimless
					wheel.
				</p>

				<p className="text_small">
					— Excerpt from A Voyage to Arcturus, by David Lindsay.
				</p>
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
