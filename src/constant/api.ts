const BACKEND = {
	BASE_URL: "http://5b01-223-226-170-139.ngrok.io",
	ENDPOINT: {
		"OTP": "/auth/otp",
		"SIGNUP": "/auth/signup",
		"LOGIN": "/auth/login",
		"LOGOUT": "/auth/logout",
		"CHECK_LOGIN": "/auth/check",
		"USERNAME": "/user/name",
		"WALLET_TRANSFER": "/wallet/transfer",
		"WALLET_BALANCE": "/wallet/balance",
		"REDEEM_NEW": "/wallet/redeem/new",
	},
	QUERY_PARAM: {
		"ROLLNO": "?rollno=",
	},
	ERROR: {
		NETWORK: {
			"PAYLOAD": "Oops! Server didn't Respond. Please try again later.",
			"STATUS": 500
		},
	},
};

export { BACKEND };
