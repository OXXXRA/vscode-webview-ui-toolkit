import {customElement} from '@microsoft/fast-element';
import {
	BreadcrumbItem,
	BreadcrumbItemTemplate as template,
} from '@microsoft/fast-foundation';
import {BreadcrumbItemStyles as styles} from './breadcrumb-item.styles';

/**
 * The VSCode BreadcrumbItem element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.breadcrumbitem/ BreadcrumbItem} and
 * {@link https://www.fast.design/docs/api/fast-foundation.breadcrumbitemtemplate/ BreadcrumbItemTemplate}.
 *
 * @public
 * @remarks
 * HTML Element: `<vscode-breadcrumb-item>`
 *
 * Shadow Option: {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus delegatesFocus}
 */
@customElement({
	name: 'vscode-breadcrumb-item',
	template,
	styles,
	shadowOptions: {
		delegatesFocus: true,
	},
})
export class VSCodeBreadcrumbItem extends BreadcrumbItem {}