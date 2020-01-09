module.exports = {
	formats: 'local woff woff2',
	display: "swap",
	custom: {
		"Europe": {
			variants: {
				normal: {
					300: {
						url: {
							woff: "../fonts/EuropeExt.woff",
							woff2: "../fonts/EuropeExt.woff2"
						}
					},
					400: {
						url: {
							woff: "../fonts/Europe.woff",
							woff2: "../fonts/Europe.woff2"
						}
					},
					500: {
						url: {
							woff: "../fonts/EuropeDemi.woff",
							woff2: "../fonts/EuropeDemi.woff2"
						}
					},
					700: {
						url: {
							woff: "../fonts/Europe-Bold.woff",
							woff2: "../fonts/Europe-Bold.woff2"
						}
					}
				}
			}
		},

	}
}