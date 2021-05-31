const data =
{
    "imageBoxes": [
        {
            "title": "Equal-time comparison (short-term)",
            "elements": [
                {
                    "title": "GPT-L1",
                    "version": "-",
                    "image": "images/56spp_L1_origin.png"
                },
                {
                    "title": "Ours for GPT-L1",
                    "version": "-",
                    "image": "images/54spp_L1_ours.png"
                },
                {
                    "title": "GPT-L2",
                    "version": "-",
                    "image": "images/56spp_L2_origin.png"
                },
                {
                    "title": "Ours for GPT-L2",
                    "version": "-",
                    "image": "images/54spp_L2_ours.png"
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
                    "title": "GPT-L1",
                    "version": "-",
                    "image": "images/288spp_L1_origin.png"
                },
                {
                    "title": "Ours for GPT-L1",
                    "version": "-",
                    "image": "images/284spp_L1_ours.png"
                },
                {
                    "title": "GPT-L2",
                    "version": "-",
                    "image": "images/288spp_L2_origin.png"
                },
                {
                    "title": "Ours for GPT-L2",
                    "version": "-",
                    "image": "images/284spp_L2_ours.png"
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
                "GPT-L1",
                "Ours for GPT-L1",
                "GPT-L2",
                "Ours for GPT-L2"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "56",
                        "54",
                        "56",
                        "54"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "86.2",
                        "84.8",
                        "86.4",
                        "84.2"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.011719",
                        "0.002547",
                        "0.011139",
                        "0.002517"
                    ]
                }
            ]
        }
    ],
	"stats2": [
        {
            "title": "equal-time comparison (long-term)",
            "labels": [
                "GPT-L1",
                "Ours for GPT-L1",
                "GPT-L2",
                "Ours for GPT-L2"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "288",
                        "284",
                        "288",
                        "284"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "429.0",
                        "425.0",
                        "428.6",
                        "424.9"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.003184",
                        "0.000967",
                        "0.002498",
                        "0.000991"
                    ]
                }
            ]
        }
    ]
}