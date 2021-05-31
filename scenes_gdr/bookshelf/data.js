const data =
{
    "imageBoxes": [
        {
            "title": "Equal-time comparison (short-term)",
            "elements": [
                {
                    "title": "GPT-L1",
                    "version": "-",
                    "image": "images/70spp_L1_origin.png"
                },
                {
                    "title": "Ours for GPT-L1",
                    "version": "-",
                    "image": "images/66spp_L1_ours.png"
                },
                {
                    "title": "GPT-L2",
                    "version": "-",
                    "image": "images/70spp_L2_origin.png"
                },
                {
                    "title": "Ours for GPT-L2",
                    "version": "-",
                    "image": "images/66spp_L2_ours.png"
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
                    "title": "GPT-L1",
                    "version": "-",
                    "image": "images/318spp_L1_origin.png"
                },
                {
                    "title": "Ours for GPT-L1",
                    "version": "-",
                    "image": "images/314spp_L1_ours.png"
                },
                {
                    "title": "GPT-L2",
                    "version": "-",
                    "image": "images/318spp_L2_origin.png"
                },
                {
                    "title": "Ours for GPT-L2",
                    "version": "-",
                    "image": "images/314spp_L2_ours.png"
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
                "GPT-L1",
                "Ours for GPT-L1",
                "GPT-L2",
                "Ours for GPT-L2"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "70",
                        "66",
                        "70",
                        "66"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "99.4",
                        "98.3",
                        "98.6",
                        "97.7"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.145675",
                        "0.019887",
                        "0.109911",
                        "0.016551"
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
                        "318",
                        "314",
                        "318",
                        "314"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "440.9",
                        "439.2",
                        "440.7",
                        "438.9"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.048489",
                        "0.005628",
                        "0.026617",
                        "0.004725"
                    ]
                }
            ]
        }
    ]
}