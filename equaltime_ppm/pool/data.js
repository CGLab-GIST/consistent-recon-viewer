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
                    "title": "Reference (1M iterations)",
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
                    "label": "Iterations",
                    "data": [
                        "9110",
                        "7000",
                        "9500",
                        "7000"
                    ]
                },
				{
                    "label": "Time",
                    "data": [
                        "715 s",
                        "704 s",
                        "765 s",
                        "749 s"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.0219",
                        "0.0052",
                        "0.0194",
                        "0.0045"
                    ]
                }
            ]
        }
    ],
}