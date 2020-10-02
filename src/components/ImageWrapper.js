import React from "react";

const ImageWrapper = ({ loading, uploadFile }) => {
	return (
		<div className="image-wrapper">
			{loading ? (
				<h2>Processing File... Please Wait !!</h2>
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
