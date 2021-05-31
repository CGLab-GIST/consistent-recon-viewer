const data =
{
    "imageBoxes": [
        {
            "title": "Equal-time comparison",
            "elements": [
				{
                    "title": "PPM",
                    "version": "-",
                    "image": "images/ppm_origin.png"
                },
                {
                    "title": "Ours for PPM",
                    "version": "-",
                    "image": "images/ppm_ours.png"
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
            "title": "equal-time comparison",
            "labels": [
				"PPM",
                "Ours for PPM"
            ],
            "series": [
				{
                    "label": "time",
                    "data": [
						"595.5",
                        "594.2"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
						"0.014609",
                        "0.004446"
                    ]
                }
            ]
        }
    ]
}