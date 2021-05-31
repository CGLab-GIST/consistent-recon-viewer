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
                    "title": "Reference (64K spp)",
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
						"598.6",
                        "598.6"
                    ]
                },
                {
                    "label": "relMSE",
                    "data": [
						"0.032829",
                        "0.003979"
                    ]
                }
            ]
        }
    ]
}