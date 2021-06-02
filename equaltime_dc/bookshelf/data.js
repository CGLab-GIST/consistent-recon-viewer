const data =
{
    "imageBoxes": [
        {
            "title": "Equal-time comparison with Deep-Combiner",
            "elements": [
                {
                    "title": "SPPM",
                    "version": "-",
                    "image": "images/equal_bookshelf_sppm.png"
                },
                {
                    "title": "BDPT (input to DC)",
                    "version": "-",
                    "image": "images/equal_bookshelf_bdpt.png"
                },
                {
                    "title": "DC (multi) + SPPM",
                    "version": "-",
                    "image": "images/equal_bookshelf_dc-multi-sppm.png"
                },
                {
                    "title": "DC (single) + SPPM",
                    "version": "-",
                    "image": "images/equal_bookshelf_dc-single-sppm.png"
                },
                {
                    "title": "Ours + SPPM",
                    "version": "-",
                    "image": "images/equal_bookshelf_ourssppm.png"
                },
                {
                    "title": "Reference (30K passes)",
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
                "DC (multi) + SPPM",
                "DC (single) + SPPM",
                "Ours + SPPM"
            ],
            "series": [
				{
                    "label": "Passes",
                    "data": [
                        "1350",
                        "150x4",
                        "600",
                        "1100"
                    ]
                },
				{
                    "label": "Time",
                    "data": [
                        "251 s",
                        "242 s",
                        "242 s",
                        "241 s"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.0383",
                        "0.0078",
                        "0.0051",
                        "0.0052"
                    ]
                }
            ]
        }
    ],
}