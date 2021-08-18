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
                    "title": "Reference",
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
                    "label": "Iterations",
                    "data": [
                        "1190",
                        "140x4",
                        "560",
                        "1000"
                    ]
                },
				{
                    "label": "Time",
                    "data": [
                        "244 s",
                        "244 s",
                        "244 s",
                        "243 s"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.0082",
                        "0.0037",
                        "0.0022",
                        "0.0017"
                    ]
                }
            ]
        }
    ],
}