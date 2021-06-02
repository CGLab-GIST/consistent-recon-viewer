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
                    "title": "Reference (30K iterations)",
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
                        "2200",
                        "265x4",
                        "1060",
                        "2000"
                    ]
                },
				{
                    "label": "Time",
                    "data": [
                        "394 s",
                        "394 s",
                        "394 s",
                        "391 s"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.0024",
                        "0.0856",
                        "0.0842",
                        "0.0017"
                    ]
                }
            ]
        }
    ],
}