import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { View } from "react-native";

import { setCurrentScreen, setIsAuthenticated } from "redux-store/actions";
import { Text } from "components";
import TransferForm from "components/Forms/Transfer";
import { LABELS } from "constant";

import styles from "../screen.styles";

const TransferScreen: () => JSX.Element = () => {

	const dispatch = useDispatch();

	const [amount, setAmount] = useState<string>("");
	const [remark, setRemark] = useState<string>("");
	const [rollNo, setRollNo] = useState<string>("");

	const onPressSend = () => {
		console.log(amount);
		//FIXME
	};

	return (
		<View style={styles.contentContainer}>

			<Text.Heading title={LABELS.TRANSFER_FORM_TITLE} />
			{/* TODO Wallet Balance Card */}
			<View style={styles.formContainer}>

				<TransferForm onPressSend={onPressSend} setAmount={setAmount} setRemark={setRemark} setRollNo={setRollNo} />

			</View>
		</View>
	);
};

export default TransferScreen;
