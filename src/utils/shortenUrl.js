export const shortenUrl = (url: string): string =>
  url.replace(/http(s)?(:)?(\/\/)?|(\/\/)?(www\.)?/g, '').split('/')[0];
