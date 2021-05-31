const data =
{
    "imageBoxes": [
        {
            "title": "Equal-time comparison (short-term)",
            "elements": [
                {
                    "title": "GPT-L1",
                    "version": "-",
                    "image": "images/62spp_L1_origin.png"
                },
                {
                    "title": "Ours for GPT-L1",
                    "version": "-",
                    "image": "images/60spp_L1_ours.png"
                },
                {
                    "title": "GPT-L2",
                    "version": "-",
                    "image": "images/62spp_L2_origin.png"
                },
                {
                    "title": "Ours for GPT-L2",
                    "version": "-",
                    "image": "images/60spp_L2_ours.png"
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
                    "image": "images/302spp_L1_origin.png"
                },
                {
                    "title": "Ours for GPT-L1",
                    "version": "-",
                    "image": "images/298spp_L1_ours.png"
                },
                {
                    "title": "GPT-L2",
                    "version": "-",
                    "image": "images/302spp_L2_origin.png"
                },
                {
                    "title": "Ours for GPT-L2",
                    "version": "-",
                    "image": "images/298spp_L2_ours.png"
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
                        "62",
                        "60",
                        "62",
                        "60"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "86.6",
                        "85.6",
                        "86.0",
                        "85.2"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.045231",
                        "0.007753",
                        "0.031306",
                        "0.008184"
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
                        "302",
                        "298",
                        "302",
                        "298"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "408.5",
                        "403.9",
                        "407.4",
                        "403.8"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.008816",
                        "0.002862",
                        "0.007160",
                        "0.002824"
                    ]
                }
            ]
        }
    ]
}