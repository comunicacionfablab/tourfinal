var APP_DATA = {
  "scenes": [
    {
      "id": "0-fresadora",
      "name": "Fresadora",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.11754258227717074,
        "pitch": 0.16492903971472828,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": -1.7758306752976658,
          "pitch": 0.09836574860683811,
          "rotation": 0,
          "target": "5-mesa-de-trabajo"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.007506934456662506,
          "pitch": 0.32371125494767483,
          "title": "Fresadora<br>",
          "text": "<span>Máquina herramienta que corta y mecaniza materiales sólidos mediante una herramienta rotativa llamada fresa. </span>"
        }
      ]
    },
    {
      "id": "1-mini-fresadoras",
      "name": "Mini Fresadoras",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.08370456616709987,
        "pitch": 0.267384958325394,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": -2.4389238786377767,
          "pitch": 0.18206157143191248,
          "rotation": 0,
          "target": "6-herramientas"
        },
        {
          "yaw": 3.1114705148450703,
          "pitch": 0.2085035915119704,
          "rotation": 0,
          "target": "5-mesa-de-trabajo"
        },
        {
          "yaw": 1.9872370098626062,
          "pitch": 0.16605345617272604,
          "rotation": 0,
          "target": "3-precious-plastic"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.3852462863737678,
          "pitch": 0.46525863628327,
          "title": "Mini Fresadoras",
          "text": "<span>Las </span><span><strong>mini fresadoras CNC</strong></span><span> son versiones compactas diseñadas para espacios reducidos y trabajos de precisión.</span>"
        }
      ]
    },
    {
      "id": "2-lser",
      "name": "Láser",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -3.1377424219523675,
        "pitch": 0.5191490390321754,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": 2.140017400259321,
          "pitch": 0.11632576550222495,
          "rotation": 0,
          "target": "3-precious-plastic"
        },
        {
          "yaw": 1.1778178361583684,
          "pitch": 0.10856660289513798,
          "rotation": 0,
          "target": "5-mesa-de-trabajo"
        },
        {
          "yaw": 1.768326251440623,
          "pitch": 0.15951647959780146,
          "rotation": 0,
          "target": "0-fresadora"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2821929043694773,
          "pitch": 0.3586106822090187,
          "title": "Cortadora Láser Compacta<br>",
          "text": "<span>Herramienta de precisión que \nutiliza un haz de luz concentrado y energizado para cortar o grabar \ndiversos materiales</span>"
        },
        {
          "yaw": 2.6080351830129302,
          "pitch": 0.41240690772350774,
          "title": "Cortadora Láser<br>",
          "text": "<span>Herramienta de precisión que utiliza un haz de luz concentrado y energizado para cortar o grabar diversos materiales</span>"
        }
      ]
    },
    {
      "id": "3-precious-plastic",
      "name": "Precious Plastic",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.9548228906459615,
        "pitch": -0.08996129438984468,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": -0.24852901060349453,
          "pitch": 0.16154978122087726,
          "rotation": 0,
          "target": "2-lser"
        },
        {
          "yaw": 1.115157829249899,
          "pitch": 0.06859110680641578,
          "rotation": 0,
          "target": "5-mesa-de-trabajo"
        },
        {
          "yaw": 2.457258817328178,
          "pitch": -0.007103664420498035,
          "rotation": 0,
          "target": "0-fresadora"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.0003693291614812,
          "pitch": 0.06919627470606926,
          "title": "Plástico Reciclado<br>",
          "text": "<span> Material obtenido a partir de la recolección y procesamiento de plásticos desechados</span>"
        },
        {
          "yaw": -1.2995291785480543,
          "pitch": 0.3705519207078254,
          "title": "Láser de Fibra<br>",
          "text": "<span>Utiliza una fibra óptica dopada con iterbio como medio activo para generar un haz láser de alta precisión</span>"
        }
      ]
    },
    {
      "id": "4-trituradoras",
      "name": "Trituradoras",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.8018081478198091,
        "pitch": 0.28817050618710915,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": 2.3313669206643306,
          "pitch": 0.10253512402168496,
          "rotation": 0,
          "target": "0-fresadora"
        },
        {
          "yaw": 1.2148964123825667,
          "pitch": 0.18487919284213383,
          "rotation": 0,
          "target": "5-mesa-de-trabajo"
        },
        {
          "yaw": -0.4271273195344669,
          "pitch": 0.07142454451824065,
          "rotation": 0,
          "target": "7-extrusoras"
        },
        {
          "yaw": 2.767606957218188,
          "pitch": 0.06149052870562599,
          "rotation": 0,
          "target": "3-precious-plastic"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.546787464891226,
          "pitch": 0.6305678045771295,
          "title": "Trituradoras",
          "text": "<span>Reduce el tamaño de residuos plásticos \nmediante cuchillas rotatorias. Permite reciclar y procesar diversos \ntipos de plásticos, contribuyendo a la sostenibilidad y reducción de \ndesechos.</span>"
        }
      ]
    },
    {
      "id": "5-mesa-de-trabajo",
      "name": "Mesa de Trabajo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.04531389005664899,
          "pitch": 0.31567084216074015,
          "rotation": 0,
          "target": "1-mini-fresadoras"
        },
        {
          "yaw": -1.7997627795312212,
          "pitch": 0.4305402191301759,
          "rotation": 0,
          "target": "6-herramientas"
        },
        {
          "yaw": 0.6180955148212846,
          "pitch": 0.23312532386367835,
          "rotation": 0,
          "target": "0-fresadora"
        },
        {
          "yaw": 1.06452890225553,
          "pitch": 0.25899335183004446,
          "rotation": 0,
          "target": "3-precious-plastic"
        },
        {
          "yaw": 1.5155462206125563,
          "pitch": 0.24294929207848703,
          "rotation": 0,
          "target": "2-lser"
        },
        {
          "yaw": 2.1855933859511296,
          "pitch": 0.4204053035112043,
          "rotation": 0,
          "target": "4-trituradoras"
        },
        {
          "yaw": -3.0653602069216532,
          "pitch": 0.14010399743200352,
          "rotation": 0,
          "target": "7-extrusoras"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-herramientas",
      "name": "Herramientas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.27604697352972707,
        "pitch": 0.07496946109097635,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": 0.7752604903035163,
          "pitch": 0.09828162321849021,
          "rotation": 0,
          "target": "1-mini-fresadoras"
        },
        {
          "yaw": 1.5521425755967924,
          "pitch": 0.20550677648709836,
          "rotation": 0,
          "target": "5-mesa-de-trabajo"
        },
        {
          "yaw": -3.0954076499331364,
          "pitch": 0.06985254990459211,
          "rotation": 0,
          "target": "7-extrusoras"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3318811039106606,
          "pitch": 0.29172689611444014,
          "title": "Herramientas Manuales<br>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "7-extrusoras",
      "name": "Extrusoras",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.3965435271415316,
        "pitch": 0.007693302617973075,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": 1.8127183742348283,
          "pitch": 0.05841158143804748,
          "rotation": 0,
          "target": "5-mesa-de-trabajo"
        },
        {
          "yaw": -2.9586306690674835,
          "pitch": 0.2599350122787971,
          "rotation": 0,
          "target": "8-entrada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.238297090509958,
          "pitch": 0.3968505402000382,
          "title": "Extrusoras",
          "text": "<span>Máquina industrial utilizada para procesar materiales, \nprincipalmente plásticos, mediante calor y presión. Funciona empujando \nel material fundido a través de una matriz </span>"
        }
      ]
    },
    {
      "id": "8-entrada",
      "name": "Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.5253797238146198,
        "pitch": 0.08496344470152195,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": -1.5828266717999693,
          "pitch": 0.09848522328791276,
          "rotation": 0,
          "target": "7-extrusoras"
        },
        {
          "yaw": -1.012291720749964,
          "pitch": 0.09752369492559687,
          "rotation": 0,
          "target": "5-mesa-de-trabajo"
        },
        {
          "yaw": 1.8260085910793338,
          "pitch": 0.2064468408924185,
          "rotation": 0,
          "target": "11-sala"
        },
        {
          "yaw": 2.504106680769313,
          "pitch": 0.15927979029262573,
          "rotation": 0,
          "target": "10-plotter"
        },
        {
          "yaw": 1.3008514220111245,
          "pitch": 0.11912642054924127,
          "rotation": 0,
          "target": "12-bordadora"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.20171990716944066,
          "pitch": -0.0014442752912380286,
          "title": "Vitrina de las ideas<br>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "9-planchas",
      "name": "Planchas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.06754470966134107,
        "pitch": 0.6047398122873275,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": 1.023923102959893,
          "pitch": 0.2648895721717679,
          "rotation": 0,
          "target": "10-plotter"
        },
        {
          "yaw": 1.6019720171201053,
          "pitch": 0.26019034167942046,
          "rotation": 0,
          "target": "8-entrada"
        },
        {
          "yaw": -2.614316805221261,
          "pitch": 0.3099073071832379,
          "rotation": 0,
          "target": "13-impresoras-3d"
        },
        {
          "yaw": 2.4492424777344954,
          "pitch": 0.3191654331863205,
          "rotation": 0,
          "target": "11-sala"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.3113620395676442,
          "pitch": 0.7476826916185431,
          "title": "Plancha de vinilo textil<br>",
          "text": "<span>Permite fijar diseños en prendas mediante una aplicación uniforme y controlada de calor.</span>"
        },
        {
          "yaw": -0.5280387784308012,
          "pitch": 0.8276533606673055,
          "title": "Plancha de tazas<br>",
          "text": "<span>Permite personalizar tazas de cerámica o plástico</span>"
        }
      ]
    },
    {
      "id": "10-plotter",
      "name": "Plotter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.01602853394688708,
        "pitch": 0.24739355957208353,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": -1.9487340382657834,
          "pitch": 0.3885785703248068,
          "rotation": 0,
          "target": "9-planchas"
        },
        {
          "yaw": -2.6841336354916603,
          "pitch": 0.15952640337770596,
          "rotation": 0,
          "target": "13-impresoras-3d"
        },
        {
          "yaw": 2.8303178040787866,
          "pitch": 0.3226221075811697,
          "rotation": 0,
          "target": "11-sala"
        },
        {
          "yaw": 1.4574494244291243,
          "pitch": 0.34775319988374775,
          "rotation": 0,
          "target": "8-entrada"
        },
        {
          "yaw": 2.4880666256468045,
          "pitch": 0.11074005203705717,
          "rotation": 0,
          "target": "14-pasillo"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4692962980801063,
          "pitch": 0.24733057759435795,
          "title": "Plotter de corte<br>",
          "text": "<span>Máquina de corte preciso que utiliza una cuchilla móvil para cortar diseños en diversos materiales</span>"
        },
        {
          "yaw": 0.7540421814958069,
          "pitch": -0.09407731420518317,
          "title": "Vinilo",
          "text": "<span>El vinilo es un material adhesivo de PVC coloreado, diseñado para \nser cortado con plotter y utilizado en diversas aplicaciones creativas. </span>"
        }
      ]
    },
    {
      "id": "11-sala",
      "name": "Sala",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.4334450752499794,
        "pitch": -0.011131574305812464,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": 2.9304703268692887,
          "pitch": 0.2286767281440838,
          "rotation": 0,
          "target": "13-impresoras-3d"
        },
        {
          "yaw": -2.1471495292280984,
          "pitch": 0.3552889826860657,
          "rotation": 0,
          "target": "9-planchas"
        },
        {
          "yaw": -1.4855189560503526,
          "pitch": 0.36395853195207195,
          "rotation": 0,
          "target": "10-plotter"
        },
        {
          "yaw": -0.43477730519878044,
          "pitch": 0.4673601126458635,
          "rotation": 0,
          "target": "8-entrada"
        },
        {
          "yaw": 1.0836953481761107,
          "pitch": 0.18081956663987775,
          "rotation": 0,
          "target": "14-pasillo"
        },
        {
          "yaw": 1.484591031837713,
          "pitch": 0.3305941898596121,
          "rotation": 0,
          "target": "12-bordadora"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-bordadora",
      "name": "Bordadora",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.772776445883192,
        "pitch": 0.33719977396193457,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": 0.6554411599834573,
          "pitch": 0.22454663937872432,
          "rotation": 0,
          "target": "13-impresoras-3d"
        },
        {
          "yaw": 1.6525389932524526,
          "pitch": 0.2760579143636619,
          "rotation": 0,
          "target": "11-sala"
        },
        {
          "yaw": 2.549924959624761,
          "pitch": 0.31948488674819586,
          "rotation": 0,
          "target": "8-entrada"
        },
        {
          "yaw": -2.401817013860345,
          "pitch": 0.41501380610545446,
          "rotation": 0,
          "target": "14-pasillo"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1216407787043465,
          "pitch": 0.6111135648074537,
          "title": "Bordadora",
          "text": "<span>Máquina especializada que reproduce diseños bordados en telas con \nalta precisión, utilizando hilos y un sistema computarizado. Permite \ncrear bordados complejos de manera rápida y exacta</span>"
        }
      ]
    },
    {
      "id": "13-impresoras-3d",
      "name": "Impresoras 3D",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.0721308262250915,
        "pitch": -0.039982797506606715,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": 0.5445500811565438,
          "pitch": 0.23849072184759734,
          "rotation": 0,
          "target": "9-planchas"
        },
        {
          "yaw": 0.9870317423383526,
          "pitch": 0.12800187634590188,
          "rotation": 0,
          "target": "10-plotter"
        },
        {
          "yaw": 1.6906177239684226,
          "pitch": 0.36381339261680523,
          "rotation": 0,
          "target": "11-sala"
        },
        {
          "yaw": 2.8140890448819844,
          "pitch": 0.1557267628753074,
          "rotation": 0,
          "target": "12-bordadora"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0942372578835347,
          "pitch": 0.03195528753833621,
          "title": "Impresoras 3D<br>",
          "text": "<span> Máquinas que crean objetos tridimensionales mediante la \nsuperposición de capas de materiales a \npartir de un diseño </span>"
        }
      ]
    },
    {
      "id": "14-pasillo",
      "name": "Pasillo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.8363988159451843,
        "pitch": -0.038392572605758346,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": -1.9095658989257558,
          "pitch": 0.19143772925325564,
          "rotation": 0,
          "target": "11-sala"
        },
        {
          "yaw": 1.491930995443619,
          "pitch": 0.07532088340210308,
          "rotation": 0,
          "target": "16-asq"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-electrnica",
      "name": "Electrónica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.8823114332046327,
        "pitch": 0.23886769455983448,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": 0.9367941850113013,
          "pitch": 0.06889015544766153,
          "rotation": 0,
          "target": "16-asq"
        },
        {
          "yaw": 1.8554122781424498,
          "pitch": 0.16452188035974658,
          "rotation": 0,
          "target": "14-pasillo"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.0686456244177815,
          "pitch": 0.6703218564021274,
          "title": "Banco de electrónica<br>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "16-asq",
      "name": "ASQ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.9277998009461736,
        "pitch": -0.0043184543364045425,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": -1.2107751811864027,
          "pitch": 0.15477828877169664,
          "rotation": 0,
          "target": "15-electrnica"
        },
        {
          "yaw": -1.5399568751448456,
          "pitch": 0.20992937863073102,
          "rotation": 0,
          "target": "14-pasillo"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.2267693764199556,
          "pitch": 0.028039625884934694,
          "title": "American Space Quixote<br>",
          "text": "Acerca la&nbsp; tecnología y la innovación a los jóvenes y ofrece oportunidades de aprendizaje de inglés <br>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
