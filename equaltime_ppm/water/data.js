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
                "Ours + SPPM",
                "CPPM",
                "Ours + CPPM"
            ],
            "series": [
				{
                    "label": "Iterations",
                    "data": [
                        "2210",
                        "2000",
                        "2390",
                        "2000"
                    ]
                },
				{
                    "label": "Time",
                    "data": [
                        "432 s",
                        "426 s",
                        "486 s",
                        "485 s"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.0023",
                        "0.0014",
                        "0.0018",
                        "0.0016"
                    ]
                }
            ]
        }
    ],
}