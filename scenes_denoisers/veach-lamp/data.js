const data =
{
    "imageBoxes": [
        {
            "title": "Equal-time comparison (short-term)",
            "elements": [
                {
                    "title": "NFOR",
                    "version": "-",
                    "image": "images/58spp_nfor_origin.png"
                },
                {
                    "title": "Ours for NFOR",
                    "version": "-",
                    "image": "images/48spp_nfor_ours.png"
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
                    "title": "NFOR",
                    "version": "-",
                    "image": "images/334spp_nfor_origin.png"
                },
                {
                    "title": "Ours for NFOR",
                    "version": "-",
                    "image": "images/322spp_nfor_ours.png"
                },
                {
                    "title": "KPCN",
                    "version": "-",
                    "image": "images/346spp_kpcn_origin.png"
                },
                {
                    "title": "Ours for KPCN",
                    "version": "-",
                    "image": "images/342spp_kpcn_ours.png"
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
                "NFOR",
                "Ours for NFOR",
                "KPCN",
                "Ours for KPCN"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "58",
                        "48",
                        "70",
                        "66"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "41.3",
                        "41.0",
                        "33.8",
                        "33.6"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.267904",
                        "0.009912",
                        "0.049954",
                        "0.008452"
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
                        "334",
                        "322",
                        "346",
                        "342"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "152.2",
                        "151.1",
                        "150.4",
                        "150.3"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.040545",
                        "0.003278",
                        "0.047091",
                        "0.002974"
                    ]
                }
            ]
        }
    ]
}