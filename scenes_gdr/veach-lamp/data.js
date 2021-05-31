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
                    "image": "images/320spp_L2_origin.png"
                },
                {
                    "title": "Ours for GPT-L2",
                    "version": "-",
                    "image": "images/314spp_L2_ours.png"
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
                        "62.6",
                        "61.9",
                        "62.1",
                        "61.5"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.542455",
                        "0.007891",
                        "0.796087",
                        "0.008485"
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
                        "320",
                        "314"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "269.5",
                        "269.4",
                        "270.2",
                        "268.9"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.148762",
                        "0.002528",
                        "0.163687",
                        "0.002827"
                    ]
                }
            ]
        }
    ]
}