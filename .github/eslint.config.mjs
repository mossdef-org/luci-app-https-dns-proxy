import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import markdown from "@eslint/markdown";
import json from '@eslint/json';
import js from '@eslint/js';

export default defineConfig([
	globalIgnores([
		'node_modules',
	]),
	// Markdown
	{
		files: ["**/*.md"],
		plugins: {
			markdown,
		},
		processor: "markdown/markdown",
	},
	// applies only to JavaScript blocks inside of Markdown files
	{
		files: ["**/*.md/*.js"],
		rules: {
			strict: "off",
		},
	},
	// JSON files
	{
		files: ['**/*.json'],
		ignores: ['package-lock.json'],
		plugins: { json },
		language: 'json/json',
		extends: ['json/recommended'],
		rules: {
			'json/no-duplicate-keys': 'error',
		},
	},
	// JavaScript files
	{
		files: ['**/*.js'],
		language: '@/js',
		plugins: { js },
		extends: ['js/recommended'],
		linterOptions: {
			reportUnusedDisableDirectives: "off",
		},
		languageOptions: {
			sourceType: 'script',
			ecmaVersion: 2026,
			globals: {
				...globals.browser,
				/* LuCI runtime / cbi exports */
				_: 'readonly',
				N_: 'readonly',
				L: 'readonly',
				E: 'readonly',
				TR: 'readonly',
				cbi_d: 'readonly',
				cbi_strings: 'readonly',
				cbi_d_add: 'readonly',
				cbi_d_check: 'readonly',
				cbi_d_checkvalue: 'readonly',
				cbi_d_update: 'readonly',
				cbi_init: 'readonly',
				cbi_update_table: 'readonly',
				cbi_validate_form: 'readonly',
				cbi_validate_field: 'readonly',
				cbi_validate_named_section_add: 'readonly',
				cbi_validate_reset: 'readonly',
				cbi_row_swap: 'readonly',
				cbi_tag_last: 'readonly',
				cbi_submit: 'readonly',
				cbi_dropdown_init: 'readonly',
				isElem: 'readonly',
				toElem: 'readonly',
				matchesElem: 'readonly',
				findParent: 'readonly',
				sfh: 'readonly',
				renderBadge: 'readonly',
				/* modules */
				baseclass: 'readonly',
				dom: 'readonly',
				firewall: 'readonly',
				fwtool: 'readonly',
				form: 'readonly',
				fs: 'readonly',
				network: 'readonly',
				nettools: 'readonly',
				poll: 'readonly',
				random: 'readonly',
				request: 'readonly',
				session: 'readonly',
				rpc: 'readonly',
				uci: 'readonly',
				ui: 'readonly',
				uqr: 'readonly',
				validation: 'readonly',
				view: 'readonly',
				widgets: 'readonly',
				/* dockerman */
				dm2: 'readonly',
				jsapi: 'readonly',
			},
			parserOptions: {
				ecmaFeatures: {
					globalReturn: true,
				},
			},
		},
		rules: {
			'strict': 0,
			'no-prototype-builtins': 0,
			'no-empty': 0,
			'no-undef': 'warn',
			'no-unused-vars': ['off', { "caughtErrors": "none" }],
			'no-regex-spaces': 0,
			'no-control-regex': 0,
		},
	},
]);
