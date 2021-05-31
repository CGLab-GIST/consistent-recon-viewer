const data =
{
    "imageBoxes": [
        {
            "title": "Equal-time comparison (short-term)",
            "elements": [
                {
                    "title": "NFOR",
                    "version": "-",
                    "image": "images/50spp_nfor_origin.png"
                },
                {
                    "title": "Ours for NFOR",
                    "version": "-",
                    "image": "images/42spp_nfor_ours.png"
                },
                {
                    "title": "KPCN",
                    "version": "-",
                    "image": "images/70spp_kpcn_origin.png"
                },
                {
                    "title": "Ours for KPCN",
                    "version": "-",
                    "image": "images/66spp_kpcn_ours.png"
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
                    "title": "NFOR",
                    "version": "-",
                    "image": "images/336spp_nfor_origin.png"
                },
                {
                    "title": "Ours for NFOR",
                    "version": "-",
                    "image": "images/330spp_nfor_ours.png"
                },
                {
                    "title": "KPCN",
                    "version": "-",
                    "image": "images/358spp_kpcn_origin.png"
                },
                {
                    "title": "Ours for KPCN",
                    "version": "-",
                    "image": "images/354spp_kpcn_ours.png"
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
                "NFOR",
                "Ours for NFOR",
                "KPCN",
                "Ours for KPCN"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "50",
                        "42",
                        "70",
                        "66"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "42.4",
                        "41.0",
                        "40.0",
                        "39.4"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.137386",
                        "0.008244",
                        "0.085356",
                        "0.010108"
                    ]
                }
            ]
        }
    ],
	"stats2": [
        {
            "title": "equal-time comparison (long-term)",
            "labels": [
                "NFOR",
                "Ours for NFOR",
                "KPCN",
                "Ours for KPCN"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "336",
                        "330",
                        "358",
                        "354"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "181.6",
                        "181.5",
                        "187.4",
                        "186.4"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.051482",
                        "0.004481",
                        "0.029115",
                        "0.006228"
                    ]
                }
            ]
        }
    ]
}