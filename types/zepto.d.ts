declare module 'zepto' {
  interface ZeptoCollection extends Array<Element> {
    // Add Zepto methods as needed, e.g.:
    css(property: string, value?: string): ZeptoCollection;
    on(event: string, handler: (event: Event) => void): ZeptoCollection;
    // ...other Zepto methods
  }

  const $: (selector: string | Element | Document | Window, context?: Element | Document) => ZeptoCollection;
  export = $;
}
