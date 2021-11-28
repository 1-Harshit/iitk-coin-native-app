import { getSheet } from "./sheet";

interface RedeemItem {
    id: string;
    name: string;
    amount: number;
}

const getData = async (id: string): Promise<RedeemItem> =>  {
	const res: RedeemItem = {
		id: "",
		name: "",
		amount: 0
	};

	const sheet = await getSheet();

	const rows = await sheet.getRows();
	
	for (const row of rows) {
		if (row.ID === id) {
			res.id = row.ID;
			res.name = row.Name;
			res.amount = row.Amount;
			break;
		}
	}
	return res;
};

export default getData;
