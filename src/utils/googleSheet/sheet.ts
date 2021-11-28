import { GoogleSpreadsheet, GoogleSpreadsheetWorksheet } from "google-spreadsheet";

import { BACKEND } from "constant/api";

const getSheet = async(): Promise<GoogleSpreadsheetWorksheet> => {
	const doc = new GoogleSpreadsheet(BACKEND.GOOGLE_SHEET.ID);

	await doc.useServiceAccountAuth({
		client_email: BACKEND.GOOGLE_SHEET.GOOGLE_SERVICE_ACCOUNT_EMAIL,
		private_key: BACKEND.GOOGLE_SHEET.GOOGLE_PRIVATE_KEY
	});

	await doc.loadInfo();
	const sheet = doc.sheetsByTitle["Items"];
	return sheet;
};

export { getSheet };
