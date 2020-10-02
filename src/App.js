import React, { useState, useEffect } from "react";
import Tesseract from "tesseract.js";
import img from "../src/assets/images/pan.jpg";
import logo from "../src/assets/images/logo1.png";
import "./App.css";
import ImageWrapper from "./components/ImageWrapper";
import FormWrapper from "./components/FormWrapper";
import axios from "axios";

var obj = {};

const load = async () => {
	const result = await Tesseract.recognize(img, "eng");
	// settext(result.data.text);
	var str = result.data.text.replace(/[-\n%,=.*+?^$&{}()|[\]\\]/g, " ");
	var arr = [`Birth`, `Father`, `Name`, `Number`];
	// var obj = {};
	arr.map((item) => {
		const index = str.indexOf(item);
		obj[item] = str.substring(index);
		str = str.substring(0, index);
	});
	obj[`Number`] = obj[`Number`].match(/([A-Z]{5}[0-9]{4}[A-Z]{1})/g);
	obj[`Birth`] = obj[`Birth`].match(/([0-9]{2}[-/.][0-9]{2}[-/.][0-9]{4})/g);
	obj[`Name`] = obj[`Name`].match(/(\b[A-Z][A-Z]+|\b[A-Z]\b)/g);

	obj[`Father`] = obj[`Father`].match(/(\b[A-Z][A-Z]+|\b[A-Z]\b)/g);
};
load();
function App() {
	const [loading, setLoading] = useState(false);
	const [imageUrl, setImageUrl] = useState(null);
	const [text, settext] = useState(null);

	useEffect(() => {
		if (imageUrl != null) {
			convertImageToText();
		}
	}, [imageUrl]);

	const convertImageToText = async () => {
		setLoading(true);
		const result = await Tesseract.recognize(img, "eng");
		settext(result.data.text);
		setLoading(false);
	};

	const uploadFile = async (e) => {
		setLoading(true);
		const formData = new FormData();
		formData.append("image", e.target.files[0]);

		const config = {
			headers: {
				"content-type": "multipart/form-data",
				// "Access-Control-Allow-Origin": "*",
			},
		};

		const res = await axios.post(
			"https://api.imgbb.com/1/upload?expiration=600&key=ef3d2f0670734da5e9182f89c3543346",
			formData,
			config
		);
		setImageUrl(res.data.data.url);
		setLoading(false);
	};
	return (
		<div className="App">
			<img src={logo} className="logo" />
			<div className="container">
				{loading && <div className="loader"></div>}
				{text == null ? (
					<ImageWrapper uploadFile={uploadFile} />
				) : (
					<FormWrapper text={obj} />
				)}
			</div>
		</div>
	);
}
export default App;
