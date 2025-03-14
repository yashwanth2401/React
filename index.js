import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
}

const RestaurantCard = (props) => {
    const{resData} = props;
    const {image,title,rating,meta} = resData?.store;
    return(
        <div className="res-card">
            <img className="res-image" src={image.items[0].url} />
            <h3>{title.text}</h3>
            <h4>{rating.text}</h4>
            <h4>{meta[0].text}</h4>
        </div>
    )
}

const resObj = [{
    "uuid": "6144ad14-18fa-4cda-b24d-6ca4caf8161a",
    "type": "REGULAR_STORE",
    "store": {
        "storeUuid": "6144ad14-18fa-4cda-b24d-6ca4caf8161a",
        "title": {
            "text": "KFC"
        },
        "meta": [
            {
                "text": "10 min",
                "accessibilityText": "Delivered in 10 to 10 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.3",
            "accessibilityText": "Rated 4.3 out of 5 stars based on more than 1,000 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/kfc-1970-n-cobb-parkway/YUStFBj6TNqyTWykyvgWGg",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/b5d9c650814b5acb5a840110faf071b5/db809eadd12d21eb61044e0f3bf7c9b7.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/b5d9c650814b5acb5a840110faf071b5/492abbfd79da0fd117a23fd2a6cf3df9.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/b5d9c650814b5acb5a840110faf071b5/b15c9ad51e970f3ee593eca3d03cee54.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/b5d9c650814b5acb5a840110faf071b5/20fa9288fdc01be28055baedd768dc37.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/b5d9c650814b5acb5a840110faf071b5/63d18745892c100be9e4ef3c560c9204.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/b5d9c650814b5acb5a840110faf071b5/dfe73df3a8123af1971eabf3eeff9ac1.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": [
            {
                "backgroundColor": {
                    "color": "#0E8345"
                },
                "text": "Buy 1, Get 1 Free",
                "textColor": {
                    "color": "#FFFFFF"
                }
            }
        ],
        "tracking": {
            "metaInfo": {
                "pluginName": "search",
                "analyticsLabel": "SEARCH_STORE_DISH_RESULTS",
                "verticalType": "",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": ""
            },
            "storePayload": {
                "storeUUID": "6144ad14-18fa-4cda-b24d-6ca4caf8161a",
                "isOrderable": true,
                "etdInfo": {
                    "dropoffETASec": 1331,
                    "dropoffETARange": {
                        "min": 10,
                        "max": 10,
                        "raw": 10
                    },
                    "minRangeDropoffETASec": 600,
                    "maxRangeDropoffETASec": 600,
                    "etdMode": "PREDICTION"
                },
                "ratingInfo": {
                    "storeRatingScore": 4.26780279975654,
                    "ratingCount": "1,000+"
                },
                "promotionUUID": "98fef0c3-0143-4501-a497-628c6db4a2ff",
                "scheduleTimeSlots": null,
                "storeAvailablityState": "NOT_ACCEPTING_ORDERS",
                "offerMetadata": {
                    "analyticsUUID": "3824fd19-79fc-47fb-8747-a47f5d7d97e3",
                    "promotionUUIDs": [
                        "98fef0c3-0143-4501-a497-628c6db4a2ff"
                    ],
                    "offerTypeCount": 1,
                    "concatSignpost": "promo.restaurant.free_item_with_cart_item_constraint"
                }
            }
        },
        "mapMarker": {
            "latitude": 34.0012,
            "longitude": -84.5917,
            "zIndex": 9999,
            "description": {
                "title": "KFC",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.3",
                "size": "SPACING_UNIT_4X"
            },
            "secondaryMarkerContent": {
                "color": "CONTENT_POSITIVE",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_POSITIVE",
                "icon": "TAG"
            }
        },
        "meta2": [],
        "layoutType": "MINISTORE_LAYOUT",
        "endorsements": null,
        "meta4": null
    },
    "analyticsLabel": "SEARCH_STORE_DISH_RESULTS"
},
{
    "uuid": "3fdff425-e0b7-52f2-897b-afa7cdf976a7",
    "type": "REGULAR_STORE",
    "store": {
        "storeUuid": "3fdff425-e0b7-52f2-897b-afa7cdf976a7",
        "title": {
            "text": "Bojangles"
        },
        "meta": [
            {
                "text": "10 min",
                "accessibilityText": "Delivered in 10 to 10 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.3",
            "accessibilityText": "Rated 4.3 out of 5 stars based on more than 700 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/bojangles-4071-cherokee-street/P9_0JeC3UvKJe6-nzfl2pw",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/d9f7c59a6dcea8caa8ffc79f7b339588/30be7d11a3ed6f6183354d1933fbb6c7.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/d9f7c59a6dcea8caa8ffc79f7b339588/cc592037c936600295e9961933037e19.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/d9f7c59a6dcea8caa8ffc79f7b339588/d9be3fc772fc6c0fd6b3471e291aa823.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/d9f7c59a6dcea8caa8ffc79f7b339588/0c09274e3b12c8246a05970e1ef9d835.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/d9f7c59a6dcea8caa8ffc79f7b339588/7835428b286acb57646a256c897c0e9e.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/d9f7c59a6dcea8caa8ffc79f7b339588/fa23f51b9c499b035a68831c96e1821e.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": null,
        "tracking": {
            "metaInfo": {
                "pluginName": "search",
                "analyticsLabel": "SEARCH_STORE_DISH_RESULTS",
                "verticalType": "",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": ""
            },
            "storePayload": {
                "storeUUID": "3fdff425-e0b7-52f2-897b-afa7cdf976a7",
                "isOrderable": true,
                "etdInfo": {
                    "dropoffETASec": 1235,
                    "dropoffETARange": {
                        "min": 10,
                        "max": 10,
                        "raw": 10
                    },
                    "minRangeDropoffETASec": 600,
                    "maxRangeDropoffETASec": 600,
                    "etdMode": "PREDICTION"
                },
                "ratingInfo": {
                    "storeRatingScore": 4.316906747536014,
                    "ratingCount": "700+"
                },
                "scheduleTimeSlots": null,
                "storeAvailablityState": "NOT_ACCEPTING_ORDERS"
            }
        },
        "mapMarker": {
            "latitude": 34.0505,
            "longitude": -84.5967,
            "zIndex": 9998,
            "description": {
                "title": "Bojangles",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.3",
                "size": "SPACING_UNIT_4X"
            }
        },
        "meta2": [],
        "layoutType": "MINISTORE_LAYOUT",
        "endorsements": null,
        "meta4": null
    },
    "analyticsLabel": "SEARCH_STORE_DISH_RESULTS"
},
{
    "uuid": "ec89dcaf-af75-5b76-901e-8aaa7c75ee43",
    "type": "REGULAR_STORE",
    "store": {
        "storeUuid": "ec89dcaf-af75-5b76-901e-8aaa7c75ee43",
        "title": {
            "text": "Domino's"
        },
        "meta": [
            {
                "text": "$0.99 Delivery Fee",
                "accessibilityText": "Delivery Fee is $0.99",
                "badgeType": "FARE",
                "badgeData": {
                    "fare": {
                        "isSurge": false,
                        "deliveryFee": "$0.99 Delivery Fee",
                        "serviceFee": ""
                    },
                    "type": "fare"
                }
            },
            {
                "text": "20 min",
                "accessibilityText": "Delivered in 20 to 20 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.3",
            "accessibilityText": "Rated 4.3 out of 5 stars based on more than 200 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/dominos-3643-cherokee-st-nw/7Incr691W3aQHoqqfHXuQw",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/d0b62641ca903751d33b14167f2a4c2e/db809eadd12d21eb61044e0f3bf7c9b7.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/d0b62641ca903751d33b14167f2a4c2e/492abbfd79da0fd117a23fd2a6cf3df9.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/d0b62641ca903751d33b14167f2a4c2e/b15c9ad51e970f3ee593eca3d03cee54.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/d0b62641ca903751d33b14167f2a4c2e/20fa9288fdc01be28055baedd768dc37.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/d0b62641ca903751d33b14167f2a4c2e/63d18745892c100be9e4ef3c560c9204.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/d0b62641ca903751d33b14167f2a4c2e/dfe73df3a8123af1971eabf3eeff9ac1.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": null,
        "tracking": {
            "metaInfo": {
                "pluginName": "search",
                "analyticsLabel": "SEARCH_STORE_DISH_RESULTS",
                "verticalType": "",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": ""
            },
            "storePayload": {
                "storeUUID": "ec89dcaf-af75-5b76-901e-8aaa7c75ee43",
                "isOrderable": true,
                "etdInfo": {
                    "dropoffETASec": 1080,
                    "dropoffETARange": {
                        "min": 20,
                        "max": 20,
                        "raw": 20
                    },
                    "minRangeDropoffETASec": 1200,
                    "maxRangeDropoffETASec": 1200,
                    "etdMode": "PREDICTION"
                },
                "ratingInfo": {
                    "storeRatingScore": 4.250447227191412,
                    "ratingCount": "200+"
                },
                "scheduleTimeSlots": null,
                "storeAvailablityState": "NOT_ACCEPTING_ORDERS"
            }
        },
        "mapMarker": {
            "latitude": 34.0417,
            "longitude": -84.6029,
            "zIndex": 9997,
            "description": {
                "title": "Domino's",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.3",
                "size": "SPACING_UNIT_4X"
            }
        },
        "meta2": [],
        "layoutType": "MINISTORE_LAYOUT",
        "endorsements": null,
        "meta4": null
    },
    "analyticsLabel": "SEARCH_STORE_DISH_RESULTS"
},
{
    "uuid": "f82e2aa7-eaff-475a-887d-e2756029f8c1",
    "type": "REGULAR_STORE",
    "store": {
        "storeUuid": "f82e2aa7-eaff-475a-887d-e2756029f8c1",
        "title": {
            "text": "Checkers"
        },
        "meta": [
            {
                "text": "45 min",
                "accessibilityText": "Delivered in 45 to 45 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "3.9",
            "accessibilityText": "Rated 3.9 out of 5 stars based on more than 2,000 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/checkers-3745-austell-road/-C4qp-r_R1qIfeJ1YCn4wQ",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/f5ac87005849c5fef7f431e1e9ddcc94/30be7d11a3ed6f6183354d1933fbb6c7.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/f5ac87005849c5fef7f431e1e9ddcc94/cc592037c936600295e9961933037e19.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/f5ac87005849c5fef7f431e1e9ddcc94/d9be3fc772fc6c0fd6b3471e291aa823.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/f5ac87005849c5fef7f431e1e9ddcc94/0c09274e3b12c8246a05970e1ef9d835.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/f5ac87005849c5fef7f431e1e9ddcc94/7835428b286acb57646a256c897c0e9e.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/f5ac87005849c5fef7f431e1e9ddcc94/fa23f51b9c499b035a68831c96e1821e.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": null,
        "tracking": {
            "metaInfo": {
                "pluginName": "search",
                "analyticsLabel": "SEARCH_STORE_DISH_RESULTS",
                "verticalType": "",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": ""
            },
            "storePayload": {
                "storeUUID": "f82e2aa7-eaff-475a-887d-e2756029f8c1",
                "isOrderable": true,
                "etdInfo": {
                    "dropoffETASec": 3186,
                    "dropoffETARange": {
                        "min": 45,
                        "max": 45,
                        "raw": 45
                    },
                    "minRangeDropoffETASec": 2700,
                    "maxRangeDropoffETASec": 2700,
                    "etdMode": "PREDICTION"
                },
                "ratingInfo": {
                    "storeRatingScore": 3.8806218767351384,
                    "ratingCount": "2,000+"
                },
                "scheduleTimeSlots": null,
                "storeAvailablityState": "NOT_ACCEPTING_ORDERS"
            }
        },
        "mapMarker": {
            "latitude": 33.8619,
            "longitude": -84.5967,
            "zIndex": 9996,
            "description": {
                "title": "Checkers",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "3.9",
                "size": "SPACING_UNIT_4X"
            }
        },
        "meta2": [],
        "layoutType": "MINISTORE_LAYOUT",
        "endorsements": null,
        "meta4": null
    },
    "analyticsLabel": "SEARCH_STORE_DISH_RESULTS"
},
{
    "uuid": "0c5d859a-8e51-4468-87e4-98c9f98869b7",
    "type": "REGULAR_STORE",
    "store": {
        "storeUuid": "0c5d859a-8e51-4468-87e4-98c9f98869b7",
        "title": {
            "text": "Zaxbys"
        },
        "meta": [
            {
                "text": "10 min",
                "accessibilityText": "Delivered in 10 to 10 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.4",
            "accessibilityText": "Rated 4.4 out of 5 stars based on more than 2,000 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/zaxbys-780-townpark-ln/DF2Fmo5RRGiH5JjJ-Yhptw",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2457b06adecb7d3f69de9ae094637990/db809eadd12d21eb61044e0f3bf7c9b7.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2457b06adecb7d3f69de9ae094637990/492abbfd79da0fd117a23fd2a6cf3df9.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2457b06adecb7d3f69de9ae094637990/b15c9ad51e970f3ee593eca3d03cee54.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2457b06adecb7d3f69de9ae094637990/20fa9288fdc01be28055baedd768dc37.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2457b06adecb7d3f69de9ae094637990/63d18745892c100be9e4ef3c560c9204.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2457b06adecb7d3f69de9ae094637990/dfe73df3a8123af1971eabf3eeff9ac1.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": [
            {
                "backgroundColor": {
                    "color": "#0E8345"
                },
                "text": "Free Item (Spend $30)",
                "textColor": {
                    "color": "#FFFFFF"
                }
            }
        ],
        "tracking": {
            "metaInfo": {
                "pluginName": "search",
                "analyticsLabel": "SEARCH_STORE_DISH_RESULTS",
                "verticalType": "",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": ""
            },
            "storePayload": {
                "storeUUID": "0c5d859a-8e51-4468-87e4-98c9f98869b7",
                "isOrderable": true,
                "etdInfo": {
                    "dropoffETASec": 1164,
                    "dropoffETARange": {
                        "min": 10,
                        "max": 10,
                        "raw": 10
                    },
                    "minRangeDropoffETASec": 600,
                    "maxRangeDropoffETASec": 600,
                    "etdMode": "PREDICTION"
                },
                "ratingInfo": {
                    "storeRatingScore": 4.366639806607579,
                    "ratingCount": "2,000+"
                },
                "promotionUUID": "9ae3d21f-3648-4901-86ac-df637af128c4",
                "scheduleTimeSlots": null,
                "storeAvailablityState": "NOT_ACCEPTING_ORDERS",
                "offerMetadata": {
                    "analyticsUUID": "8e82cff2-f662-4105-9ae3-65f1d10e08e1",
                    "promotionUUIDs": [
                        "9ae3d21f-3648-4901-86ac-df637af128c4"
                    ],
                    "offerTypeCount": 1,
                    "concatSignpost": "promo.restaurant.free_item_with_min_basket"
                }
            }
        },
        "mapMarker": {
            "latitude": 34.0358,
            "longitude": -84.5745,
            "zIndex": 9995,
            "description": {
                "title": "Zaxbys",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.4",
                "size": "SPACING_UNIT_4X"
            },
            "secondaryMarkerContent": {
                "color": "CONTENT_POSITIVE",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_POSITIVE",
                "icon": "TAG"
            }
        },
        "meta2": [],
        "layoutType": "MINISTORE_LAYOUT",
        "endorsements": null,
        "meta4": null
    },
    "analyticsLabel": "SEARCH_STORE_DISH_RESULTS"
},
{
    "uuid": "2960eeb1-032b-4b9c-82e4-b22e940d9a22",
    "type": "REGULAR_STORE",
    "store": {
        "storeUuid": "2960eeb1-032b-4b9c-82e4-b22e940d9a22",
        "title": {
            "text": "McDonald's®"
        },
        "meta": [
            {
                "text": "10 min",
                "accessibilityText": "Delivered in 10 to 10 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.4",
            "accessibilityText": "Rated 4.4 out of 5 stars based on more than 2,000 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/mcdonalds-kennesaw-ga-jiles-rd-%40-baker/KWDusQMrS5yC5LIulA2aIg",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/9aa7bc9ad2dc430c1630648163ce99d4/db809eadd12d21eb61044e0f3bf7c9b7.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/9aa7bc9ad2dc430c1630648163ce99d4/492abbfd79da0fd117a23fd2a6cf3df9.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/9aa7bc9ad2dc430c1630648163ce99d4/b15c9ad51e970f3ee593eca3d03cee54.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/9aa7bc9ad2dc430c1630648163ce99d4/20fa9288fdc01be28055baedd768dc37.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/9aa7bc9ad2dc430c1630648163ce99d4/63d18745892c100be9e4ef3c560c9204.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/9aa7bc9ad2dc430c1630648163ce99d4/dfe73df3a8123af1971eabf3eeff9ac1.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": null,
        "tracking": {
            "metaInfo": {
                "pluginName": "search",
                "analyticsLabel": "SEARCH_STORE_DISH_RESULTS",
                "verticalType": "",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": ""
            },
            "storePayload": {
                "storeUUID": "2960eeb1-032b-4b9c-82e4-b22e940d9a22",
                "isOrderable": true,
                "etdInfo": {
                    "dropoffETASec": 1026,
                    "dropoffETARange": {
                        "min": 10,
                        "max": 10,
                        "raw": 10
                    },
                    "minRangeDropoffETASec": 600,
                    "maxRangeDropoffETASec": 600,
                    "etdMode": "PREDICTION"
                },
                "ratingInfo": {
                    "storeRatingScore": 4.382072829131653,
                    "ratingCount": "2,000+"
                },
                "scheduleTimeSlots": null,
                "storeAvailablityState": "NOT_ACCEPTING_ORDERS"
            }
        },
        "mapMarker": {
            "latitude": 34.048,
            "longitude": -84.6114,
            "zIndex": 9994,
            "description": {
                "title": "McDonald's®",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.4",
                "size": "SPACING_UNIT_4X"
            }
        },
        "meta2": [],
        "layoutType": "MINISTORE_LAYOUT",
        "endorsements": null,
        "meta4": null
    },
    "analyticsLabel": "SEARCH_STORE_DISH_RESULTS"
},
{
    "uuid": "e1e52e80-e8cc-57f3-abf4-f474b6ab5f6b",
    "type": "REGULAR_STORE",
    "store": {
        "storeUuid": "e1e52e80-e8cc-57f3-abf4-f474b6ab5f6b",
        "title": {
            "text": "Spice Wing-Kennesaw"
        },
        "meta": [
            {
                "text": "15 min",
                "accessibilityText": "Delivered in 15 to 15 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.6",
            "accessibilityText": "A top rated restaurant with 4.6 out of 5 stars based on 11 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/spice-wing-kennesaw-kennesaw/4eUugOjMV_Or9PR0tqtfaw",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/0cfcd59dd95f67647d38159408a205c2/885ba8620d45ab36746a0e8c7b85ee66.webp",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/0cfcd59dd95f67647d38159408a205c2/b92d4926516c2635a39581f43cd533a0.webp",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/0cfcd59dd95f67647d38159408a205c2/66345bbe137cfe4e15769c434c6c397c.webp",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/0cfcd59dd95f67647d38159408a205c2/35927095c71455a8eb90d48f0168bf20.webp",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/0cfcd59dd95f67647d38159408a205c2/560a11f5d26e4cb83686f7810a5f5fe2.webp",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/0cfcd59dd95f67647d38159408a205c2/08829600257ed8168dd856cafb7446c8.webp",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": [
            {
                "backgroundColor": {
                    "color": "#0E8345"
                },
                "iconUrl": "https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png",
                "text": " Top Offer • 3 Offers Available",
                "textColor": {
                    "color": "#FFFFFF"
                },
                "textFormat": "<span><img src=\"https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png\" width=\"10\" height=\"11\" vertical-align=\"middle\"/> Top Offer • 3 Offers Available</span>"
            }
        ],
        "tracking": {
            "metaInfo": {
                "pluginName": "search",
                "analyticsLabel": "SEARCH_STORE_DISH_RESULTS",
                "verticalType": "",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": ""
            },
            "storePayload": {
                "storeUUID": "e1e52e80-e8cc-57f3-abf4-f474b6ab5f6b",
                "isOrderable": true,
                "etdInfo": {
                    "dropoffETASec": 1489,
                    "dropoffETARange": {
                        "min": 15,
                        "max": 15,
                        "raw": 15
                    },
                    "minRangeDropoffETASec": 900,
                    "maxRangeDropoffETASec": 900,
                    "etdMode": "PREDICTION"
                },
                "ratingInfo": {
                    "storeRatingScore": 4.636363636363636,
                    "ratingCount": "11"
                },
                "promotionUUID": "ae054e3b-2ffd-4f1f-b15f-277ce4b4588e",
                "scheduleTimeSlots": null,
                "storeAvailablityState": "NOT_ACCEPTING_ORDERS",
                "offerMetadata": {
                    "analyticsUUID": "0da8db5c-4963-4265-85c4-a246b7b99737",
                    "promotionUUIDs": [
                        "ae054e3b-2ffd-4f1f-b15f-277ce4b4588e",
                        "13230fc0-6e13-430f-a5cf-c7ee85338c3a",
                        "b65ba1c5-4e01-43d1-b982-e1593b0eb876",
                        "dfb7a600-5cd0-4a54-96f7-012fa72c3158",
                        "74e64237-f3d9-4582-b9c1-91d0ebf3358d",
                        "d97de7c4-de8d-47d9-a4f6-6f4a63bf8ffd"
                    ],
                    "offerTypeCount": 3,
                    "concatSignpost": "offer_quality.top_offer,concurrent_offer.signpost.num.of.offers.available"
                }
            }
        },
        "mapMarker": {
            "latitude": 34.0256,
            "longitude": -84.567,
            "zIndex": 9993,
            "description": {
                "title": "Spice Wing-Kennesaw",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.6",
                "size": "SPACING_UNIT_4X"
            },
            "secondaryMarkerContent": {
                "color": "CONTENT_POSITIVE",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_POSITIVE",
                "icon": "TAG"
            }
        },
        "meta2": [],
        "layoutType": "MINISTORE_LAYOUT",
        "endorsements": null,
        "meta4": null
    },
    "analyticsLabel": "SEARCH_STORE_DISH_RESULTS"
},
{
    "uuid": "9a9b7974-ea39-441c-9f4c-a5423333bc88",
    "type": "REGULAR_STORE",
    "store": {
        "storeUuid": "9a9b7974-ea39-441c-9f4c-a5423333bc88",
        "title": {
            "text": "Hardees"
        },
        "meta": [
            {
                "text": "10 min",
                "accessibilityText": "Delivered in 10 to 10 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.5",
            "accessibilityText": "Rated 4.5 out of 5 stars based on more than 400 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/hardees-1500793/mpt5dOo5RByfTKVCMzO8iA",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/28b0aba3883c94d1c16b7332b4f2758b/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/28b0aba3883c94d1c16b7332b4f2758b/50446f64f31cbefe66558fc47f50a9d6.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/28b0aba3883c94d1c16b7332b4f2758b/f3376a06b92224efbe50167fb7cb61e4.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/28b0aba3883c94d1c16b7332b4f2758b/67b1ce06a25a64dc4a71581bb39c36c6.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/28b0aba3883c94d1c16b7332b4f2758b/7915c4a78a9f94ed56316c7c4dc0ec89.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/28b0aba3883c94d1c16b7332b4f2758b/e39556ef1e4c4565bc6c7dbd8b90869c.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": null,
        "tracking": {
            "metaInfo": {
                "pluginName": "search",
                "analyticsLabel": "SEARCH_STORE_DISH_RESULTS",
                "verticalType": "",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": ""
            },
            "storePayload": {
                "storeUUID": "9a9b7974-ea39-441c-9f4c-a5423333bc88",
                "isOrderable": true,
                "etdInfo": {
                    "dropoffETASec": 1307,
                    "dropoffETARange": {
                        "min": 10,
                        "max": 10,
                        "raw": 10
                    },
                    "minRangeDropoffETASec": 600,
                    "maxRangeDropoffETASec": 600,
                    "etdMode": "PREDICTION"
                },
                "ratingInfo": {
                    "storeRatingScore": 4.487612612612612,
                    "ratingCount": "400+"
                },
                "scheduleTimeSlots": null,
                "storeAvailablityState": "NOT_ACCEPTING_ORDERS"
            }
        },
        "mapMarker": {
            "latitude": 34.0811,
            "longitude": -84.6548,
            "zIndex": 9992,
            "description": {
                "title": "Hardees",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.5",
                "size": "SPACING_UNIT_4X"
            }
        },
        "meta2": [],
        "layoutType": "MINISTORE_LAYOUT",
        "endorsements": null,
        "meta4": null
    },
    "analyticsLabel": "SEARCH_STORE_DISH_RESULTS"
},
{
    "uuid": "f00bb14e-a121-46f9-9b75-3f57e69ebfba",
    "type": "REGULAR_STORE",
    "store": {
        "storeUuid": "f00bb14e-a121-46f9-9b75-3f57e69ebfba",
        "title": {
            "text": "Coop & Run"
        },
        "meta": [
            {
                "text": "55 min",
                "accessibilityText": "Delivered in 55 to 55 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.3",
            "accessibilityText": "Rated 4.3 out of 5 stars based on 90 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/coop-%26-run-4790-jimmy-lee-smith-pkwy/8AuxTqEhRvmbdT9X5p6_ug",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/c3e23ee50e89f3686dcea1a536847dd6/fb86662148be855d931b37d6c1e5fcbe.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/c3e23ee50e89f3686dcea1a536847dd6/783282f6131ef2258e5bcd87c46aa87e.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/c3e23ee50e89f3686dcea1a536847dd6/8a42ee7a692dfa4155879820804a277f.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/c3e23ee50e89f3686dcea1a536847dd6/fdf52d66534809b650058f41d517d74a.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/c3e23ee50e89f3686dcea1a536847dd6/9b3aae4cf90f897799a5ed357d60e09d.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/c3e23ee50e89f3686dcea1a536847dd6/f6deb0afc24fee6f4bd31a35e6bcbd47.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": null,
        "tracking": {
            "metaInfo": {
                "pluginName": "search",
                "analyticsLabel": "SEARCH_STORE_DISH_RESULTS",
                "verticalType": "",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": ""
            },
            "storePayload": {
                "storeUUID": "f00bb14e-a121-46f9-9b75-3f57e69ebfba",
                "isOrderable": true,
                "etdInfo": {
                    "dropoffETASec": 3847,
                    "dropoffETARange": {
                        "min": 55,
                        "max": 55,
                        "raw": 55
                    },
                    "minRangeDropoffETASec": 3300,
                    "maxRangeDropoffETASec": 3300,
                    "etdMode": "PREDICTION"
                },
                "ratingInfo": {
                    "storeRatingScore": 4.255102040816325,
                    "ratingCount": "90"
                },
                "scheduleTimeSlots": null,
                "storeAvailablityState": "NOT_ACCEPTING_ORDERS"
            }
        },
        "mapMarker": {
            "latitude": 33.8889,
            "longitude": -84.7493,
            "zIndex": 9991,
            "description": {
                "title": "Coop & Run",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.3",
                "size": "SPACING_UNIT_4X"
            }
        },
        "meta2": [],
        "layoutType": "MINISTORE_LAYOUT",
        "endorsements": null,
        "meta4": null
    },
    "analyticsLabel": "SEARCH_STORE_DISH_RESULTS"
},
{
    "uuid": "c87bf7e1-9cf3-539d-999d-614f88661b30",
    "type": "REGULAR_STORE",
    "store": {
        "storeUuid": "c87bf7e1-9cf3-539d-999d-614f88661b30",
        "title": {
            "text": "Krispy Krunchy Chicken"
        },
        "meta": [
            {
                "text": "20 min",
                "accessibilityText": "Delivered in 20 to 20 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.4",
            "accessibilityText": "Rated 4.4 out of 5 stars based on 50 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/krispy-krunchy-chicken-5365-allatoona-gateway/yHv34ZzzU52ZnWFPiGYbMA",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/1b3f65583d30891b66fadb81515b9a18/ae1667b5f6a332a433cb52c8b860239e.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/1b3f65583d30891b66fadb81515b9a18/d71f8291bbeada7a91f90713168d1bed.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/1b3f65583d30891b66fadb81515b9a18/c33c2c047b447be4ca72aeafbc139533.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/1b3f65583d30891b66fadb81515b9a18/d6088d6ffd81366aab0463f69dfdfca0.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/1b3f65583d30891b66fadb81515b9a18/0ff4d61dd034b09f6b5882fabce729de.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/1b3f65583d30891b66fadb81515b9a18/0cea1e8c0f7f19ffd3a328a950fb339c.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": null,
        "tracking": {
            "metaInfo": {
                "pluginName": "search",
                "analyticsLabel": "SEARCH_STORE_DISH_RESULTS",
                "verticalType": "",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": ""
            },
            "storePayload": {
                "storeUUID": "c87bf7e1-9cf3-539d-999d-614f88661b30",
                "isOrderable": true,
                "etdInfo": {
                    "dropoffETASec": 1715,
                    "dropoffETARange": {
                        "min": 20,
                        "max": 20,
                        "raw": 20
                    },
                    "minRangeDropoffETASec": 1200,
                    "maxRangeDropoffETASec": 1200,
                    "etdMode": "PREDICTION"
                },
                "scheduleTimeSlots": null,
                "storeAvailablityState": "NOT_ACCEPTING_ORDERS"
            }
        },
        "mapMarker": {
            "latitude": 34.0836,
            "longitude": -84.6769,
            "zIndex": 9990,
            "description": {
                "title": "Krispy Krunchy Chicken",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "icon": "RESTAURANT",
                "size": "SPACING_UNIT_4X"
            }
        },
        "meta2": [],
        "layoutType": "MINISTORE_LAYOUT",
        "endorsements": null,
        "meta4": null
    },
    "analyticsLabel": "SEARCH_STORE_DISH_RESULTS"
},
{
    "uuid": "abb17a26-1d71-50ac-b133-7fe4a4808b93",
    "type": "REGULAR_STORE",
    "store": {
        "storeUuid": "abb17a26-1d71-50ac-b133-7fe4a4808b93",
        "title": {
            "text": "Whataburger"
        },
        "meta": [
            {
                "text": "10 min",
                "accessibilityText": "Delivered in 10 to 10 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.3",
            "accessibilityText": "Rated 4.3 out of 5 stars based on more than 700 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/whataburger-705-townpark-lane/q7F6Jh1xUKyxM3_kpICLkw",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/725104be1b3a7dbcf5830eafb0b6959c/ff4aba6364666c383abd12743dfbcb5f.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/725104be1b3a7dbcf5830eafb0b6959c/baabc6b32d814bd2b20789700429696c.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/725104be1b3a7dbcf5830eafb0b6959c/473897de786e5c6a7bcf1e54274929b6.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/725104be1b3a7dbcf5830eafb0b6959c/13daa8c3547eb675c19f68d76262648c.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/725104be1b3a7dbcf5830eafb0b6959c/9445ed0c2d5b1dcc5ce0c93c478c489d.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/725104be1b3a7dbcf5830eafb0b6959c/29eedfb23b514285037e89306dc38e03.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": null,
        "tracking": {
            "metaInfo": {
                "pluginName": "search",
                "analyticsLabel": "SEARCH_STORE_DISH_RESULTS",
                "verticalType": "",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": ""
            },
            "storePayload": {
                "storeUUID": "abb17a26-1d71-50ac-b133-7fe4a4808b93",
                "isOrderable": true,
                "etdInfo": {
                    "dropoffETASec": 1227,
                    "dropoffETARange": {
                        "min": 10,
                        "max": 10,
                        "raw": 10
                    },
                    "minRangeDropoffETASec": 600,
                    "maxRangeDropoffETASec": 600,
                    "etdMode": "PREDICTION"
                },
                "ratingInfo": {
                    "storeRatingScore": 4.255635245901638,
                    "ratingCount": "700+"
                },
                "scheduleTimeSlots": null,
                "storeAvailablityState": "NOT_ACCEPTING_ORDERS"
            }
        },
        "mapMarker": {
            "latitude": 34.0362,
            "longitude": -84.5715,
            "zIndex": 9989,
            "description": {
                "title": "Whataburger",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.3",
                "size": "SPACING_UNIT_4X"
            }
        },
        "meta2": [],
        "layoutType": "MINISTORE_LAYOUT",
        "endorsements": null,
        "meta4": null
    },
    "analyticsLabel": "SEARCH_STORE_DISH_RESULTS"
},
{
    "uuid": "8b6e0fe8-4ab6-4f28-bf85-0d8271a9d24f",
    "type": "REGULAR_STORE",
    "store": {
        "storeUuid": "8b6e0fe8-4ab6-4f28-bf85-0d8271a9d24f",
        "title": {
            "text": "Pollo Campero"
        },
        "meta": [
            {
                "text": "35 min",
                "accessibilityText": "Delivered in 35 to 35 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.7",
            "accessibilityText": "A top rated restaurant with 4.7 out of 5 stars based on more than 800 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/pollo-campero-marietta-cobb-pkwy/i24P6Eq2Tyi_hQ2CcanSTw",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/bc00a28709196f569cde0c3427e081f7/ff4aba6364666c383abd12743dfbcb5f.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/bc00a28709196f569cde0c3427e081f7/baabc6b32d814bd2b20789700429696c.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/bc00a28709196f569cde0c3427e081f7/473897de786e5c6a7bcf1e54274929b6.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/bc00a28709196f569cde0c3427e081f7/13daa8c3547eb675c19f68d76262648c.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/bc00a28709196f569cde0c3427e081f7/9445ed0c2d5b1dcc5ce0c93c478c489d.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/bc00a28709196f569cde0c3427e081f7/29eedfb23b514285037e89306dc38e03.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": null,
        "tracking": {
            "metaInfo": {
                "pluginName": "search",
                "analyticsLabel": "SEARCH_STORE_DISH_RESULTS",
                "verticalType": "",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": ""
            },
            "storePayload": {
                "storeUUID": "8b6e0fe8-4ab6-4f28-bf85-0d8271a9d24f",
                "isOrderable": true,
                "etdInfo": {
                    "dropoffETASec": 2711,
                    "dropoffETARange": {
                        "min": 35,
                        "max": 35,
                        "raw": 35
                    },
                    "minRangeDropoffETASec": 2100,
                    "maxRangeDropoffETASec": 2100,
                    "etdMode": "PREDICTION"
                },
                "ratingInfo": {
                    "storeRatingScore": 4.668063704945513,
                    "ratingCount": "800+"
                },
                "scheduleTimeSlots": null,
                "storeAvailablityState": "NOT_ACCEPTING_ORDERS"
            }
        },
        "mapMarker": {
            "latitude": 33.9461,
            "longitude": -84.5186,
            "zIndex": 9988,
            "description": {
                "title": "Pollo Campero",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.7",
                "size": "SPACING_UNIT_4X"
            }
        },
        "meta2": [],
        "layoutType": "MINISTORE_LAYOUT",
        "endorsements": null,
        "meta4": null
    },
    "analyticsLabel": "SEARCH_STORE_DISH_RESULTS"
},
{
    "uuid": "d6a467d8-85fb-496d-b1c7-08b65b85a985",
    "type": "REGULAR_STORE",
    "store": {
        "storeUuid": "d6a467d8-85fb-496d-b1c7-08b65b85a985",
        "title": {
            "text": "Cracker Barrel Old Country Store"
        },
        "meta": [
            {
                "text": "30 min",
                "accessibilityText": "Delivered in 30 to 30 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.3",
            "accessibilityText": "Rated 4.3 out of 5 stars based on more than 6,000 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/cracker-barrel-old-country-store-3389-busbee-drive-nw/1qRn2IX7SW2xxwi2W4WphQ",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/63c915febc1fc7d60e6aeaf281405f5a/db809eadd12d21eb61044e0f3bf7c9b7.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/63c915febc1fc7d60e6aeaf281405f5a/492abbfd79da0fd117a23fd2a6cf3df9.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/63c915febc1fc7d60e6aeaf281405f5a/b15c9ad51e970f3ee593eca3d03cee54.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/63c915febc1fc7d60e6aeaf281405f5a/20fa9288fdc01be28055baedd768dc37.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/63c915febc1fc7d60e6aeaf281405f5a/63d18745892c100be9e4ef3c560c9204.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/63c915febc1fc7d60e6aeaf281405f5a/dfe73df3a8123af1971eabf3eeff9ac1.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": [
            {
                "backgroundColor": {
                    "color": "#0E8345"
                },
                "text": "Spend $35, Save $5",
                "textColor": {
                    "color": "#FFFFFF"
                }
            }
        ],
        "tracking": {
            "metaInfo": {
                "pluginName": "search",
                "analyticsLabel": "SEARCH_STORE_DISH_RESULTS",
                "verticalType": "",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": ""
            },
            "storePayload": {
                "storeUUID": "d6a467d8-85fb-496d-b1c7-08b65b85a985",
                "isOrderable": true,
                "etdInfo": {
                    "dropoffETASec": 2303,
                    "dropoffETARange": {
                        "min": 30,
                        "max": 30,
                        "raw": 30
                    },
                    "minRangeDropoffETASec": 1800,
                    "maxRangeDropoffETASec": 1800,
                    "etdMode": "PREDICTION"
                },
                "ratingInfo": {
                    "storeRatingScore": 4.330835247189681,
                    "ratingCount": "6,000+"
                },
                "promotionUUID": "07c06de4-fcdb-4e67-aa3b-0a2eed4d6ad0",
                "scheduleTimeSlots": null,
                "storeAvailablityState": "NOT_ACCEPTING_ORDERS",
                "offerMetadata": {
                    "analyticsUUID": "a978bd2b-5812-409c-a4a2-5fa63753236a",
                    "promotionUUIDs": [
                        "07c06de4-fcdb-4e67-aa3b-0a2eed4d6ad0"
                    ],
                    "offerTypeCount": 1,
                    "concatSignpost": "store_promotion_badge"
                }
            }
        },
        "mapMarker": {
            "latitude": 34.0329,
            "longitude": -84.575,
            "zIndex": 9987,
            "description": {
                "title": "Cracker Barrel Old Country Store",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.3",
                "size": "SPACING_UNIT_4X"
            },
            "secondaryMarkerContent": {
                "color": "CONTENT_POSITIVE",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_POSITIVE",
                "icon": "TAG"
            }
        },
        "meta2": [],
        "layoutType": "MINISTORE_LAYOUT",
        "endorsements": null,
        "meta4": null
    },
    "analyticsLabel": "SEARCH_STORE_DISH_RESULTS"
},
{
    "uuid": "73caadc3-e9e3-450a-a93b-96abad485c28",
    "type": "REGULAR_STORE",
    "store": {
        "storeUuid": "73caadc3-e9e3-450a-a93b-96abad485c28",
        "title": {
            "text": "Panda Express"
        },
        "meta": [
            {
                "text": "15 min",
                "accessibilityText": "Delivered in 15 to 15 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.4",
            "accessibilityText": "Rated 4.4 out of 5 stars based on more than 1,500 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/panda-express-kennesaw/c8qtw-njRQqpO5arrUhcKA",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/0da00f84d6d6b0ea64ef3d7e7fe0889c/fb86662148be855d931b37d6c1e5fcbe.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/0da00f84d6d6b0ea64ef3d7e7fe0889c/783282f6131ef2258e5bcd87c46aa87e.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/0da00f84d6d6b0ea64ef3d7e7fe0889c/8a42ee7a692dfa4155879820804a277f.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/0da00f84d6d6b0ea64ef3d7e7fe0889c/fdf52d66534809b650058f41d517d74a.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/0da00f84d6d6b0ea64ef3d7e7fe0889c/9b3aae4cf90f897799a5ed357d60e09d.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/0da00f84d6d6b0ea64ef3d7e7fe0889c/f6deb0afc24fee6f4bd31a35e6bcbd47.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": null,
        "tracking": {
            "metaInfo": {
                "pluginName": "search",
                "analyticsLabel": "SEARCH_STORE_DISH_RESULTS",
                "verticalType": "",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": ""
            },
            "storePayload": {
                "storeUUID": "73caadc3-e9e3-450a-a93b-96abad485c28",
                "isOrderable": true,
                "etdInfo": {
                    "dropoffETASec": 1529,
                    "dropoffETARange": {
                        "min": 15,
                        "max": 15,
                        "raw": 15
                    },
                    "minRangeDropoffETASec": 900,
                    "maxRangeDropoffETASec": 900,
                    "etdMode": "PREDICTION"
                },
                "ratingInfo": {
                    "storeRatingScore": 4.441325667906656,
                    "ratingCount": "1,500+"
                },
                "scheduleTimeSlots": null,
                "storeAvailablityState": "NOT_ACCEPTING_ORDERS"
            }
        },
        "mapMarker": {
            "latitude": 34.0358,
            "longitude": -84.5726,
            "zIndex": 9986,
            "description": {
                "title": "Panda Express",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.4",
                "size": "SPACING_UNIT_4X"
            }
        },
        "meta2": [],
        "layoutType": "MINISTORE_LAYOUT",
        "endorsements": null,
        "meta4": null
    },
    "analyticsLabel": "SEARCH_STORE_DISH_RESULTS"
},
{
    "uuid": "ed404ac3-1512-4e47-843a-b34f2fd84b67",
    "type": "REGULAR_STORE",
    "store": {
        "storeUuid": "ed404ac3-1512-4e47-843a-b34f2fd84b67",
        "title": {
            "text": "Captain D's"
        },
        "meta": [
            {
                "text": "15 min",
                "accessibilityText": "Delivered in 15 to 15 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.0",
            "accessibilityText": "Rated 4.0 out of 5 stars based on more than 700 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/captain-ds-3462-baker-road/7UBKwxUSTkeEOrNPL9hLZw",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/60c494ab8fcfad8b1faf529df69b17e3/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/60c494ab8fcfad8b1faf529df69b17e3/719c6bd2757b08684c0faae44d43159d.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/60c494ab8fcfad8b1faf529df69b17e3/93b5fd796682c6d5302cd5bec164fe90.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/60c494ab8fcfad8b1faf529df69b17e3/97e6648b3593c29cb4a6335f976e6d84.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/60c494ab8fcfad8b1faf529df69b17e3/a70f5c9df440d10213e93244e9eb7cad.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/60c494ab8fcfad8b1faf529df69b17e3/97ef7458dde62fa918635bc21265d9f5.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": null,
        "tracking": {
            "metaInfo": {
                "pluginName": "search",
                "analyticsLabel": "SEARCH_STORE_DISH_RESULTS",
                "verticalType": "",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": ""
            },
            "storePayload": {
                "storeUUID": "ed404ac3-1512-4e47-843a-b34f2fd84b67",
                "isOrderable": true,
                "etdInfo": {
                    "dropoffETASec": 1589,
                    "dropoffETARange": {
                        "min": 15,
                        "max": 15,
                        "raw": 15
                    },
                    "minRangeDropoffETASec": 900,
                    "maxRangeDropoffETASec": 900,
                    "etdMode": "PREDICTION"
                },
                "ratingInfo": {
                    "storeRatingScore": 4.047071129707116,
                    "ratingCount": "700+"
                },
                "scheduleTimeSlots": null,
                "storeAvailablityState": "NOT_ACCEPTING_ORDERS"
            }
        },
        "mapMarker": {
            "latitude": 34.0762,
            "longitude": -84.6511,
            "zIndex": 9985,
            "description": {
                "title": "Captain D's",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.0",
                "size": "SPACING_UNIT_4X"
            }
        },
        "meta2": [],
        "layoutType": "MINISTORE_LAYOUT",
        "endorsements": null,
        "meta4": null
    },
    "analyticsLabel": "SEARCH_STORE_DISH_RESULTS"
},
{
    "uuid": "dc7d4873-3882-4202-b706-eec70f91a27e",
    "type": "REGULAR_STORE",
    "store": {
        "storeUuid": "dc7d4873-3882-4202-b706-eec70f91a27e",
        "title": {
            "text": "Chick-fil-A"
        },
        "meta": [
            {
                "text": "10 min",
                "accessibilityText": "Delivered in 10 to 10 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.7",
            "accessibilityText": "A top rated restaurant with 4.7 out of 5 stars based on more than 5,000 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/chick-fil-a-830-ernest-w-barrett-pkwy-nw/3H1IcziCQgK3Bu7HD5Gifg",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/85bb18459f064387f91b4ee3cd89d209/30be7d11a3ed6f6183354d1933fbb6c7.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/85bb18459f064387f91b4ee3cd89d209/cc592037c936600295e9961933037e19.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/85bb18459f064387f91b4ee3cd89d209/d9be3fc772fc6c0fd6b3471e291aa823.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/85bb18459f064387f91b4ee3cd89d209/0c09274e3b12c8246a05970e1ef9d835.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/85bb18459f064387f91b4ee3cd89d209/7835428b286acb57646a256c897c0e9e.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/85bb18459f064387f91b4ee3cd89d209/fa23f51b9c499b035a68831c96e1821e.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": null,
        "tracking": {
            "metaInfo": {
                "pluginName": "search",
                "analyticsLabel": "SEARCH_STORE_DISH_RESULTS",
                "verticalType": "",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": ""
            },
            "storePayload": {
                "storeUUID": "dc7d4873-3882-4202-b706-eec70f91a27e",
                "isOrderable": true,
                "etdInfo": {
                    "dropoffETASec": 1286,
                    "dropoffETARange": {
                        "min": 10,
                        "max": 10,
                        "raw": 10
                    },
                    "minRangeDropoffETASec": 600,
                    "maxRangeDropoffETASec": 600,
                    "etdMode": "PREDICTION"
                },
                "ratingInfo": {
                    "storeRatingScore": 4.731615807903959,
                    "ratingCount": "5,000+"
                },
                "scheduleTimeSlots": null,
                "storeAvailablityState": "NOT_ACCEPTING_ORDERS"
            }
        },
        "mapMarker": {
            "latitude": 34.007,
            "longitude": -84.5741,
            "zIndex": 9984,
            "description": {
                "title": "Chick-fil-A ",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.7",
                "size": "SPACING_UNIT_4X"
            }
        },
        "meta2": [],
        "layoutType": "MINISTORE_LAYOUT",
        "endorsements": null,
        "meta4": null
    },
    "analyticsLabel": "SEARCH_STORE_DISH_RESULTS"
},
{
    "uuid": "a10925eb-7ec1-4c3a-8c44-bfe550904ed6",
    "type": "REGULAR_STORE",
    "store": {
        "storeUuid": "a10925eb-7ec1-4c3a-8c44-bfe550904ed6",
        "title": {
            "text": "Papa Johns Pizza"
        },
        "meta": [
            {
                "text": "10 min",
                "accessibilityText": "Delivered in 10 to 10 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.6",
            "accessibilityText": "A top rated restaurant with 4.6 out of 5 stars based on more than 800 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/papa-johns-pizza-2774-cobb-pkwy-nw-ste103/oQkl637BTDqMRL_lUJBO1g",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/6ccea2c2bcd12875077b7f22181b7fdf/db809eadd12d21eb61044e0f3bf7c9b7.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/6ccea2c2bcd12875077b7f22181b7fdf/492abbfd79da0fd117a23fd2a6cf3df9.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/6ccea2c2bcd12875077b7f22181b7fdf/b15c9ad51e970f3ee593eca3d03cee54.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/6ccea2c2bcd12875077b7f22181b7fdf/20fa9288fdc01be28055baedd768dc37.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/6ccea2c2bcd12875077b7f22181b7fdf/63d18745892c100be9e4ef3c560c9204.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/6ccea2c2bcd12875077b7f22181b7fdf/dfe73df3a8123af1971eabf3eeff9ac1.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": [
            {
                "backgroundColor": {
                    "color": "#0E8345"
                },
                "iconUrl": "https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png",
                "text": "Buy 1, Get 1 Free",
                "textColor": {
                    "color": "#FFFFFF"
                },
                "textFormat": "<span><img src=\"https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png\" width=\"10\" height=\"11\" vertical-align=\"middle\"/>Buy 1, Get 1 Free</span>"
            }
        ],
        "tracking": {
            "metaInfo": {
                "pluginName": "search",
                "analyticsLabel": "SEARCH_STORE_DISH_RESULTS",
                "verticalType": "",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": ""
            },
            "storePayload": {
                "storeUUID": "a10925eb-7ec1-4c3a-8c44-bfe550904ed6",
                "isOrderable": true,
                "etdInfo": {
                    "dropoffETASec": 1266,
                    "dropoffETARange": {
                        "min": 10,
                        "max": 10,
                        "raw": 10
                    },
                    "minRangeDropoffETASec": 600,
                    "maxRangeDropoffETASec": 600,
                    "etdMode": "PREDICTION"
                },
                "ratingInfo": {
                    "storeRatingScore": 4.629093678598625,
                    "ratingCount": "800+"
                },
                "promotionUUID": "60039786-6d43-4e1e-af7e-b568e728c4c3",
                "scheduleTimeSlots": null,
                "storeAvailablityState": "NOT_ACCEPTING_ORDERS",
                "offerMetadata": {
                    "analyticsUUID": "2418fdbe-9436-42ab-b57c-ce0e19929780",
                    "promotionUUIDs": [
                        "60039786-6d43-4e1e-af7e-b568e728c4c3"
                    ],
                    "offerTypeCount": 1,
                    "concatSignpost": "offer_quality.top_offer,promo.restaurant.free_item_with_cart_item_constraint"
                }
            }
        },
        "mapMarker": {
            "latitude": 34.0234,
            "longitude": -84.6247,
            "zIndex": 9983,
            "description": {
                "title": "Papa Johns Pizza",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.6",
                "size": "SPACING_UNIT_4X"
            },
            "secondaryMarkerContent": {
                "color": "CONTENT_POSITIVE",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_POSITIVE",
                "icon": "TAG"
            }
        },
        "meta2": [],
        "layoutType": "MINISTORE_LAYOUT",
        "endorsements": null,
        "meta4": null
    },
    "analyticsLabel": "SEARCH_STORE_DISH_RESULTS"
},
{
    "uuid": "713a42ea-e904-5ebb-b152-d557a5ef3f9f",
    "type": "REGULAR_STORE",
    "store": {
        "storeUuid": "713a42ea-e904-5ebb-b152-d557a5ef3f9f",
        "title": {
            "text": "Paige’s Pastries & Bistro"
        },
        "meta": [
            {
                "text": "45 min",
                "accessibilityText": "Delivered in 45 to 45 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.6",
            "accessibilityText": "A top rated restaurant with 4.6 out of 5 stars based on more than 1,500 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/paiges-pastries-%26-bistro/cTpC6ukEXruxUtVXpe8_nw",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/4c184872bf62c25acff30e14bed9f049/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/4c184872bf62c25acff30e14bed9f049/719c6bd2757b08684c0faae44d43159d.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/4c184872bf62c25acff30e14bed9f049/93b5fd796682c6d5302cd5bec164fe90.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/4c184872bf62c25acff30e14bed9f049/97e6648b3593c29cb4a6335f976e6d84.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/4c184872bf62c25acff30e14bed9f049/a70f5c9df440d10213e93244e9eb7cad.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/4c184872bf62c25acff30e14bed9f049/97ef7458dde62fa918635bc21265d9f5.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": [
            {
                "backgroundColor": {
                    "color": "#0E8345"
                },
                "iconUrl": "https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png",
                "text": " Top Offer • 20% off (Spend $25)",
                "textColor": {
                    "color": "#FFFFFF"
                },
                "textFormat": "<span><img src=\"https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png\" width=\"10\" height=\"11\" vertical-align=\"middle\"/> Top Offer • 20% off (Spend $25)</span>"
            }
        ],
        "tracking": {
            "metaInfo": {
                "pluginName": "search",
                "analyticsLabel": "SEARCH_STORE_DISH_RESULTS",
                "verticalType": "",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": ""
            },
            "storePayload": {
                "storeUUID": "713a42ea-e904-5ebb-b152-d557a5ef3f9f",
                "isOrderable": true,
                "etdInfo": {
                    "dropoffETASec": 3364,
                    "dropoffETARange": {
                        "min": 45,
                        "max": 45,
                        "raw": 45
                    },
                    "minRangeDropoffETASec": 2700,
                    "maxRangeDropoffETASec": 2700,
                    "etdMode": "PREDICTION"
                },
                "ratingInfo": {
                    "storeRatingScore": 4.579922318494171,
                    "ratingCount": "1,500+"
                },
                "promotionUUID": "a61e39e5-b715-4ae4-9886-21341f8e2569",
                "scheduleTimeSlots": null,
                "storeAvailablityState": "NOT_ACCEPTING_ORDERS",
                "offerMetadata": {
                    "analyticsUUID": "a3156913-96ad-4459-abf9-206aab8cb8c3",
                    "promotionUUIDs": [
                        "a61e39e5-b715-4ae4-9886-21341f8e2569"
                    ],
                    "offerTypeCount": 1,
                    "concatSignpost": "offer_quality.top_offer,store.promotion.percent.badge"
                }
            }
        },
        "mapMarker": {
            "latitude": 33.814,
            "longitude": -84.6273,
            "zIndex": 9982,
            "description": {
                "title": "Paige’s Pastries & Bistro",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.6",
                "size": "SPACING_UNIT_4X"
            },
            "secondaryMarkerContent": {
                "color": "CONTENT_POSITIVE",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_POSITIVE",
                "icon": "TAG"
            }
        },
        "meta2": [],
        "layoutType": "MINISTORE_LAYOUT",
        "endorsements": null,
        "meta4": null
    },
    "analyticsLabel": "SEARCH_STORE_DISH_RESULTS"
}]

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resObj.map(restauraunt => <RestaurantCard key={restauraunt.store.storeUuid} resData={restauraunt}/>)
                }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (<div className="app">
        <Header />
        <Body />
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);