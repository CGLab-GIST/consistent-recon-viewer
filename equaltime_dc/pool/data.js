const data =
{
    "imageBoxes": [
        {
            "title": "Equal-time comparison with Deep-Combiner",
            "elements": [
                {
                    "title": "SPPM",
                    "version": "-",
                    "image": "images/equal_pool_sppm.png"
                },
                {
                    "title": "BDPT (input to DC)",
                    "version": "-",
                    "image": "images/equal_pool_bdpt.png"
                },
                {
                    "title": "DC (multi) + SPPM",
                    "version": "-",
                    "image": "images/equal_pool_dc-multi-sppm.png"
                },
                {
                    "title": "DC (single) + SPPM",
                    "version": "-",
                    "image": "images/equal_pool_dc-single-sppm.png"
                },
                {
                    "title": "Ours + SPPM",
                    "version": "-",
                    "image": "images/equal_pool_ourssppm.png"
                },
                {
                    "title": "Reference",
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
                "DC (multi) + SPPM",
                "DC (single) + SPPM",
                "Ours + SPPM"
            ],
            "series": [
				{
                    "label": "Iterations",
                    "data": [
                        "9110",
                        "1120x4",
                        "4480",
                        "7000"
                    ]
                },
				{
                    "label": "Time",
                    "data": [
                        "715 s",
                        "712 s",
                        "712 s",
                        "704 s"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.0219",
                        "0.0124",
                        "0.0106",
                        "0.0052"
                    ]
                }
            ]
        }
    ],
}