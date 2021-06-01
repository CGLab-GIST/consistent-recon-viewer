const data =
{
    "imageBoxes": [
        {
            "title": "Equal-time comparison with SPPM and CPPM",
            "elements": [
                {
                    "title": "SPPM",
                    "version": "-",
                    "image": "images/equal_pool_sppm.png"
                },
                {
                    "title": "Ours + SPPM",
                    "version": "-",
                    "image": "images/equal_pool_ourssppm.png"
                },
                {
                    "title": "CPPM",
                    "version": "-",
                    "image": "images/equal_pool_cppm.png"
                },
                {
                    "title": "Ours + CPPM",
                    "version": "-",
                    "image": "images/equal_pool_ourscppm.png"
                },
                {
                    "title": "Reference (1M passes)",
                    "version": "-",
                    "image": "images/pool_ref.png"
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
                        "8500",
                        "7050",
                        "8300",
                        "7030"
                    ]
                },
				{
                    "label": "Time",
                    "data": [
                        "548",
                        "542",
                        "550",
                        "549"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.1005",
                        "0.0110",
                        "0.0970",
                        "0.0108"
                    ]
                }
            ]
        }
    ],
}