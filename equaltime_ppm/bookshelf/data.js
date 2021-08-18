const data =
{
    "imageBoxes": [
        {
            "title": "Equal-time comparison with SPPM and CPPM",
            "elements": [
                {
                    "title": "SPPM",
                    "version": "-",
                    "image": "images/equal_bookshelf_sppm.png"
                },
                {
                    "title": "Ours + SPPM",
                    "version": "-",
                    "image": "images/equal_bookshelf_ourssppm.png"
                },
                {
                    "title": "CPPM",
                    "version": "-",
                    "image": "images/equal_bookshelf_cppm.png"
                },
                {
                    "title": "Ours + CPPM",
                    "version": "-",
                    "image": "images/equal_bookshelf_ourscppm.png"
                },
                {
                    "title": "Reference (30K iterations)",
                    "version": "-",
                    "image": "images/bookshelf_ref.png"
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
                        "1190",
                        "1000",
                        "1250",
                        "1000"
                    ]
                },
				{
                    "label": "Time",
                    "data": [
                        "244 s",
                        "243 s",
                        "272 s",
                        "268 s"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.0082",
                        "0.0017",
                        "0.0072",
                        "0.0014"
                    ]
                }
            ]
        }
    ],
}