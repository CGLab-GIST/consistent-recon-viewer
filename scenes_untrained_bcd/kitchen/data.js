const data =
{
    "imageBoxes": [
        {
            "title": "Equal-time comparison (short-term)",
            "elements": [
                {
                    "title": "BCD",
                    "version": "-",
                    "image": "images/144spp_bcd_origin.png"
                },
                {
                    "title": "Ours for BCD",
                    "version": "-",
                    "image": "images/132spp_bcd_ours.png"
                },
                {
                    "title": "Reference (64K spp)",
                    "version": "-",
                    "image": "Reference.png"
                }
            ]
        },
        {
            "title": "Equal-time comparison (long-term)",
            "elements": [
                {
                    "title": "BCD",
                    "version": "-",
                    "image": "images/466spp_bcd_origin.png"
                },
                {
                    "title": "Ours for BCD",
                    "version": "-",
                    "image": "images/452spp_bcd_ours.png"
                },
                {
                    "title": "Reference (64K spp)",
                    "version": "-",
                    "image": "Reference.png"
                }
            ]
        }
    ],
    "stats": [
        {
            "title": "equal-time comparison (short-term)",
            "labels": [
                "BCD",
                "Ours for BCD"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "144",
                        "132"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "104.3",
                        "103.9"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.010116",
                        "0.005892"
                    ]
                }
            ]
        }
    ],
	"stats2": [
        {
            "title": "equal-time comparison (long-term)",
            "labels": [
                "BCD",
                "Ours for BCD"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "466",
                        "452"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "382.5",
						"378.6"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.003647",
						"0.003102"
                    ]
                }
            ]
        }
    ]
}