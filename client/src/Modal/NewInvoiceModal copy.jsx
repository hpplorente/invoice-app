// import React from "react";
// import InputField from "../components/elements/InputField";
// import InvoiceModal from "../components/layout/InvoiceModal";
// import InvoiceButton from "../components/elements/InvoiceButton";

// import Axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./Modal.css";

// function NewInvoiceModal({
//   invoiceData,
//   setInvoiceData,
//   invoiceObject,
//   setNewInvoiceModal,
//   newInvoiceModal,
//   toggleNewInvoice,
// }) {
//   const navigate = useNavigate();

//   const invoiceInputHandling = (e) => {
//     const { name, value } = e.target;
//     const nameSplit = name.split(" ");

//     if (nameSplit.length > 1) {
//       nameSplit[0] === "senderAddress"
//         ? setInvoiceData((prevInvoiceData) => {
//             return {
//               ...prevInvoiceData,
//               [nameSplit[0]]: {
//                 ...prevInvoiceData.senderAddress,
//                 [nameSplit[1]]: value,
//               },
//             };
//           })
//         : setInvoiceData((prevInvoiceData) => {
//             return {
//               ...prevInvoiceData,
//               [nameSplit[0]]: {
//                 ...prevInvoiceData.clientAddress,
//                 [nameSplit[1]]: value,
//               },
//             };
//           });
//     } else {
//       setInvoiceData((prevInvoiceData) => {
//         return {
//           ...prevInvoiceData,
//           [name]: value,
//         };
//       });
//     }
//   };

//   ////// Adding New Invoice (Save & send)

//   const saveInvoice = () => {
//     // setInvoiceList((prevNewData) => [...prevNewData, invoiceData]);
//     Axios.post("http://localhost:3001/invoice/api", invoiceData).then(
//       (response) => {
//         navigate("/");
//         setNewInvoiceModal((prevNewInvoiceModal) => !prevNewInvoiceModal);
//         setInvoiceData(invoiceObject);
//       }
//     );
//   };

//   // ///// Saving Invoice Draft
//   const saveDraft = () => {
//     Axios.post("http://localhost:3001/draft/api", invoiceData).then(
//       (response) => {
//         setNewInvoiceModal((prevNewInvoiceModal) => !prevNewInvoiceModal);
//         setInvoiceData(invoiceObject);
//       }
//     );
//   };

//   return (
//     <>
//       {/* {newInvoiceModal && ( */}
//       <InvoiceModal newInvoiceModal={newInvoiceModal} classes={""}>
//         <h1>New Invoice</h1>
//         <div className="modal-input-fields">
//           <div className="sender-client-container">
//             <h2>Bill from</h2>
//             <InputField
//               label="Street Address"
//               type="text"
//               changeHandler={invoiceInputHandling}
//               values={invoiceData.senderAddress.street}
//               names="senderAddress street"
//             />
//             <div className="flex-inputs">
//               <InputField
//                 label="City"
//                 type="text"
//                 changeHandler={invoiceInputHandling}
//                 values={invoiceData.senderAddress.city}
//                 names="senderAddress city"
//               />
//               <InputField
//                 label="Post Code"
//                 type="text"
//                 changeHandler={invoiceInputHandling}
//                 values={invoiceData.senderAddress.postCode}
//                 names="senderAddress postCode"
//               />
//               <InputField
//                 label="Country"
//                 type="text"
//                 changeHandler={invoiceInputHandling}
//                 values={invoiceData.senderAddress.country}
//                 names="senderAddress country"
//               />
//             </div>
//           </div>
//           <div className="sender-client-container">
//             <h2>Bill to</h2>
//             <InputField
//               label="Client's Name"
//               type="text"
//               changeHandler={invoiceInputHandling}
//               values={invoiceData.clientName}
//               names="clientName"
//             />
//             <InputField
//               label="Client's Email"
//               type="email"
//               changeHandler={invoiceInputHandling}
//               values={invoiceData.clientEmail}
//               names="clientEmail"
//             />
//             <InputField
//               label="Street Address"
//               type="text"
//               changeHandler={invoiceInputHandling}
//               values={invoiceData.clientAddress.street}
//               names="clientAddress street"
//             />
//             <div className="flex-inputs">
//               <InputField
//                 label="City"
//                 type="text"
//                 changeHandler={invoiceInputHandling}
//                 values={invoiceData.clientAddress.city}
//                 names="clientAddress city"
//               />
//               <InputField
//                 label="Post Code"
//                 type="text"
//                 changeHandler={invoiceInputHandling}
//                 values={invoiceData.clientAddress.postCode}
//                 names="clientAddress postCode"
//               />
//               <InputField
//                 label="Country"
//                 type="text"
//                 changeHandler={invoiceInputHandling}
//                 values={invoiceData.clientAddress.country}
//                 names="clientAddress country"
//               />
//             </div>
//           </div>
//           <div className="flex-inputs">
//             <InputField
//               label="Invoice Date"
//               type="date"
//               changeHandler={invoiceInputHandling}
//               values={invoiceData.createdAt}
//               names="createdAt"
//             />
//             <InputField
//               label="Payment Terms"
//               type="text"
//               changeHandler={invoiceInputHandling}
//               values={invoiceData.paymentTerms}
//               names="paymentTerms"
//             />
//           </div>
//           <InputField
//             label="Project Description"
//             type="text"
//             changeHandler={invoiceInputHandling}
//             values={invoiceData.description}
//             names="description"
//           />
//           <div className="itemList-container">
//             <p>Item List</p>
//             <button>+ Add New Item</button>
//           </div>
//         </div>
//         <div className="newInvoice-btns">
//           <InvoiceButton
//             label={"Discard"}
//             classes={"discard-btn"}
//             onClick={toggleNewInvoice}
//           />

//           <div className="save-buttons">
//             <InvoiceButton
//               label={"Save as Draft"}
//               classes={"draft-btn"}
//               onClick={saveDraft}
//             />

//             <InvoiceButton
//               label={"Save & Send"}
//               classes={"save-btn"}
//               onClick={saveInvoice}
//             />
//           </div>
//         </div>
//       </InvoiceModal>
//       {/* )} */}
//     </>
//   );
// }

// export default NewInvoiceModal;
