export function buildUrl(path) {
    const baseUrl = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL;
    return `${baseUrl}${path}`;
}
