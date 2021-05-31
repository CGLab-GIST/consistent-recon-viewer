const data =
{
    "imageBoxes": [
        {
            "title": "Equal-time comparison (short-term)",
            "elements": [
                {
                    "title": "CRN",
                    "version": "-",
                    "image": "images/84spp_crn_origin.png"
                },
                {
                    "title": "Ours for CRN",
                    "version": "-",
                    "image": "images/80spp_crn_ours.png"
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
                    "image": "images/338spp_crn_origin.png"
                },
                {
                    "title": "Ours for CRN",
                    "version": "-",
                    "image": "images/334spp_crn_ours.png"
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
                        "84",
                        "80"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "51.4",
                        "50.0"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.286024",
                        "0.013103"
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
                        "338",
                        "334"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "205.0",
                        "204.2"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.074795",
                        "0.005788"
                    ]
                }
            ]
        }
    ]
}