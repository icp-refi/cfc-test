<script lang="ts">
	export let size: 'small' | 'medium' | 'large' | 'extra-large' = 'medium',
		weight: 'light' | 'regular' | 'semibold' | 'bold' | 'black' = 'regular',
		marginBottom: string = '',
		marginTop: string = '',
		marginLeft: string = '',
		marginRight: string = '',
		color: string = '',
		textAlign: string = '',
		lineHeight: string = '';
</script>

<div
	style:color
	style:text-align={textAlign}
	style:line-height={lineHeight}
	style:margin-bottom={marginBottom}
	style:margin-top={marginTop}
	style:margin-left={marginLeft}
	style:margin-right={marginRight}
	class="body"
	class:small={size == 'small'}
	class:medium={size == 'medium'}
	class:large={size == 'large'}
	class:extra-large={size == 'extra-large'}
	class:light={weight == 'light'}
	class:regular={weight == 'regular'}
	class:semibold={weight == 'semibold'}
	class:bold={weight == 'bold'}
	class:black={weight == 'black'}
>
	<slot />
</div>

<style>
	.body {
		letter-spacing: -0.5px;
		line-height: 1.2;
	}

	.light {
		font-weight: 100;
	}

	.regular {
		font-weight: 300;
	}

	.semibold {
		font-weight: 500;
	}

	.bold {
		font-weight: 700;
	}

	.black {
		font-weight: 900;
	}

	.small {
		font-size: 10pt;
	}

	.medium {
		font-size: 11pt;
	}

	.large {
		font-size: 12pt;
	}

	.extra-large {
		font-size: 13pt;
	}
</style>
