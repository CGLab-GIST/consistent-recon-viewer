const data =
{
    "imageBoxes": [
        {
            "title": "Equal-time comparison (short-term)",
            "elements": [
                {
                    "title": "NFOR",
                    "version": "-",
                    "image": "images/48spp_nfor_origin.png"
                },
                {
                    "title": "Ours for NFOR",
                    "version": "-",
                    "image": "images/42spp_nfor_ours.png"
                },
                {
                    "title": "KPCN",
                    "version": "-",
                    "image": "images/64spp_kpcn_origin.png"
                },
                {
                    "title": "Ours for KPCN",
                    "version": "-",
                    "image": "images/60spp_kpcn_ours.png"
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
                    "title": "NFOR",
                    "version": "-",
                    "image": "images/312spp_nfor_origin.png"
                },
                {
                    "title": "Ours for NFOR",
                    "version": "-",
                    "image": "images/306spp_nfor_ours.png"
                },
                {
                    "title": "KPCN",
                    "version": "-",
                    "image": "images/330spp_kpcn_origin.png"
                },
                {
                    "title": "Ours for KPCN",
                    "version": "-",
                    "image": "images/326spp_kpcn_ours.png"
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
                "NFOR",
                "Ours for NFOR",
                "KPCN",
                "Ours for KPCN"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "48",
                        "42",
                        "64",
                        "60"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "48.9",
                        "48.1",
                        "48.0",
                        "46.8"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.015604",
                        "0.009883",
                        "0.028649",
                        "0.007805"
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
                        "312",
                        "306",
                        "330",
                        "326"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "221.6",
                        "221.0",
                        "229.9",
                        "229.0"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.003175",
                        "0.002641",
                        "0.005278",
                        "0.002907"
                    ]
                }
            ]
        }
    ]
}