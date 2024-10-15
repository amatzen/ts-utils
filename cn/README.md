# cn - Tailwind class name utility function

Inspired by the implementation at a couple of Vercel folks, including [shadcn](https://github.com/shadcn-ui/ui/blob/1297abc8820480681ccec1bb026b29b30d9c858d/apps/www/lib/utils.ts#L5) and [Steven Tey](https://github.com/steven-tey/precedent/blob/3be40205d7cdf56082cd284f07f12251b9208f79/lib/utils.ts#L6), this simple utility function allows you to easily wrap around Tailwind CSS classes with support for overrides, conditionals etc.

This package depends on
- [tailwind-merge](https://npmjs.com/package/tailwind-merge) (npm)
- [@nick/clsx](https://jsr.io/@nick/clsx) (jsr)
