export const authEndpoint = "https://accounts.spotify.com/authorize";

const redurectUri = "http://localhost:3000"

const clientId = "1866b5d01e2743eaa458b275a98b7eb8"

const scopes = [
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
]

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            let parts = item.split("=")
            initial[parts[0]] = decodeURIComponent(parts[1])
            console.log(initial)
            return initial
        }, {})
}



export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redurectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`