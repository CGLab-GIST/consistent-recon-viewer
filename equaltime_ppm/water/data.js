const data =
{
    "imageBoxes": [
        {
            "title": "Equal-time comparison with SPPM and CPPM",
            "elements": [
                {
                    "title": "SPPM",
                    "version": "-",
                    "image": "images/equal_water_sppm.png"
                },
                {
                    "title": "Ours + SPPM",
                    "version": "-",
                    "image": "images/equal_water_ourssppm.png"
                },
                {
                    "title": "CPPM",
                    "version": "-",
                    "image": "images/equal_water_cppm.png"
                },
                {
                    "title": "Ours + CPPM",
                    "version": "-",
                    "image": "images/equal_water_ourscppm.png"
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
                "Ours + SPPM",
                "CPPM",
                "Ours + CPPM"
            ],
            "series": [
				{
                    "label": "Passes",
                    "data": [
                        "2200",
                        "2000",
                        "2100",
                        "1840"
                    ]
                },
				{
                    "label": "Time",
                    "data": [
                        "394 s",
                        "390 s",
                        "404 s",
                        "402 s"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.0024",
                        "0.0017",
                        "0.0019",
                        "0.0017"
                    ]
                }
            ]
        }
    ],
}