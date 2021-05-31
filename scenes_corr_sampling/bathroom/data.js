const data =
{
    "imageBoxes": [
        {
            "title": "Equal-time comparison (short-term)",
            "elements": [
                {
                    "title": "CRN",
                    "version": "-",
                    "image": "images/76spp_crn_origin.png"
                },
                {
                    "title": "Ours for CRN",
                    "version": "-",
                    "image": "images/74spp_crn_ours.png"
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
                    "title": "CRN",
                    "version": "-",
                    "image": "images/324spp_crn_origin.png"
                },
                {
                    "title": "Ours for CRN",
                    "version": "-",
                    "image": "images/320spp_crn_ours.png"
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
                "CRN",
                "Ours for CRN"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "76",
                        "74"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "54.9",
                        "54.8"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.102380",
                        "0.004311"
                    ]
                }
            ]
        }
    ],
	"stats2": [
        {
            "title": "equal-time comparison (long-term)",
            "labels": [
                "CRN",
                "Ours for CRN"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "324",
                        "320"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "233.6",
                        "233.6"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.026629",
                        "0.001896"
                    ]
                }
            ]
        }
    ]
}