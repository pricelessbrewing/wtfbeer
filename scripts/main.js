
$(function() {

    // Populate using an object literal

    WTF.init({

        heading: [
            "You should fucking brew a NE-IPA with",
            "You're fucking brewing",
            "Make a fucking glass of juice",
            "Brew a fucking hazy ass ",
            "Fuck it, why not brew"
        ],
        response: [
            "That sounds fucking terrible",
            "I don't wanna fucking brew that",
            "Sounds like catpiss",
            "Ya'll mothefuckers need hops",
            "Fuck that idea"
        ],
        template: [
            "a @style made with @grain , @grain grains, @hop & @hop hops",
            "a @adjective @style"
        ],
        style: [
            "NE IPA",
            "Literally a glass of orange juice",
            "Jamil thinks this is a starter",
        ],
        adjective: [
            "hoppy",
            "session",
            "imperial",
            "Hazy",
            "Juicy",
        ],
        hop: [
            "Amarillo",
            "cascade",
            "centennial",
            "citra",
            "comet",
            "crystal",
            "galaxy",
            "hallertauer blanc",
            "huell melon",
            "lemon drop",
         "Mandarina bavaria",
        "mosaic",
            "nelson sauvin",
            "olympic",
            "pioneer",
            "polaris",
            "saaz",
            "simcoe",
            "southern cross",
            "summit",
            "sovereign",
            "tahoma",
            "wai-iti",
            "waimea",
            "wakatu",
            "zythos"
        ],
        grain: [
            "2 row",
            "marris otter",
            "pilsner malt",
            "vienna malt",
            "carapils",
            "malted wheat",      
            "rye malt",
            "biscuit malt",
            "flaked oats",
            "munich malt",
            "flaked barley",
            "flaked corn",
            "golden promise",
            "roasted wheat malt",
            "special b",
            "amber malt",
            "mild ale malt",
            "spelt malt",
            "diastatic malt",
            "red x malt",
            "abbey malt",
            "chit malt",
            "torrefied wheat"
        ]
    });

    // Populate using a JSON file
    // WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    // WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );

}); 
