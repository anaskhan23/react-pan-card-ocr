import React from "react";

const ImageWrapper = ({ loading, uploadFile }) => {
	console.log("loading", loading);
	return (
		<div className="image-wrapper">
			{loading ? (
				<h1 style={{ color: "#5a2f5e" }}>
					Processing File... Please Wait !!
				</h1>
			) : (
				<form>
					<input
						type="file"
						className="custom-file-input"
						name="image"
						onChange={(e) => uploadFile(e)}
					/>
				</form>
			)}
		</div>
	);
};
export default ImageWrapper;
