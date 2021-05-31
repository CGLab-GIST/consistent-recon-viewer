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
                    "image": "images/372spp_crn_origin.png"
                },
                {
                    "title": "Ours for CRN",
                    "version": "-",
                    "image": "images/368spp_crn_ours.png"
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
                        "45.0",
                        "44.5"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "10.142287",
                        "0.010119"
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
                        "372",
                        "368"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "174.6",
                        "174.4"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "2.280447",
                        "0.005584"
                    ]
                }
            ]
        }
    ]
}