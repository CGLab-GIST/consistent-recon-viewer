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
                    "title": "Reference (512K spp)",
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
                    "title": "Reference (512K spp)",
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
                        "35.8",
                        "35.7"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "2.661501",
                        "0.012270"
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
                        "133.3",
                        "132.4"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.537947",
                        "0.004556"
                    ]
                }
            ]
        }
    ]
}