const BACKEND = {
	BASE_URL: "https://iitkcoin-op711.herokuapp.com",
	ENDPOINT: {
		"OTP": "/auth/otp",
		"SIGNUP": "/auth/signup",
		"LOGIN": "/auth/login",
		"LOGOUT": "/auth/logout",
		"CHECK_LOGIN": "/auth/check",
		"REFRESH_TOKEN": "/auth/refresh",
		"USERNAME": "/user/name",
		"WALLET_TRANSFER": "/wallet/transfer",
		"WALLET_BALANCE": "/wallet/balance",
		"WALLET_TAX": "/wallet/transfer/tax",
		"REDEEM_NEW": "/wallet/redeem/new",
		"TRANSFER_HISTORY": "/wallet/history"
	},
	ERROR: {
		NETWORK: {
			"PAYLOAD": "Oops! Server didn't Respond. Please try again later.",
			"STATUS": 500
		},
		EXPIRED: {
			"PAYLOAD": "Oops! Session Expired. Please login again.",
			"STATUS": 401
		}
	},
	GOOGLE_SHEET: {
		// docs.google.com/spreadsheets/d/<--ID-->/edit#gid=0
		ID: "1PmGM1aEtHkIQh0hi1hPOFHN_km3rfS_W21BAIdU9Q",
		// credentials generated from https://console.cloud.google.com/
		// refer: https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
		GOOGLE_SERVICE_ACCOUNT_EMAIL: "something@iam.secret.gserviceaccount.com",
		GOOGLE_PRIVATE_KEY: "-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY"
		// Alternatetively you can use the key file
	}
};

export { BACKEND };
