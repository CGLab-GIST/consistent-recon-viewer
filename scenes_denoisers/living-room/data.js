const data =
{
    "imageBoxes": [
        {
            "title": "Equal-time comparison (short-term)",
            "elements": [
                {
                    "title": "NFOR",
                    "version": "-",
                    "image": "images/40spp_nfor_origin.png"
                },
                {
                    "title": "Ours for NFOR",
                    "version": "-",
                    "image": "images/32spp_nfor_ours.png"
                },
                {
                    "title": "KPCN",
                    "version": "-",
                    "image": "images/44spp_kpcn_origin.png"
                },
                {
                    "title": "Ours for KPCN",
                    "version": "-",
                    "image": "images/40spp_kpcn_ours.png"
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
                    "image": "images/266spp_nfor_origin.png"
                },
                {
                    "title": "Ours for NFOR",
                    "version": "-",
                    "image": "images/260spp_nfor_ours.png"
                },
                {
                    "title": "KPCN",
                    "version": "-",
                    "image": "images/280spp_kpcn_origin.png"
                },
                {
                    "title": "Ours for KPCN",
                    "version": "-",
                    "image": "images/276spp_kpcn_ours.png"
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
                        "40",
                        "32",
                        "44",
                        "40"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "51.8",
                        "48.7",
                        "42.4",
                        "40.4"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.002999",
                        "0.002761",
                        "0.011758",
                        "0.002900"
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
                        "266",
                        "260",
                        "280",
                        "276"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "238.3",
                        "236.7",
                        "246.5",
                        "244.3"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.001231",
                        "0.000982",
                        "0.005309",
                        "0.001167"
                    ]
                }
            ]
        }
    ]
}