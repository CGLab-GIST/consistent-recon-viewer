const data =
{
    "imageBoxes": [
        {
            "title": "Equal-time comparison with Deep-Combiner",
            "elements": [
                {
                    "title": "SPPM",
                    "version": "-",
                    "image": "images/equal_breakfast-room_sppm.png"
                },
                {
                    "title": "BDPT (input to DC)",
                    "version": "-",
                    "image": "images/equal_breakfast-room_bdpt.png"
                },
                {
                    "title": "DC (multi) + SPPM",
                    "version": "-",
                    "image": "images/equal_breakfast-room_dc-multi-sppm.png"
                },
                {
                    "title": "DC (single) + SPPM",
                    "version": "-",
                    "image": "images/equal_breakfast-room_dc-single-sppm.png"
                },
                {
                    "title": "Ours + SPPM",
                    "version": "-",
                    "image": "images/equal_breakfast-room_ourssppm.png"
                },
                {
                    "title": "Reference",
                    "version": "-",
                    "image": "images/breakfast-room_ref.png"
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
                        "5850",
                        "730x4",
                        "2920",
                        "5000"
                    ]
                },
				{
                    "label": "Time",
                    "data": [
                        "577 s",
                        "579 s",
                        "579 s",
                        "577 s"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.0196",
                        "0.0018",
                        "0.0014",
                        "0.0017"
                    ]
                }
            ]
        }
    ],
}