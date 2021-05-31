const data =
{
    "imageBoxes": [
        {
            "title": "Equal-time comparison (short-term)",
            "elements": [
                {
                    "title": "CRN",
                    "version": "-",
                    "image": "images/96spp_crn_origin.png"
                },
                {
                    "title": "Ours for CRN",
                    "version": "-",
                    "image": "images/92spp_crn_ours.png"
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
                    "title": "CRN",
                    "version": "-",
                    "image": "images/358spp_crn_origin.png"
                },
                {
                    "title": "Ours for CRN",
                    "version": "-",
                    "image": "images/352spp_crn_ours.png"
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
                "CRN",
                "Ours for CRN"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "96",
                        "92"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "56.8",
                        "56.8"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "1.946453",
                        "0.027574"
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
                        "358",
                        "352"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "209.5",
                        "208.2"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.538968",
                        "0.009902"
                    ]
                }
            ]
        }
    ]
}