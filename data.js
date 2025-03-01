
// https://publish-p81252-e700817.adobeaemcloud.com/graphql/execute.json/sample-wknd-app/homepage%3Bvariation%3Ddesktop%3Btimestamp%3D1667423919602
// https://publish-p81252-e700817.adobeaemcloud.com/graphql/execute.json/sample-wknd-app/homepage%3Bvariation%3Dmobile

export default function getLocalStaticData() {
    return {
        "data":{
           "pageByPath":{
              "item":{
                 "_variation":"master",
                 "_variations":[
                    "mobile"
                 ],
                 "panels":[
                    {
                       "_path":"/content/dam/sample-wknd-app/en/content-fragments/panels/mtnBikerInCanyon",
                       "_variation":"master",
                       "_variations":[
                          "mobile"
                       ],
                       "animations":{
                          "timelineAnimationSettings":{
                             "globalAutoDelay":false,
                             "startDelay":1
                          },
                          "timelineAnimations":[
                             {
                                "selector":"#rocks1",
                                "from":{
                                   "left":"-10%",
                                   "bottom":"-10%",
                                   "opacity":0.5,
                                   "scale":0.5,
                                   "transformOrigin":"bottom left"
                                },
                                "to":{
                                   "left":"0%",
                                   "bottom":"0%",
                                   "opacity":1,
                                   "scale":0.7,
                                   "transformOrigin":"bottom left",
                                   "duration":1.5
                                }
                             },
                             {
                                "selector":"#rocks2",
                                "from":{
                                   "left":"-20%",
                                   "opacity":0.5,
                                   "transformOrigin":"bottom left",
                                   "scale":0.7
                                },
                                "to":{
                                   "left":"0%",
                                   "opacity":1,
                                   "transformOrigin":"bottom left",
                                   "scale":0.9,
                                   "duration":1.5
                                }
                             },
                             {
                                "selector":"#rocks3",
                                "from":{
                                   "right":"-10%",
                                   "bottom":"0%",
                                   "opacity":0.5,
                                   "scale":0.7,
                                   "transformOrigin":"bottom right"
                                },
                                "to":{
                                   "transformOrigin":"bottom right",
                                   "right":"0%",
                                   "bottom":"0%",
                                   "opacity":1,
                                   "scale":0.9,
                                   "duration":1.5
                                }
                             },
                             {
                                "selector":"#biker-layer",
                                "from":{
                                   "y":"0%"
                                },
                                "to":{
                                   "keyframes":{
                                      "0%":{
                                         "y":"0%"
                                      },
                                      "20%":{
                                         "y":"0%"
                                      },
                                      "90%":{
                                         "y":"100%"
                                      }
                                   },
                                   "scrollTrigger":{
                                      "trigger":"#intro",
                                      "start":"0px top",
                                      "end":"100% top",
                                      "scrub":0.5,
                                      "snap":{
                                         "snapTo":[
                                            0,
                                            1
                                         ],
                                         "delay":0
                                      }
                                   }
                                }
                             },
                             {
                                "selector":"#biker",
                                "from":{
                                   "scale":0.6,
                                   "y":"10%",
                                   "x":"-10%",
                                   "opacity":0
                                },
                                "to":{
                                   "duration":1.5,
                                   "y":"0%",
                                   "x":"0%",
                                   "opacity":1,
                                   "scale":0.6
                                }
                             },
                             {
                                "selector":"#intro .textLayer .left",
                                "from":{
                                   "opacity":0,
                                   "x":"-30%"
                                },
                                "to":{
                                   "duration":1.5,
                                   "opacity":1,
                                   "x":"0%"
                                }
                             }
                          ]
                       },
                       "dark":false,
                       "background":{
                          "backgroundContent":{
                             "_path":"/content/dam/sample-wknd-app/en/image-files/sky.jpg",
                             "type":"image",
                             "width":1851,
                             "height":1080,
                             "_authorUrl":"https://author-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/sky.jpg",
                             "_publishUrl":"https://publish-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/sky.jpg"
                          },
                          "color":null,
                          "altText":"sky"
                       },
                       "activeMenuItem":"intro",
                       "id":"intro",
                       "layers":[
                          {
                             "_model":{
                                "title":"Image Layer"
                             },
                             "image":{
                                "type":"image",
                                "width":1388,
                                "height":711,
                                "_path":"/content/dam/sample-wknd-app/en/image-files/rocks1.png",
                                "_authorUrl":"https://author-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/rocks1.png",
                                "_publishUrl":"https://publish-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/rocks1.png"
                             },
                             "_variation":"master",
                             "_variations":[
                                "mobile"
                             ],
                             "altText":{
                                "plaintext":"rocks1"
                             },
                             "id":"rocks1",
                             "layerId":"layer-rocks1",
                             "basePosition":"bottom-left",
                             "fit":"contain",
                             "overflow":false,
                             "forceLoad":false
                          },
                          {
                             "_model":{
                                "title":"Image Layer"
                             },
                             "image":{
                                "type":"image",
                                "width":493,
                                "height":327,
                                "_path":"/content/dam/sample-wknd-app/en/image-files/rocks2.png",
                                "_authorUrl":"https://author-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/rocks2.png",
                                "_publishUrl":"https://publish-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/rocks2.png"
                             },
                             "_variation":"master",
                             "_variations":[
                                "mobile"
                             ],
                             "altText":{
                                "plaintext":"rocks2"
                             },
                             "id":"rocks2",
                             "layerId":"layer-rocks2",
                             "basePosition":"bottom-left",
                             "fit":"scale-down",
                             "overflow":false,
                             "forceLoad":false
                          },
                          {
                             "_model":{
                                "title":"Image Layer"
                             },
                             "image":{
                                "type":"image",
                                "width":942,
                                "height":414,
                                "_path":"/content/dam/sample-wknd-app/en/image-files/rocks3.png",
                                "_authorUrl":"https://author-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/rocks3.png",
                                "_publishUrl":"https://publish-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/rocks3.png"
                             },
                             "_variation":"master",
                             "_variations":[
                                "mobile"
                             ],
                             "altText":{
                                "plaintext":"rocks3"
                             },
                             "id":"rocks3",
                             "layerId":"rocks3",
                             "basePosition":"bottom-right",
                             "fit":"scale-down",
                             "overflow":false,
                             "forceLoad":false
                          },
                          {
                             "_model":{
                                "title":"Image Layer"
                             },
                             "image":{
                                "type":"image",
                                "width":844,
                                "height":729,
                                "_path":"/content/dam/sample-wknd-app/en/image-files/biker.png",
                                "_authorUrl":"https://author-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/biker.png",
                                "_publishUrl":"https://publish-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/biker.png"
                             },
                             "_variation":"master",
                             "_variations":[
                                "mobile"
                             ],
                             "altText":{
                                "plaintext":"biker"
                             },
                             "id":"biker",
                             "layerId":"biker-layer",
                             "basePosition":"center-center",
                             "fit":"contain",
                             "overflow":true,
                             "forceLoad":false
                          },
                          {
                             "id":"intro-text1",
                             "textPosition":null,
                             "noPadding":false,
                             "_model":{
                                "title":"Text Layer"
                             },
                             "_variation":"master",
                             "_variations":[
                                "mobile"
                             ],
                             "leftBox":[
                                {
                                   "type":"h3",
                                   "id":null,
                                   "content":{
                                      "plaintext":"get in gear"
                                   },
                                   "styles":[
                                      "yellowBox",
                                      "uppercase"
                                   ]
                                },
                                {
                                   "type":"h2",
                                   "id":null,
                                   "content":{
                                      "plaintext":"Your next great adventure is calling"
                                   },
                                   "styles":[
                                      "thin"
                                   ]
                                }
                             ],
                             "rightBox":[
                                {
                                   "_model":{
                                      "title":"Panel Menu"
                                   },
                                   "menuItems":[
                                      {
                                         "text":"Get In Gear",
                                         "link":"#intro",
                                         "menuItemId":"intro"
                                      },
                                      {
                                         "text":"Embrace Experience",
                                         "link":"#outdoorPassion",
                                         "menuItemId":"outdoorPassion"
                                      },
                                      {
                                         "text":"Choose Your Adventure",
                                         "link":"#intoTheNature",
                                         "menuItemId":"intoTheNature"
                                      },
                                      {
                                         "text":"Be Amazed",
                                         "link":"#upToTheSky",
                                         "menuItemId":"upToTheSky"
                                      }
                                   ]
                                }
                             ],
                             "column":[
                                
                             ]
                          }
                       ]
                    },
                    {
                       "_path":"/content/dam/sample-wknd-app/en/content-fragments/panels/mtnBikerOnWkndYellow",
                       "_variation":"master",
                       "_variations":[
                          "mobile"
                       ],
                       "animations":{
                          "timelineAnimations":[
                             {
                                "selector":"#intro2 #intro-shoppableMomentsLayer .textWrapper",
                                "from":{
                                   "y":"-50%",
                                   "opacity":0
                                },
                                "to":{
                                   "y":"0%",
                                   "opacity":1,
                                   "duration":0.5,
                                   "scrollTrigger":{
                                      "trigger":"#intro2",
                                      "start":"0% 50%",
                                      "end":"100% 10%",
                                      "toggleActions":"play none none reverse"
                                   }
                                }
                             },
                             {
                                "selector":"#intro2 #intro-shoppableMomentsLayer .dot",
                                "from":{
                                   "opacity":0
                                },
                                "to":{
                                   "opacity":1,
                                   "duration":0.5,
                                   "scrollTrigger":{
                                      "trigger":"#intro2",
                                      "start":"0% 50%",
                                      "end":"100% 10%",
                                      "toggleActions":"play none none reverse"
                                   }
                                }
                             }
                          ]
                       },
                       "dark":false,
                       "background":{
                          "backgroundContent":null,
                          "color":"#ffea00",
                          "altText":null
                       },
                       "activeMenuItem":"intro",
                       "id":"intro2",
                       "layers":[
                          {
                             "id":null,
                             "textPosition":null,
                             "noPadding":null,
                             "_model":{
                                "title":"Text Layer"
                             },
                             "_variation":"master",
                             "_variations":[
                                
                             ],
                             "leftBox":[
                                
                             ],
                             "rightBox":[
                                {
                                   "_model":{
                                      "title":"Panel Menu"
                                   },
                                   "menuItems":[
                                      {
                                         "text":"Get In Gear",
                                         "link":"#intro",
                                         "menuItemId":"intro"
                                      },
                                      {
                                         "text":"Embrace Experience",
                                         "link":"#outdoorPassion",
                                         "menuItemId":"outdoorPassion"
                                      },
                                      {
                                         "text":"Choose Your Adventure",
                                         "link":"#intoTheNature",
                                         "menuItemId":"intoTheNature"
                                      },
                                      {
                                         "text":"Be Amazed",
                                         "link":"#upToTheSky",
                                         "menuItemId":"upToTheSky"
                                      }
                                   ]
                                }
                             ],
                             "column":[
                                
                             ]
                          },
                          {
                             "_model":{
                                "title":"Shoppable Moment Layer"
                             },
                             "id":"intro-shoppableMomentsLayer",
                             "fit":"contain",
                             "imageSelector":"#biker",
                             "width":null,
                             "height":null,
                             "content":[
                                {
                                   "id":"buy-bikerHelmet",
                                   "text":"Giro Adult Revel Bike Helmet",
                                   "pricetag":"$49.99",
                                   "x":9.0,
                                   "y":-25.5
                                },
                                {
                                   "id":"buy-sneakers",
                                   "text":"Enclave biking sneakers",
                                   "pricetag":"$49.99",
                                   "x":-14.0,
                                   "y":9.5
                                },
                                {
                                   "id":"buy-tubes",
                                   "text":"Major Tread Specialty Tubes",
                                   "pricetag":"$49.99",
                                   "x":23.5,
                                   "y":5.0
                                }
                             ]
                          }
                       ]
                    },
                    {
                       "_path":"/content/dam/sample-wknd-app/en/content-fragments/panels/mtnBikersVideo",
                       "_variation":"master",
                       "_variations":[
                          "mobile"
                       ],
                       "animations":{
                          "timelineAnimationSettings":{
                             "globalAutoDelay":false
                          },
                          "timelineAnimations":[
                             {
                                "selector":"#outdoorPassion .header",
                                "from":{
                                   "background":"linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 0%)"
                                },
                                "to":{
                                   "background":"linear-gradient(90deg, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0) 100%)"
                                }
                             },
                             {
                                "selector":"#outdoorPassion .textLayer .left",
                                "from":{
                                   "x":"-100%",
                                   "opacity":0,
                                   "y":"0%"
                                },
                                "to":{
                                   "ease":"none",
                                   "keyframes":{
                                      "0%":{
                                         "x":"-100%",
                                         "opacity":0,
                                         "y":"0%",
                                         "ease":"none"
                                      },
                                      "25%":{
                                         "x":"-50%",
                                         "opacity":1,
                                         "ease":"power2.in"
                                      },
                                      "50%":{
                                         "x":"0%",
                                         "opacity":1,
                                         "y":"0%",
                                         "ease":"power2.out"
                                      },
                                      "70%":{
                                         "x":"0%",
                                         "opacity":1,
                                         "y":"0%",
                                         "ease":"power2.inOut"
                                      },
                                      "90%":{
                                         "x":"0%",
                                         "opacity":1,
                                         "y":"-150%"
                                      }
                                   },
                                   "scrollTrigger":{
                                      "trigger":"#outdoorPassion",
                                      "start":"top bottom",
                                      "end":"50% top",
                                      "scrub":0.5
                                   }
                                }
                             },
                             {
                                "selector":"#outdoorPassion",
                                "to":{
                                   "scrollTrigger":{
                                      "trigger":"#outdoorPassion",
                                      "start":"top bottom",
                                      "end":"bottom bottom",
                                      "scrub":0.5,
                                      "snap":{
                                         "delay":0,
                                         "snapTo":[
                                            0,
                                            1
                                         ]
                                      }
                                   }
                                }
                             }
                          ]
                       },
                       "dark":true,
                       "background":{
                          "backgroundContent":{
                             "_path":"/content/dam/sample-wknd-app/en/image-files/biker video.mp4",
                             "_publishUrl":"https://publish-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/biker%20video.mp4",
                             "_authorUrl":"https://author-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/biker%20video.mp4",
                             "format":"video/mp4"
                          },
                          "color":null,
                          "altText":null
                       },
                       "activeMenuItem":"outdoorPassion",
                       "id":"outdoorPassion",
                       "layers":[
                          {
                             "id":null,
                             "textPosition":"center-center",
                             "noPadding":null,
                             "_model":{
                                "title":"Text Layer"
                             },
                             "_variation":"master",
                             "_variations":[
                                "mobile"
                             ],
                             "leftBox":[
                                {
                                   "type":"h3",
                                   "id":null,
                                   "content":{
                                      "plaintext":"Name your dates, distances and lodging style. We'll take care of the rest."
                                   },
                                   "styles":[
                                      "thin"
                                   ]
                                },
                                {
                                   "type":"button",
                                   "id":null,
                                   "content":{
                                      "plaintext":"sign up now"
                                   },
                                   "styles":[
                                      "darkButton"
                                   ]
                                }
                             ],
                             "rightBox":[
                                {
                                   "_model":{
                                      "title":"Panel Menu"
                                   },
                                   "menuItems":[
                                      {
                                         "text":"Get In Gear",
                                         "link":"#intro",
                                         "menuItemId":"intro"
                                      },
                                      {
                                         "text":"Embrace Experience",
                                         "link":"#outdoorPassion",
                                         "menuItemId":"outdoorPassion"
                                      },
                                      {
                                         "text":"Choose Your Adventure",
                                         "link":"#intoTheNature",
                                         "menuItemId":"intoTheNature"
                                      },
                                      {
                                         "text":"Be Amazed",
                                         "link":"#upToTheSky",
                                         "menuItemId":"upToTheSky"
                                      }
                                   ]
                                }
                             ],
                             "column":[
                                
                             ]
                          }
                       ]
                    },
                    {
                       "_path":"/content/dam/sample-wknd-app/en/content-fragments/panels/hikerInMountains",
                       "_variation":"master",
                       "_variations":[
                          "mobile"
                       ],
                       "animations":{
                          "timelineAnimationSettings":{
                             "globalAutoDelay":false
                          },
                          "timelineAnimations":[
                             {
                                "selector":"#intoTheNature #mountains",
                                "from":{
                                   "y":"20%",
                                   "scale":1.2
                                },
                                "to":{
                                   "y":"40%",
                                   "scale":1,
                                   "scrollTrigger":{
                                      "trigger":"#intoTheNature",
                                      "start":"top bottom",
                                      "end":"bottom bottom",
                                      "scrub":0.5,
                                      "snap":{
                                         "snapTo":[
                                            0,
                                            1
                                         ],
                                         "delay":0
                                      }
                                   },
                                   "ease":"expo.in"
                                }
                             },
                             {
                                "selector":"#intoTheNature #water",
                                "from":{
                                   "y":"40vw"
                                },
                                "to":{
                                   "y":"20vw",
                                   "scrollTrigger":{
                                      "trigger":"#intoTheNature",
                                      "start":"top bottom",
                                      "end":"bottom bottom",
                                      "scrub":0.5
                                   }
                                },
                                "ease":"power4.out"
                             },
                             {
                                "selector":"#intoTheNature #female-hiker-layer",
                                "from":{
                                   "y":"0%",
                                   "x":"-25%",
                                   "scale":1,
                                   "transformOrigin":"center right"
                                },
                                "to":{
                                   "y":"100%",
                                   "x":"-25%",
                                   "scale":1.6,
                                   "transformOrigin":"center right",
                                   "scrollTrigger":{
                                      "trigger":"#intoTheNature",
                                      "start":"top top",
                                      "end":"bottom top",
                                      "scrub":0.5,
                                      "snap":{
                                         "snapTo":[
                                            0,
                                            1
                                         ],
                                         "delay":0
                                      }
                                   },
                                   "ease":"power2.inOut"
                                }
                             },
                             {
                                "selector":"#intoTheNature #female-hiker",
                                "from":{
                                   "y":"70%",
                                   "x":"16%",
                                   "scale":0.6
                                },
                                "to":{
                                   "y":"13%",
                                   "x":"16%",
                                   "scale":0.6,
                                   "scrollTrigger":{
                                      "trigger":"#intoTheNature",
                                      "start":"top bottom",
                                      "end":"bottom bottom",
                                      "scrub":0.5
                                   }
                                },
                                "ease":"power4.out"
                             },
                             {
                                "selector":"#intoTheNature .textLayer .left",
                                "from":{
                                   "y":"120%"
                                },
                                "to":{
                                   "keyframes":{
                                      "0%":{
                                         "y":"120%"
                                      },
                                      "45%":{
                                         "y":"0%"
                                      },
                                      "50%":{
                                         "y":"0%"
                                      },
                                      "100%":{
                                         "y":"-180%"
                                      }
                                   },
                                   "scrollTrigger":{
                                      "trigger":"#intoTheNature",
                                      "start":"top 80%",
                                      "end":"bottom top",
                                      "scrub":0.5
                                   }
                                }
                             }
                          ]
                       },
                       "dark":false,
                       "background":{
                          "backgroundContent":{
                             "_path":"/content/dam/sample-wknd-app/en/image-files/sky0.jpg",
                             "type":"image",
                             "width":1620,
                             "height":1080,
                             "_authorUrl":"https://author-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/sky0.jpg",
                             "_publishUrl":"https://publish-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/sky0.jpg"
                          },
                          "color":null,
                          "altText":"sky"
                       },
                       "activeMenuItem":"intoTheNature",
                       "id":"intoTheNature",
                       "layers":[
                          {
                             "_model":{
                                "title":"Image Layer"
                             },
                             "image":{
                                "type":"image",
                                "width":1620,
                                "height":1080,
                                "_path":"/content/dam/sample-wknd-app/en/image-files/mountains.png",
                                "_authorUrl":"https://author-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/mountains.png",
                                "_publishUrl":"https://publish-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/mountains.png"
                             },
                             "_variation":"master",
                             "_variations":[
                                "mobile"
                             ],
                             "altText":{
                                "plaintext":"mountains"
                             },
                             "id":"mountains",
                             "layerId":"mountains-layer",
                             "basePosition":"top-center",
                             "fit":"cover",
                             "overflow":false,
                             "forceLoad":false
                          },
                          {
                             "_model":{
                                "title":"Image Layer"
                             },
                             "image":{
                                "type":"image",
                                "width":1620,
                                "height":1080,
                                "_path":"/content/dam/sample-wknd-app/en/image-files/water.png",
                                "_authorUrl":"https://author-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/water.png",
                                "_publishUrl":"https://publish-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/water.png"
                             },
                             "_variation":"master",
                             "_variations":[
                                "mobile"
                             ],
                             "altText":{
                                "plaintext":"water"
                             },
                             "id":"water",
                             "layerId":"water-layer",
                             "basePosition":"bottom-center",
                             "fit":"cover",
                             "overflow":false,
                             "forceLoad":false
                          },
                          {
                             "_model":{
                                "title":"Image Layer"
                             },
                             "image":{
                                "type":"image",
                                "width":1108,
                                "height":2146,
                                "_path":"/content/dam/sample-wknd-app/en/image-files/female-hiker.png",
                                "_authorUrl":"https://author-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/female-hiker.png",
                                "_publishUrl":"https://publish-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/female-hiker.png"
                             },
                             "_variation":"master",
                             "_variations":[
                                
                             ],
                             "altText":{
                                "plaintext":"female-hiker"
                             },
                             "id":"female-hiker",
                             "layerId":"female-hiker-layer",
                             "basePosition":"center-right",
                             "fit":"contain",
                             "overflow":true,
                             "forceLoad":false
                          },
                          {
                             "id":null,
                             "textPosition":null,
                             "noPadding":null,
                             "_model":{
                                "title":"Text Layer"
                             },
                             "_variation":"master",
                             "_variations":[
                                "mobile"
                             ],
                             "leftBox":[
                                {
                                   "type":"h3",
                                   "id":null,
                                   "content":{
                                      "plaintext":"choose your adventure"
                                   },
                                   "styles":[
                                      "yellowBox"
                                   ]
                                },
                                {
                                   "type":"h2",
                                   "id":null,
                                   "content":{
                                      "plaintext":"Coastal paths to hilltop climbs"
                                   },
                                   "styles":[
                                      "thin"
                                   ]
                                }
                             ],
                             "rightBox":[
                                {
                                   "_model":{
                                      "title":"Panel Menu"
                                   },
                                   "menuItems":[
                                      {
                                         "text":"Get In Gear",
                                         "link":"#intro",
                                         "menuItemId":"intro"
                                      },
                                      {
                                         "text":"Embrace Experience",
                                         "link":"#outdoorPassion",
                                         "menuItemId":"outdoorPassion"
                                      },
                                      {
                                         "text":"Choose Your Adventure",
                                         "link":"#intoTheNature",
                                         "menuItemId":"intoTheNature"
                                      },
                                      {
                                         "text":"Be Amazed",
                                         "link":"#upToTheSky",
                                         "menuItemId":"upToTheSky"
                                      }
                                   ]
                                }
                             ],
                             "column":[
                                
                             ]
                          }
                       ]
                    },
                    {
                       "_path":"/content/dam/sample-wknd-app/en/content-fragments/panels/hikerOnWkndYellow",
                       "_variation":"master",
                       "_variations":[
                          "mobile"
                       ],
                       "animations":{
                          "timelineAnimationSettings":{
                             
                          },
                          "timelineAnimations":[
                             {
                                "selector":"#intoTheNature2 .textLayer .left",
                                "from":{
                                   "y":"100%"
                                },
                                "to":{
                                   "y":"0%",
                                   "scrollTrigger":{
                                      "trigger":"#intoTheNature2",
                                      "start":"40% 80%",
                                      "toggleActions":"play none none reverse"
                                   }
                                }
                             },
                             {
                                "selector":"#intoTheNature2",
                                "from":{
                                   
                                },
                                "to":{
                                   "scrollTrigger":{
                                      "trigger":"#intoTheNature2",
                                      "start":"bottom bottom",
                                      "end":"bottom top",
                                      "snap":{
                                         "snapTo":[
                                            0,
                                            1
                                         ],
                                         "delay":0
                                      }
                                   }
                                }
                             }
                          ]
                       },
                       "dark":false,
                       "background":{
                          "backgroundContent":null,
                          "color":"#ffea00",
                          "altText":null
                       },
                       "activeMenuItem":"intoTheNature",
                       "id":"intoTheNature2",
                       "layers":[
                          {
                             "id":"intoTheNature2-textLayer",
                             "textPosition":null,
                             "noPadding":false,
                             "_model":{
                                "title":"Text Layer"
                             },
                             "_variation":"master",
                             "_variations":[
                                "mobile"
                             ],
                             "leftBox":[
                                {
                                   "type":"h2",
                                   "id":null,
                                   "content":{
                                      "plaintext":"Unforgettable experiences, expertly crafted"
                                   },
                                   "styles":[
                                      "thin"
                                   ]
                                },
                                {
                                   "type":"span",
                                   "id":null,
                                   "content":{
                                      "plaintext":"This is adventure travel done right. Join us."
                                   },
                                   "styles":[
                                      "uppercase"
                                   ]
                                },
                                {
                                   "type":"button",
                                   "id":null,
                                   "content":{
                                      "plaintext":"Learn more"
                                   },
                                   "styles":[
                                      "darkButton"
                                   ]
                                }
                             ],
                             "rightBox":[
                                {
                                   "_model":{
                                      "title":"Panel Menu"
                                   },
                                   "menuItems":[
                                      {
                                         "text":"Get In Gear",
                                         "link":"#intro",
                                         "menuItemId":"intro"
                                      },
                                      {
                                         "text":"Embrace Experience",
                                         "link":"#outdoorPassion",
                                         "menuItemId":"outdoorPassion"
                                      },
                                      {
                                         "text":"Choose Your Adventure",
                                         "link":"#intoTheNature",
                                         "menuItemId":"intoTheNature"
                                      },
                                      {
                                         "text":"Be Amazed",
                                         "link":"#upToTheSky",
                                         "menuItemId":"upToTheSky"
                                      }
                                   ]
                                }
                             ],
                             "column":[
                                
                             ]
                          }
                       ]
                    },
                    {
                       "_path":"/content/dam/sample-wknd-app/en/content-fragments/panels/arcticCamping",
                       "_variation":"master",
                       "_variations":[
                          "mobile"
                       ],
                       "animations":{
                          "timelineAnimationSettings":{
                             "globalAutoDelay":false
                          },
                          "timelineAnimations":[
                             {
                                "selector":"#upToTheSky",
                                "from":{
                                   "x":0
                                },
                                "to":{
                                   "x":0,
                                   "scrollTrigger":{
                                      "trigger":"#upToTheSky",
                                      "start":"top top",
                                      "end":"20% top",
                                      "snap":{
                                         "snapTo":[
                                            0,
                                            1
                                         ],
                                         "delay":0
                                      }
                                   }
                                }
                             },
                             {
                                "selector":"#upToTheSky",
                                "from":{
                                   
                                },
                                "to":{
                                   "scrollTrigger":{
                                      "pin":"#upToTheSky",
                                      "trigger":"#upToTheSky",
                                      "start":"top top",
                                      "end":"20% top"
                                   }
                                }
                             },
                             {
                                "selector":"#upToTheSky #mountain1",
                                "from":{
                                   "y":"0%",
                                   "scale":1
                                },
                                "to":{
                                   "y":"-1%",
                                   "scale":1.05,
                                   "scrollTrigger":{
                                      "trigger":"#upToTheSky",
                                      "start":"top top",
                                      "end":"20% top",
                                      "scrub":0.5
                                   }
                                }
                             },
                             {
                                "selector":"#upToTheSky #mountain2",
                                "from":{
                                   "scale":1,
                                   "transformOrigin":"bottom right"
                                },
                                "to":{
                                   "scale":1.2,
                                   "transformOrigin":"bottom right",
                                   "scrollTrigger":{
                                      "trigger":"#upToTheSky",
                                      "start":"top top",
                                      "end":"20% top",
                                      "scrub":0.5
                                   }
                                }
                             },
                             {
                                "selector":"#upToTheSky #mountain3",
                                "from":{
                                   "scale":1,
                                   "transformOrigin":"bottom right"
                                },
                                "to":{
                                   "scale":1.4,
                                   "transformOrigin":"bottom right",
                                   "scrollTrigger":{
                                      "trigger":"#upToTheSky",
                                      "start":"top top",
                                      "end":"20% top",
                                      "scrub":0.5
                                   }
                                }
                             },
                             {
                                "selector":"#upToTheSky #tent-layer",
                                "from":{
                                   "y":"35%"
                                },
                                "to":{
                                   "y":"0%",
                                   "scrollTrigger":{
                                      "trigger":"#upToTheSky",
                                      "start":"top top",
                                      "end":"20% top",
                                      "scrub":0.5
                                   }
                                }
                             },
                             {
                                "selector":"#upToTheSky #back-text-layer",
                                "from":{
                                   "y":"0%"
                                },
                                "to":{
                                   "y":"-35%",
                                   "scrollTrigger":{
                                      "trigger":"#upToTheSky",
                                      "start":"top top",
                                      "end":"20% top",
                                      "scrub":1
                                   }
                                }
                             },
                             {
                                "selector":"#upToTheSky #t0",
                                "from":{
                                   "opacity":1
                                },
                                "to":{
                                   "opacity":0,
                                   "scrollTrigger":{
                                      "trigger":"#upToTheSky",
                                      "start":"top top",
                                      "end":"20% top",
                                      "scrub":1
                                   }
                                }
                             },
                             {
                                "selector":"#upToTheSky #t1",
                                "from":{
                                   "opacity":1
                                },
                                "to":{
                                   "opacity":0,
                                   "scrollTrigger":{
                                      "trigger":"#upToTheSky",
                                      "start":"top top",
                                      "end":"20% top",
                                      "scrub":1
                                   }
                                }
                             },
                             {
                                "selector":"#upToTheSky #t2",
                                "from":{
                                   
                                },
                                "to":{
                                   "duration":1.5,
                                   "scrollTrigger":{
                                      "trigger":"#upToTheSky",
                                      "start":"top top",
                                      "end":"20% top",
                                      "scrub":1
                                   }
                                }
                             },
                             {
                                "selector":"#upToTheSky #layer-button",
                                "from":{
                                   "y":"60%",
                                   "zIndex":0
                                },
                                "to":{
                                   "keyframes":{
                                      "90%":{
                                         "zIndex":0
                                      },
                                      "91%":{
                                         "zIndex":1
                                      }
                                   },
                                   "y":"-40%",
                                   "duration":1.5,
                                   "scrollTrigger":{
                                      "trigger":"#upToTheSky",
                                      "start":"top top",
                                      "end":"20% top",
                                      "scrub":1
                                   }
                                }
                             }
                          ]
                       },
                       "dark":true,
                       "background":{
                          "backgroundContent":{
                             "_path":"/content/dam/sample-wknd-app/en/image-files/uptothesky sky.jpg",
                             "type":"image",
                             "width":1618,
                             "height":1080,
                             "_authorUrl":"https://author-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/uptothesky%20sky.jpg",
                             "_publishUrl":"https://publish-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/uptothesky%20sky.jpg"
                          },
                          "color":null,
                          "altText":null
                       },
                       "activeMenuItem":"upToTheSky",
                       "id":"upToTheSky",
                       "layers":[
                          {
                             "id":"back-text-layer",
                             "textPosition":null,
                             "noPadding":null,
                             "_model":{
                                "title":"Text Layer"
                             },
                             "_variation":"master",
                             "_variations":[
                                "mobile"
                             ],
                             "leftBox":[
                                
                             ],
                             "rightBox":[
                                
                             ],
                             "column":[
                                {
                                   "type":"h3",
                                   "id":"t0",
                                   "content":{
                                      "plaintext":"be amazed"
                                   },
                                   "styles":[
                                      "yellowBox"
                                   ]
                                },
                                {
                                   "type":"h2",
                                   "id":"t1",
                                   "content":{
                                      "plaintext":"Amazing thrills await"
                                   },
                                   "styles":[
                                      "thin",
                                      "alignCenter",
                                      "sourceSerif"
                                   ]
                                },
                                {
                                   "type":"span",
                                   "id":"t2",
                                   "content":{
                                      "plaintext":"WKND Adventures are unique travel packages to destinations worldwide. Each adventure is expertly planned and managed for groups of all ages."
                                   },
                                   "styles":[
                                      "L",
                                      "uppercase",
                                      "alignCenter",
                                      "white"
                                   ]
                                }
                             ]
                          },
                          {
                             "_model":{
                                "title":"Image Layer"
                             },
                             "image":{
                                "type":"image",
                                "width":1648,
                                "height":1080,
                                "_path":"/content/dam/sample-wknd-app/en/image-files/mountain1.png",
                                "_authorUrl":"https://author-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/mountain1.png",
                                "_publishUrl":"https://publish-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/mountain1.png"
                             },
                             "_variation":"master",
                             "_variations":[
                                "mobile"
                             ],
                             "altText":{
                                "plaintext":null
                             },
                             "id":"mountain1",
                             "layerId":"mountain1-layer",
                             "basePosition":"bottom-center",
                             "fit":"cover",
                             "overflow":false,
                             "forceLoad":false
                          },
                          {
                             "_model":{
                                "title":"Image Layer"
                             },
                             "image":{
                                "type":"image",
                                "width":1232,
                                "height":568,
                                "_path":"/content/dam/sample-wknd-app/en/image-files/mountain2.png",
                                "_authorUrl":"https://author-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/mountain2.png",
                                "_publishUrl":"https://publish-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/mountain2.png"
                             },
                             "_variation":"master",
                             "_variations":[
                                
                             ],
                             "altText":{
                                "plaintext":"mountain2"
                             },
                             "id":"mountain2",
                             "layerId":"mountain2-layer",
                             "basePosition":"bottom-right",
                             "fit":"scale-down",
                             "overflow":false,
                             "forceLoad":false
                          },
                          {
                             "_model":{
                                "title":"Image Layer"
                             },
                             "image":{
                                "type":"image",
                                "width":1648,
                                "height":546,
                                "_path":"/content/dam/sample-wknd-app/en/image-files/mountain3.png",
                                "_authorUrl":"https://author-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/mountain3.png",
                                "_publishUrl":"https://publish-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/mountain3.png"
                             },
                             "_variation":"master",
                             "_variations":[
                                "mobile"
                             ],
                             "altText":{
                                "plaintext":"mountain3"
                             },
                             "id":"mountain3",
                             "layerId":"mountain3-layer",
                             "basePosition":"bottom-right",
                             "fit":"contain",
                             "overflow":false,
                             "forceLoad":false
                          },
                          {
                             "id":"layer-button",
                             "textPosition":"bottom-center",
                             "noPadding":null,
                             "_model":{
                                "title":"Text Layer"
                             },
                             "_variation":"master",
                             "_variations":[
                                
                             ],
                             "leftBox":[
                                
                             ],
                             "rightBox":[
                                
                             ],
                             "column":[
                                {
                                   "type":"button",
                                   "id":"t3",
                                   "content":{
                                      "plaintext":"sign up"
                                   },
                                   "styles":[
                                      "darkButton"
                                   ]
                                }
                             ]
                          },
                          {
                             "_model":{
                                "title":"Image Layer"
                             },
                             "image":{
                                "type":"image",
                                "width":1648,
                                "height":1080,
                                "_path":"/content/dam/sample-wknd-app/en/image-files/tent.png",
                                "_authorUrl":"https://author-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/tent.png",
                                "_publishUrl":"https://publish-p81252-e700817.adobeaemcloud.com/content/dam/sample-wknd-app/en/image-files/tent.png"
                             },
                             "_variation":"master",
                             "_variations":[
                                "mobile"
                             ],
                             "altText":{
                                "plaintext":"tent"
                             },
                             "id":"tent",
                             "layerId":"tent-layer",
                             "basePosition":"bottom-center",
                             "fit":"cover",
                             "overflow":false,
                             "forceLoad":true
                          },
                          {
                             "id":null,
                             "textPosition":null,
                             "noPadding":null,
                             "_model":{
                                "title":"Text Layer"
                             },
                             "_variation":"master",
                             "_variations":[
                                
                             ],
                             "leftBox":[
                                
                             ],
                             "rightBox":[
                                {
                                   "_model":{
                                      "title":"Panel Menu"
                                   },
                                   "menuItems":[
                                      {
                                         "text":"Get In Gear",
                                         "link":"#intro",
                                         "menuItemId":"intro"
                                      },
                                      {
                                         "text":"Embrace Experience",
                                         "link":"#outdoorPassion",
                                         "menuItemId":"outdoorPassion"
                                      },
                                      {
                                         "text":"Choose Your Adventure",
                                         "link":"#intoTheNature",
                                         "menuItemId":"intoTheNature"
                                      },
                                      {
                                         "text":"Be Amazed",
                                         "link":"#upToTheSky",
                                         "menuItemId":"upToTheSky"
                                      }
                                   ]
                                }
                             ],
                             "column":[
                                
                             ]
                          }
                       ]
                    }
                 ],
                 "title":"WKND App",
                 "description":{
                    "plaintext":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                 },
                 "mobileNavMenu":{
                    "menuItems":[
                       {
                          "link":"#intro",
                          "text":"Get In Gear",
                          "menuItemId":"intro"
                       },
                       {
                          "link":"#outdoorPassion",
                          "text":"Embrace Experience",
                          "menuItemId":"outdoorPassion"
                       },
                       {
                          "link":"#intoTheNature",
                          "text":"Choose Your Adventure",
                          "menuItemId":"intoTheNature"
                       },
                       {
                          "link":"#upToTheSky",
                          "text":"Be Amazed",
                          "menuItemId":"upToTheSky"
                       }
                    ]
                 }
              }
           }
        }
     }
}