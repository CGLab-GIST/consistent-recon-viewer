const data =
{
    "imageBoxes": [
        {
            "title": "Equal-time comparison with SPPM and CPPM",
            "elements": [
                {
                    "title": "SPPM",
                    "version": "-",
                    "image": "images/equal_breakfast-room_sppm.png"
                },
                {
                    "title": "Ours + SPPM",
                    "version": "-",
                    "image": "images/equal_breakfast-room_ourssppm.png"
                },
                {
                    "title": "CPPM",
                    "version": "-",
                    "image": "images/equal_breakfast-room_cppm.png"
                },
                {
                    "title": "Ours + CPPM",
                    "version": "-",
                    "image": "images/equal_breakfast-room_ourscppm.png"
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
                "Ours + SPPM",
                "CPPM",
                "Ours + CPPM"
            ],
            "series": [
				{
                    "label": "Iterations",
                    "data": [
                        "5850",
                        "5000",
                        "6370",
                        "5000"
                    ]
                },
				{
                    "label": "Time",
                    "data": [
                        "577 s",
                        "577 s",
                        "656 s",
                        "654 s"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.0196",
                        "0.0017",
                        "0.0204",
                        "0.0021"
                    ]
                }
            ]
        }
    ],
}