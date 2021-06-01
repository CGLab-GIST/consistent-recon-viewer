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
                    "title": "Reference (30K passes)",
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
                    "label": "Passes",
                    "data": [
                        "5750",
                        "5050",
                        "5350",
                        "4470"
                    ]
                },
				{
                    "label": "Time",
                    "data": [
                        "487 s",
                        "482 s",
                        "481 s",
                        "480 s"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.0713",
                        "0.0040",
                        "0.0767",
                        "0.0045"
                    ]
                }
            ]
        }
    ],
}