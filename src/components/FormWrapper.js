import React from "react";
const FormWrapper = (props) => {
	return (
		<div className="form-wrapper">
			<form>
				<div className="form-group">
					<label for="nameInput">Name</label>
					<input
						type="text"
						name="name"
						value={props.text.Name.join(" ")}
						className="form-control"
						placeholder="Name"
					/>
				</div>
				<div className="form-group">
					<label for="nameInput">Father's Name</label>
					<input
						type="text"
						name="name"
						value={props.text.Father.join(" ")}
						className="form-control"
						placeholder="Father's Name"
					/>
				</div>
				<div className="form-group">
					<label for="nameInput">Date Of Birth</label>
					<input
						type="text"
						name="name"
						value={props.text.Birth}
						className="form-control"
						placeholder="Date Of Birth"
					/>
				</div>
				<div className="form-group">
					<label for="nameInput">PAN Card Number</label>
					<input
						type="text"
						name="name"
						value={props.text.Number}
						className="form-control"
						placeholder="PAN CARD Number"
					/>
				</div>
			</form>
		</div>
	);

	// <textarea className="text-wrapper">{text}</textarea>;
};
export default FormWrapper;
