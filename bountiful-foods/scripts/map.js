// src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBAXsi3HYoG9q5VQwth464gBhFDXuK6NHY"


// // Initialize the map
// function initMap() {
//     // Carlsbad, California coordinates
//     var carlsbad = { lat: 33.158093, lng: -117.350594 };

//     // Create the map centered on Carlsbad
//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 10,
//         center: carlsbad
//     });

//     // Add a marker at the center of the map
//     var marker = new google.maps.Marker({
//         position: carlsbad,
//         map: map,
//         title: 'Carlsbad, California'
//     });
// }

// // Call the initMap function after the API has loaded
// google.maps.event.addDomListener(window, 'load', initMap);


// Initialize and add the map
let map;

async function initMap() {
    // The location of Uluru
    const position = { lat: -25.344, lng: 131.031 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

    // The map, centered at Uluru
    map = new Map(document.getElementById("google-map"), {
        zoom: 4,
        center: position,
        mapId: "DEMO_MAP_ID",
    });

    // The marker, positioned at Uluru
    const marker = new AdvancedMarkerView({
        map: map,
        position: position,
        title: "Uluru",
    });
}

initMap();


(g => { var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; b = b[c] || (b[c] = {}); var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => { await (a = m.createElement("script")); e.set("libraries", [...r] + ""); for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q); a.src = `https://maps.${c}apis.com/maps/api/js?` + e; d[q] = f; a.onerror = () => h = n(Error(p + " could not load.")); a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a) })); d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)) })({
    key: "AIzaSyBAXsi3HYoG9q5VQwth464gBhFDXuK6NHY",
    // Add other bootstrap parameters as needed, using camel case.
    // Use the 'v' parameter to indicate the version to load (alpha, beta, weekly, etc.)
});
