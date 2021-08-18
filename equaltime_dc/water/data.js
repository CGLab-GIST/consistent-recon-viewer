const data =
{
    "imageBoxes": [
        {
            "title": "Equal-time comparison with Deep-Combiner",
            "elements": [
                {
                    "title": "SPPM",
                    "version": "-",
                    "image": "images/equal_water_sppm.png"
                },
                {
                    "title": "BDPT (input to DC)",
                    "version": "-",
                    "image": "images/equal_water_bdpt.png"
                },
                {
                    "title": "DC (multi) + SPPM",
                    "version": "-",
                    "image": "images/equal_water_dc-multi-sppm.png"
                },
                {
                    "title": "DC (single) + SPPM",
                    "version": "-",
                    "image": "images/equal_water_dc-single-sppm.png"
                },
                {
                    "title": "Ours + SPPM",
                    "version": "-",
                    "image": "images/equal_water_ourssppm.png"
                },
                {
                    "title": "Reference",
                    "version": "-",
                    "image": "images/water_ref.png"
                }
            ]
        },
    ],
    "stats": [
        {
            "title": "equal-time comparison",
            "labels": [
                "SPPM",
                "DC (multi) + SPPM",
                "DC (single) + SPPM",
                "Ours + SPPM"
            ],
            "series": [
				{
                    "label": "Iterations",
                    "data": [
                        "2210",
                        "270x4",
                        "1080",
                        "2000"
                    ]
                },
				{
                    "label": "Time",
                    "data": [
                        "432 s",
                        "431 s",
                        "431 s",
                        "426 s"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.0023",
                        "0.0959",
                        "0.0828",
                        "0.0014"
                    ]
                }
            ]
        }
    ],
}