import React, {useState} from "react"
import PasswordChecklist from "react-senha-checklist"
import { TouchableOpacity, TextInput,View,Text} from 'react-native';

const SignUp = () => {
	const [password, setPassword] = useState("")
	const [passwordAgain, setPasswordAgain] = useState("")
	return (
    <View>
			<Text>Password</Text>
			<TextInput onChange={e => setPassword(e.target.value)} />
			<Text>Password Again</Text>
			<TextInput onChange={e => setPasswordAgain(e.target.value)} />

			<PasswordChecklist
				rules={["length","specialChar","number","capital","match"]}
				minLength={5}
				value={password}
				valueAgain={passwordAgain}
				onChange={(isValid) => {}}
			/>
		</View>
	);
}