import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Form, Message, Card, Image, Grid } from "semantic-ui-react";

const SimpleForm = (props: any) => {
	const [imageUrlPreview, setImageUrlPreview] = useState(
		"https://www.pngfind.com/pngs/m/93-938050_png-file-transparent-white-user-icon-png-download.png"
	);
	const mimeType: string = "image/jpeg, image/png, image/jpg";
	const maxWeight: number = 100;
	const maxWidth: number = 100;
	const maxHeight: number = 100;
	// const [imagefile, setImageFile] = useState('');

	const validateImageWeight = (imageFile: any) => {
		if (imageFile && imageFile.size) {
			// Get image size in kilobytes
			const imageFileKb = imageFile.size / 1024;
			const { maxWeight } = props;

			if (imageFileKb > maxWeight) {
				return `Image size must be less or equal to ${maxWeight}kb`;
			}
		}
	};
	const validateImageWidth = (imageFile: any) => {
		if (imageFile) {
			// const { maxWidth } = props;

			if (imageFile.width > maxWidth) {
				return `Image width must be less or equal to ${maxWidth}px`;
			}
		}
	};
	const validateImageHeight = (imageFile: any) => {
		if (imageFile) {
			// const { maxHeight } = props;

			if (imageFile.height > maxHeight) {
				return `Image height must be less or equal to ${maxHeight}px`;
			}
		}
	};
	const validateImageFormat = (imageFile: any) => {
		if (imageFile) {
			// const { mimeType } = props;

			if (!mimeType.includes(imageFile.type)) {
				return `Image mime type must be ${mimeType}`;
			}
		}
	};
	const handlePreview = (imageUrl: any) => {
		// const previewImageDom = document.querySelector(".preview-image");
		// if (previewImageDom)
		//     previewImageDom.src = imageUrl;
		setImageUrlPreview(imageUrl);
	};
	const handleChange = (event: any, input: any) => {
		event.preventDefault();
		let imageFile = event.target.files[0];
		if (imageFile) {
			const localImageUrl = URL.createObjectURL(imageFile);
			const imageObject = new window.Image();

			imageObject.onload = () => {
				imageFile.width = imageObject.naturalWidth;
				imageFile.height = imageObject.naturalHeight;
				// input.onChange(imageFile);
				URL.revokeObjectURL(imageFile);
			};
			imageObject.src = localImageUrl;
			handlePreview(localImageUrl);
		}
	};
	// let renfield = {
	//     input: '',
	//     type: '',
	//     meta: ''
	// }
	const renderFileInput = ({ input, type, meta }: any) => {
		// const { mimeType } = props;
		console.log(meta);
		return (
			<div>
				<input
					name={input.name}
					type={type}
					accept={mimeType}
					onChange={(event) => handleChange(event, input)}
				/>
				{meta && meta.invalid && meta.error && (
					<Message negative header="Error:" content={meta.error} />
				)}
			</div>
		);
	};

	const handleSubmitForm = (values: any) => {
		console.log("Form Values: ", values);
	};

	const handleSubmit = (e: any, func?: any) => {
		// pass
	};
	// const {
	//     maxWidth,
	//     maxHeight,
	//     maxWeight,
	//     handleSubmit
	// } = props;
	return (
		<Grid centered style={{ height: "100%" }} verticalAlign="middle" padded>
			<Grid.Column style={{ maxWidth: 400 }}>
				<Card fluid>
					<Image
						src={imageUrlPreview}
						alt="preview"
						className="preview-image"
						style={{ height: "300px", objectFit: "cover" }}
					/>
					<Card.Content>
						<Card.Header>Redux Form: Image Validation</Card.Header>
						<Card.Meta>Form Meta</Card.Meta>
						<Card.Description>
							Image has to
							<ul>
								<li>be JPEG or PNG</li>
								<li>have Width ≤ {maxWidth}px</li>
								<li>have Height ≤ {maxHeight}px</li>
								<li>have Size ≤ {maxWeight}kb</li>
							</ul>
						</Card.Description>
					</Card.Content>
					<Card.Content>
						<Form>
							<Form.Field>
								<Field
									name="image"
									type="file"
									validate={[
										validateImageWeight,
										validateImageWidth,
										validateImageHeight,
										validateImageFormat,
									]}
									component={renderFileInput}
								/>
							</Form.Field>
							<Button
								primary
								type="submit"
								className="form-submit-button"
								onClick={handleSubmit}
							>
								Submit
							</Button>
						</Form>
					</Card.Content>
				</Card>
			</Grid.Column>
		</Grid>
	);
};

// @ts-ignore
export default reduxForm({
	form: "simple",
})(SimpleForm);

// export default reduxForm(SimpleForm);

// SimpleForm.propTypes = {
//     previewLogoUrl: PropTypes.all,
//     mimeType: PropTypes.string,
//     maxWeight: PropTypes.number,
//     maxWidth: PropTypes.number,
//     maxHeight: PropTypes.number,
//     // redux-form porps
//     handleSubmit: PropTypes.func.isRequired
// };

// SimpleForm.defaultProps = {
//     previewLogoUrl: "https://imgplaceholder.com/400x300",
//     mimeType: "image/jpeg, image/png",
//     maxWeight: 100,
//     maxWidth: 100,
//     maxHeight: 100
// }
