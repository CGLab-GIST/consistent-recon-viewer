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
                    "title": "Reference (30K passes)",
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
                    "label": "Passes",
                    "data": [
                        "1350",
                        "1100",
                        "1270",
                        "1050"
                    ]
                },
				{
                    "label": "Time",
                    "data": [
                        "251s",
                        "241s",
                        "253s",
                        "249s"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.0383",
                        "0.0052",
                        "0.0401",
                        "0.0050"
                    ]
                }
            ]
        }
    ],
}