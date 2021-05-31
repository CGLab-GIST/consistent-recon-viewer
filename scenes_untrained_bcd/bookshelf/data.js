const data =
{
    "imageBoxes": [
        {
            "title": "Equal-time comparison (short-term)",
            "elements": [
                {
                    "title": "BCD",
                    "version": "-",
                    "image": "images/160spp_bcd_origin.png"
                },
                {
                    "title": "Ours for BCD",
                    "version": "-",
                    "image": "images/144spp_bcd_ours.png"
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
                    "image": "images/480spp_bcd_origin.png"
                },
                {
                    "title": "Ours for BCD",
                    "version": "-",
                    "image": "images/464spp_bcd_ours.png"
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
                        "160",
                        "144"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "102.2",
                        "101.3"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.033644",
                        "0.012975"
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
                        "480",
                        "464"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "353.2",
						"351.5"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.018095",
						"0.005284"
                    ]
                }
            ]
        }
    ]
}