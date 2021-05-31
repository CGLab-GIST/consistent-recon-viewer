const data =
{
    "imageBoxes": [
        {
            "title": "Equal-time comparison (short-term)",
            "elements": [
                {
                    "title": "BCD",
                    "version": "-",
                    "image": "images/176spp_bcd_origin.png"
                },
                {
                    "title": "Ours for BCD",
                    "version": "-",
                    "image": "images/156spp_bcd_ours.png"
                },
                {
                    "title": "Reference (1M spp)",
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
                    "image": "images/488spp_bcd_origin.png"
                },
                {
                    "title": "Ours for BCD",
                    "version": "-",
                    "image": "images/468spp_bcd_ours.png"
                },
                {
                    "title": "Reference (1M spp)",
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
                        "176",
                        "156"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "97.8",
                        "96.7"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.009693",
                        "0.005920"
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
                        "488",
                        "468"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "316.0",
						"314.6"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.007648",
						"0.003880"
                    ]
                }
            ]
        }
    ]
}