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
                        "87.2",
                        "86.4",
                        "86.7",
                        "85.9"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.009869",
                        "0.002052",
                        "0.007480",
                        "0.002067"
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
                        "429.6",
                        "425.2",
                        "429.9",
                        "424.3"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.002032",
                        "0.000779",
                        "0.001748",
                        "0.000796"
                    ]
                }
            ]
        }
    ]
}