const SERVER_URL = "http://localhost:8000"

export function makeURL(path: string): string {
    return new URL(path, SERVER_URL).href
}
