# VSCode Checkbox

The `vscode-checkbox` is a web component implementation of an [HTML Input Checkbox Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/checkbox).

## Attributes

| Attribute   | Type    | Description                                                                              |
| ----------- | ------- | ---------------------------------------------------------------------------------------- |
| `autofocus` | boolean | Determines if the element should receive document focus on page load.                    |
| `checked`   | boolean | When true, the checkbox is toggled on by default.                                        |
| `disabled`  | boolean | Prevents the user from interacting with the button––it cannot be pressed or focused.     |
| `readonly`  | boolean | When true, the control will be immutable by user interaction.                            |
| `required`  | boolean | Indicates that the user must check the checkbox before the owning form can be submitted. |
| `value`     | string  | The string to use as the value of the checkbox when submitting the form                  |

## Usage

### Basic Usage

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-checkbox--default)

```html
<vscode-checkbox>Label</vscode-checkbox>
```

### Autofocus Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-checkbox--with-autofocus)

```html
<vscode-checkbox autofocus>Label</vscode-checkbox>
```

### Checked Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-checkbox--with-checked)

```html
<vscode-checkbox checked>Label</vscode-checkbox>
```

### Disabled Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-checkbox--with-disabled)

```html
<vscode-checkbox disabled>Label</vscode-checkbox>
```

### Readonly Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-checkbox--with-read-only)

```html
<vscode-checkbox readonly>Label</vscode-checkbox>
```

### Required Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-checkbox--with-required)

```html
<vscode-checkbox required>Label</vscode-checkbox>
```

### Value Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-checkbox--with-value)

```html
<vscode-checkbox value="foo">Label</vscode-checkbox>
```

### Form Usage

Here is an example of the VSCode Checkbox and its various attributes being used in a form.

```html
<form>
	<fieldset>
		<legend>Fieldset Legend</legend>
		<vscode-checkbox checked required>Checked + Required</vscode-checkbox>
		<vscode-checkbox checked readonly>Checked + Readonly</vscode-checkbox>
		<vscode-checkbox autofocus>Autofocus</vscode-checkbox>
		<vscode-checkbox disabled>Disabled</vscode-checkbox>
		<vscode-checkbox value="Foo">Value Set To "Foo"</vscode-checkbox>
	</fieldset>
	<vscode-button type="submit">Submit Button</vscode-button>
</form>
```