const data =
{
    "imageBoxes": [
        {
            "title": "Equal-time comparison (short-term)",
            "elements": [
                {
                    "title": "BCD",
                    "version": "-",
                    "image": "images/136spp_bcd_origin.png"
                },
                {
                    "title": "Ours for BCD",
                    "version": "-",
                    "image": "images/120spp_bcd_ours.png"
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
                    "title": "BCD",
                    "version": "-",
                    "image": "images/456spp_bcd_origin.png"
                },
                {
                    "title": "Ours for BCD",
                    "version": "-",
                    "image": "images/440spp_bcd_ours.png"
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
                "BCD",
                "Ours for BCD"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "136",
                        "120"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "120.8",
                        "118.4"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.004703",
                        "0.003165"
                    ]
                }
            ]
        }
    ],
	"stats2": [
        {
            "title": "equal-time comparison (long-term)",
            "labels": [
                "BCD",
                "Ours for BCD"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "456",
                        "440"
                    ]
                },
				{
                    "label": "time",
                    "data": [
                        "441.8",
						"441.1"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
                        "0.002171",
						"0.001670"
                    ]
                }
            ]
        }
    ]
}